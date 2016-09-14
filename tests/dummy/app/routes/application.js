import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    error: function(error) {
      console.log(error.message);
    }
  }
});
