import Ember from 'ember'
import config from './config/environment'

const Router = Ember.Router.extend({
  location: config.locationType
})

Router.map(function () {
  this.route('classic-global-only')
  this.route('classic-local-only')
  this.route('classic-local-wins')
  this.route('pods-global-only')
  this.route('pods-local-only')
  this.route('pods-local-wins')
})

export default Router
