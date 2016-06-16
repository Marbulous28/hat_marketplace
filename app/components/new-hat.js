import Ember from 'ember';

export default Ember.Component.extend({
  showNewHat: false,
  actions: {
    showHatForm: function() {
      this.set("showNewHat", true);
    },
    newHat(){
      var params = {
        type: this.get('type'),
        description: this.get('description'),
        price: this.get('price'),
        image: this.get('image'),
      };
      this.sendAction('newHat', params);
      this.set("showNewHat", false);
    }
  }
});
