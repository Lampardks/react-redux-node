const { Router } = require('express');
const Products = require('../models/products');
const Categories = require('../models/categories');
const Basket = require('../models/basket');
const router = Router();

router.post('/add', async (req, res) => {
  try {
    const { categoryId, ...product } = await Products.getById(req.body.id);
    await Basket.add(product);
    res.json();
  } catch (error) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
  }
});

router.get('/', async (req, res) => {
  try {
    const products = await Products.getAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
  }
});

router.get('/categories', async (req, res) => {
  try {
    const categories = await Categories.getAll();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
  }
});

module.exports = router;
