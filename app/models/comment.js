import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  commentText: DS.attr(),
  hat: DS.belongsTo('hat', { async: true })
});
