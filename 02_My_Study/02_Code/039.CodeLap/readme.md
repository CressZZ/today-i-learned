# 자바스크립트 ES6 + ES7
## ES6를 배워 봅시다.

- String
- Template
- Array
- RegExp
- Generator
- Class
- Symbol
- Symvol property
- Symbol method
- Map
- WeakMap
- set
- Weak Set
- Proxy
- Proxy trap
- Relflect
- ArrayBuffer
- TypedArray
- DataView
- **Promise**

## 김영보 선생님 책들
- 몰입! 자바스크립트
- ECMAS식ript 6
- 정규 표현식

## 강의 방향
- 기본개념 설명
- 개념 이해가 중요
    - 전체 그림을 그리세요
- ES5와 ES6연계 설명
- **절대로 외우지 마세요!**

## ES6 스펙
- 스펙 정식 명칭
  - ECMAScript 2015 Language Spec.
  - ECMA-262 6차 Edition
- 스펙 규모
  - ES7 586페이지 2016.06
  - ES6 566페이지 2015.06
  - ES5 258페이지 2011.06

## 용어기준
- **Built-in 오브젝트**
  - Function, Objec, Array등
- **object**
  - 빌트인 오브젝트로 생성한 오브젝트
  - function(), `[]`, {}
- **인스턴스**
  - new연산자로 생성한 오브젝트
  - new Book();
- **ES6로 오면 new연산자 쓰는 경우가 태반**
```js
  // 'Built-in 오브젝트'
  // 호출할 수 없으면 오브젝트라고 하지 않는다.
  Array.isArray();
  Array.prototype forEach();

  // 'object'
  // 만약 이렇게 하면 위에 있는 것중 isArray빼고 prototype만 가져온다.!!!
  let es6 = [];

  // '인스턴스'
  // 위에처럼 만드는 경우도 있지만,
  // 아래처럼 new로 만드는 경우도 있는데, 위에랑 똑같다
  let es6 = new Array();

  // 그럼 우린 new는 어디쓰냐?
  // function에서 많이 쓴다.
  // 빌트인에서는 위에랑 아래랑 비슷하다.
  let Sales = function(){}
  Sales.prototype.get = function(){}
  let test = new Sales
```
- property key와 name차이
  - property name : **'String Value'**
  - property key : **'String value'** + **'Symbole value'**
  - ES7 스펙
- 함수, 메서드
  - Array.isArray() //함수 (ES6에서는 정적 메서드)
  - Array.prototype.forEach() //메서드
  - ES5: 이 기준으로 구분
  - ES6:function, method, static method

```js
  {book : 12} //라고 했을 때,
  {"book": 12} // es5는 이처럼 해석 했는데 지금은 아니다. Symbole이 생겼다. 기본적으로 key값은 string이여야 한다.
```
> Properties are identified using key values. A property key value is either an ECMAScript String value or a Symbol value. A property name is a property key thia is a String value.

- 용어 사용에 있어 강좌 기준
  - 직역으로 인한 문제
  - 뉘앙스 차이
  - 영어 발음 사용
  - 단어가 아닌 개념 중심으로 접근

## let, const

## var 키워드
- 변수 선언 및 구분
  - 로컬(지역) 변수
  - 글로벌(전역) 변수
- 구분 목적
  - 스코프(scope)
  - 자신의 영역에서만 사용
  - 공용에 따른 문제 방지

```js

//"use strict"

//1. 글로벌 오브잭트에 one 변수 선언
one = 100;

function get(){
  one = 300;
  console.log("함수:", one)
}
get();
console.log("글로벌:", one)

// 1. get() 에서 one=300을 실행했을때
//  - one이 지역변수가 아니므로
//  - 함수 밖에서 검색
// 2. 글로벌 오브젝트에 one 존재, 300설정
// 3. durlRkwlsms answp djqtdma
// 4.의도적으로 클로저 사용 가능서 있음
// 5. 문제는, 모든 프로그램에서 공유하는 글로벌 변수 라는 것
```

## 글로벌 변수 오해
- 글로벌 오브젝트도 스코프
- var one
  - var 키워드로 변수 선언이 정상
- var 키워드를 작성하지 않으면
  - 글로벌 변수로 간주
  - 장점도 있지만
  - 객체지향 관점에서 보면 이상한 모습

## use strict 사용
- ES5에서 도입
- 함수 안에서 글로벌 변수 선언 방지
  - 근본적인 접근은 아님
