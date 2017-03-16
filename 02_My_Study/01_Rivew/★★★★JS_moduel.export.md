# moduel.export
-  node-server (node)를 사용하여 `.js`파일(객체생성 함수를 반환하는)을 database로 쓸때....`moduel.export = <반환하고자 하는 객체를 생성하는 함수명>`이 없으면 `('The database is a JavaScript file but the export is not a function.')`와 같은 애러가 난다.
- 즉, `.js`파일을 node-server(node)에서 `처리?`할때에는 `moduel.export`가 있어야 하는 것 같다.
# `node-server`에서의 `랜덤 데이터` 
- 랜덤데이터 생성을 위해 `node-server`가 `faker`등을 이용한 `.js`파일을 지원함
```javascript
//https://github.com/typicode/json-server#add-middlewares
Generate random data

Using JS instead of a JSON file, you can create data programmatically.

// index.js
module.exports = function() {
  var data = { users: [] }
  // Create 1000 users
  for (var i = 0; i < 1000; i++) {
    data.users.push({ id: i, name: 'user' + i })
  }
  return data
}
```  

```
$ json-server index.js
Tip use modules like Faker, Casual, Chance or JSON Schema Faker.
```
