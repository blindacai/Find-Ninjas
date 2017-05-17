const express = require('express');
const routes = require('./routes/api');

// set up express app
const app = express();

// .use for middleware
// initialize routes
app.use('/api', routes);

// listen for request
app.listen(process.env.port || 4000, function(){   // set env for port assigned by heroku
    console.log("now listening");
});