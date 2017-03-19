'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _a;

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/*! ECMAScript2015(ES6).js © yamoo9.net, 2017 */

// - [Babel](http://babeljs.io/)
// - [ES6 호환성 테이블](http://kangax.github.io/compat-table/es6/)
// - [ECMAScript 2015 (ES6)](https://github.com/yamoo9/FDS/blob/3rd_FDS/REFERENCES/ECMAScript2015.md)
// - [Airbnb JavaScript 스타일 가이드](https://github.com/tipjs/javascript-style-guide)
// - [ESDoc: 문서화 도구](https://esdoc.org/)


////////////////
// let, const //
////////////////

// let, const 키워드로 선언된 변수,상수는 블록 스코프(Block Scope)를 가진다.
// let, const 키워드로 선언된 변수,상수는 스코프 최상단으로 호이스팅(끌어올림)되지 않는다.
// IIFE 패턴을 사용하여 함수 스코프를 사용하지 않아도, 지역 변수를 생성할 수 있다.

// 기존 ES5 코드 환경에서는 var 키워드를 남겨두는 것이 좋다.
// ECMAScript2015+ 환경에서는 var 보다는 let, const 키워드 사용을 권장한다.
// https://github.com/tipjs/javascript-style-guide#2.1

// 강제적으로 변하지 않게(Force Immutability) 하고자 할 경우, Object.freeze()를 사용한다.


/////////////////////////
// String Additions    //
/////////////////////////
// string.includes()   //
// string.startsWith() //
// string.endsWith()   //
// string.repeat()     //
/////////////////////////

// < e.g) 1: AudioCtrl.hasSign() >


// < e.g) 2: Comment(-=-= . =-=-, =>=>=> . <=<=<=) >


//////////////////////
// Array Additions  //
//////////////////////
// array.find()     //
// array.includes() //
// array.fill()     //
// array.keys()     //
// array.values()   //
// array.entries()  //
//////////////////////


//////////////////////
// Template Strings //
//////////////////////

// 이스케이프(Escape) 문자열 처리 해결
// < e.g) audio_control_demo.js >

// 보간법(Interpolation, ${}) 활용 가능 (Like Sass)
// HTML 템플릿(Template) 작성에 탁월!
// Vue JS 프레임워크에서 유용하게 활용하게 됨.


////////////////////
// Arrow Function //
////////////////////

// JavaScript 함수 내부에서 this 참조는 실행 시에 동적으로 변경된다.
// 이로 인해 의도치 않은 실수가 발생할 수 있는데 화살표 함수를 사용하면 this 참조가
// 문맥으로 유지되기 때문에 실수를 미연에 방지할 수 있다.

// (function(){
//     'use strict';
//     // this === undefined
//     console.log(this);
// })();

// VS

// (()=>{
//     'use strict';
//     // this === 상위 영역의 this 참조
//     console.log(this);
// })();


////////////////////////
// Default Parameters //
////////////////////////

// 함수 매개변수 초기 값을 설정할 수 있다. (Like Sass)
// 함수 매개변수 값을 외부의 함수 결과 값으로 처리할 수도 있다.
// < e.g) defaultDiscount() >


///////////////////////////////
// Rest or Spread Parameters //
///////////////////////////////

// 나머지(rest) ------------------------------------------------------------------
// 함수 정의 시, 매개변수 값 앞에 ...을 붙이는 경우

// < e.g) sum() >

// Array.prototype.reduce
// [].reduce(function(이전값,현재값){},초기값);
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce


// 펼치다(spread) ----------------------------------------------------------------
// 함수 실행 시, 전달인자 앞에 ...을 붙이는 경우

// 배열 ➤ 개별 값 변경 처리
// []  ➤ ...numbers

var a1 = void 0,
    a2 = void 0,
    a3 = void 0;

a1 = [3, 5, 8];
a2 = [55, 88];
// 기존 방식
// a1.splice(2, 0, a2[0], a2[1]);
// spread 방식으로 인자 전달하면 배열 데이터의 원소를 각각 풀어서 제공한다.
(_a = a1).splice.apply(_a, [2, 0].concat(_toConsumableArray(a2)));

/////////////////////////
// Object Enhancements //
/////////////////////////

// < e.g) 1 >
function getPerson() {
  var name = 'Hoon';
  var job = 'Instructor';
  return {
    // name: name,
    // job: job,
    get name() {},
    set name(new_name) {},
    get job() {},
    set job(new_job) {},
    greeting: function greeting(you) {
      var message = 'Hello, ' + you + '.';
      message += ' My Name is ' + this.name + ' and My Job is ' + this.job;
      return message;
    }
  };
}

// ES6

// let getPerson = ()=> {
//   let name='Hoon', job='Instructor';
//   return {
//     name, job,
//     greeting(you){
//       let message = `Hello, ${you}.`;
//       message += `My Name is ${this.name} and My Job is ${this.job}.`;
//       return message;
//     }
//   };
// };

// console.log( getPerson().name );
// console.log( getPerson().greeting('Hey Min') );


var age = 10,
    name = "열",
    job = "열열";

var json_data = {
  name: name, age: age, job: job,
  getName: function getName() {},
  setAge: function setAge() {},
  jobChange: function jobChange() {}
};

///////////////////////////
// Classes & Inheritance //
///////////////////////////

// < e.g) 1: 생성자 함수 ➤ 클래스 문법 활용 >
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/class
// class 본문(body)은 엄격 모드에서 실행됩니다.
// 함수 선언과 달리, class 선언은 호이스팅되지 않습니다.
// ⏣ 다시 말해, ES6에 추가된 let, const, class 등은 호이스팅 되지 않습니다.

// class       //
// constructor //
// static      //
// get         //
// set         //
// extends     //
// super       //

// ES5
// 생성자 함수
// Constructor Function
// function User(name, email) {
//   this.name = name;
//   this.email = email;
// }
// 스태틱 메서드
// Static Methods
// User.register = function(name, email) {
//   return new User(name, email);
// };
// 프로토타입 메서드(인스턴스 메서드)
// Instance Methods
// User.prototype.changeEmail = function(new_mail) {
//   this.email = new_mail;
// };

// ES6

var User = function () {
  function User(name, email, isAdmin) {
    _classCallCheck(this, User);

    this.name = name;
    this.email = email;
    this.isAdmin = isAdmin;
  }

  _createClass(User, [{
    key: 'changeEmail',
    value: function changeEmail(new_mail) {
      this.email = new_mail;
    }
  }], [{
    key: 'register',
    value: function register() {
      for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
      }

      return new (Function.prototype.bind.apply(User, [null].concat(params)))();
    }
  }]);

  return User;
}();

// user 관리 배열 데이터 생성


