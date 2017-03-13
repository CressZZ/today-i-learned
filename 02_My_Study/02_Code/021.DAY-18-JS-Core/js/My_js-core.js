// 함수 선언문
function test_a(){
  console.log('test_a');
}

// 함수 표현식
// 변수에 함수 값을 참조하는 함수 표현식에서는 세미콜론을 반드시 넣어 주세요!
var fn_b = function test_b(arg){
  console.log("fn_b? test_b?");
  // test_b('inner execution fn_b()'); // 무한루프
};

fn_b();
// test_b(); // 어라? 실행이 안되네 ㅋㅋㅋㅋ 이거 왜 몰랐지?>

//-------------------------------------------------------------------//


// 영역 (scope)
// 블록문에서 별도의 영역을 가져야 하나 javascript는 그런거 없다. (if, while, for등등)
{
  var anyone = '애니원;' //블록문 안에 있으나, 전역변수로 처리함
}

console.log('anyone:',anyone); // '애니원'

//if문
var some_people;

if (some_people){
  some_people = 'a';
} else{
  some_people = 'b';
}
console.log('some_people:',some_people); //  b, some_people은 undefined 이기 때문이다.


//for문
// 원래 문장
for (var i = document.querySelectorAll('a').length - 1; i>=0; i--){
  console.log(document.querySelectorAll('a')[i]);
}


console.log('%c1 ------------------------------', 'color: #3d9a21');

// 원래 문장 -> 호이스팅 처리
var links = document.querySelectorAll('a'),
    link,
    i = links.length - 1 ;

for (;i >= 0;){
  link = links[i];
  i--;
  console.log('link:',link);
  console.log('i:',i);
}
console.log('%c2 ------------------------------', 'color: #3d9a21');

// 원래 문자 -> 호이스팅 처리 (2)
var links = document.querySelectorAll('a'),
    link = null,
    i = links.length - 1 ;

for (;link=links[i];){
  console.log('link:',link);
  i--;
}

//------------------------------------------------//
// 함수 선언문과 함수 표현식은
// 호이스팅과 어떤 연관이?

// 전역과 구분되는 지역 공간
// 함수를정의한다.
// 함수의 블록문은 상위 영역과 구분되는 별도의 영역을 생성한다.

// 전역변수 선언
var global_a = true;

// 함수 선언문
function fn_local(){
  var local = true;
  console.log('local:',local);
}

fn_local();

console.log('global:',global_a);
// console.log('local:',local);

//**Ben Cherry’s excellent article 글을 인용하면: “함수 선언과 함수 변수(?)들은 코드의 위치와 상관없이, 자바스크립트 인터프리터에 의해 항상 자신의 자바스크립트 Scope에서 맨 첫 라인 부분으로 움직인다”

// 함수 선언과 함수 표현의 차이점

// 함수 선언 function~~
// 함수 선언의 경우 함수명이 Scope맨 윗부분으로 이동한다.
//**Ben Cherry’s excellent article 글을 인용하면: “함수 선언과 함수 변수(?)들은 코드의 위치와 상관없이, 자바스크립트 인터프리터에 의해 항상 자신의 자바스크립트 Scope에서 맨 첫 라인 부분으로 움직인다”


// 함수 표현 var ~~~ =  function ~~~
// 함수 표현의 경우 왼쪽 부부은 (var bar)은 변수 선언이다. 변수 선언은 Scope의 상위 부분으로 이동하지만, 할당 부분(= 오른쪽 함수 부분)은 이동하지 않는다

// 잘못 위치한 함수 선언은 혼동을 준다. 그리고 변수에 함수 표현을 할당할 수 없는 몇몇 상황이 있다. 그러나 만약 여러분이 함수 선언을 이용해야만 한다면 그 함수가 속하는 Scope의 맨 윗부분에 함수를 위치시키는 것이 혼란을 방지할 수 있다. 난 결코 if문 안에 함수 선언을 하지 않을 것이다.

//-----------------------------------------------------------------------------
//함수 정의 (매개변수 설정) <- 확장
function goto(where){
  if(typeof where !== 'string'){return console.error('문자열 쓰라고');}
  console.log('go to' + where);
}

//함수 실행
// function sum(a, b){
//   if (typeof a !== 'number' || typeof b !== 'number'){
//     throw new Error('숫자 쓰라고');
//   }
//   console.log('a+b:',a+b);
// }
//
// function sum (a, b, c){
//   console.log(a+b+c);
// }

function sum(){
  var total = null,
      i = arguments.length - 1;
  for (; arguments[i]; ){
    total += arguments[i];
    i--;
  }
  console.log('total:',total);
}
 //-----------------------------------------------
 // use strict
 function usingStrict(){
   'use strict'
   console.log(this); //실행할려면 window.usingStrict
 }

 function noStrict(){
   console.log(this);
 }

 //------------------------------------------

 //Closure
 // 일급객체의 특징은 함수 내부에 함수를 인자로 전달할 수 있다.
 // 함수 밖으로 함수를 반환할 수 있다.

// 함수 내부에 함수를 인자로 전달
 function test_c(fn){
   window.setTimeout(function(){
     console.log("2초 지났음");
     if(typeof fn === 'function'){
       fn();
     }
   },2000);
 }

 test_c(function(){console.log("이함수는 test_c내부에 전달 되었다.아마 2초뒤에 실행되겠지");})


// 함수안에서 함수 밖으로 보낸다.
function outerFn(){
  var _a = '영진';
  function innerFn(){
    console.log('inner가 실행되었다.');
    console.log('_a:',_a);
  }
  return innerFn;
}

var action = outerFn();
// innerFn(); //오류남...접근 방법은 action()으로 들어가야 하고, innerFn에 직접 접근은 불가능 함..
