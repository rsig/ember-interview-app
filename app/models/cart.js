import DS from 'ember-data';

let hasMany = DS.hasMany;

export default DS.Model.extend({
  lineItems: hasMany('lineItem', { async: true }),
  totalItems: 0,

  watchItemsInCart: function() {
    let lineItems = this.get('lineItems');
    let amount    = 0;
    lineItems.forEach((item) => {
      amount += item.get('amount') || 0;
    });
    this.set("totalItems", amount);
  }.observes("lineItems.@each.amount")
});
