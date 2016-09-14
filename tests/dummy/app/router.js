import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('global-only');
  this.route('local-only');
  this.route('local-wins');
});

export default Router;
