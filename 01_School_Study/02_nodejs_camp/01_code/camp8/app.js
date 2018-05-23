var express = require ('express');

// MobgoDB 접속 
var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');


var db = mongoose.connection; //접속
db.on( 'error' , console.error ); //에러시 로그를 뿌림 db.once( 'open' , function(){
db.once('open', function(){
    console.log('mongodbv connect');
});
var connect = mongoose.connect('mongodb://127.0.0.1:27017/fastcampus', {useMongoClient: true});
autoIncrement.initialize(connect);



var admin = require('./routes/admin')

var app = express()
var port = 3000;

app.get('/', function(req, res){
    res.send('first app?');
})

/*
app.get('/admin', function(req, res){
    res.send('admin app');
})
*/

app.use('/admin', admin);

app.listen(port, function(){
    console.log('Express listening on port', port)
})