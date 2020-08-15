const { Router } = require('express');
const Basket = require('../models/basket');
const router = Router();

router.get('/get-count', async (req, res) => {
  try {
    const basketCount = await Basket.getAllCount();
    res.json(basketCount);
  } catch (error) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
  }
});

router.get('/', async (req, res) => {
  try {
    const basket = await Basket.fetch();
    res.json(basket);
  } catch (error) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
  }
});

router.post('/remove', async (req, res) => {
  try {
    await Basket.remove(req.body.id);
    res.json();
  } catch (error) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
  }
});

module.exports = router;
