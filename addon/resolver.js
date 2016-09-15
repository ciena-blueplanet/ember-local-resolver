var Resolver = require('ember-resolver')['default']

Resolver.reopen({
  expandLocalLookup: function (targetFullName, sourceFullName) {
    var parsedTarget = this.parseName(targetFullName)
    var parsedSource = this.parseName(sourceFullName)

    var sourceName = parsedSource.fullNameWithoutType
    var targetName = parsedTarget.fullNameWithoutType

    var modulePrefix = this.namespace.modulePrefix
    var podModulePrefix = this.namespace.podModulePrefix

    // Local lookup only applies to targets referenced in a template
    if (parsedSource.type !== 'template') {
      return parsedTarget.type + ':' + sourceName + '/' + targetName
    }

    // Strip modulePrefix from source's module name
    if (sourceName.slice(0, podModulePrefix.length) === podModulePrefix) {
      sourceName = sourceName.slice(podModulePrefix.length + 1, -('/template/hbs'.length)) // Remove 'template/hbs' from the end
      sourceName = sourceName + '/-components'
    } else if (sourceName.slice(0, modulePrefix.length) === modulePrefix) {
      sourceName = sourceName.slice(modulePrefix.length + 1 + 10, -4)
      // Strip template from the source's module name
      // if (sourceName.slice(0, 9) === 'templates') {
      //   sourceName = sourceName.slice(10)
      // }

      // // Strip hbs from the source's module name
      // if (sourceName.slice(-3) === 'hbs') {
      //   sourceName = sourceName.slice(0, -4);
      // }
    }

    // Trying to lookup a component's template from inside a template
    if (parsedTarget.type === 'template' && targetName.slice(0, 11) === 'components/') {
      // Slice off 'components/'
      targetName = targetName.slice(11)
    }

    // If the target is anything other than template, we haven't modified anything in the targetName
    // If the source is anything other than template, we haven't modified anything in the sourceName or targetName
    var result = parsedTarget.type + ':' + sourceName + '/' + targetName

    return result
  }
})

export default Resolver
