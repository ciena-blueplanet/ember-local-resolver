import Ember from 'ember'
import messageBuilder from 'dummy/utils/message-builder'

export function helper (params, {sourceType, sourceName}) {
  return messageBuilder({
    type: 'Helper',
    hook: 'pods_local_pods-x-local-helper',
    target: '{{pods-x-local-helper}}',
    sourceType,
    sourceName,
    scope: 'Local',
    path: 'pods/pods-local-only/-helpers/pods-x-local-helper'
  })
}

export default Ember.Helper.helper(helper)
