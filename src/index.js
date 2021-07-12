const path = require('path');
const express = require('express')
const handlebars  = require('express-handlebars');
const app = express()
const port = 3000;
const route = require('./routes');
const db = require('./config/db');



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

db.connect();
route(app);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});




//search app.use defferent with app.get