
class ContactController {

    //[GET] /Contact
    index(req, res) {
        res.render('contact');
    }
}


module.exports = new ContactController;