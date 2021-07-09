const path = require('path');
const express = require('express')
const handlebars  = require('express-handlebars');
const app = express()
const port = 3000;



app.use(express.static(path.join(__dirname)));

app.engine('hbs', handlebars({
  extname: '.hbs'
}));

app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'resources/views'));


 
app.get('/', (req, res) => {
  
  res.render('home');
})
app.get('/contact', (req, res) => {
  
  res.render('contact');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})