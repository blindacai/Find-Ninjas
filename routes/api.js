const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

// get a list of ninjas from the db
router.get('/ninjas', function(req, res){
    res.send({type: 'GET'});
});

// add a new ninjas to the db
router.post('/ninjas', function(req, res){
    // var ninja = new Ninja(req.body);
    // ninja.save();  // it will be saved to the collection specified

    /*
        or we can do this
        it will create an instance of ninja locally and save it to db
    */
    Ninja.create(req.body).then(function(ninja){
        res.send(ninja);
    });
});

// update a ninja in the db
router.put('/ninjas/:id', function(req, res){
    res.send({type: 'PUT'});
});

// delete a ninja from the db
router.delete('/ninjas/:id', function(req, res){
    res.send({type: 'DELETE'});
});

module.exports = router;

// use postman to test the above handler