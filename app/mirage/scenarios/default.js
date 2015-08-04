export default function(server) {
  server.create('product', {
    name: "Sleek Cotton Hat",
    image: "http://www.chevintrek.co.uk/ekmps/shops/chevintrek/images/tilley-twc5-outback-waxed-cotton-hat-7284-p.jpg",
    price: 77.34
  });

  let bacon = server.create('product', {
    name: "Awesome Fresh Bacon",
    image: "http://www.businessweek.com/graphics/linkbox/bacon_300.jpg",
    price: 119.85
  });

  let shoes = server.create('product', {
    name: "Practical Wooden Shoes",
    image: "http://www.theworldorbust.com/wp-content/uploads/2012/07/Wooden-Clogs-CC-Nokton.jpg",
    price: 96.16
  });

  let cart = server.create('cart');

  server.create('line_item', {
    amount: 99,
    cart_id: cart.id,
    product_id: bacon.id
  });

  server.create('line_item', {
    amount: 1,
    cart_id: cart.id,
    product_id: shoes.id
  });
}