- es6
  - "use strict"가 디폴트 환경
  - 전체는 아님
-  node.js에서 ES6사용
  - "use strict" 작성

## let변수
- var 문제 해결
- let sports = "스포츠"
  - 스코프를 가진 변수 선언(let 자체로 범위(scope)를 가진다)
- 스코프 범위
  - 블록`{}`, 문장, 표현식
- 블록`{}`안의 블록`{}`도 스코프
  - ㄴ블록 밖의 변수는 스코프가 다름
  - 값이 대체 되지 않음
- let변수는 호이스팅(hostig)되지 않음
- **굳이 이렇게 스코프를 많이 만들 필요가 있을까? 퍼포먼스가 떨어지지는 않을까?**
  - 강사님이 처음에 그런 새각을 했다.
  - 원래는 function단위가 하나의 스코프였는데,
  - 너무 많아지는거 아닌가?
  - 지금도 그렇게 생각하신다고 한다.


## let 작성
- `Syntax: name1[=value1][,name2[=value2]]`
- name1, name2에 변수 이름 작성
  - 식별자로 사용
- value1, value2에 초깃값 작성
  - 표현식 작성 가능, 평가 결과 사용
  - 값을 할당하지 않고 변수 선언만 가능
- Temporal dead zone
  - 같은 스코프에 같은 이름 선언 불가

```js
"use strict";
let book;
//1. 값을 할당하지 않고 변수만 선언
//2. 초기값으로 undefined가 할당됨

let sports = "축구"
// 1. sports변수를 선언하고 초깃값 할당

sports = "농구"
// 1. 글로벌 변수에 설정됨
// 2. 바로 위의 sports변수 값 변경


// let sports = "배고"
// 1. 앞에서 let sports를 선언 했으므로
// 2. SyntaxError 발생, 그래서 주석 처리

let one = 1, onetwo=2, three;
// 1.콤마로 구분하여 다수를 선언한 형태

 // let four = 4, let five = 5;
 // 1.콤마 사용 : 처음 한 번만 let작성
 // 2. syntax애러

 // let six = 6, var sevet = 6;
 // 1. 컴마 사용 : let과 var 같이 사용 부락
 // 2. syntax애러
```

## 블록 스코프
- let사용의 가장 큰 목적
- 블록 기준
  - function(){코드}
  - if(a===1){코드}
```js
let sports = "축구";
if(sports){
  let sports = "농구"
  console.log("블록:", sports);
};
console.log("글로벌", sports)
```

1. if(sports){}에 중괄호 {}작성
2. 블록{}안과 밖에 let sports작성
  - 스코프가 다르므로 별개로 인식
3. 블록 밖에서 블록 안의 sports에 접근 불가
  - private변수로 사용가능
4. 콘솔에 "블록":"농구"

```js
var music = "음악"
console.log(this.music)
// 1.현재 위치는 글로벌 오브젝트
// 2. var 키워드로 변수 선언
// 3. this가 글로벌 오브젝트 참조

let sports = "축구"
console.log(sports)
// 1. let키워드로 변수 선언
// 2. console에 "축구"출력

console.log(this.sports)
// 1. 글로벌 오브젝트의 let 변수를
// 2. this로 악세스
// - undefined반환

//****** console.log()결과
// var 변수는 Global에 표시
// let 변수는 Script영역에 표시
// *************************
```

## function
- functoin(){}도 블록 스코프
- function 안과 밖에
  - 같은 이름의 let변수 선언 가능
  - 스코프가 다르기 때문에 가능
- function 밖의 let변수를
  - function안에서 사용 가능
  - var와 같은 개념으로 사용
```js
//클래식
//축구
//this:undefined
//음악:클래식
//스포츠:축구
// error (undefined.get())
let sports = "축구"
let music = "재즈"

function get (){
  let music = "클래식"
  console.log(music)
  console.log(sports)
  console.log("this:", this.music)
}
window.get()
get()

```

1. window.get()형태로 호출되면
  - this가 window 참조
  - music 변수가 window에 조재하지 않음
  - 따라서 undefined 출력
2. ES6에서
  - get()앞에 오브젝트를 작성하지 않고
  - get()형태로 호출하면
  - this참조 값이undefined로설정됨
  - undefined.get()형태가 되어 애러 발생


## try-catch
- try-catch도 블록 기준

