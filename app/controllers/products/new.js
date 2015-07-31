import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    create(model) {
      model.save().then(function() {
        this.transitionToRoute('products');
      });
    }
  }
});
