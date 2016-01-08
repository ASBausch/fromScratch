/**
 * Created by manadab on 1/5/16.
 */
var express= require('express');
//project needs express
var app= express();
//main method of express is the app
//allows the use of express methods
//has a set method
var mongoose = require('mongoose');
//database exist outside of application numerouse apps
//could connect to this database -- mongolabs to serve

var bodyParser = require('body-parser');


//routes

var index= require('./routes/index');
//up to server and down to routes
//pulls in our index.js routes
var cats = require("./routes/cats");


//app settings
app.set('port', process.env.PORT || 5000);
//I want to set the port method, leaving space for a specified port process.env.PORT if it
// exists use it, if not use 5000

//remember to "start": "node server/app.js" to be able to use npm start in app.js
//npm install jquery then copy the mn and map file to the vendors it is a node module that you can use

//database stuff

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//default is extended: true
//turns on body-parser and unwraps the data

var mongoURI = 'mongodb://localhost:27017/eta_cats';
var MongoDB = mongoose.connect(mongoURI).connection;

//connection string can dynamically create database
//then connects our app to the database

MongoDB.once('open', function(err){
   if(err){
       console.log('Error: ', err);
   }
    console.log('Mongo Connection Open');
});
//once this connection is open it will send us an error if there is and issue
//if not just log that it is open, this won't really be created until we have
//a first entry into the database


app.use('/cat', cats);
app.use('/', index);


//using chrome to connect to server
app.listen(app.get('port'), function(){
    //get whatever port has been set so that it works for any port set out of express
    //test to see if it runs
    console.log('Listening on port: ', app.get('port'));
});

//server file is what you will have on server-what is on the internet
//public file within it is Everything that will be publicly exposed on the client/user side

//vendors- any third party technology
//assets - any thing I create - js html all that