```js
let sports = "축구"
try {

}
```

## switch-case
- 얘도 블록 기준

## 호이스팅
- let변수는 호이스팅 되지 않음
- let변수 앞에서 변수 사용 불가
```js
window.onload = function(){
  console.log(sports)
  var sports = "스포츠"

  console.log("music")
  let music = "음악"
}

```

## for(), var
- for()문이 반복 될때 마다 블록이 있음

```js
var node = document.querySelector("ul")
for (var k=0; k<node.children.length; k++){
  var el = node.children[k];
  // onclick 을 실행하기쩐까지는 콜백 함수가 발생하지 않는다.
  el.onclick = function(event){
    event.target.style.backgroundColor = "yellow"
    console.log(k)
  }
}
```

```js
var node = document.querySelector("ul")
for (let k=0; k<node.children.length; k++){
  var el = node.children[k];
  // onclick 을 실행하기쩐까지는 콜백 함수가 발생하지 않는다.
  // *** k값이 유지된다.....
  el.onclick = function(event){
    event.target.style.backgroundColor = "yellow"
    console.log(k)
  }
}
```

## const
- `Syntax: name1[=value1][,name2[=value2]]`
- name1에 변수 이름 작성, 식별자로 사용
- value1, value2에 초깃값 작성
  - 반드시 값 작성, 변수 선언만 불가!
  - 표현식 작성 가능, 평가 결과 사용
- 값을 바꿀 수 없는 변수 선언
  - javascript에서 상수는 대문자 사용이 관례
  - const 변수는 상수이지만 용도에 차이 있음
  - **값을 바꾸지 않겠다라는 의도!**
- 스코프에 같은 이름 선언 불가

```js
const obj = {language : "한글 "}
try{
  obj = {};

}catch(e){
  console.log("const 재할당 불가 ")
}

obj.language = "영어"
console.log(obj.language)//실행됨
```


## Arrow function
- Arrow 사전적 의미
  - 화살, 화살표 =>
- 코드 형태
  - (param) => {함수코드}

## Lambda
- Lambda function
  - 함수 이름이 없는 익며/무명 함수
  - function(){}형태
- Lisp 언어가 원조, 1598년
- 대부분 언어에서 지원

## Syntax
- (param) => {코드}
- param => {코드}
- () => {코드}
  - 파라미터 없을때
- (param) => 표현식
- (param) => ({key:val})
- (param1, param2,,,paramN) = >{코드}
- .
- .
- .


## Arrow 함수
- Arrow 함수 비교
- ES5, ES6 비교
- {}생략
- 파라미터가 하나일때
- 파라미터가 없을때
- 함수코드가 없을때
- {key:value} return
- rest 파라미터
- **new 연산자를 사용할 수 없다.**
- **arguments를 사용할 수 없다.(arguments대신 ...rest를 사용한다.)**
## arrow와 this
- 인스턴스와 오브젝트에서 this참조가 다름
- 사용환경에 따라 arrow 함수 선택 사용
- 인스턴스에서 사용
```js
let Sports = function(){
  this.count = 20;
}
Sports.prototype = {
  plus: function(){
    this.count += 1
  },
  get function(){
    seTimeout(function(){
      console.log(this===window)
      console.log(this.plus)
    }, 1000)
  }
}
```


- arrow()사용
```js

```
- **prototype에 arrow 함수 작성(prototype에서 사용한 this는 인스턴스를 참조 하는게 아니라, window를 참조 한다. / 즉, prototype에는 arrow함수를 쓰지 말아라)**
```js
let Sports = function(){
  this.count = 20
}
Sports.prototype - {
  add:(){
    this.count +=1

  }
}
let newSports - new Sports
console.log(newSports.count)

newSports.add();
console.log(newSports.count)
console.log(window.count)
```



## lteration(반복을 위한 규약)
- 이테레이션
  - 반복을 의미
  - 반복을 위한 프로토콜을 갖고 있음
- 프로토콜(protocol)
  - 통신 프로토콜이 연상 됨
  - 송수신 모두 약속된 기준과 방법으로 통신
  - 이를 통신 프로토콜(규약)이라고 함
  - 즉, `프로토콜은 규약`
>세게적으로 통신에 대한 규약을 만들어 논다. 그중에 하나가 http통신이다. 7단계에 대한 통신규약을 정의 해 놓았다.

