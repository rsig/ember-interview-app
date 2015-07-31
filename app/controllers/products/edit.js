import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    update(model) {
      model.save();
      this.transitionToRoute('products');
    }
  }
});
