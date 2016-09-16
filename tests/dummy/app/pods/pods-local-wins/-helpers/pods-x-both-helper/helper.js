import Ember from 'ember'
import messageBuilder from 'dummy/utils/message-builder'

export function helper (params, {sourceType, sourceName}) {
  return messageBuilder({
    type: 'Helper',
    hook: 'pods_local_pods-x-both-helper',
    target: '{{pods-x-both-helper}}',
    sourceType,
    sourceName,
    scope: 'Local',
    path: 'pods/pods-local-wins/-helpers/pods-x-both-helper'
  })
}

export default Ember.Helper.helper(helper)