- 이터레이션(반복), Array가 연상됨
  - 배영ㄹ을 반복하기 위해서는
  - 배열이 반복할 수 있는 오브젝트이어야 하고
  - `반복을 위한 메서드를 갖고 있어야 한다.`
  - 이것이 이터레이션 프로토콜 이다.
- 이터레이션 구성
  - 이터레이블(iterable)프로토콜 (반복할 수 있는 프로토콜)
  - 이터레이터(iterator)프로토콜 (제어할 수 있는 프로토콜(메서드...))

## iterable protocol
- 이터러블 프로토콜
  - 오브젝트의 반복 동작을 정의
- 빌트인 오브젝트는
  - `빌트인 오브젝트는! 디폴트로 이터러블 프로토콜을 갖고 있음`
  - 그래서 반복할 수 있음
  - `String`, `Array`, `TypedArray`(바이트 개념이 들어간다.), `Map`, `Set`
  - `Arguments`, `DOM NodeList`
  > `DOM NodeList`의 경우는 최근에 많이 편해 졌다.
- 이터러블 오브젝트
  - 이터러블 프로토콜이 설정된 오브젝트

## iterable protocol
- 이터러블 오브젝트 조건
  - Symbol.iterator()가 있어야 함
  - 빌트인 이터러블 오브젝트에는 디폴트로 설정됨
  - 자체 오브젝트에는 없지만
  - 상속 받은 prototype chain에 있어도 됨
  - 즉, Array를 상속받으면 이터러블 오브젝트가 됨
- 프로토콜이 규약이므로
  - 개발자 코드로 이터러블 프로토콜 정의 가능
```js
**실행 결과**
// function values(){[native code]}
// undefined
let arrayObj = [];
result = arrayObj[Symbol.iterator]
console.log(result)

let objectObj = {};
result = objectObj[Symbol.iterator]
console.log(result)
```
- for0in문으로 열거할 수 있지만
- 열거는 for-in문의 자체 기능


## iterator protocol
- 이터레이터 프로토콜은
  - 오브젝트의 값을 순서로 처리할 수 있는 방법
  - 이방법은 오브젝트에 있는 next()로 구현
  - 따라서 next()오브젝트가 있으면
  - 이터레이터 프로토콜이 적용된것

```js
let arrayObj = [1,2,3]
let itratorObj = arrayObj[Symbol.iterator]();

console.log(typeof iteratorObj)
console.log(iteratorObj.next)

let result - iteratorObj.next();
console.log(iteratorObj.next();)


```

## Spread
Syntax: [...iterable]
- 이터러블 오브젝트를 하나씩 전개
- `[...iterable]`
  - 점3개를 찍음
  - 이어서 이터러블 오브젝트 작성

## Array Spread
- `[]`안에 spread대상 배열 작성
- Array spread 작성 형태
- let two = [21, 22]
- let five = [51, 52]
- let one = [11, ...tow, 12, ...five]
- **작성한 위치에 배열 엘리먼트를 분리 (전개)**
- ...에 연결하여 array작성

## Array Spread 용여
- 분리 : 배열 엘리먼트를 분리
- 펼침 : 배열 엘리먼트를 펼침
  - 단지 펼치는 뉘앙스
- 전개 : 어떤 활동의 결과로 펼처짐
- 기능/개념적으로 분리, 전개가 어울림
- 본 강좌에서는 spread로 통일

## String spred
- `[]`에 spread대상 문자열 작성


## push(...spread)

```js
let two [21,22]
let five [51, 52]
tow.push(...five)
console.log(two)
```
1. two와 five에 배열 할당
2. five배열의 엘리먼트를 전개하여 two배열 끝에 첨부



## Object spread

```js
```

## function spread
- 호출하는 함수의 파라미터에 spread작성
  - function get (one, two, three){};
  - const valuew = [10,20,30]
  - get(...values)
- 함수를 호출하기 전에 엘리먼트 단위로 전개
- 각 엘리먼트 값을 파라미터로 넘겨줌
- 호출받는 함수의 파라미터 이름에 매칭

```js
const value = [10, 20, 30]
get(...value) // 60

function get (one, two, three){
  console.log(one + two + three)
}
```
```js
const values = {name :  123}
get(...value) // error,  object는 리터러블이 아니다.
```

## rest파라미터
Syntax: function(param, paramN, ...rest)
- 작성 방법
  - 호출받는 function()파라미터에
  - ... 작성
  - ... 에 이어서 파라미터 이름 작성
  - function(one, ...rest){} 형태
  - 하나 이상의 파라미터를 배열로 묶음
