const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

// get a list of ninjas from the db
// next: done here, move onto the next middleware: error handling
router.get('/ninjas', function(req, res, next){
    res.send({type: 'GET'});
});

// add a new ninjas to the db
router.post('/ninjas', function(req, res, next){
    // var ninja = new Ninja(req.body);
    // ninja.save();  // it will be saved to the collection specified

    /*
        or we can do this
        it will create an instance of ninja locally and save it to db
    */
    Ninja.create(req.body).then(function(ninja){
        res.send(ninja);
    }).catch(next);
});

// update a ninja in the db
router.put('/ninjas/:id', function(req, res, next){
    Ninja.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        //res.send(ninja);   // still sending the old name to the client

        Ninja.findOne({_id: req.params.id}).then(function(ninja){
            res.send(ninja);
        });
    });
});

// delete a ninja from the db
router.delete('/ninjas/:id', function(req, res, next){
    Ninja.findOneAndRemove({_id: req.params.id}).then(function(ninja){
        res.send(ninja);
    });
});

module.exports = router;

// use postman to test the above handler