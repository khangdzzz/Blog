const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Books = new Schema({
   
    name: {
        firstName:String, 
        lastName:String,
    },
    nameAuthor: String,
    title: String,
    datailBook:String,
    createAt: {type: Date, default:Date.now},
})
module.exports = mongoose.model('',Books,'Auhor');