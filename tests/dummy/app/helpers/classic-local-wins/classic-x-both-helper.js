import Ember from 'ember'
import messageBuilder from 'dummy/utils/message-builder'

export function helper (params, {sourceType, sourceName}) {
  return messageBuilder({
    type: 'Helper',
    hook: 'classic_local_classic-x-both-helper',
    target: '{{classic-x-both-helper}}',
    sourceType,
    sourceName,
    scope: 'Local',
    path: 'helpers/classic-local-wins/classic-x-both-helper'
  })
}

export default Ember.Helper.helper(helper)
