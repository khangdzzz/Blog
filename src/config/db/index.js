const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/BookStore', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
          });
          console.log('connect successfully');
    }catch(err) {
            console.log('connect failure: ' + err);
    }
}

module.exports ={connect};