# 2017년 02월 28일 수업내용 복습
# 1. 개요
## num, str, boo, fnc, arr, obj에 대한 비교
## 함수 실행
- 함수를 참조한 변수 에 ()를 붙이면 실행됨.
- ....기본 Js-core임
- 함수를 참조가 아닌 실행의 형태로 사용하면, 한번 실행되고 이벤트가 안걸린다.
```javascript

var mouseOverAction = function () {
  console.log('mouse over on body');
  // return undefined;
};

document.body.onmouseover = mouseOverAction;
// 함수 참조가 아닌, 실행의 형태(`()`)를 사용하면 안되는 이유

// document.body.onmouseover = mouseOverAction();
```
## 키보드 이벤트 헨들링

```javascript

 body.onkeyup = function pressKeyEvent(evt) {
  evt = evt || window.event;
  console.log('pressed key:', evt.keyCode);

```    

## 연관배열과 객체
### 연관배열
- 객체와 비슷하나, 배열의 형태 `[]`로 되어 있고..잘 안쓸 거 같다.
```javascript
var people = [];

people['name'] = 'Cress';
people['gender'] = 'mail';
console.log(people);

//각 요소에 접근 방법은
//1. 각괄호 [] 쓰는것
//2. .을 쓰는 것
console.log(people['name']);
console.log(people.name);
```
### 객체
```javascript
var people_obj = {
  name:'cress',
  gender:'mail',
  demension: {
    height: 188,
    weight: '85kg'
  }
};
console.log(people_obj);
```



## 객체와 생성자 함수
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

# typeof
- typeof는 [ 함수 ] 가 아니다.
- typeof는 어떤 데이터 유형을 체크할 때 문제가 발생하나? null, array


# 2. 느낀점
- 연관배열의 존재의의가 모호하다.
- 자바스크립트를 열심히 하자 ...아직은 기초
