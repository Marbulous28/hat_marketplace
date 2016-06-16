import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('hat');
  },
  actions: {
    newHat(params) {
      var newHat = this.store.createRecord('hat', params);
      newHat.save();
      this.transitionTo('index');
    },
    delete(hat) {
      hat.destroyRecord();
      this.transitionTo('admin');
    }
  }
});
