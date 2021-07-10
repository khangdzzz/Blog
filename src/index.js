const path = require('path');
const express = require('express')
const handlebars  = require('express-handlebars');
const app = express()
const port = 3000;


app.use(express.urlencoded({
  extended:true
}));
app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.engine('hbs', handlebars({
  extname: '.hbs'
}));

app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'resources/views'));


 
app.get('/home', (req, res) => {
  
  res.render('home');
})

app.get('/contact', (req, res) => {
  
  res.render('contact');
})

app.get('/search', (req, res) => {
  
  res.render('search');
})

app.post('/home', (req, res) => {
  
  res.render('contact');
})

app.listen(port);