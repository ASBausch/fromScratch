/**
 * Created by manadab on 1/6/16.
 */
var express = require('express');
//uses router method of express, a small subset of functionality only concerned with routing
var router = express.Router();
var path = require('path');


//wildcard should be at the bottom because of fall through
router.get('/*', function(req, res){
    // '/*' any thing after, wildcard if you don't have * anything after the / is ignored
    //all requests any request
    //request object and response object
    //only goes when a request comes in
    //returns an object with a key : value pair
    var file = req.params[0] || 'assets/views/index.html';
    //this always hits the 0 first for the 'default' stuff
    //request comes up and looks for the files there
    console.log(file);
    res.sendFile(path.join(__dirname, '../public/', file));

    //sends all files requested in this public directory
    //where is this file located(dirname) .. goes up two levels
    //relative to the project start the path
    //start at the bottom go to public, go to the file
});


//routing can be abstracted out to here from original app.js
//then put back into app.js

module.exports = router;
