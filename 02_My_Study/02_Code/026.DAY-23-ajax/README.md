# 2017년 03월 14일 화 수업 복습

---
# 1. 개요
- 수업복습 및 이해. 코딩 복기
- `json-server`와 `faker`를 설치해 보고 사용해 본다.
- Ajax의 `PUT`, `POST`, `GET`, `DELETE`에 대해 알아 본다.
- Ajax의 `PUT`, `DELETE`는 shorthand method가 없기 때문에 직접 shorthand method를 만들어 본다.
- Ajax를 이용하기 위해 `jquery`를 사용하나, `axios`라는 라이브러리도 사용해본다.
## 시간
- 23:51 ~ 01:00
- 08:30 ~
- 아...진짜 생각보다 오래 걸렸다. 하루 종일 걸린듯... 더욱이 다 하지도 못했다.
- 결국 이것도 개념 잡는 거고, 나중에는 쓰는 것만 계속 쓰지 않을까?
## 특이사항
- readme 정리가 잘되있음~~ 랄라~
---
# 2. 내용
## 주요 파일들
- `Ajax_Libs/DB/generateEmployes.js`:faker를 사용하여 노동자를 만들어 냄
- `Ajax_Libs/DB/employees-test.js`:faker를 통해 만들어낸 자료를 generateEmployes로부터 가져오는걸 test함  

- `Ajax_Libs/public/js/jquery.ajax.study.js`: jquery를 이용하여 ajax의 `PUT`,`GET`,`POST`,`DELETE`를 활용해 봄
- `Ajax_Libs/public/js/jquery.ajax.extensions.js`: jaquery Ajax API 중 shorthand method가 없는 `PUT`, `DELETE`를 만듬
- `Ajax_Libs/public/js/axios.ajax.study.js`: ajax를 사용하기 위한 라이브러리 중 axious를 활용해 봄

## 주요 내용
- DAY-22, 어제는 라이브러리 없이(jquery, axios) Ajax를 이용해 보았으나 오늘 DAY-23에는 라이브러리를 사용해봄. (`open`, `send`등..).
- faker를 설치후 아무 것도 없이 generateEmployees.js에서  `var faker = require('faker');`를 통해 faker를 불러 올수 있다? 그리고 데이터를 만드는 함수를 집어 넣는데..
- 근데 데이터는 json 파일이어야 되는거 아니었나?
- 아... 괜히 고생함. 그냥 랜덤데이터 생성을 위해 `node-server`가 `faker`등을 이용한 `.js`파일을 지원하는 거였음.
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
### 순서
- 더미 데이터 js만들고
- node-server로 불러 들여 서버 만들고,
- js파일로 통신을 한다
