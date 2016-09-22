import Ember from 'ember'
import messageBuilder from 'dummy/utils/message-builder'

export function helper (params, {sourceType, sourceName}) {
  return messageBuilder({
    type: 'Helper',
    hook: 'classic_global_classic-x-global-helper',
    target: '{{classic-x-global-helper}}',
    sourceType,
    sourceName,
    scope: 'Global',
    path: 'helpers/classic-x-global-helper'
  })
}

export default Ember.Helper.helper(helper)