var user_list = [];
// 배열에 멤버 추가
user_list.push(User.register('a', 'a@acon.com', false));
user_list.push(User.register('v', 'v@fds.net', true));
user_list.push(User.register('j', 'j@jjcamp.com', false));

// ES5
// user_list.find(function(user){
//   return user.email === 'dondong@a.mail';
// });

// ⬇︎

// ES6, Step 1
// user_list.find((user)=>{
//   return user.email === 'dondong@a.mail';
// });
// ES6, Step 2
// user_list.find(user=>{
//   return user.email === 'dondong@a.mail';
// });
// ES6, Step 3
user_list.find(function (user) {
  return user.isAdmin;
}); // return value
user_list.findIndex(function (user) {
  return user.isAdmin;
}); // return index

// filter
var user_not_admin = user_list.filter(function (user) {
  return !user.isAdmin;
});

// User
// users = [ new User, new User, new User ]
// users.find(user=>user.isAdmin).name


// < e.g) 2: AudioCtrl 생성자 함수 ➤ 클래스 문법 활용 >

// 상속(Inheritance)

var Animal = function () {
  function Animal() {
    var legs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;
    var wings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, Animal);

    this.legs = legs;
    this.wings = wings;
  }

  _createClass(Animal, [{
    key: 'eat',
    value: function eat() {}
  }, {
    key: 'sleep',
    value: function sleep() {}
  }, {
    key: 'run',
    value: function run() {}
  }]);

  return Animal;
}();

// class Duck extends Animal {
//   constructor(type) {
//     super(2, 2);
//     this.type = type;
//   }
//   fly() {}
// }
// class Dog extends Animal {}
// class Elephant extends Animal {}


// < e.g) 3: Custom Element API >
// 사용자설정 요소 v1: 재사용 가능한 웹 구성 요소 | https://goo.gl/DBLw9t
// https://blog.risingstack.com/writing-a-javascript-framework-the-benefits-of-custom-elements/

var _nickname = new WeakMap();

// < e.g) 4: getter, setter >

var Duck = function (_Animal) {
  _inherits(Duck, _Animal);

  function Duck(type) {
    _classCallCheck(this, Duck);

    // Public
    var _this = _possibleConstructorReturn(this, (Duck.__proto__ || Object.getPrototypeOf(Duck)).call(this, 2, 2));

    _this.type = type;
    // WeakMap 사용하여 비공개 멤버 등록
    _nickname.set(_this, null);
    return _this;
  }
  // getter


  _createClass(Duck, [{
    key: 'fly',
    value: function fly() {}
  }, {
    key: 'nickname',
    get: function get() {
      return _nickname.get(this) || undefined;
    }
    // setter
    ,
    set: function set(new_name) {
      if (new_name === _nickname.get(this)) {
        console.info('이미 별명이 같습니다.');
      } else if (new_name) {
        _nickname.set(this, new_name);
      }
    }
  }]);

  return Duck;
}(Animal);

var gold_duck = new Duck('황금 알을 낳는 오리');

gold_duck.nickname; // undefined
gold_duck.nickname = '황금 둥이';
// gold_duck.nickname = '황금 둥이';

// REST API Service
// Ajax <-> json
// HTTP Request Methods
// GET, POST, PUT, DELETE
// Front-End <-> json-server <json or js>
// json-server : API
// myjson.com, firebase


////////////////////////////
// ECMAScript2015 Modules //
////////////////////////////

// CommonJS ----------------------------------------------------------------------
// http://www.commonjs.org/
// module.exports = {};
// let module = require('module');

// AMD ---------------------------------------------------------------------------
// http://requirejs.org/docs/whyamd.html#amd
// https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modularjavascript
// define('module',[],function(){});
// require(['module1', 'module2'], function(module1, module2){});

// UMD ---------------------------------------------------------------------------
// https://github.com/umdjs/umd
// https://github.com/umdjs/umd/blob/master/templates/jqueryPlugin.js
(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && module.exports) {
    // Node/CommonJS
  } else {
      // Browser globals
    }
})(function () {});

// ES2015
// import {show, call, moment} from 'vue'
// export
// default

// export let module_prop = '';
// export fn = function() {};
// export class ClassName {};
// export default ClassName;


///////////////////
// Destructuring //
///////////////////

// < e.g) 1: 블록 스코프 내에서 디스트럭쳐링 활용 >
var product = {
  productname: 'TV',
  maker: 'LG',
  features: ['Time Recoding', 'Sharing Screen', 'Speech Recognition'],
  productionYear: 2017
};

var productname = product.productname,
    maker = product.maker,
    features = product.features;

//
//
// {
//   let name           = product.name;
//   let maker          = product.maker;
//   let features       = product.features;
//   let productionYear = product.productionYear;
// }

// < e.g) 2: 함수 매개변수에 디스트럭쳐링 활용 >

function greet(person) {
  var name = person.name;
  var message = person.message;
  return 'Hi! I\'m ' + name + '. Today is ' + message;
}

greet({
  name: 'Jin Ho',
  age: 22,
  results: ['phone', 'notebook'],
  count: 31,
  message: 'Good Day! :-)'
});

// < e.g) 3: 모듈 로드 시, 필요한 모듈 속성만 디스트럭쳐링 활용 >
// import { 속성1, 속성2 } from '모듈'


//////////////////////////////////
// Module Bundling with Webpack //
//////////////////////////////////

// webpack.md 참고


/////////////
// Promise //
/////////////

// let timer = new Promise(function(resolve, reject) {
//   console.log('프로미스 초기화(Promise Initialization)');
//   window.setTimeout(function() {
//     console.log('타임아웃 실행(Timeout Done).');
//     resolve();
//   }, 3000);
// });

// timer.then(function() {
//   console.log('타이머 종료(Finish Timer)');
// });

// --------------------------------------------------------------

// var setTimer = (length)=> {
//   return new Promise((resolve, reject)=> {
//     console.log('프로미스 초기화');
//     window.setTimeout(()=> {
//       console.log('타임아웃');
//       resolve();
//     });
//   }, length);
// };

// setTimer(2000).then(()=> console.log('모두 실행'));

// --------------------------------------------------------------

// axios는 프로미스 기반 Ajax 라이브러리
// let promise = axios.get('/employees');
// promise.then(function(data) {});
// promise.catch(function(error) {});


//////////
// Sets //
//////////

// new Set()
// .add
// .has
// .delete
// .clear
// .size
// .values
// .forEach
// [...(new Set('css', 'javascript', 'vue'))].filter(item=>item.length===3);


////////////////
// Generators //
////////////////

// function* numbers() {

//   console.log('Begin');

//   yield 1; // Paused
//   yield 2; // Paused
//   yield 3; // Paused

// }

// let iterator = numbers();

