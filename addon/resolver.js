var Resolver = require('ember-resolver')['default'];

Resolver.reopen({
  // General note: findModuleName seems like it could short-circuit
  // (continue) the loop quite a bit, why not do that?  This has to
  // be running frequently...

  expandLocalLookup: function(targetFullName, sourceFullName) {
    var parsedTarget = this.parseName(targetFullName);
    var parsedSource = this.parseName(sourceFullName);

    var sourceName = parsedSource.fullNameWithoutType;
    var targetName = parsedTarget.fullNameWithoutType;

    var prefix = this.namespace.modulePrefix;

    // Local lookup only applies to targets referenced in a template
    if (parsedSource.type !== 'template') {
      return parsedTarget.type + ':' + sourceName + '/' + targetName;
    }

    // Strip modulePrefix from source's module name
    if (sourceName.slice(0, prefix.length) === prefix) {
      sourceName = sourceName.slice(prefix.length + 1);
    }

    // Strip template from the source's module name
    if (sourceName.slice(0, 9) === 'templates') {
      sourceName = sourceName.slice(10)
    }

    // Strip hbs from the source's module name
    if (sourceName.slice(-3) === 'hbs') {
      sourceName = sourceName.slice(0, -4);
    }

    // Trying to lookup a component's template from inside a template
    if (parsedTarget.type === 'template' && targetName.slice(0, 11) === 'components/') {
      // Slice off 'components/'
      targetName = targetName.slice(11);
    }

    // If the target is anything other than template, we haven't modified anything in the targetName
    // If the source is anything other than template, we haven't modified anything in the sourceName or targetName
    var result = parsedTarget.type + ':' + sourceName + '/' + targetName;

    return result;
  }
});

export default Resolver
