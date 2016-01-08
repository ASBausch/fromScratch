/**
 * Created by manadab on 1/6/16.
 */
var express = require('express');
//uses router method of express, a small subset of functionality only concerned with routing
var router = express.Router();

var mongoose = require('mongoose');
//require to use model
var User = require('../models/users');
//brings in the users module


//router.get("/dog", function(req, res){
//    res.json({message: 'meow woof!'})
//});

//router.get("/", function(req, res){
//    //this should match ajax calls one for one
//    res.json({message: 'meow'});
//});

router.get("/", function(req, res){
   User.find({}, function(err, data) {
       if (err) {
           console.log('Error: ', err);
       }
       //one instance of a user
       res.send(data);
       //only respond after save

   });
    //we already have this schema we can
    //search from specics or all of the data
});

router.post("/", function(req, res){
    console.log(req.body.username);
    var user = new User();
    user.username = req.body.username;
    user.save(function(err, data){
    if(err) {
        console.log('Error: ', err);
    }
        //one instance of a user
        res.send(data);
        //only respond after save
    });

});
//bring in a Schema
//write user to database
//retrieve user from database




module.exports = router;
