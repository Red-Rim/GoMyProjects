const express = require('express');
const path = require('path');

const app = express();

require('dotenv').config();

const port = process.env.PORT || 3000;

//view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

//static files
app.use(express.static('public'));

//middleware to check working time
const checkavailablehours = (req, res, next) => {
  const now = new Date();
  const day = now.getDay();
  const hours = now.getHours();

  if (day === 0 || day === 6 || hours < 9 || hours >= 17) {
    return res.render('error', {
      message: 'This web application is only available during working hours (Monday to Friday, from 9 AM to 5 PM).',
    });
  }
  next();
};
app.use(checkavailablehours)

app.get('/', (req, res) => {
  res.render('home', { title: 'Home' });
});

app.get('/services', (req, res) => {
  res.render('services', { title: 'Our Services' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Us' });
});

//characters
app.get('/character/:id', (req, res) => {
  const characterId = req.params.id;
  const characters = {
    1: { name: 'Naruto Uzumaki', description: 'Naruto Uzumaki is a determined, optimistic ninja from Naruto, who dreams of becoming the Hokage and gaining the respect of his village! 🍜👊', img: 'naruto.jpg' },
    2: { name: 'Monkey D. Luffy', description: 'Luffy is the adventurous, rubber-bodied captain of the Straw Hat Pirates in One Piece, who dreams of becoming the Pirate King! 🌊🏴‍☠️', img: 'luffy.jpg' },
  };
  
  const character = characters[characterId];
  if (character) {
    res.render('character', { title: character.name, character });
  } else {
    res.render('error', { message: 'lil2afass this character not found!' });
  }
});

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});