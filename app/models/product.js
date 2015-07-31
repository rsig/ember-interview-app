import DS from 'ember-data';

let attr = DS.attr;

export default DS.Model.extend({
  name: attr('string'),
  price: attr('number'),
  description: attr('string'),
  image: attr('string'),
  active: attr('boolean', { default: false })
});
