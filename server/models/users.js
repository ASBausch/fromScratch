/**
 * Created by manadab on 1/8/16.
 */
//our Schema - how things are saved into mongo

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//helper just to shorten code

var UserSchema = new Schema({
    username: 'String'
});
//new mongoose object
//with key value pairs of types


module.exports = mongoose.model('User', UserSchema);
//telling us this is in our database and how we save it
//this is saved in cats.js

/*
 {
 username: {type:String, required: true index: {unique: true}},
 lastlogin: {type:Date, default: Dat.now}
 }
 lots of ways to catch/save/change data coming in
*/