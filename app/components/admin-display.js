import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    delete(hat){
      this.sendAction('delete', hat);
    }
  }
});
