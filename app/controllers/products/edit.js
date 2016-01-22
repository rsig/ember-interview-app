import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    // What are some improvements that could be made to `update`?
    update(model) {
      model.save();
      this.transitionToRoute('products');
    }
  }
});
