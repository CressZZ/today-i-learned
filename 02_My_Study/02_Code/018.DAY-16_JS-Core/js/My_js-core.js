var num, str, boo, fnc, arr, obj;

num = 999;
str = ' ' +  num;
boo = false;

fnc = function(){};
arr = [];
obj = {}; // singleton ??

// 함수 값 (리터럴)을 참조한 변수는 변수에 실행 연산자 ()를 붙임으로서 실행한다.
function callMe() {
  console.log('call me', this);
}

var fn = callMe;
var fnc = fn;
var fun = fnc;
// fn(), fnc(), fun()을 실행하면 동일한 함수가 실행된다.



//객체의 속성(document라는 객체의 body라는 속성(Element))(를 참조한? 변수)에도 함수 값을 할당

var body = document.body;



//함수 선언
var mouseOverAction = function (){
  console.log('mouse over on body');
};

// fun이 참조한 함수가 객체의 속성에 참조
body.onmouseover = mouseOverAction; //실행의 형태 ()를 사용하면 그냥 한번 실행되고 만다.



// 키보드 이벤트 핸들링
body.onkeyup = function pressKeyEvent() {
  var evt = evt || window.event;
  console.log('pressed key:', evt.keyCode);
}

/*
자바스크립트의 대부분은 객체!!!이다.
단, Null, Undefined는 객체가 아니다.!!!!

객체(object)는 객체를 만!든! 생성자(constructor)가 있다.
그러니까...
숫자를 만든건 Number()생성자 함수
문자를 만든건 String()생서자 함수
불린을 만든건 Boolean()생성자 함수
배열을 만든건 Array()생성자 함수
함수를 만든건 Function()생성자 함수
객체를 만든건 Object()생성자 함수

내장된 생성자 함수를 통해 만들어지는 객체의 경우는
new 생성자 함수() 대신 `리터럴` 표현식 사용 권장
*/

// 배열 객체가 소유한 함수(객체의 메서드)
// .concat()
// .pop()
// .push()
// .unshift()
// .splice()
// .join()


//연관 배열 (객체와 비슷 하지만...배열인거..잘 안쓰는 듯 하다. )

var people = [];

people['name'] = 'Cress';
people['gender'] = 'mail';
console.log(people);

//각 요소에 접근 방법은
//1. 각괄호 [] 쓰는것
//2. .을 쓰는 것
console.log(people['name']);
console.log(people.name);


//객체....연관 배열과 비교?

var people_obj = {
  name:'cress',
  gender:'mail',
  demension: {
    height: 188,
    weight: '85kg'
  }
};
console.log(people_obj);

// typeof는 [ 함수 ] 가 아니다.
// typeof는 어떤 데이터 유형을 체크할 때 문제가 발생하나? null, array