```js
get(...[1,2,3]) // 실행결과 1 , 1만나옴
function get (one){
  console.log(one)
}
```

```js
function get (...rest){
  console.log(rest)
  console.log( Array.isAray(rest))
}
get(...[1,2,3])

```
```js
function get (one, ...rest){
  console.log(one)
  console.log(rest)
}
get(...[1,2,3])
```

## Array-like
- **배열처럼 이터러블 가능한 오브젝트**
  - `let one = {0: value, 1:value, length: 2}` (배열처럼 돌리겠다.)
  - 프로퍼티 key값이 `0부터` 순서 값!!!
  - 전체 프로퍼티 수를 length로 작성
- **Object 타입이지만 for()문으로 전개 가능**

```js
//array-like 형태
let values={0:"zero", 1:"one", 2:"two", length:3}

// for in문은 안어울린다. length 프로퍼티도 나온다.
for (var key in values){
  console.log(key, ':', values[key])
}

// for문은 length프로퍼티가 나오지 않는다
for (var k = 0 ; k < values.length; k++){
  console.log(values[k])
}

```

```js
//array-like 전개 방법
let values = {10: "ten", zoo:"동물원", 2:"two", length:3}

// 4개가 나오기는 하는데
// 작성 순서가 아니라 숫자, 영문, length순서로 전개 된다.
// 이것도 하나의 기준이지만, 작성 순서가 아닌 것이 걸림
// 결과 : `2:two 10:ten zoo:동물원 length:3`
for (var key in values){
  console.log(key, ':', values[key])
}

// undefined, undefined, two
// k값을 프로퍼티 key로 읽음
// key값 0과 1이 없고, 2는 있으므로 two출력
for (var k = 0 ; k < values.length; k++){
  console.log(values[k])
}
```


```js
//arguments
function get(){
  // 폭이 넘쳐서 짧은 변수 이름 사용
  let args = arguments;
  console.log(Array.isArray(args)) //false
  for (let key in args){
    console.log(key, ":", args[dey])
  }
  for (let k=0; k<args.length; k++){
    console.log(k, ":", args[k])
  }
}

```

## rest, arguments차이
- Arguments오브젝트
  - 파라미터 작성에 관계 없이 전체 설정
  - Array-like이므로 배열 메소드 사용불가
    (for문을 사용하는 건 유사배열이니까 쓰는 거지 Array.prototype의 메서드를 쓰는 것이 아니다.)
  - __proto__에 Object첨부
- rest 파라미터
  - 나머지 파라미터만 설정
  - Array오브젝트이므로 배열 메서드 사용가능
  - __proto__에 Array 첨부

## destructuring
- Destructuring assignment(할당)
- 코드 형태
  - let one, two, three
  - [one, two, three] = [1,2,3]
  - one에 1, two에 2, three에 3할당
- 사전적 의미: ~구조를 파괴하다.
  - 파괴, 해체는 있는 것이 없어지는 뉘앙스
  - 이 관점에는 변경되지 않음
  - 이 관점에서 보면 분할/불니가 더 가까움
  - 본 강좌에서는 "분할 할당"을 사용

## Array 분할
- 배열의 엘리먼트를 분활하여 할당
- 사용형태
  - let one, two, three
  - [one, two, three] = [1,2,3]
  - one에 1, tow에2, three에3dmf gkfekd

```js
let one, tow, three, four, five;
const values = [1,2,3]

[one, two, three, four] = values;
console.log([one, two, three, four])

[one, two, [three, four]]=[1,2[73,74]]
console.log([one,two,three, four])

```

## Object 분할
- Object의 프로퍼티를 분할하여
- 프로퍼티 이름이 같은 프로퍼티 값으로 할당
- 사용형태
  - {one, two}={one:1, two:2}
  - one에 1, two에 2 할당
```js
let {one, two} = {one:10, two:20}; // let{one, two}는 단 순히 변수이다.
console.log(one, ",", two)

 let three, four;
 ({three, four} = {three:3, four:4}); // 소괄호 치는건 표현식이다.
 console.log(thiree, :"," , four);


```

## **파라미터 분할**
- 함수를 호출하는 파라미터와
- 호출받는 함수의 파라미터를

