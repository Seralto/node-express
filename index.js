const express = require('express');
const app = express();
const mongoose = require('mongoose');

const users = require('./routes/users');
const products = require('./routes/products');

mongoose.connect('mongodb://localhost/express-crud', { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Error connecting to MongoDB:'));

app.use(express.json());
app.use('/users', users);
app.use('/products', products);

app.listen(3000, () => {
  console.log('Listening on port 3000...');
});