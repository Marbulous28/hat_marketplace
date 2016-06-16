import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  cartTotal: Ember.computed('shoppingCart', 'total', function() {
    var total = 0.00;
    this.get('shoppingCart.items').forEach(function(item){
      total += parseFloat(item.get('price'))
    });
    return '$ ' + total;
  })
});
