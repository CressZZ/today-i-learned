'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
// {
//   let is_block_var = true;
//   console.log('block scope:', is_block_var);
// }
// console.log('global scope:', is_block_var);
// let, const 키워드로 선언된 변수,상수는 스코프 최상단으로 호이스팅(끌어올림)되지 않는다.
// {
// if (typeof version === 'undefined') {
//   let version = 'es6';
// }
// console.log(version);
// }

// {
//     if (!version) {
//         console.log('version hoisting!');
//     }

//     let version = 'es6';
// }
// console.log(version);

// IIFE 패턴을 사용하여 함수 스코프를 사용하지 않아도, 지역 변수를 생성할 수 있다.

// {
//   let fn = function() {}
//   var o = {
//     f: fn
//   };
// }

// console.log(o.f);

// 기존 ES5 코드 환경에서는 var 키워드를 남겨두는 것이 좋다.
// ECMAScript2015+ 환경에서는 var 보다는 let, const 키워드 사용을 권장한다.
// https://github.com/tipjs/javascript-style-guide#2.1

// 강제적으로 변하지 않게(Force Immutability) 하고자 할 경우, Object.freeze()를 사용한다.


////////////////////////
// String Additions   //
////////////////////////
// string.includes()  //
// string.startsWith() //
// string.endsWith()   //
// string.repeat()    //
////////////////////////

// < e.g) 1: AudioCtrl.hasSign() >
var a = "test is tests";
a.startsWith('test');

// < e.g) 2: Comment(- =-= . =-=-, =>=>=> . <=<=<=) >


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

// 보간법(Interpolation) 활용 가능 (Like Sass)
// HTML 템플릿(Template) 작성에 탁월!
// Vue JS 프레임워크에서 유용하게 활용하게 됨.


////////////////////
// Arrow Function //
////////////////////

// JavaScript 함수 내부에서 this 참조는 실행 시에 동적으로 변경된다.
// 이로 인해 의도치 않은 실수가 발생할 수 있는데 화살표 함수를 사용하면 this 참조가
// 문맥으로 유지되기 때문에 실수를 미연에 방지할 수 있다.


////////////////////////
// Default Parameters //
////////////////////////

// 함수 매개변수 초기 값을 설정할 수 있다. (Like Sass)
// function sum(a, b=9){
//   return a + b;
// }

// 함수 매개변수 값을 외부의 함수 결과 값으로 처리할 수도 있다.
// function defaultDiscount(){
//   return 0.45;
// }
// function assigDiscount2(cost, discount = defaulDiscount()){
//   return cost - (cost * discount);
// }
// < e.g) defaultDiscount() >
function sum() {
  for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }

  return numbers.reduce(function (p, c) {
    return p + c;
  });
}

function sum_2(numbers) {
  var a = 0;
  numbers.forEach(function (p) {
    a = a + p;
  });
  return a;
}

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

var getPerson = function getPerson() {
  var name = 'Hoon';
  var job = 'Instrunctor';
  return {
    name: name,
    job: job,
    greeting: function greeting(you) {
      var message = 'hello, ' + you;
      message += ' my name is ' + this.name;
      return message;
    }
  };
};

console.log(getPerson().greeting('cress'));

/////////////////////////
// Object Enhancements //
/////////////////////////

// < e.g) 1 >
function getPerson() {
  var name = 'Hoon';
  var job = 'Instructor';
  return {
    name: name,
    job: job,
    greeting: function greeting(you) {
      var message = 'Hello, ' + you + '.';
      message += ' My Name is ' + this.name + ' and My Job is ' + this.job;
      return message;
    }
  };
}

// console.log( getPerson().name );
// console.log( getPerson().greeting('Hey Min') );


///////////////////////////
// Classes & Inheritance //
///////////////////////////

// < e.g) 1: 생성자 함수 ➤ 클래스 문법 활용 >

// class
// constructor
// static
// get
// set
// extends
// super

function User(name, email) {
  this.name = name;
  this.email = email;
}

User.register = function (name, email) {
  return new User(name, email);
};

User.prototype.changeEmail = function (new_mail) {
  this.email = new_mail;
};

// < e.g) 2: AudioCtrl 생성자 함수 ➤ 클래스 문법 활용 >


// User
// users = [ new User, new User, new User ]
// users.find(user=>user.isAdmin).name


////////////////////////////
// ECMAScript2015 Modules //
////////////////////////////

