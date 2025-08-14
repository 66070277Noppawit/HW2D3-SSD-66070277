require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// ใช้ /products เป็น base path
app.use('/products', productRoutes);

// default route
app.get('/', (req, res) => {
  res.send('API is running...');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
