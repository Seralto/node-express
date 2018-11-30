const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const User = mongoose.model('User', new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  }
}));

router.get('/', async (_, res) => {
  const user = await User.find();
  res.send(user);
});

router.post('/', async (req, res) => {
  let user = new User({ name: req.body.name })
  user = await user.save();
  res.send(user);
});

module.exports = router;