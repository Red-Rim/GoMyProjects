require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();

const mongo_url = process.env.mongo_url;

//connect to mongodb
mongoose.connect(mongo_url)
  .then(() => console.log('Connected to MongoDB successfully!'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));

//middleware
app.use(express.json());

//define a route
app.get('/', (req, res) => {
  res.send('Weeeeeeeeelcome to "my" server!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
