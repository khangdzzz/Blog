const contactRouter = require('./contact');
const siteRouter = require('./site');


function route(app){

    app.use('/contact',contactRouter);
    app.use('/',siteRouter);

}

module.exports = route;