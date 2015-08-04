export default function() {
  this.timing = 10;

  this.get('/products');
  this.post('/products');
  this.put('/products/:id');
  this.get('/products/:id');

  this.get('/line_items');
  this.get('/line_items/:id');
  this.post('/line_items');
  this.put('/line_items/:id');
  this.delete('/line_items/:id');

  this.get('/carts', ['carts', 'line_items']);
  this.post('/carts');
  this.get('/carts/:id', ['cart', 'line_items']);
  this.put('/carts/:id', ['cart', 'line_items']);
}
