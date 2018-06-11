var express = require ('express');
var path = require('path')
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')

//flash  메시지 관련
var flash = require('connect-flash');

//passport 로그인 관련
var passport = require('passport');
var session = require('express-session');

// MobgoDB 접속 
var mongoose = require('mongoose');
mongoose.Promise = global.Promise; //moggose promise 설정
var autoIncrement = require('mongoose-auto-increment');


var db = mongoose.connection; //접속 
db.on( 'error' , console.error ); //에러시 로그를 뿌림 db.once( 'open' , function(){
db.once('open', function(){
    console.log('mongodbv connect');
});
// 접속
var connect = mongoose.connect('mongodb://127.0.0.1:27017/fastcampus', {useMongoClient: true});
autoIncrement.initialize(connect);


// 라우터
var admin = require('./routes/admin');
var accounts = require('./routes/accounts');
var contacts = require('./routes/contacts');
var auth = require('./routes/auth');
var home = require('./routes/home');
var chat = require('./routes/chat');



var app = express()
var port = 3000;

// 확장자가 ejs 로 끈나는 뷰 엔진을 추가한다.
console.log("app이 오른쪽의 주소에서 실행됩니다.", __dirname)
app.set('views', path.join(__dirname, 'views')); //views폴더 설정
app.set('view engine', 'ejs'); // view engine 설정

// 미들웨어 셋팅
app.use(logger('dev')); // morgan
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//업로드 path 추가
app.use('/uploads', express.static('uploads'));

//session 관련 셋팅
app.use(session({
    secret: 'fastcampus',
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 2000 * 60 * 60 //지속시간 2시간
    }
}));

//passport 적용
app.use(passport.initialize());
app.use(passport.session());

//플래시 메시지 관련
app.use(flash());



//로그인 정보 뷰에서만 변수로 셋팅, 전체 미들웨어는 router위에 두어야 에러가 안난다
app.use(function(req, res, next) {
    app.locals.isLogin = req.isAuthenticated();
    //app.locals.urlparameter = req.url; //현재 url 정보를 보내고 싶으면 이와같이 셋팅
    //app.locals.userData = req.user; //사용 정보를 보내고 싶으면 이와같이 셋팅
    next();
});


// 라우팅 사용
app.use('/admin', admin);
app.use('/accounts', accounts);
app.use('/contacts', contacts);
app.use('/auth', auth);
app.use('/chat', chat);
app.use('/', home);


app.get('/', function(req, res){
    res.send('first app?');
})

// app이 실행되었을때
app.listen(port, function(){
    console.log('Express listening on port', port)
})