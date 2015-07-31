import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    addToCart(product) {
      let cart = this.get('model');
      let lineItems = this.get('model.lineItems');
      let lineItem = lineItems.findBy("product", product) || this.store.createRecord('lineItem', { product: product,  cart: cart });
      lineItem.incrementProperty('amount');
    },

    removeFromCart(lineItem) {
      let amount = lineItem.decrementProperty('amount');
      if (amount < 1) {
        lineItem.deleteRecord();
      }
    }
  }
});
