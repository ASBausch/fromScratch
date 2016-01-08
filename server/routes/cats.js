/**
 * Created by manadab on 1/6/16.
 */
var express = require('express');
//uses router method of express, a small subset of functionality only concerned with routing
var router = express.Router();


//router.get("/dog", function(req, res){
//    res.json({message: 'meow woof!'})
//});

//router.get("/", function(req, res){
//    //this should match ajax calls one for one
//    res.json({message: 'meow'});
//});

router.get("/", function(req, res){
   res.send("Getting Info");
});

router.post("/", function(req, res){
    res.send("Writing Info");
});
//bring in a Schema
//write user to database
//retrieve user from database



module.exports = router;