// console.log(iterator.next());
// Object {
//   done: false,
//   value: 1
// }
// console.log(iterator.next());
// Object {
//   done: false,
//   value: 2
// }
// console.log(iterator.next());
// Object {
//   done: false,
//   value: 3
// }
// console.log(iterator.next());
// Object {
//   done: true,
//   value: undefined
// }

// -------------------------------------------------------------------------------


// function *range(start, end) {
//   while(start < end) {
//     yield start; // paused
//   }
//   start++;
// }

// let range_iterator = range(1, 5);

// console.log(range_iterator.next()); // { done: false, value: 1 }
// console.log(range_iterator.next()); // { done: false, value: 2 }
// console.log(range_iterator.next()); // { done: false, value: 3 }
// console.log(range_iterator.next()); // { done: false, value: 4 }
// console.log(range_iterator.next()); // { done: true, value: undefined }

// for ( let value of range_iterator ) {
//  console.log(value); // 1, 2, 3, 4, 5
// }

// [...range(10, 100)];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lczYuanMiXSwibmFtZXMiOlsiYTEiLCJhMiIsImEzIiwic3BsaWNlIiwiZ2V0UGVyc29uIiwibmFtZSIsImpvYiIsIm5ld19uYW1lIiwibmV3X2pvYiIsImdyZWV0aW5nIiwieW91IiwibWVzc2FnZSIsImFnZSIsImpzb25fZGF0YSIsImdldE5hbWUiLCJzZXRBZ2UiLCJqb2JDaGFuZ2UiLCJVc2VyIiwiZW1haWwiLCJpc0FkbWluIiwibmV3X21haWwiLCJwYXJhbXMiLCJ1c2VyX2xpc3QiLCJwdXNoIiwicmVnaXN0ZXIiLCJmaW5kIiwidXNlciIsImZpbmRJbmRleCIsInVzZXJfbm90X2FkbWluIiwiZmlsdGVyIiwiQW5pbWFsIiwibGVncyIsIndpbmdzIiwiX25pY2tuYW1lIiwiV2Vha01hcCIsIkR1Y2siLCJ0eXBlIiwic2V0IiwiZ2V0IiwidW5kZWZpbmVkIiwiY29uc29sZSIsImluZm8iLCJnb2xkX2R1Y2siLCJuaWNrbmFtZSIsImZhY3RvcnkiLCJkZWZpbmUiLCJhbWQiLCJtb2R1bGUiLCJleHBvcnRzIiwicHJvZHVjdCIsInByb2R1Y3RuYW1lIiwibWFrZXIiLCJmZWF0dXJlcyIsInByb2R1Y3Rpb25ZZWFyIiwiZ3JlZXQiLCJwZXJzb24iLCJyZXN1bHRzIiwiY291bnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFLQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUtBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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QixNQUFJbEQsT0FBVWtELE9BQU9sRCxJQUFyQjtBQUNBLE1BQUlNLFVBQVU0QyxPQUFPNUMsT0FBckI7QUFDQSxTQUFPLGNBQWNOLElBQWQsR0FBcUIsYUFBckIsR0FBcUNNLE9BQTVDO0FBQ0Q7O0FBRUQyQyxNQUFNO0FBQ0pqRCxRQUFNLFFBREY7QUFFSk8sT0FBSyxFQUZEO0FBR0o0QyxXQUFTLENBQUUsT0FBRixFQUFXLFVBQVgsQ0FITDtBQUlKQyxTQUFPLEVBSkg7QUFLSjlDLFdBQVM7QUFMTCxDQUFOOztBQVFBO0FBQ0E7OztBQUtBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBS0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUtBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUtBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6ImVzNi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qISBFQ01BU2NyaXB0MjAxNShFUzYpLmpzIMKpIHlhbW9vOS5uZXQsIDIwMTcgKi9cblxuLy8gLSBbQmFiZWxdKGh0dHA6Ly9iYWJlbGpzLmlvLylcbi8vIC0gW0VTNiDtmLjtmZjshLEg7YWM7J2067iUXShodHRwOi8va2FuZ2F4LmdpdGh1Yi5pby9jb21wYXQtdGFibGUvZXM2Lylcbi8vIC0gW0VDTUFTY3JpcHQgMjAxNSAoRVM2KV0oaHR0cHM6Ly9naXRodWIuY29tL3lhbW9vOS9GRFMvYmxvYi8zcmRfRkRTL1JFRkVSRU5DRVMvRUNNQVNjcmlwdDIwMTUubWQpXG4vLyAtIFtBaXJibmIgSmF2YVNjcmlwdCDsiqTtg4Dsnbwg6rCA7J2065OcXShodHRwczovL2dpdGh1Yi5jb20vdGlwanMvamF2YXNjcmlwdC1zdHlsZS1ndWlkZSlcbi8vIC0gW0VTRG9jOiDrrLjshJztmZQg64+E6rWsXShodHRwczovL2VzZG9jLm9yZy8pXG5cblxuLy8vLy8vLy8vLy8vLy8vL1xuLy8gbGV0LCBjb25zdCAvL1xuLy8vLy8vLy8vLy8vLy8vL1xuXG4vLyBsZXQsIGNvbnN0IO2CpOybjOuTnOuhnCDshKDslrjrkJwg67OA7IiYLOyDgeyImOuKlCDruJTroZ0g7Iqk7L2U7ZSEKEJsb2NrIFNjb3BlKeulvCDqsIDsp4Tri6QuXG4vLyBsZXQsIGNvbnN0IO2CpOybjOuTnOuhnCDshKDslrjrkJwg67OA7IiYLOyDgeyImOuKlCDsiqTsvZTtlIQg7LWc7IOB64uo7Jy866GcIO2YuOydtOyKpO2MhSjrgYzslrTsmKzrprwp65CY7KeAIOyViuuKlOuLpC5cbi8vIElJRkUg7Yyo7YS07J2EIOyCrOyaqe2VmOyXrCDtlajsiJgg7Iqk7L2U7ZSE66W8IOyCrOyaqe2VmOyngCDslYrslYTrj4QsIOyngOyXrSDrs4DsiJjrpbwg7IOd7ISx7ZWgIOyImCDsnojri6QuXG5cbi8vIOq4sOyhtCBFUzUg7L2U65OcIO2ZmOqyveyXkOyEnOuKlCB2YXIg7YKk7JuM65Oc66W8IOuCqOqyqOuRkOuKlCDqsoPsnbQg7KKL64ukLlxuLy8gRUNNQVNjcmlwdDIwMTUrIO2ZmOqyveyXkOyEnOuKlCB2YXIg67O064uk64qUIGxldCwgY29uc3Qg7YKk7JuM65OcIOyCrOyaqeydhCDqtozsnqXtlZzri6QuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGlwanMvamF2YXNjcmlwdC1zdHlsZS1ndWlkZSMyLjFcblxuLy8g6rCV7KCc7KCB7Jy866GcIOuzgO2VmOyngCDslYrqsowoRm9yY2UgSW1tdXRhYmlsaXR5KSDtlZjqs6DsnpAg7ZWgIOqyveyasCwgT2JqZWN0LmZyZWV6ZSgp66W8IOyCrOyaqe2VnOuLpC5cblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gU3RyaW5nIEFkZGl0aW9ucyAgICAvL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gc3RyaW5nLmluY2x1ZGVzKCkgICAvL1xuLy8gc3RyaW5nLnN0YXJ0c1dpdGgoKSAvL1xuLy8gc3RyaW5nLmVuZHNXaXRoKCkgICAvL1xuLy8gc3RyaW5nLnJlcGVhdCgpICAgICAvL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLyA8IGUuZykgMTogQXVkaW9DdHJsLmhhc1NpZ24oKSA+XG5cblxuLy8gPCBlLmcpIDI6IENvbW1lbnQoLT0tPSAuID0tPS0sID0+PT49PiAuIDw9PD08PSkgPlxuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBBcnJheSBBZGRpdGlvbnMgIC8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBhcnJheS5maW5kKCkgICAgIC8vXG4vLyBhcnJheS5pbmNsdWRlcygpIC8vXG4vLyBhcnJheS5maWxsKCkgICAgIC8vXG4vLyBhcnJheS5rZXlzKCkgICAgIC8vXG4vLyBhcnJheS52YWx1ZXMoKSAgIC8vXG4vLyBhcnJheS5lbnRyaWVzKCkgIC8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFRlbXBsYXRlIFN0cmluZ3MgLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8g7J207Iqk7LyA7J207ZSEKEVzY2FwZSkg66y47J6Q7Je0IOyymOumrCDtlbTqsrBcbi8vIDwgZS5nKSBhdWRpb19jb250cm9sX2RlbW8uanMgPlxuXG4vLyDrs7TqsITrspUoSW50ZXJwb2xhdGlvbiwgJHt9KSDtmZzsmqkg6rCA64qlIChMaWtlIFNhc3MpXG4vLyBIVE1MIO2FnO2UjOumvyhUZW1wbGF0ZSkg7J6R7ISx7JeQIO2DgeyblCFcbi8vIFZ1ZSBKUyDtlITroIjsnoTsm4ztgazsl5DshJwg7Jyg7Jqp7ZWY6rKMIO2ZnOyaqe2VmOqyjCDrkKguXG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBBcnJvdyBGdW5jdGlvbiAvL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8gSmF2YVNjcmlwdCDtlajsiJgg64K067aA7JeQ7IScIHRoaXMg7LC47KGw64qUIOyLpO2WiSDsi5zsl5Ag64+Z7KCB7Jy866GcIOuzgOqyveuQnOuLpC5cbi8vIOydtOuhnCDsnbjtlbQg7J2Y64+E7LmYIOyViuydgCDsi6TsiJjqsIAg67Cc7IOd7ZWgIOyImCDsnojripTrjbAg7ZmU7IK07ZGcIO2VqOyImOulvCDsgqzsmqntlZjrqbQgdGhpcyDssLjsobDqsIBcbi8vIOusuOunpeycvOuhnCDsnKDsp4DrkJjquLAg65WM66y47JeQIOyLpOyImOulvCDrr7jsl7Dsl5Ag67Cp7KeA7ZWgIOyImCDsnojri6QuXG5cbi8vIChmdW5jdGlvbigpe1xuLy8gICAgICd1c2Ugc3RyaWN0Jztcbi8vICAgICAvLyB0aGlzID09PSB1bmRlZmluZWRcbi8vICAgICBjb25zb2xlLmxvZyh0aGlzKTtcbi8vIH0pKCk7XG5cbi8vIFZTXG5cbi8vICgoKT0+e1xuLy8gICAgICd1c2Ugc3RyaWN0Jztcbi8vICAgICAvLyB0aGlzID09PSDsg4HsnIQg7JiB7Jet7J2YIHRoaXMg7LC47KGwXG4vLyAgICAgY29uc29sZS5sb2codGhpcyk7XG4vLyB9KSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gRGVmYXVsdCBQYXJhbWV0ZXJzIC8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8g7ZWo7IiYIOunpOqwnOuzgOyImCDstIjquLAg6rCS7J2EIOyEpOygle2VoCDsiJgg7J6I64ukLiAoTGlrZSBTYXNzKVxuLy8g7ZWo7IiYIOunpOqwnOuzgOyImCDqsJLsnYQg7Jm467aA7J2YIO2VqOyImCDqsrDqs7wg6rCS7Jy866GcIOyymOumrO2VoCDsiJjrj4Qg7J6I64ukLlxuLy8gPCBlLmcpIGRlZmF1bHREaXNjb3VudCgpID5cblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gUmVzdCBvciBTcHJlYWQgUGFyYW1ldGVycyAvL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLyDrgpjrqLjsp4AocmVzdCkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyDtlajsiJgg7KCV7J2YIOyLnCwg66ek6rCc67OA7IiYIOqwkiDslZ7sl5AgLi4u7J2EIOu2meydtOuKlCDqsr3smrBcblxuLy8gPCBlLmcpIHN1bSgpID5cblxuLy8gQXJyYXkucHJvdG90eXBlLnJlZHVjZVxuLy8gW10ucmVkdWNlKGZ1bmN0aW9uKOydtOyghOqwkiztmITsnqzqsJIpe30s7LSI6riw6rCSKTtcbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2tvL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L1JlZHVjZVxuXG5cbi8vIO2OvOy5mOuLpChzcHJlYWQpIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIO2VqOyImCDsi6Ttlokg7IucLCDsoITri6zsnbjsnpAg7JWe7JeQIC4uLuydhCDrtpnsnbTripQg6rK97JqwXG5cbi8vIOuwsOyXtCDinqQg6rCc67OEIOqwkiDrs4Dqsr0g7LKY66asXG4vLyBbXSAg4p6kIC4uLm51bWJlcnNcblxubGV0IGExLCBhMiwgYTM7XG5cbmExID0gWzMsIDUsIDhdO1xuYTIgPSBbNTUsIDg4XTtcbi8vIOq4sOyhtCDrsKnsi51cbi8vIGExLnNwbGljZSgyLCAwLCBhMlswXSwgYTJbMV0pO1xuLy8gc3ByZWFkIOuwqeyLneycvOuhnCDsnbjsnpAg7KCE64us7ZWY66m0IOuwsOyXtCDrjbDsnbTthLDsnZgg7JuQ7IaM66W8IOqwgeqwgSDtkoDslrTshJwg7KCc6rO17ZWc64ukLlxuYTEuc3BsaWNlKDIsIDAsIC4uLmEyKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBPYmplY3QgRW5oYW5jZW1lbnRzIC8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vIDwgZS5nKSAxID5cbmZ1bmN0aW9uIGdldFBlcnNvbigpIHtcbiAgbGV0IG5hbWUgPSAnSG9vbic7XG4gIGxldCBqb2IgID0gJ0luc3RydWN0b3InO1xuICByZXR1cm4ge1xuICAgIC8vIG5hbWU6IG5hbWUsXG4gICAgLy8gam9iOiBqb2IsXG4gICAgZ2V0IG5hbWUoKSB7fSxcbiAgICBzZXQgbmFtZShuZXdfbmFtZSkge30sXG4gICAgZ2V0IGpvYigpIHt9LFxuICAgIHNldCBqb2IobmV3X2pvYikge30sXG4gICAgZ3JlZXRpbmc6IGZ1bmN0aW9uKHlvdSkge1xuICAgICAgbGV0IG1lc3NhZ2UgPSAnSGVsbG8sICcgKyB5b3UgKyAnLic7XG4gICAgICBtZXNzYWdlICs9ICcgTXkgTmFtZSBpcyAnICsgdGhpcy5uYW1lICsgJyBhbmQgTXkgSm9iIGlzICcgKyB0aGlzLmpvYjtcbiAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgIH1cbiAgfTtcbn1cblxuLy8gRVM2XG5cbi8vIGxldCBnZXRQZXJzb24gPSAoKT0+IHtcbi8vICAgbGV0IG5hbWU9J0hvb24nLCBqb2I9J0luc3RydWN0b3InO1xuLy8gICByZXR1cm4ge1xuLy8gICAgIG5hbWUsIGpvYixcbi8vICAgICBncmVldGluZyh5b3Upe1xuLy8gICAgICAgbGV0IG1lc3NhZ2UgPSBgSGVsbG8sICR7eW91fS5gO1xuLy8gICAgICAgbWVzc2FnZSArPSBgTXkgTmFtZSBpcyAke3RoaXMubmFtZX0gYW5kIE15IEpvYiBpcyAke3RoaXMuam9ifS5gO1xuLy8gICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4vLyAgICAgfVxuLy8gICB9O1xuLy8gfTtcblxuLy8gY29uc29sZS5sb2coIGdldFBlcnNvbigpLm5hbWUgKTtcbi8vIGNvbnNvbGUubG9nKCBnZXRQZXJzb24oKS5ncmVldGluZygnSGV5IE1pbicpICk7XG5cblxubGV0IGFnZSA9IDEwLCBuYW1lID0gXCLsl7RcIiwgam9iID0gXCLsl7Tsl7RcIjtcblxubGV0IGpzb25fZGF0YSA9IHtcbiAgIG5hbWUsIGFnZSwgam9iLFxuICAgZ2V0TmFtZSgpIHt9LFxuICAgc2V0QWdlKCkge30sXG4gICBqb2JDaGFuZ2UoKSB7fVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIENsYXNzZXMgJiBJbmhlcml0YW5jZSAvL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vIDwgZS5nKSAxOiDsg53shLHsnpAg7ZWo7IiYIOKepCDtgbTrnpjsiqQg66y467KVIO2ZnOyaqSA+XG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9rby9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9TdGF0ZW1lbnRzL2NsYXNzXG4vLyBjbGFzcyDrs7jrrLgoYm9keSnsnYAg7JeE6rKpIOuqqOuTnOyXkOyEnCDsi6TtlonrkKnri4jri6QuXG4vLyDtlajsiJgg7ISg7Ja46rO8IOuLrOumrCwgY2xhc3Mg7ISg7Ja47J2AIO2YuOydtOyKpO2MheuQmOyngCDslYrsirXri4jri6QuXG4vLyDij6Mg64uk7IucIOunkO2VtCwgRVM27JeQIOy2lOqwgOuQnCBsZXQsIGNvbnN0LCBjbGFzcyDrk7HsnYAg7Zi47J207Iqk7YyFIOuQmOyngCDslYrsirXri4jri6QuXG5cbi8vIGNsYXNzICAgICAgIC8vXG4vLyBjb25zdHJ1Y3RvciAvL1xuLy8gc3RhdGljICAgICAgLy9cbi8vIGdldCAgICAgICAgIC8vXG4vLyBzZXQgICAgICAgICAvL1xuLy8gZXh0ZW5kcyAgICAgLy9cbi8vIHN1cGVyICAgICAgIC8vXG5cbi8vIEVTNVxuLy8g7IOd7ISx7J6QIO2VqOyImFxuLy8gQ29uc3RydWN0b3IgRnVuY3Rpb25cbi8vIGZ1bmN0aW9uIFVzZXIobmFtZSwgZW1haWwpIHtcbi8vICAgdGhpcy5uYW1lID0gbmFtZTtcbi8vICAgdGhpcy5lbWFpbCA9IGVtYWlsO1xuLy8gfVxuLy8g7Iqk7YOc7YuxIOuplOyEnOuTnFxuLy8gU3RhdGljIE1ldGhvZHNcbi8vIFVzZXIucmVnaXN0ZXIgPSBmdW5jdGlvbihuYW1lLCBlbWFpbCkge1xuLy8gICByZXR1cm4gbmV3IFVzZXIobmFtZSwgZW1haWwpO1xuLy8gfTtcbi8vIO2UhOuhnO2GoO2DgOyehSDrqZTshJzrk5wo7J247Iqk7YS07IqkIOuplOyEnOuTnClcbi8vIEluc3RhbmNlIE1ldGhvZHNcbi8vIFVzZXIucHJvdG90eXBlLmNoYW5nZUVtYWlsID0gZnVuY3Rpb24obmV3X21haWwpIHtcbi8vICAgdGhpcy5lbWFpbCA9IG5ld19tYWlsO1xuLy8gfTtcblxuLy8gRVM2XG5jbGFzcyBVc2VyIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZW1haWwsIGlzQWRtaW4pIHtcbiAgICB0aGlzLm5hbWUgICAgPSBuYW1lO1xuICAgIHRoaXMuZW1haWwgICA9IGVtYWlsO1xuICAgIHRoaXMuaXNBZG1pbiA9IGlzQWRtaW47XG4gIH1cbiAgc3RhdGljIHJlZ2lzdGVyKC4uLnBhcmFtcykge1xuICAgIHJldHVybiBuZXcgVXNlciguLi5wYXJhbXMpO1xuICB9XG4gIGNoYW5nZUVtYWlsKG5ld19tYWlsKSB7XG4gICAgdGhpcy5lbWFpbCA9IG5ld19tYWlsO1xuICB9XG59XG5cbi8vIHVzZXIg6rSA66asIOuwsOyXtCDrjbDsnbTthLAg7IOd7ISxXG5sZXQgdXNlcl9saXN0ID0gW107XG4vLyDrsLDsl7Tsl5Ag66mk67KEIOy2lOqwgFxudXNlcl9saXN0LnB1c2goVXNlci5yZWdpc3RlcignYScsICdhQGFjb24uY29tJywgZmFsc2UpKTtcbnVzZXJfbGlzdC5wdXNoKFVzZXIucmVnaXN0ZXIoJ3YnLCAndkBmZHMubmV0JywgdHJ1ZSkpO1xudXNlcl9saXN0LnB1c2goVXNlci5yZWdpc3RlcignaicsICdqQGpqY2FtcC5jb20nLCBmYWxzZSkpO1xuXG4vLyBFUzVcbi8vIHVzZXJfbGlzdC5maW5kKGZ1bmN0aW9uKHVzZXIpe1xuLy8gICByZXR1cm4gdXNlci5lbWFpbCA9PT0gJ2RvbmRvbmdAYS5tYWlsJztcbi8vIH0pO1xuXG4vLyDirIfvuI5cblxuLy8gRVM2LCBTdGVwIDFcbi8vIHVzZXJfbGlzdC5maW5kKCh1c2VyKT0+e1xuLy8gICByZXR1cm4gdXNlci5lbWFpbCA9PT0gJ2RvbmRvbmdAYS5tYWlsJztcbi8vIH0pO1xuLy8gRVM2LCBTdGVwIDJcbi8vIHVzZXJfbGlzdC5maW5kKHVzZXI9Pntcbi8vICAgcmV0dXJuIHVzZXIuZW1haWwgPT09ICdkb25kb25nQGEubWFpbCc7XG4vLyB9KTtcbi8vIEVTNiwgU3RlcCAzXG51c2VyX2xpc3QuZmluZCh1c2VyPT51c2VyLmlzQWRtaW4pOyAvLyByZXR1cm4gdmFsdWVcbnVzZXJfbGlzdC5maW5kSW5kZXgodXNlcj0+dXNlci5pc0FkbWluKTsgLy8gcmV0dXJuIGluZGV4XG5cbi8vIGZpbHRlclxubGV0IHVzZXJfbm90X2FkbWluID0gdXNlcl9saXN0LmZpbHRlcih1c2VyPT4hdXNlci5pc0FkbWluKTtcblxuXG5cblxuLy8gVXNlclxuLy8gdXNlcnMgPSBbIG5ldyBVc2VyLCBuZXcgVXNlciwgbmV3IFVzZXIgXVxuLy8gdXNlcnMuZmluZCh1c2VyPT51c2VyLmlzQWRtaW4pLm5hbWVcblxuXG4vLyA8IGUuZykgMjogQXVkaW9DdHJsIOyDneyEseyekCDtlajsiJgg4p6kIO2BtOuemOyKpCDrrLjrspUg7Zmc7JqpID5cblxuLy8g7IOB7IaNKEluaGVyaXRhbmNlKVxuXG5jbGFzcyBBbmltYWwge1xuICBjb25zdHJ1Y3RvcihsZWdzID0gNCwgd2luZ3MgPSAwKSB7XG4gICAgdGhpcy5sZWdzID0gbGVncztcbiAgICB0aGlzLndpbmdzID0gd2luZ3M7XG4gIH1cbiAgZWF0KCkge31cbiAgc2xlZXAoKSB7fVxuICBydW4oKSB7fVxufVxuXG4vLyBjbGFzcyBEdWNrIGV4dGVuZHMgQW5pbWFsIHtcbi8vICAgY29uc3RydWN0b3IodHlwZSkge1xuLy8gICAgIHN1cGVyKDIsIDIpO1xuLy8gICAgIHRoaXMudHlwZSA9IHR5cGU7XG4vLyAgIH1cbi8vICAgZmx5KCkge31cbi8vIH1cbi8vIGNsYXNzIERvZyBleHRlbmRzIEFuaW1hbCB7fVxuLy8gY2xhc3MgRWxlcGhhbnQgZXh0ZW5kcyBBbmltYWwge31cblxuXG4vLyA8IGUuZykgMzogQ3VzdG9tIEVsZW1lbnQgQVBJID5cbi8vIOyCrOyaqeyekOyEpOyglSDsmpTshowgdjE6IOyerOyCrOyaqSDqsIDriqXtlZwg7Ju5IOq1rOyEsSDsmpTshowgfCBodHRwczovL2dvby5nbC9EQkx3OXRcbi8vIGh0dHBzOi8vYmxvZy5yaXNpbmdzdGFjay5jb20vd3JpdGluZy1hLWphdmFzY3JpcHQtZnJhbWV3b3JrLXRoZS1iZW5lZml0cy1vZi1jdXN0b20tZWxlbWVudHMvXG5cbmxldCBfbmlja25hbWUgPSBuZXcgV2Vha01hcCgpO1xuXG4vLyA8IGUuZykgNDogZ2V0dGVyLCBzZXR0ZXIgPlxuY2xhc3MgRHVjayBleHRlbmRzIEFuaW1hbCB7XG4gIGNvbnN0cnVjdG9yKHR5cGUpIHtcbiAgICBzdXBlcigyLCAyKTtcbiAgICAvLyBQdWJsaWNcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIC8vIFdlYWtNYXAg7IKs7Jqp7ZWY7JesIOu5hOqzteqwnCDrqaTrsoQg65Ox66GdXG4gICAgX25pY2tuYW1lLnNldCh0aGlzLCBudWxsKTtcbiAgfVxuICAvLyBnZXR0ZXJcbiAgZ2V0IG5pY2tuYW1lKCkge1xuICAgIHJldHVybiBfbmlja25hbWUuZ2V0KHRoaXMpIHx8IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBzZXR0ZXJcbiAgc2V0IG5pY2tuYW1lKG5ld19uYW1lKSB7XG4gICAgaWYgKCBuZXdfbmFtZSA9PT0gX25pY2tuYW1lLmdldCh0aGlzKSApIHtcbiAgICAgIGNvbnNvbGUuaW5mbygn7J2066+4IOuzhOuqheydtCDqsJnsirXri4jri6QuJyk7XG4gICAgfSBlbHNlIGlmIChuZXdfbmFtZSkge1xuICAgICAgX25pY2tuYW1lLnNldCh0aGlzLCBuZXdfbmFtZSk7XG4gICAgfVxuICB9XG4gIGZseSgpIHt9XG59XG5cbmxldCBnb2xkX2R1Y2sgPSBuZXcgRHVjaygn7Zmp6riIIOyVjOydhCDrgrPripQg7Jik66asJyk7XG5cbmdvbGRfZHVjay5uaWNrbmFtZTsgLy8gdW5kZWZpbmVkXG5nb2xkX2R1Y2submlja25hbWUgPSAn7Zmp6riIIOuRpeydtCc7XG4vLyBnb2xkX2R1Y2submlja25hbWUgPSAn7Zmp6riIIOuRpeydtCc7XG5cbi8vIFJFU1QgQVBJIFNlcnZpY2Vcbi8vIEFqYXggPC0+IGpzb25cbi8vIEhUVFAgUmVxdWVzdCBNZXRob2RzXG4vLyBHRVQsIFBPU1QsIFBVVCwgREVMRVRFXG4vLyBGcm9udC1FbmQgPC0+IGpzb24tc2VydmVyIDxqc29uIG9yIGpzPlxuLy8ganNvbi1zZXJ2ZXIgOiBBUElcbi8vIG15anNvbi5jb20sIGZpcmViYXNlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gRUNNQVNjcmlwdDIwMTUgTW9kdWxlcyAvL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLyBDb21tb25KUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBodHRwOi8vd3d3LmNvbW1vbmpzLm9yZy9cbi8vIG1vZHVsZS5leHBvcnRzID0ge307XG4vLyBsZXQgbW9kdWxlID0gcmVxdWlyZSgnbW9kdWxlJyk7XG5cbi8vIEFNRCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGh0dHA6Ly9yZXF1aXJlanMub3JnL2RvY3Mvd2h5YW1kLmh0bWwjYW1kXG4vLyBodHRwczovL2FkZHlvc21hbmkuY29tL3Jlc291cmNlcy9lc3NlbnRpYWxqc2Rlc2lnbnBhdHRlcm5zL2Jvb2svI21vZHVsYXJqYXZhc2NyaXB0XG4vLyBkZWZpbmUoJ21vZHVsZScsW10sZnVuY3Rpb24oKXt9KTtcbi8vIHJlcXVpcmUoWydtb2R1bGUxJywgJ21vZHVsZTInXSwgZnVuY3Rpb24obW9kdWxlMSwgbW9kdWxlMil7fSk7XG5cbi8vIFVNRCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS91bWRqcy91bWRcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS91bWRqcy91bWQvYmxvYi9tYXN0ZXIvdGVtcGxhdGVzL2pxdWVyeVBsdWdpbi5qc1xuKGZ1bmN0aW9uIChmYWN0b3J5KSB7XG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICAvLyBBTURcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgIC8vIE5vZGUvQ29tbW9uSlNcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBCcm93c2VyIGdsb2JhbHNcbiAgICB9XG59KGZ1bmN0aW9uKCl7fSkpO1xuXG4vLyBFUzIwMTVcbi8vIGltcG9ydCB7c2hvdywgY2FsbCwgbW9tZW50fSBmcm9tICd2dWUnXG4vLyBleHBvcnRcbi8vIGRlZmF1bHRcblxuLy8gZXhwb3J0IGxldCBtb2R1bGVfcHJvcCA9ICcnO1xuLy8gZXhwb3J0IGZuID0gZnVuY3Rpb24oKSB7fTtcbi8vIGV4cG9ydCBjbGFzcyBDbGFzc05hbWUge307XG4vLyBleHBvcnQgZGVmYXVsdCBDbGFzc05hbWU7XG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIERlc3RydWN0dXJpbmcgLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8gPCBlLmcpIDE6IOu4lOuhnSDsiqTsvZTtlIQg64K07JeQ7IScIOuUlOyKpO2KuOufreyzkOungSDtmZzsmqkgPlxubGV0IHByb2R1Y3QgPSB7XG4gIHByb2R1Y3RuYW1lICAgICAgICAgOiAnVFYnLFxuICBtYWtlciAgICAgICAgICA6ICdMRycsXG4gIGZlYXR1cmVzICAgICAgIDogWyAnVGltZSBSZWNvZGluZycsICdTaGFyaW5nIFNjcmVlbicsICdTcGVlY2ggUmVjb2duaXRpb24nIF0sXG4gIHByb2R1Y3Rpb25ZZWFyIDogMjAxN1xufTtcblxubGV0e3Byb2R1Y3RuYW1lLCBtYWtlciwgZmVhdHVyZXN9ID0gcHJvZHVjdDtcblxuLy9cbi8vXG4vLyB7XG4vLyAgIGxldCBuYW1lICAgICAgICAgICA9IHByb2R1Y3QubmFtZTtcbi8vICAgbGV0IG1ha2VyICAgICAgICAgID0gcHJvZHVjdC5tYWtlcjtcbi8vICAgbGV0IGZlYXR1cmVzICAgICAgID0gcHJvZHVjdC5mZWF0dXJlcztcbi8vICAgbGV0IHByb2R1Y3Rpb25ZZWFyID0gcHJvZHVjdC5wcm9kdWN0aW9uWWVhcjtcbi8vIH1cblxuLy8gPCBlLmcpIDI6IO2VqOyImCDrp6TqsJzrs4DsiJjsl5Ag65SU7Iqk7Yq465+t7LOQ66eBIO2ZnOyaqSA+XG5mdW5jdGlvbiBncmVldChwZXJzb24pIHtcbiAgbGV0IG5hbWUgICAgPSBwZXJzb24ubmFtZTtcbiAgbGV0IG1lc3NhZ2UgPSBwZXJzb24ubWVzc2FnZTtcbiAgcmV0dXJuICdIaSEgSVxcJ20gJyArIG5hbWUgKyAnLiBUb2RheSBpcyAnICsgbWVzc2FnZTtcbn1cblxuZ3JlZXQoe1xuICBuYW1lOiAnSmluIEhvJyxcbiAgYWdlOiAyMixcbiAgcmVzdWx0czogWyAncGhvbmUnLCAnbm90ZWJvb2snIF0sXG4gIGNvdW50OiAzMSxcbiAgbWVzc2FnZTogJ0dvb2QgRGF5ISA6LSknXG59KTtcblxuLy8gPCBlLmcpIDM6IOuqqOuTiCDroZzrk5wg7IucLCDtlYTsmpTtlZwg66qo65OIIOyGjeyEseunjCDrlJTsiqTtirjrn63ss5Drp4Eg7Zmc7JqpID5cbi8vIGltcG9ydCB7IOyGjeyEsTEsIOyGjeyEsTIgfSBmcm9tICfrqqjrk4gnXG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIE1vZHVsZSBCdW5kbGluZyB3aXRoIFdlYnBhY2sgLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8gd2VicGFjay5tZCDssLjqs6BcblxuXG5cblxuLy8vLy8vLy8vLy8vL1xuLy8gUHJvbWlzZSAvL1xuLy8vLy8vLy8vLy8vL1xuXG4vLyBsZXQgdGltZXIgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbi8vICAgY29uc29sZS5sb2coJ+2UhOuhnOuvuOyKpCDstIjquLDtmZQoUHJvbWlzZSBJbml0aWFsaXphdGlvbiknKTtcbi8vICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4vLyAgICAgY29uc29sZS5sb2coJ+2DgOyehOyVhOybgyDsi6TtlokoVGltZW91dCBEb25lKS4nKTtcbi8vICAgICByZXNvbHZlKCk7XG4vLyAgIH0sIDMwMDApO1xuLy8gfSk7XG5cbi8vIHRpbWVyLnRoZW4oZnVuY3Rpb24oKSB7XG4vLyAgIGNvbnNvbGUubG9nKCftg4DsnbTrqLgg7KKF66OMKEZpbmlzaCBUaW1lciknKTtcbi8vIH0pO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyB2YXIgc2V0VGltZXIgPSAobGVuZ3RoKT0+IHtcbi8vICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKCftlITroZzrr7jsiqQg7LSI6riw7ZmUJyk7XG4vLyAgICAgd2luZG93LnNldFRpbWVvdXQoKCk9PiB7XG4vLyAgICAgICBjb25zb2xlLmxvZygn7YOA7J6E7JWE7JuDJyk7XG4vLyAgICAgICByZXNvbHZlKCk7XG4vLyAgICAgfSk7XG4vLyAgIH0sIGxlbmd0aCk7XG4vLyB9O1xuXG4vLyBzZXRUaW1lcigyMDAwKS50aGVuKCgpPT4gY29uc29sZS5sb2coJ+uqqOuRkCDsi6TtloknKSk7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIGF4aW9z64qUIO2UhOuhnOuvuOyKpCDquLDrsJggQWpheCDrnbzsnbTruIzrn6zrpqxcbi8vIGxldCBwcm9taXNlID0gYXhpb3MuZ2V0KCcvZW1wbG95ZWVzJyk7XG4vLyBwcm9taXNlLnRoZW4oZnVuY3Rpb24oZGF0YSkge30pO1xuLy8gcHJvbWlzZS5jYXRjaChmdW5jdGlvbihlcnJvcikge30pO1xuXG5cblxuXG4vLy8vLy8vLy8vXG4vLyBTZXRzIC8vXG4vLy8vLy8vLy8vXG5cbi8vIG5ldyBTZXQoKVxuLy8gLmFkZFxuLy8gLmhhc1xuLy8gLmRlbGV0ZVxuLy8gLmNsZWFyXG4vLyAuc2l6ZVxuLy8gLnZhbHVlc1xuLy8gLmZvckVhY2hcbi8vIFsuLi4obmV3IFNldCgnY3NzJywgJ2phdmFzY3JpcHQnLCAndnVlJykpXS5maWx0ZXIoaXRlbT0+aXRlbS5sZW5ndGg9PT0zKTtcblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vL1xuLy8gR2VuZXJhdG9ycyAvL1xuLy8vLy8vLy8vLy8vLy8vL1xuXG4vLyBmdW5jdGlvbiogbnVtYmVycygpIHtcblxuLy8gICBjb25zb2xlLmxvZygnQmVnaW4nKTtcblxuLy8gICB5aWVsZCAxOyAvLyBQYXVzZWRcbi8vICAgeWllbGQgMjsgLy8gUGF1c2VkXG4vLyAgIHlpZWxkIDM7IC8vIFBhdXNlZFxuXG4vLyB9XG5cbi8vIGxldCBpdGVyYXRvciA9IG51bWJlcnMoKTtcblxuLy8gY29uc29sZS5sb2coaXRlcmF0b3IubmV4dCgpKTtcbi8vIE9iamVjdCB7XG4vLyAgIGRvbmU6IGZhbHNlLFxuLy8gICB2YWx1ZTogMVxuLy8gfVxuLy8gY29uc29sZS5sb2coaXRlcmF0b3IubmV4dCgpKTtcbi8vIE9iamVjdCB7XG4vLyAgIGRvbmU6IGZhbHNlLFxuLy8gICB2YWx1ZTogMlxuLy8gfVxuLy8gY29uc29sZS5sb2coaXRlcmF0b3IubmV4dCgpKTtcbi8vIE9iamVjdCB7XG4vLyAgIGRvbmU6IGZhbHNlLFxuLy8gICB2YWx1ZTogM1xuLy8gfVxuLy8gY29uc29sZS5sb2coaXRlcmF0b3IubmV4dCgpKTtcbi8vIE9iamVjdCB7XG4vLyAgIGRvbmU6IHRydWUsXG4vLyAgIHZhbHVlOiB1bmRlZmluZWRcbi8vIH1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbi8vIGZ1bmN0aW9uICpyYW5nZShzdGFydCwgZW5kKSB7XG4vLyAgIHdoaWxlKHN0YXJ0IDwgZW5kKSB7XG4vLyAgICAgeWllbGQgc3RhcnQ7IC8vIHBhdXNlZFxuLy8gICB9XG4vLyAgIHN0YXJ0Kys7XG4vLyB9XG5cbi8vIGxldCByYW5nZV9pdGVyYXRvciA9IHJhbmdlKDEsIDUpO1xuXG4vLyBjb25zb2xlLmxvZyhyYW5nZV9pdGVyYXRvci5uZXh0KCkpOyAvLyB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogMSB9XG4vLyBjb25zb2xlLmxvZyhyYW5nZV9pdGVyYXRvci5uZXh0KCkpOyAvLyB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogMiB9XG4vLyBjb25zb2xlLmxvZyhyYW5nZV9pdGVyYXRvci5uZXh0KCkpOyAvLyB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogMyB9XG4vLyBjb25zb2xlLmxvZyhyYW5nZV9pdGVyYXRvci5uZXh0KCkpOyAvLyB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogNCB9XG4vLyBjb25zb2xlLmxvZyhyYW5nZV9pdGVyYXRvci5uZXh0KCkpOyAvLyB7IGRvbmU6IHRydWUsIHZhbHVlOiB1bmRlZmluZWQgfVxuXG4vLyBmb3IgKCBsZXQgdmFsdWUgb2YgcmFuZ2VfaXRlcmF0b3IgKSB7XG4vLyAgY29uc29sZS5sb2codmFsdWUpOyAvLyAxLCAyLCAzLCA0LCA1XG4vLyB9XG5cbi8vIFsuLi5yYW5nZSgxMCwgMTAwKV07XG4iXX0=