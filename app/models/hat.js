import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr(),
  description: DS.attr(),
  price: DS.attr(),
  image: DS.attr()
});