```js
total({one:1, plus:{two:2, five:5}})//key, value가 아니라 디스트럭쳐를 위한 거다.;;;;;;;;

function total({one, plus:{two, five}}){
  console.log(one+two+five)
}
```
**이거 쓰지 말아라**

## Object Operation
- Object관련 오퍼레이션


```js
//같은 프로퍼티 key사용

let sameKey = {key:1, key:2}
console.log(samekey)


```
1. {key:1, key:2}에서 프로퍼티 이름인 key가 같음
2. ES5  strict모드에서는
  - Object 프로퍼티 키가 같으면 에러
3. ES6dptjsms  strict모드에 관계 없이
  - 에러 발생하지 않음
  - 뒤에 작성한 프로퍼티 값으로 대체됨


```js
//object에 초깃값 설정

 let one = 1, two =2 ;
 let values = {one, two}
 console.log(values)
```
1. MDN에서 "Shorthand property name"이라고 표기

```js
// function 키워드 작성하지 않음

//ES5 형태
var obj = {
  getTotal:function(){

  }

}
//ES6 형태
let obj = {
  getTotal(){

  }
}

```

##  Desceriptor
- ES5이지만 정리차원
- 프로퍼티 디스크립터 타입
  - 속성(필드)이름(예: enumberable)과
  - 속성(필드)값으로 구성 (true/fasle)
  - 프로퍼티 속성의 처리 기준 정의
- 프로퍼티 디스크립터 타입 분류
  - 데이터 프로퍼티 디스크립터
  - 악세스 프로퍼티 디스크립터

```
프로퍼티 디스크립터 타입
타입 / 필드이름 / 필드 값 형태 / 디폴트 값 / 개요
데이터 / value / 자바스크립트 데이터 타입 / undefined / 프로퍼티 값으로 사용
데이터 / writable / true, false / false / false:필드 값 변경 불가
악세스 / get/ Funtion Object, undefined / undefined / 프로퍼티 getter함수
악세스 / set/ Funtion Object, undefined / undefined / 프로퍼티 setter함수
공용 / enumerable / true, false / false / false : for in 문으로 열거 불가
공용 / configurable / true, false / false / false : 프로퍼티 삭제 불가


...
...

```
```js
var obj = {};
Object.defineProperty(obj, "book", {
  value : 123,
  enumerable:true
})

```

## Descriptor
- 프로퍼티

## Descript
..
..
- get 속성
```js
var obj = {};
Object.defineProperty(obj, "book", {
  get: function(){return: "책"};
})
var result = obj.book
```
- getter
  - obj.book코드를 만다면
  - obj.get()을 자동으로 호출
  - obj.book.get()으로 호출하면 에러 발생

- set속성
```js
var obj = {sports:"축구"}
Object.defineProperty(obj, "item", {
  set: function(param){this.sports = param;}
})
obj.item = "농구"

```
- setter
  - obj.item = "농구"를 실행하면 ("농구"가 set의 param으로 전달)
  - obj.item의 set이 자동으로 실행
  - obj.book.set()으로 호출하면 에러 발생

## ES6 getter
- ES6 getter작성 형태
```js
let obj = {
  value: 123,
  get getTotal(){
    return this.value;
  }
};
obj.getTotal;
```
- getTotal(){}에 앞에 get 작성
```js
let obj = {
  value: 123,
  get getTotal(){
    return this.value
  }
}
```
let result = obj.getTotal;

obj.getTotal을 실행하면
자동으로 getter로 선언된 getTotal()을 실행


## ES6 Setter
- ES6 setter작성 형태
```js
let obj = {
  set setTotal(value){
    this.total = value;
  }
}
obj.setTotal = 123;
// setTotal(){}앞에 set 작성
```

## 프로퍼티 이름 조합 **이게 ES6만 되는 건가요??**
- Computed property name
- 문자열을 조합하여 프로퍼티 또는 함수 이름으로 사용

```js
let item = {
  ["one"+"two"]: 12
}
```
- one과 two를 연결한 `onetwo`를
  - 프로퍼티 이름으로 사용
  - 대괄호안에 사용

```js
// 함수 이름으로 사용 가능
let name = "tennis"
let sports = {
  [name]: 1,
  [name + "Game"]: "윔블던",
  [name + "fn"](){
    return 123;
  }
};
console.log(sports.tennis);
console.log(sports.tennisGame);
console.log(sports.tennisfn());
```

