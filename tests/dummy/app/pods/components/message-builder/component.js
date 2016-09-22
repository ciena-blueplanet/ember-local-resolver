import Ember from 'ember'
import layout from './template'

export default Ember.Component.extend({
  classNameBindings: [
    'isSourceTypeComponent:source-type-component'
  ],
  layout,

  isSourceTypeComponent: Ember.computed('sourceType', function () {
    return this.sourceType.toLowerCase() === 'component'
  }),

  lowercaseScope: Ember.computed('scope', function () {
    return this.scope.toLowerCase()
  })
})
