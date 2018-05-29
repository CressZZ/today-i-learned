var express = require ('express');
var path = require('path')
var logger = require('morgan');
var bodyParser = require('body-parser');

// MobgoDB 접속 
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
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

// 확장자가 ejs 로 끈나는 뷰 엔진을 추가한다.
console.log("!!!!!!!!!!!!!!!!!", __dirname);
app.set('views', path.join(__dirname, 'views')); //views폴더 설정
app.set('view engine', 'ejs'); // view engine 설정



// 미들웨어 셋팅
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



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