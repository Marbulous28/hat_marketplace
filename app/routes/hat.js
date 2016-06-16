import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('hat', params.hat_id);
  },
  actions: {
    postComment(params){
      var newComment = this.store.createRecord('comment', params);
      var hat = params.hat;
      hat.get('comments').addObject(newComment);
      newComment.save().then(function(){
        return hat.save();
      });
      this.transitionTo('hat', params.hat)
    }
  }
});
