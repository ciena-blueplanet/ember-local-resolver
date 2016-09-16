import Ember from 'ember'
import messageBuilder from 'dummy/utils/message-builder'

export function helper (params, {sourceType, sourceName}) {
  return messageBuilder({
    type: 'Helper',
    hook: 'classic_local_classic-x-local-helper',
    target: '{{classic-x-local-helper}}',
    sourceType,
    sourceName,
    scope: 'Local',
    path: 'helpers/classic-local-only/classic-x-local-helper'
  })
}

export default Ember.Helper.helper(helper)
