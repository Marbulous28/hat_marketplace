import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    newHat(){
      var params = {
        type: this.get('type'),
        description: this.get('description'),
        price: this.get('price'),
        image: this.get('image'),
      };
      this.sendAction('newHat', params);
    }
  }
});
