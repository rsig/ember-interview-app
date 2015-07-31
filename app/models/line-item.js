import DS from 'ember-data';

let attr = DS.attr;
let belongsTo = DS.belongsTo;

export default DS.Model.extend({
  amount: attr('number'),
  product: belongsTo('product'),
  cart: belongsTo('cart')
});
