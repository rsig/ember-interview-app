import Mirage, {faker}  from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name: faker.commerce.productName,
  price: faker.commerce.price,
  image: faker.image.avatar,
  description: faker.lorem.sentence
});
