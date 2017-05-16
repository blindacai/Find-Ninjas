const express = require('express');

// set up express app
const app = express();

app.get('/', function(req, res){
    console.log('GET request');
    res.end();   // client needs a response back to stop spinning
});

// listen for request
app.listen(process.env.port || 4000, function(){   // set env for port assigned by heroku
    console.log("now listening");
});