`let name = "tennis";`
`[name]: 1` //Destructering
1. `[]`안에 변수 이름 작성
---
`[name+"Game"]: "윕블던"`ㅡ
1. 변수 이름과 문자열을 연결
---
`[name+"fn"](){return 123}`
1. 변수 이름과 문자열을 연결
- 함수 이름으로 사용

```js
//  디스트럭철잉 조합
let one = "sports";
let {[one]: value}={sports:"농구"}
console.log(value)
```
```js

```
## 거듭 제곱
- Exponentiation  dustkswk
- `**`곱하기 문자를 연속하여 두개로 만듬
- `2**3` (2의 3제곱)

## default
- 값을 할당하지 않으면 default값 할당
  - `let[one, two, five=5] = [1,2]`
  - one에 1, two에 2tjfwjd
  - five에 값을 설정하지 않으므로 5가 할당
  - 이를 default  value라고 함

## for-of
- 이터러블 오브젝트를 반복
- variable
  - 반복할 때마다
  - 오브젝트의 프로퍼티를 구분 할 수 있는 변수에
  - 프로퍼티 값이 설정됨

## Array for-of
```js
for (let value of [10,20,30]){
  console.log(value)
}
```

## string for-of
```js
for (let value of "ABC"){
  console.log(value)
}
```

## NodeList
- NodeList엘리먼트를 하나씩 반복하여 전개
- 코드 형태
  ```js
  let nodes = document.queyrSelector('li')
  for(let node of nodes){
    console.log(node.textContent);
  }
  ```

## for-in, for-of차이
- 배열의 엘리먼트를 하나씩 반복하여 전재
- for-in
  - 오브젝트에서 열거 가능한 프로퍼티가 대상
  - prototype도 포함
- for-of
  - dlxjfjqmf dhqmwprxmrk eotkd
  - prototype에 연결된 프로퍼티는 열거 못함


## Object
- 이터러블 오브젝트가 아니므로 ofr-of사용불가
- Object를 for-of로 사용할 수 있는 방법
  - Object.keys()로 프로퍼티 이름을 배열로 만들고
  - 이를 for-of로 전개 하면서 프로퍼티 값 추출
- 코드 참조

## built-in Object
## is()
- 두개의 파라미터 값과 값 타입을 비교
  - 같으면 true, 아니면 false반환
- 오브젝트 비교는 아님
  - []과 []비교, {}과 {}비교는 false
  - 단, window 오브젝트 비교는 true

## assign()

- 두번째 파라미터의 오브젝트 프로퍼티를
  - 첫번째 파라미터에 복사하고, 첫번째 파라미터 반환
  - own property만 복사
  - [[prototype]]은 복사하지 않음
- 첫 번째 파라미터에 열거 가능한 Object지정
  - 미지정, undefined, null이면 TypeErro
  - Boolean, Number, string, Symbol을 지정하면
  - 인스턴스로 생성하여 사용
- 두번째 파라미터에 복사 할 Object작성
- 프로퍼티 디스크립터는 복사하지 않음
  - Object.getOwnPropertyDescript()

- 필요한 이유
  - Object를 할당 하면 프로퍼티가 연동됨
  - 한쪽을 바꾸면 다른 쪽도 바뀜
  - 안바뀌게 하려면 벼도의 처리가 필요함
-
- assign()은 복사 후에 프로퍼티 값이 연동되지 않음
```js
// Object 복사
let sports = {event: "축구", player:11}
..

```

```js
// 연동되지 않게 하려면 프로퍼티 단위로 복사
// 여러 단계이거나 타입이 다수이면 처리 봅잡
let sports = {event:"추구", player: 11}
let dup= {}
for (var key in sports){
  dup[key]= sports[key];
}
```
```js
// Object.assign()으로 복사
let sports = {

}
let dup = {}
Object.assign(dup, sports)

```
- Object 복사
- assign()결과를 다른 오브제그에 할당 가능
  - let oneObj = {one:1}, twoObj = {two:2}
  - let mergeObj = Object.assign(oneObj, twObj)

- Object 다수 복사
  - ...

- 복사할 Object 에 getter가 있으면
  - 먼저 getter를 호출하고
  - getter에서 반환된 값을 복사
```js
let count = {
  current: 1;
  get getCount(){retiurn ++this.current}
};
let mergetObj = {};
Object.assign(mergeObj, count)
```

1. mergeObj에 ~~~
