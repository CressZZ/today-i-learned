# 3 일차
## MongoDB 연습
### 데이터를 입력하는 시점에서 콜렉션이 생성된다. 
```sql
use exercise
// 이시점에서 생성
db.person.insert({"lecture" : "nodejs" , "camp" : "jvascript"})
```
### `db.find()` 전체 출력

```sql
use exercise

db.board.find()

// 보기좋게 나오는 옵션
db.board.find().pretty()

// 조건이 있는 경우
db.board.find({"writer" : "admin"}).pretty()
db.board.find({"writer" : "admin", "title":"hello"}).pretty()

```
### 비교연산자
```sql
use exercise
db.board.find({"hit":{$gt:20}}).pretty()

```
- $eq : 일치하는값   
- $gt 큰값
- $gte 크거나 같은
- $lt 작은
- $lte 작거나 같은
- $ne != 일치하지 않는값
- $in 배열안에 속하는 경우
- $nin 배열안에 속하지 않는경우

### 원하는 필드만 출력
```sql
db.board.find( { } , { "_id": false, "title": true, "content": true })
```

### count()
```sql
db.board.find().count()
```

### .sort 정렬
```sql
// 조회수 많은 순서대로 출력
db.board.find().sort( { "hit" : -1 })
```
- 1은 오름차순
- -1은 내림차순

### .limt() 출력제한
```sql
db.board.find().limit(2).pretty()
```

### skip() 데이터 시작 부분 설정
```sql
// 0번째 제외하고 1번째 부터 출력
db.board.find().skip(1)
```

### update() ($set)
```sql
 
db.collection.update(
    조건,
    데이터
);
// $set (나머지 필드는 놔둔다)
db.board.update(
    {"title" : "test"}, ## 조건
    {
        $set : {"content":"content update!"} ##데이터
    }
)
// 나머지 필드는 사라진다
db.board.update(
    {"title" : "test"}, //test
    {"content":"content update!"} 
    
)
```
- `$set{"":""}` 은 해당부분만 update하고 나머지는 원래 데이터로 나두게 되고,
- `$set` 이 없으면 언급되지 않은 부분은 모두 사라진다. 

### remove() 데이터 삭제
```sql
db.board.remove({ "title" : "hello" })
```

### 요약
```sql
db.콜렉션.insert( { 데이터들 } )

db.콜렉션.find( { 조회조건 } )

db.콜렉션.update( { 조회조건 } , { 데이터들 } )

db.콜렉션.remove( { 조회조건 } )
```

# node 설치 
## nvm 을 통해 설치 
- http://blog.jeonghwan.net/2016/08/10/nvm.html

## http 모듈(내장 모듈)로 웹서버 띄어보기
### createServer()
```js
var http = require('http');
// createServer 메서드 사용 
// 콜백으로 response 작성
http.createServer(function (request, response) {  
    // head
    response.writeHead(200, {'Content-Type' : 'text/plain'});
    // write - 실제로 전달되는 데이터
    response.write('Hello Nodejs');
    // 마루리
    response.end();
    // 3000번 포트
}).listen(3000);
```
- http 내장모듈을 불러와서 서버를 만듬 createServer 함수 사용 기타모듈들아래참조
- [기타 내장 모듈 찹조](https://nodejs.org/api/)

### 응답코드
- 1XX - 조건부응답
- 2XX - 응답성공
- 3XX - 리다이렉션
- 4XX - 요청오류( ex 404 Not Found )
- 5XX - 서버오류

## npmjs.com
- [https://www.npmjs.com]

## ExpressJS 사용하기
- Nodejs용경량웹프레임워크
- HTML파싱
- 쿠키 및 세션관리, 라우팅담당
```sh
npm install --save express
```
- `--save` 옵션은 package.json에 dependencies항목에 해당 모듈을 추가 입력한다. (의존성이라 한다. )
- 하지만 npm 버전이 5로 넘어 오면서 `--save`를 생략할 수 있다. 
### express 처음사용자용
- app.js
```js
// app.js
var express = require ('express')

var app = express()
var port = 3000;

app.get('/', function(req, res){
    res.send('first app');
})

app.listen(port, function(){
    console.log('Express listening on port', port)
})

```
- sh
```sh
node app.js
```
-  내장 모듈이나, npm install로 설치한 모듈은 경로를 지정해 주지 않아도 된다. 
```js
var express = require ('express')
```

### nomdemon.js : 자동으로 서버 restart 하기 
```sh
npm insall -g nodemon
``` 
- `-g`옵션은 글로벌에 설치 된다. 
- 원래는 `app.js`에 변경사항이 생기면 `ctrl+c`로 서버를 내렸다가 다시 `node app.js`로 서버를 올려야 하는데, 그러면 귀찮으니까 nodemon모듈을 사용하여 서버를 킨다. (유사기능 모듈로 pm2 등이 있다. )
```js
// node app.js -> nodemon app.js
nodemon app.js
```

### package.json에 script만들기 
```json
// package.json
"scripts":{
    // 콘솔에서 `npm start`로 실행
    "start": "nodemon app.js",
    //  콘솔에서 `npm run dev`로 실행(start를 제외한 명령어는 run을 붙인다. 
    "dev" : "nodemon appljs"
}
```

## 라우팅 추가 하기 
### url 추가
```js
// `localhost:3000/` 로 접속 할 수 있음
app.get('/', function(req, res){
    res.send('first app?');
})
// `localhost:3000/admin` 이라는 url 추가 
app.get('/admin', function(req, res){
    res.send('admin app');
})
```
### route(routes) 추가 
- 새폴더 작성 `routes`
- app.js 에 계속 url을 추가하면 너무 많아져서 난리가 나므로, `routes`폴더로 정리한다. 
- `routes`폴더에 `admin.js`를 만든다. 
```js
// admin.js
var express = require('express')
var router = express.Router();

router.get('/', function(req, res){
    res.send('admin app11111')
})

router.get('/products', function(req, res){
    res.send('admin products')
})

module.exports = router;
```
```js
// app.js
// 미들웨어 use 사용
app.use('/admin', admin);
```
## Mongoose연결
### 패키지 설치
- mongodb.js 패키지 설치 
    - app과 Mongodb를 연결
- mongoose.js 패키지 설치
    - 스키마 제공? 
    - MongoDB에는 스키마가 없지만, 우리가 작업하기 편하게 스키마를 제공해 준다. 
```sh
npm install --save mongodb mongoose@4.11.2
```
- mongoose-auto-increment : `_id` 값이 1씩 자동으로 증가한다. 원래는 이상한 문자가 나온다. 
```sh
npm install --save mongoose-auto-increment
```

### mongodb 적용하기 
```js
//admin.js
var express = require('express');
 
//MongoDB 접속
var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
 
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    console.log('mongodb connect');
});
 
var connect = mongoose.connect('mongodb://127.0.0.1:27017/fastcampus', { useMongoClient: true });
autoIncrement.initialize(connect);

```
### model.js 생성 및 스키마구조 적용
```js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');
 
//생성될 필드명을 정한다.
var ProductsSchema = new Schema({
    name : String, //제품명
    price : Number, //가격
    description : String, //설명
    created_at : { //작성일
        type : Date,
        default : Date.now()
    }
});
 
// 1씩 증가하는 primary Key를 만든다
// model : 생성할 document 이름
// field : primary key , startAt : 1부터 시작
ProductsSchema.plugin( autoIncrement.plugin , { model : 'products' , field : 'id' , startAt : 1 });
module.exports = mongoose.model('products', ProductsSchema);

```