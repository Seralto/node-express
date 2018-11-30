const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Product = mongoose.model('Product', new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true
  }
}));

router.get('/', async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

router.post('/', async (req, res) => {
  let product = new Product({
    name: req.body.name,
    price: req.body.price
  });

  try {
    product = await product.save();
    res.send(product);
  }
  catch(err) {
    res.send({ 'Error': err.message })
  }
});

module.exports = router;