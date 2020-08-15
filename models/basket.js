const fs = require('fs');
const path = require('path');

const pathBasketData = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'basket.json',
);

class Basket {
  static async add(product) {
    const basket = await Basket.fetch();

    const index = basket.products.findIndex((item) => item.id === product.id);
    const candidate = basket.products[index];

    if (candidate) {
      candidate.count++;
      basket.products[index] = candidate;
    } else {
      product.count = 1;
      basket.products.push(product);
    }

    basket.price += +product.price;

    return new Promise((resolve, reject) => {
      return fs.writeFile(pathBasketData, JSON.stringify(basket), (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  static async fetch() {
    return new Promise((resolve, reject) => {
      fs.readFile(pathBasketData, 'utf-8', (err, content) => {
        if (err) {
          reject(err);
        } else {
          resolve(JSON.parse(content));
        }
      });
    });
  }

  static async getAllCount() {
    const basket = await Basket.fetch();

    return basket.products.length > 0
      ? basket.products.reduce((sum, item) => sum + item.count, 0)
      : 0;
  }

  static async remove(id) {
    const basket = await Basket.fetch();

    const index = basket.products.findIndex((item) => item.id === id);
    const product = basket.products[index];

    if (product.count === 1) {
      basket.products = basket.products.filter((item) => item.id !== id);
    } else {
      basket.products[index].count--;
    }

    basket.price -= product.price;

    return new Promise((resolve, reject) => {
      return fs.writeFile(pathBasketData, JSON.stringify(basket), (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(basket);
        }
      });
    });
  }
}

module.exports = Basket;
