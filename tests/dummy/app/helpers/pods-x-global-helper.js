import Ember from 'ember'
import messageBuilder from 'dummy/utils/message-builder'

export function helper (params, {sourceType, sourceName}) {
  return messageBuilder({
    type: 'Helper',
    hook: 'pods_global_pods-x-global-helper',
    target: '{{pods-x-global-helper}}',
    sourceType,
    sourceName,
    scope: 'Global',
    path: 'helpers/pods-x-global-helper'
  })
}

export default Ember.Helper.helper(helper)
