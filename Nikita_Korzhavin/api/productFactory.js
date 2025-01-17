var Hamburger = require('../hamburger.js');
var Drink = require('../drinks.js');
var Salad = require('../salad.js');
var CombinedProduct = require('./combinedProducts');

function ProductFactory() {}

ProductFactory.prototype.newProduct = function(options) {
  switch (options.name) {
    case 'hamburger':
      this.product = Hamburger;
      break;
    case 'drink':
      this.product = Drink;
      break;
    case 'salad':
      this.product = Salad;
      break;
    default:
      this.product = CombinedProduct;
      break;
  }
  return new this.product(options);
};
module.exports = ProductFactory;
