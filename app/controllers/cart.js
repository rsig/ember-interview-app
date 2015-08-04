import Ember from 'ember';

export default Ember.Controller.extend({

  findOrCreateLineItem(product) {
    let cart      = this.get('model');
    let lineItems = this.get('model.lineItems');
    let lineItem  = lineItems.findBy('product.id', product.get('id'));
    return lineItem || this.store.createRecord('lineItem', { product: product,  cart: cart });
  },

  actions: {
    addToCart(product) {
      let lineItem = this.findOrCreateLineItem(product);
      lineItem.incrementProperty('amount');
      lineItem.save();
    },

    removeFromCart(lineItem) {
      let amount = lineItem.decrementProperty('amount');
      if (amount < 1) {
        lineItem.deleteRecord();
      }
      lineItem.save();
    }
  }
});
