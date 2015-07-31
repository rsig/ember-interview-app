import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    create() {
      let cart = this.store.createRecord('cart');
      cart.save().then((cart) => {
        this.transitionToRoute('cart', cart);
      });
    }
  }
});
