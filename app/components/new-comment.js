import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
   postNewComment() {
     this.set('addNewComment', true);
    },

    postComment() {
      var params = {
        commentText: this.get('commentText'),
        name: this.get('name'),
        hat: this.get('hat')
      };
      this.set("addNewComment", false);
      this.sendAction('postComment', params);
    }
  }
});
