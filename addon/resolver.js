const Resolver = require('ember-resolver')['default']

Resolver.reopen({
  expandLocalLookup: function (targetFullName, sourceFullName) { // eslint-disable-line complexity
    const modulePrefix = this.namespace.modulePrefix
    const podModulePrefix = this.namespace.podModulePrefix
    const parsedTarget = this.parseName(targetFullName)
    const parsedSource = this.parseName(sourceFullName)

    let sourceName = parsedSource.fullNameWithoutType
    let targetName = parsedTarget.fullNameWithoutType
    const targetType = parsedTarget.type

    // Local lookup only applies to targets referenced from a template
    if (parsedSource.type !== 'template') {
      return `${parsedTarget.type}:${sourceName}/${targetName}`
    }

    // Remove the prefix and extension from the source module name
    if (sourceName.startsWith(podModulePrefix)) {
      const prefixLength = `${podModulePrefix}/`.length
      const extensionLength = '/template/hbs'.length

      sourceName = sourceName.slice(prefixLength, -extensionLength)

      // In a pods structure local components/helpers are nested In
      // -components or -helpers directories to align with the module unification RFC
      // https://github.com/dgeb/rfcs/blob/module-unification/text/0000-module-unification.md#private-collections
      switch (targetType) {
        case 'component':
          sourceName = `${sourceName}/-components`
          break
        case 'helper':
          sourceName = `${sourceName}/-helpers`
          break
      }
    } else if (sourceName.startsWith(modulePrefix)) {
      const prefixLength = `${modulePrefix}/templates/`.length
      const extensionLength = '/hbs'.length

      sourceName = sourceName.slice(prefixLength, -extensionLength)
    }

    // Remove the prefix from the target module name
    if (parsedTarget.type === 'template' && targetName.startsWith('components')) {
      const prefixLength = 'components/'.length

      targetName = targetName.slice(prefixLength)
    }

    return `${parsedTarget.type}:${sourceName}/${targetName}`
  }
})

export default Resolver
