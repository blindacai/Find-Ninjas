const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api');
const mongoose = require('mongoose');

// set up express app
const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost/ninjago');  // db ninjago does not exist; when we connect to mongodb, it will create for us
mongoose.Promise = global.Promise;   // mongoose's promise is deprecated

// .use for middleware
app.use(bodyParser.json());  // order matters

// initialize routes
app.use('/api', routes);

// error handling middleware
app.use(function(err, req, res, next){
    //console.log(err);
    res.status(422).send({error: err.message});
});

// listen for request
app.listen(process.env.port || 4000, function(){   // set env for port assigned by heroku
    console.log("now listening");
});