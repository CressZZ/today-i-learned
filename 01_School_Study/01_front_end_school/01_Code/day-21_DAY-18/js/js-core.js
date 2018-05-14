function showMeTheMonery(){
  console.log('showMeTheMoney');
}

var getSomeMoney = function showAnyMoney(arg){
  console.log('getSomeMoney? showAnyMoney?');
  showAnyMoney('inner excution getSomeMoney()');
};


//영역 (scope)
//블록문 ({}) : 별도의 영역을 가져야 하나, javascript에서는 가지지 않는다.
//if, while, for 등등

{
  var anyone = '애니원' // 블록{}문 안에 있으나, 전역 변수로 처리
}
console.log('anyone:', anyone);
//if문
if (some_people) {
  var some_people = '행복한 사람들';
} else {
  some_people = '행복하지 않은 사람들';
}

console.log('some_people:', some_people); // ??


//for문
for (var link, links = document.querySelectorAll('a'), i = links.length-1; i>=0; i--){
  link = links[i]
}




//
// goKingdom();
// var king = '왕';
// var goKingdom = function(){...};
// // awayKingdom();
// function awayKingdom(){...};


// 함수 선언 VS 함수 표현
// 2개 방식의 차이점을 기술하시오.
// hint. 호이스팅 현상, 할당(대입)은 런타임 과정에서 실행
// 함수를 선언하면 선언문은 호이스팅으로 인하여 함수 이름이 지역 내 제일 위로 올라가고,
// 함수를 표현하면 함수값 (내용)까지 호이스팅 된다.

// 함수 확장
// 매개변수 (parameter)
// 전달인자 (arguments)

// 함수 정의 (매개변수 설정)<- 확장
function goto(where){
  if(where) {//오류}
  console.log('go to' + where);
}
}

// 함수 실행
goto('school'); // 'go to School'
goto('home');
goto('pub');
goto('samgyeupsal');
goto('sool');

function sum(){
  console.log('argus:',arguments);
  // var sum = 0;
  for (i in arguments){
    var sum = sum + arguments[i];
  }
  return sum;
}

var test = sum(2,3,4);
console.log(test);


// 느슨한 javaScript코드 실행 영역
var temp = '임시 정부';

// 별도의 영역(함수) 생성
function myScope(){
  //엄격한 JavaScript 코드 실행 영역
  'use strict';
  console.log(this);
  // 엄격한 모드에서 변수 선언시에 var 키워드를 사용하지 않으면 오류.
}
// 엄격한 모드에서 this는 함수를 실행하는 컨텍스트 객체가 암시적일 때 undefined를 반환한다.

myScope(); // -> window.myScope 로 바꿔 주어야 함.
window.myScope()
