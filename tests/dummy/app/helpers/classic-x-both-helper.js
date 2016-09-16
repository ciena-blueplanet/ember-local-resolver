import Ember from 'ember'
import messageBuilder from 'dummy/utils/message-builder'

export function helper (params, {sourceType, sourceName}) {
  return messageBuilder({
    type: 'Helper',
    hook: 'classic_global_classic-x-both-helper',
    target: '{{classic-x-both-helper}}',
    sourceType,
    sourceName,
    scope: 'Global',
    path: 'helpers/classic-x-both-helper'
  })
}

export default Ember.Helper.helper(helper)
