const express = require('express');
const config = require('config');
const path = require('path');

const app = express();

app.use(express.json({ extended: false }));

app.use('/api/products', require('./routes/products.routes'));
app.use('/api/basket', require('./routes/basket.routes'));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'public')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'));
  });
}

const PORT = config.get('port') || 5000;

async function start() {
  try {
    app.listen(PORT, () =>
      console.log(`App has been started on port ${PORT}...`),
    );
  } catch (error) {
    console.log('Server Error', error.message);
    process.exit(1);
  }
}

start();