// CommonJS ----------------------------------------------------------------------
// http://www.commonjs.org/
// module.exports = {};

// AMD ---------------------------------------------------------------------------
// http://requirejs.org/docs/whyamd.html#amd
// https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modularjavascript
// define('module',[],function(){});

// UMD ---------------------------------------------------------------------------
// https://github.com/umdjs/umd
// https://github.com/umdjs/umd/blob/master/templates/jqueryPlugin.js
(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && module.exports) {
    // Node/CommonJS
  } else {
      // Browser globals
    }
})(function () {});

// ES2015
// include ~ from
// export
// defaults

// export let module_prop = '';
// export fn = function() {};
// export class ClassName {};
// export default ClassName;


///////////////////
// Destructuring //
///////////////////

// < e.g) 1: 블록 스코프 내에서 디스트럭쳐링 활용 >
var product = {
  name: 'TV',
  maker: 'LG',
  features: ['Time Recoding', 'Sharing Screen', 'Speech Recognition'],
  productionYear: 2017
};

{
  var name = product.name;
  var maker = product.maker;
  var features = product.features;
  var productionYear = product.productionYear;
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lczYuanMiXSwibmFtZXMiOlsiYSIsInN0YXJ0c1dpdGgiLCJzdW0iLCJudW1iZXJzIiwicmVkdWNlIiwicCIsImMiLCJzdW1fMiIsImZvckVhY2giLCJnZXRQZXJzb24iLCJuYW1lIiwiam9iIiwiZ3JlZXRpbmciLCJ5b3UiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsIlVzZXIiLCJlbWFpbCIsInJlZ2lzdGVyIiwicHJvdG90eXBlIiwiY2hhbmdlRW1haWwiLCJuZXdfbWFpbCIsImZhY3RvcnkiLCJkZWZpbmUiLCJhbWQiLCJtb2R1bGUiLCJleHBvcnRzIiwicHJvZHVjdCIsIm1ha2VyIiwiZmVhdHVyZXMiLCJwcm9kdWN0aW9uWWVhciIsImdyZWV0IiwicGVyc29uIiwiYWdlIiwicmVzdWx0cyIsImNvdW50Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRTtBQUNBO0FBQ0E7QUFDQTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSUEsSUFBSSxlQUFSO0FBQ0FBLEVBQUVDLFVBQUYsQ0FBYSxNQUFiOztBQUVBOzs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBS0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFLQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFLQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FB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QWlCLENBQUUsZUFBRixFQUFtQixnQkFBbkIsRUFBcUMsb0JBQXJDLENBSEw7QUFJWkMsa0JBQWlCO0FBSkwsQ0FBZDs7QUFPQTtBQUNFLE1BQUlyQixPQUFpQmtCLFFBQVFsQixJQUE3QjtBQUNBLE1BQUltQixRQUFpQkQsUUFBUUMsS0FBN0I7QUFDQSxNQUFJQyxXQUFpQkYsUUFBUUUsUUFBN0I7QUFDQSxNQUFJQyxpQkFBaUJILFFBQVFHLGNBQTdCO0FBQ0Q7O0FBRUQ7QUFDQSxTQUFTQyxLQUFULENBQWVDLE1BQWYsRUFBdUI7QUFDckIsTUFBSXZCLE9BQVV1QixPQUFPdkIsSUFBckI7QUFDQSxNQUFJSSxVQUFVbUIsT0FBT25CLE9BQXJCO0FBQ0EsU0FBTyxjQUFjSixJQUFkLEdBQXFCLGFBQXJCLEdBQXFDSSxPQUE1QztBQUNEOztBQUVEa0IsTUFBTTtBQUNKdEIsUUFBTSxRQURGO0FBRUp3QixPQUFLLEVBRkQ7QUFHSkMsV0FBUyxDQUFFLE9BQUYsRUFBVyxVQUFYLENBSEw7QUFJSkMsU0FBTyxFQUpIO0FBS0p0QixXQUFTO0FBTEwsQ0FBTjs7QUFRQTtBQUNBOzs7QUFLQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUtBO0FBQ0E7QUFDQTs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUtBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUtBO0FBQ0E7QUFDQSIsImZpbGUiOiJlczYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgRUNNQVNjcmlwdDIwMTUoRVM2KS5qcyDCqSB5YW1vbzkubmV0LCAyMDE3ICovXG5cbi8vIC0gW0JhYmVsXShodHRwOi8vYmFiZWxqcy5pby8pXG4vLyAtIFtFUzYg7Zi47ZmY7ISxIO2FjOydtOu4lF0oaHR0cDovL2thbmdheC5naXRodWIuaW8vY29tcGF0LXRhYmxlL2VzNi8pXG4vLyAtIFtFQ01BU2NyaXB0IDIwMTUgKEVTNildKGh0dHBzOi8vZ2l0aHViLmNvbS95YW1vbzkvRkRTL2Jsb2IvM3JkX0ZEUy9SRUZFUkVOQ0VTL0VDTUFTY3JpcHQyMDE1Lm1kKVxuLy8gLSBbQWlyYm5iIEphdmFTY3JpcHQg7Iqk7YOA7J28IOqwgOydtOuTnF0oaHR0cHM6Ly9naXRodWIuY29tL3RpcGpzL2phdmFzY3JpcHQtc3R5bGUtZ3VpZGUpXG4vLyAtIFtFU0RvYzog66y47ISc7ZmUIOuPhOq1rF0oaHR0cHM6Ly9lc2RvYy5vcmcvKVxuXG5cbi8vLy8vLy8vLy8vLy8vLy9cbi8vIGxldCwgY29uc3QgLy9cbi8vLy8vLy8vLy8vLy8vLy9cblxuLy8gbGV0LCBjb25zdCDtgqTsm4zrk5zroZwg7ISg7Ja465CcIOuzgOyImCzsg4HsiJjripQg67iU66GdIOyKpOy9lO2UhChCbG9jayBTY29wZSnrpbwg6rCA7KeE64ukLlxuLy8ge1xuLy8gICBsZXQgaXNfYmxvY2tfdmFyID0gdHJ1ZTtcbi8vICAgY29uc29sZS5sb2coJ2Jsb2NrIHNjb3BlOicsIGlzX2Jsb2NrX3Zhcik7XG4vLyB9XG4vLyBjb25zb2xlLmxvZygnZ2xvYmFsIHNjb3BlOicsIGlzX2Jsb2NrX3Zhcik7XG4vLyBsZXQsIGNvbnN0IO2CpOybjOuTnOuhnCDshKDslrjrkJwg67OA7IiYLOyDgeyImOuKlCDsiqTsvZTtlIQg7LWc7IOB64uo7Jy866GcIO2YuOydtOyKpO2MhSjrgYzslrTsmKzrprwp65CY7KeAIOyViuuKlOuLpC5cbi8vIHtcbiAgLy8gaWYgKHR5cGVvZiB2ZXJzaW9uID09PSAndW5kZWZpbmVkJykge1xuICAvLyAgIGxldCB2ZXJzaW9uID0gJ2VzNic7XG4gIC8vIH1cbiAgLy8gY29uc29sZS5sb2codmVyc2lvbik7XG4vLyB9XG5cbi8vIHtcbi8vICAgICBpZiAoIXZlcnNpb24pIHtcbi8vICAgICAgICAgY29uc29sZS5sb2coJ3ZlcnNpb24gaG9pc3RpbmchJyk7XG4vLyAgICAgfVxuXG4vLyAgICAgbGV0IHZlcnNpb24gPSAnZXM2Jztcbi8vIH1cbi8vIGNvbnNvbGUubG9nKHZlcnNpb24pO1xuXG4vLyBJSUZFIO2MqO2EtOydhCDsgqzsmqntlZjsl6wg7ZWo7IiYIOyKpOy9lO2UhOulvCDsgqzsmqntlZjsp4Ag7JWK7JWE64+ELCDsp4Dsl60g67OA7IiY66W8IOyDneyEse2VoCDsiJgg7J6I64ukLlxuXG4vLyB7XG4vLyAgIGxldCBmbiA9IGZ1bmN0aW9uKCkge31cbi8vICAgdmFyIG8gPSB7XG4vLyAgICAgZjogZm5cbi8vICAgfTtcbi8vIH1cblxuLy8gY29uc29sZS5sb2coby5mKTtcblxuLy8g6riw7KG0IEVTNSDsvZTrk5wg7ZmY6rK97JeQ7ISc64qUIHZhciDtgqTsm4zrk5zrpbwg64Ko6rKo65GQ64qUIOqyg+ydtCDsoovri6QuXG4vLyBFQ01BU2NyaXB0MjAxNSsg7ZmY6rK97JeQ7ISc64qUIHZhciDrs7Tri6TripQgbGV0LCBjb25zdCDtgqTsm4zrk5wg7IKs7Jqp7J2EIOq2jOyepe2VnOuLpC5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90aXBqcy9qYXZhc2NyaXB0LXN0eWxlLWd1aWRlIzIuMVxuXG4vLyDqsJXsoJzsoIHsnLzroZwg67OA7ZWY7KeAIOyViuqyjChGb3JjZSBJbW11dGFiaWxpdHkpIO2VmOqzoOyekCDtlaAg6rK97JqwLCBPYmplY3QuZnJlZXplKCnrpbwg7IKs7Jqp7ZWc64ukLlxuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFN0cmluZyBBZGRpdGlvbnMgICAvL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBzdHJpbmcuaW5jbHVkZXMoKSAgLy9cbi8vIHN0cmluZy5zdGFydHNXaXRoKCkgLy9cbi8vIHN0cmluZy5lbmRzV2l0aCgpICAgLy9cbi8vIHN0cmluZy5yZXBlYXQoKSAgICAvL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vIDwgZS5nKSAxOiBBdWRpb0N0cmwuaGFzU2lnbigpID5cbmxldCBhID0gXCJ0ZXN0IGlzIHRlc3RzXCI7XG5hLnN0YXJ0c1dpdGgoJ3Rlc3QnKTtcblxuLy8gPCBlLmcpIDI6IENvbW1lbnQoLSA9LT0gLiA9LT0tLCA9Pj0+PT4gLiA8PTw9PD0pID5cblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gQXJyYXkgQWRkaXRpb25zICAvL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gYXJyYXkuZmluZCgpICAgICAvL1xuLy8gYXJyYXkuaW5jbHVkZXMoKSAvL1xuLy8gYXJyYXkuZmlsbCgpICAgICAvL1xuLy8gYXJyYXkua2V5cygpICAgICAvL1xuLy8gYXJyYXkudmFsdWVzKCkgICAvL1xuLy8gYXJyYXkuZW50cmllcygpICAvL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBUZW1wbGF0ZSBTdHJpbmdzIC8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vIOydtOyKpOy8gOydtO2UhChFc2NhcGUpIOusuOyekOyXtCDsspjrpqwg7ZW06rKwXG4vLyA8IGUuZykgYXVkaW9fY29udHJvbF9kZW1vLmpzID5cblxuLy8g67O06rCE67KVKEludGVycG9sYXRpb24pIO2ZnOyaqSDqsIDriqUgKExpa2UgU2Fzcylcbi8vIEhUTUwg7YWc7ZSM66a/KFRlbXBsYXRlKSDsnpHshLHsl5Ag7YOB7JuUIVxuLy8gVnVlIEpTIO2UhOugiOyehOybjO2BrOyXkOyEnCDsnKDsmqntlZjqsowg7Zmc7Jqp7ZWY6rKMIOuQqC5cblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIEFycm93IEZ1bmN0aW9uIC8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLyBKYXZhU2NyaXB0IO2VqOyImCDrgrTrtoDsl5DshJwgdGhpcyDssLjsobDripQg7Iuk7ZaJIOyLnOyXkCDrj5nsoIHsnLzroZwg67OA6rK965Cc64ukLlxuLy8g7J2066GcIOyduO2VtCDsnZjrj4TsuZgg7JWK7J2AIOyLpOyImOqwgCDrsJzsg53tlaAg7IiYIOyeiOuKlOuNsCDtmZTsgrTtkZwg7ZWo7IiY66W8IOyCrOyaqe2VmOuptCB0aGlzIOywuOyhsOqwgFxuLy8g66y466el7Jy866GcIOycoOyngOuQmOq4sCDrlYzrrLjsl5Ag7Iuk7IiY66W8IOuvuOyXsOyXkCDrsKnsp4DtlaAg7IiYIOyeiOuLpC5cblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBEZWZhdWx0IFBhcmFtZXRlcnMgLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLyDtlajsiJgg66ek6rCc67OA7IiYIOy0iOq4sCDqsJLsnYQg7ISk7KCV7ZWgIOyImCDsnojri6QuIChMaWtlIFNhc3MpXG4vLyBmdW5jdGlvbiBzdW0oYSwgYj05KXtcbi8vICAgcmV0dXJuIGEgKyBiO1xuLy8gfVxuXG4vLyDtlajsiJgg66ek6rCc67OA7IiYIOqwkuydhCDsmbjrtoDsnZgg7ZWo7IiYIOqysOqzvCDqsJLsnLzroZwg7LKY66as7ZWgIOyImOuPhCDsnojri6QuXG4vLyBmdW5jdGlvbiBkZWZhdWx0RGlzY291bnQoKXtcbi8vICAgcmV0dXJuIDAuNDU7XG4vLyB9XG4vLyBmdW5jdGlvbiBhc3NpZ0Rpc2NvdW50Mihjb3N0LCBkaXNjb3VudCA9IGRlZmF1bERpc2NvdW50KCkpe1xuLy8gICByZXR1cm4gY29zdCAtIChjb3N0ICogZGlzY291bnQpO1xuLy8gfVxuLy8gPCBlLmcpIGRlZmF1bHREaXNjb3VudCgpID5cbmZ1bmN0aW9uIHN1bSAoLi4ubnVtYmVycyl7XG4gIHJldHVybiBudW1iZXJzLnJlZHVjZSgocCwgYyk9PiBwICsgYyk7XG59XG5cbmZ1bmN0aW9uIHN1bV8yIChudW1iZXJzKXtcbiAgdmFyIGEgPSAwO1xuICBudW1iZXJzLmZvckVhY2goZnVuY3Rpb24ocCl7XG4gICAgYSA9IGEgKyBwO1xuICB9KTtcbiAgcmV0dXJuIGE7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBSZXN0IG9yIFNwcmVhZCBQYXJhbWV0ZXJzIC8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vIOuCmOuouOyngChyZXN0KSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIO2VqOyImCDsoJXsnZgg7IucLCDrp6TqsJzrs4DsiJgg6rCSIOyVnuyXkCAuLi7snYQg67aZ7J2064qUIOqyveyasFxuXG4vLyA8IGUuZykgc3VtKCkgPlxuXG4vLyBBcnJheS5wcm90b3R5cGUucmVkdWNlXG4vLyBbXS5yZWR1Y2UoZnVuY3Rpb24o7J207KCE6rCSLO2YhOyerOqwkil7fSzstIjquLDqsJIpO1xuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcva28vZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvUmVkdWNlXG5cblxuLy8g7Y687LmY64ukKHNwcmVhZCkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8g7ZWo7IiYIOyLpO2WiSDsi5wsIOyghOuLrOyduOyekCDslZ7sl5AgLi4u7J2EIOu2meydtOuKlCDqsr3smrBcblxuLy8g67Cw7Je0IOKepCDqsJzrs4Qg6rCSIOuzgOqyvSDsspjrpqxcbi8vIFtdICDinqQgLi4ubnVtYmVyc1xuXG5sZXQgZ2V0UGVyc29uID0gKCk9PiB7XG4gIGxldCBuYW1lID0gJ0hvb24nO1xuICBsZXQgam9iID0gJ0luc3RydW5jdG9yJztcbiAgcmV0dXJuIHtcbiAgICBuYW1lLFxuICAgIGpvYixcbiAgICBncmVldGluZyh5b3Upe1xuICAgICAgbGV0IG1lc3NhZ2UgPSBgaGVsbG8sICR7eW91fWA7XG4gICAgICBtZXNzYWdlICs9IGAgbXkgbmFtZSBpcyAke3RoaXMubmFtZX1gO1xuICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgfVxuICB9O1xufVxuXG5jb25zb2xlLmxvZyhnZXRQZXJzb24oKS5ncmVldGluZygnY3Jlc3MnKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBPYmplY3QgRW5oYW5jZW1lbnRzIC8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vIDwgZS5nKSAxID5cbmZ1bmN0aW9uIGdldFBlcnNvbigpIHtcbiAgbGV0IG5hbWUgPSAnSG9vbic7XG4gIGxldCBqb2IgID0gJ0luc3RydWN0b3InO1xuICByZXR1cm4ge1xuICAgIG5hbWU6IG5hbWUsXG4gICAgam9iOiBqb2IsXG4gICAgZ3JlZXRpbmc6IGZ1bmN0aW9uKHlvdSkge1xuICAgICAgbGV0IG1lc3NhZ2UgPSAnSGVsbG8sICcgKyB5b3UgKyAnLic7XG4gICAgICBtZXNzYWdlICs9ICcgTXkgTmFtZSBpcyAnICsgdGhpcy5uYW1lICsgJyBhbmQgTXkgSm9iIGlzICcgKyB0aGlzLmpvYjtcbiAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgIH1cbiAgfTtcbn1cblxuLy8gY29uc29sZS5sb2coIGdldFBlcnNvbigpLm5hbWUgKTtcbi8vIGNvbnNvbGUubG9nKCBnZXRQZXJzb24oKS5ncmVldGluZygnSGV5IE1pbicpICk7XG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gQ2xhc3NlcyAmIEluaGVyaXRhbmNlIC8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8gPCBlLmcpIDE6IOyDneyEseyekCDtlajsiJgg4p6kIO2BtOuemOyKpCDrrLjrspUg7Zmc7JqpID5cblxuLy8gY2xhc3Ncbi8vIGNvbnN0cnVjdG9yXG4vLyBzdGF0aWNcbi8vIGdldFxuLy8gc2V0XG4vLyBleHRlbmRzXG4vLyBzdXBlclxuXG5mdW5jdGlvbiBVc2VyKG5hbWUsIGVtYWlsKSB7XG4gIHRoaXMubmFtZSA9IG5hbWU7XG4gIHRoaXMuZW1haWwgPSBlbWFpbDtcbn1cblxuVXNlci5yZWdpc3RlciA9IGZ1bmN0aW9uKG5hbWUsIGVtYWlsKSB7XG4gIHJldHVybiBuZXcgVXNlcihuYW1lLCBlbWFpbCk7XG59O1xuXG5Vc2VyLnByb3RvdHlwZS5jaGFuZ2VFbWFpbCA9IGZ1bmN0aW9uKG5ld19tYWlsKSB7XG4gIHRoaXMuZW1haWwgPSBuZXdfbWFpbDtcbn07XG5cbi8vIDwgZS5nKSAyOiBBdWRpb0N0cmwg7IOd7ISx7J6QIO2VqOyImCDinqQg7YG0656Y7IqkIOusuOuylSDtmZzsmqkgPlxuXG5cbi8vIFVzZXJcbi8vIHVzZXJzID0gWyBuZXcgVXNlciwgbmV3IFVzZXIsIG5ldyBVc2VyIF1cbi8vIHVzZXJzLmZpbmQodXNlcj0+dXNlci5pc0FkbWluKS5uYW1lXG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIEVDTUFTY3JpcHQyMDE1IE1vZHVsZXMgLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8gQ29tbW9uSlMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gaHR0cDovL3d3dy5jb21tb25qcy5vcmcvXG4vLyBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBBTUQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBodHRwOi8vcmVxdWlyZWpzLm9yZy9kb2NzL3doeWFtZC5odG1sI2FtZFxuLy8gaHR0cHM6Ly9hZGR5b3NtYW5pLmNvbS9yZXNvdXJjZXMvZXNzZW50aWFsanNkZXNpZ25wYXR0ZXJucy9ib29rLyNtb2R1bGFyamF2YXNjcmlwdFxuLy8gZGVmaW5lKCdtb2R1bGUnLFtdLGZ1bmN0aW9uKCl7fSk7XG5cbi8vIFVNRCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS91bWRqcy91bWRcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS91bWRqcy91bWQvYmxvYi9tYXN0ZXIvdGVtcGxhdGVzL2pxdWVyeVBsdWdpbi5qc1xuKGZ1bmN0aW9uIChmYWN0b3J5KSB7XG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICAvLyBOb2RlL0NvbW1vbkpTXG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQnJvd3NlciBnbG9iYWxzXG4gICAgfVxufShmdW5jdGlvbigpe30pKTtcblxuLy8gRVMyMDE1XG4vLyBpbmNsdWRlIH4gZnJvbVxuLy8gZXhwb3J0XG4vLyBkZWZhdWx0c1xuXG4vLyBleHBvcnQgbGV0IG1vZHVsZV9wcm9wID0gJyc7XG4vLyBleHBvcnQgZm4gPSBmdW5jdGlvbigpIHt9O1xuLy8gZXhwb3J0IGNsYXNzIENsYXNzTmFtZSB7fTtcbi8vIGV4cG9ydCBkZWZhdWx0IENsYXNzTmFtZTtcblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gRGVzdHJ1Y3R1cmluZyAvL1xuLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLyA8IGUuZykgMTog67iU66GdIOyKpOy9lO2UhCDrgrTsl5DshJwg65SU7Iqk7Yq465+t7LOQ66eBIO2ZnOyaqSA+XG5sZXQgcHJvZHVjdCA9IHtcbiAgbmFtZSAgICAgICAgICAgOiAnVFYnLFxuICBtYWtlciAgICAgICAgICA6ICdMRycsXG4gIGZlYXR1cmVzICAgICAgIDogWyAnVGltZSBSZWNvZGluZycsICdTaGFyaW5nIFNjcmVlbicsICdTcGVlY2ggUmVjb2duaXRpb24nIF0sXG4gIHByb2R1Y3Rpb25ZZWFyIDogMjAxN1xufTtcblxue1xuICBsZXQgbmFtZSAgICAgICAgICAgPSBwcm9kdWN0Lm5hbWU7XG4gIGxldCBtYWtlciAgICAgICAgICA9IHByb2R1Y3QubWFrZXI7XG4gIGxldCBmZWF0dXJlcyAgICAgICA9IHByb2R1Y3QuZmVhdHVyZXM7XG4gIGxldCBwcm9kdWN0aW9uWWVhciA9IHByb2R1Y3QucHJvZHVjdGlvblllYXI7XG59XG5cbi8vIDwgZS5nKSAyOiDtlajsiJgg66ek6rCc67OA7IiY7JeQIOuUlOyKpO2KuOufreyzkOungSDtmZzsmqkgPlxuZnVuY3Rpb24gZ3JlZXQocGVyc29uKSB7XG4gIGxldCBuYW1lICAgID0gcGVyc29uLm5hbWU7XG4gIGxldCBtZXNzYWdlID0gcGVyc29uLm1lc3NhZ2U7XG4gIHJldHVybiAnSGkhIElcXCdtICcgKyBuYW1lICsgJy4gVG9kYXkgaXMgJyArIG1lc3NhZ2U7XG59XG5cbmdyZWV0KHtcbiAgbmFtZTogJ0ppbiBIbycsXG4gIGFnZTogMjIsXG4gIHJlc3VsdHM6IFsgJ3Bob25lJywgJ25vdGVib29rJyBdLFxuICBjb3VudDogMzEsXG4gIG1lc3NhZ2U6ICdHb29kIERheSEgOi0pJ1xufSk7XG5cbi8vIDwgZS5nKSAzOiDrqqjrk4gg66Gc65OcIOyLnCwg7ZWE7JqU7ZWcIOuqqOuTiCDsho3shLHrp4wg65SU7Iqk7Yq465+t7LOQ66eBIO2ZnOyaqSA+XG4vLyBpbXBvcnQgeyDsho3shLExLCDsho3shLEyIH0gZnJvbSAn66qo65OIJ1xuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBNb2R1bGUgQnVuZGxpbmcgd2l0aCBXZWJwYWNrIC8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vIHdlYnBhY2subWQg7LC46rOgXG5cblxuXG5cbi8vLy8vLy8vLy8vLy9cbi8vIFByb21pc2UgLy9cbi8vLy8vLy8vLy8vLy9cblxuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIGF4aW9z64qUIO2UhOuhnOuvuOyKpCDquLDrsJggQWpheCDrnbzsnbTruIzrn6zrpqxcbi8vIGxldCBwcm9taXNlID0gYXhpb3MuZ2V0KCcvZW1wbG95ZWVzJyk7XG4vLyBwcm9taXNlLnRoZW4oZnVuY3Rpb24oZGF0YSkge30pO1xuLy8gcHJvbWlzZS5jYXRjaChmdW5jdGlvbihlcnJvcikge30pO1xuXG5cblxuXG4vLy8vLy8vLy8vXG4vLyBTZXRzIC8vXG4vLy8vLy8vLy8vXG5cbi8vIG5ldyBTZXQoKVxuLy8gLmFkZFxuLy8gLmhhc1xuLy8gLmRlbGV0ZVxuLy8gLmNsZWFyXG4vLyAuc2l6ZVxuLy8gLnZhbHVlc1xuLy8gLmZvckVhY2hcbi8vIFsuLi4obmV3IFNldCgnY3NzJywgJ2phdmFzY3JpcHQnLCAndnVlJykpXS5maWx0ZXIoaXRlbT0+aXRlbS5sZW5ndGg9PT0zKTtcblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vL1xuLy8gR2VuZXJhdG9ycyAvL1xuLy8vLy8vLy8vLy8vLy8vL1xuIl19