//modules
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

//middleware
app.use(express.json());

//connection
mongoose.connect(process.env.Mongo_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('database connected'))
.catch((err) => console.log(err));

//routes
const userRoutes = require('./routes/user_routes');
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});