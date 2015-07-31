import Mirage from 'ember-cli-mirage';

export default function() {
  this.timing = 200;

  this.get('/products');
  this.post('/products');
  this.put('/products/:product_id', function(db, request) {
    var id = request.params.product_id;
    var attrs = JSON.parse(request.requestBody)['product'];
    var record = db.products.update(id, attrs);

    return {
      product: record
    };
  });
  this.get('/products/:product_id', function(db, request) {
    var id = request.params.product_id;
    var product = db.products.find(id);
    if (product) {
      return { product: product };
    } else {
      return new Mirage.Response(400, { }, {message: 'Object not found.'});
    }
  });

  this.get('/carts');
  this.post('/carts');
  this.get('/carts/:cart_id', function(db, request) {
    var id = request.params.cart_id;
    var cart = db.carts.find(id);
    if (cart) {
      return { cart: cart };
    } else {
      return new Mirage.Response(400, { }, {message: 'Object not found.'});
    }
  });
}
