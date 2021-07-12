const Book = require('../model/Book');


class SiteController {

    home(req, res) {
        
        Book.find({},function(err, books){
            if(!err){
                res.json(books);            }     
            else{
                res.status(400).json({err: 'error'});
                
            }      
       });
    }   
    search(req, res) {
        res.render('search');
    }
}


module.exports = new SiteController;