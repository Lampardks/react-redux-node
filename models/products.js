const fs = require('fs');
const path = require('path');

class Products {
  static getAll() {
    return new Promise((resolve, reject) => {
      fs.readFile(
        path.join(__dirname, '..', 'data', 'products.json'),
        'utf-8',
        (err, content) => {
          if (err) {
            reject(err);
          } else {
            resolve(JSON.parse(content));
          }
        },
      );
    });
  }

  static async getById(id) {
    const products = await Products.getAll();
    return products.find((product) => product.id === id);
  }
}

module.exports = Products;
