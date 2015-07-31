import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('products', function() {
    this.route('new');
    this.route('edit', { path: '/:product_id/edit' });
  });
  this.route('carts', function() {
    this.route('new');
  });
  this.route('cart', { path: '/cart/:cart_id' });
});

export default Router;
