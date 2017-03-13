// 1. 전역 함수 : 전역에 함수를 만듬
function checkType_1(data){
  return Object.prototype.toString.call(data);
}
// 2. namespace : 각각 개체에 메서드를 만듬

// 3. 모 듈 패 턴 (클로저 및  IIFE 활용!) (함수 활용?)
var moduleMaker = function() {
  // 모듈 정의
  var checkType = function (data) {
    return Object.prototype.toString.call(data).slice(8,-1).toLowerCase();
  };
  var module = function(data) {
    console.log('checktype:',checkType(data));
  };
  // 정의된 모듈 내보내기
  return module;
};

var module = moduleMaker();

// 3.1 IIFE 패턴

var module_2 = (function(global) {
  // 모듈 정의
  var checkType = function (data) {
    return Object.prototype.toString.call(data).slice(8,-1).toLowerCase();
  };
  var module = function(data) {
    console.log('checktype:',checkType(data));
  };
  // 정의된 모듈 내보내기
  return module;
}(window));


var dom = (function(global){
  'use strict';

  // 보호됨
  var document, toString, query, queryAll, checkType, insString;
  document = global.document;
  toString = Object.prototype.toString;

  // 외부 접근 불가 코드
  checkType = function(data){
    return toString.call(data).slice(8,-1).toLowerCase();
  };

}(window));


//--------------------------------

//메서드 빌려 쓰기

function assignArgs(a, b){
  console.log('this:',this);
  console.log('arguments:',arguments);
  console.log(arguments.forEach);

  Array.prototype.forEach.call(arguments, function(arg, i){
    console.log('i:',i);
    console.log('arg:',arg);
  });
};


human.walk.bind(bird);
var bird_walk = human.walk.bind(bird);
