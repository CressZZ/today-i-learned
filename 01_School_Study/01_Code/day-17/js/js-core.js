
// 경우 1. 변수 = 값(복사)
// 복사되는 데이터 유형 : primitive Data Type (원시데이터 타입) - number, string, boolean, null, undefined

// 변수 선언 (이름 설정))
var pass_by_value;

// 변수에 값 할당
pass_by_value = 2017; // 이 숫자 값이 pass_by_value라는 공간에 복사가 된다.
var another_value = pass_by_value; // 값 복사

// 변수 출력
// console.log("pass_by_value:", pass_by_value);
// console.log("another_value:", another_value);

// 둥 중 하나의 값을 다른 값으로 대체
pass_by_value = "오늘 하루도 행복하길"; //
// console.log("pass_by_value:", pass_by_value); // 오늘 하루도 행복하길
// console.log("another_value:", another_value); // 2017


// 경우 2. 변수 = 값(참조)
// 참조되는 데이터 유형: function, array, object
var pass_by_reference, another_reference;
pass_by_reference = ['토르', '아이언맨', '캡틴 아메리카', '헐크']; //배열객체 참조
another_reference = pass_by_reference; // 위의 배열 참조

// console.log('pass_by_reference:', pass_by_reference); // ['토르', '아이언맨', '캡틴 아메리카', '헐크'];
// console.log('another_reference:', another_reference); // ['토르', '아이언맨', '캡틴 아메리카', '헐크'];

// Avengers, Justice Leage;
var avengers, justice_league;

avengers = ['아이언맨', '토르', '헐크', '캡틴 아메리카'];
justice_league = avengers;

// console.log('avengers:', avengers);
// console.log('justice_league:', justice_league);
//
// justice_league = ['슈퍼맨', '배트맨', '플래시', '원더우먼'];
//
// console.log('avengers:', avengers);
// console.log('justice_league:', justice_league);


// 변수(variable) vs 상수(constant)
var pen = '펜';
const FAST_CAMPUS = 'Academy';

// undefined VS null

// undefined 의 경우
// 변수를 정의하고 값을 할당하지 않은면
// 변수의 초기 설정 값은 undefined이다.
var speicial_one; // undefined
var normal_one; // undefined

// 함수를 실행 했을 때 return 값이 명시적이지 않다면
// 함수는 실행된 이후 undefined를 반환한다.
function getSomeCoffee(){}
getSomeCoffee(); // undefined

// null의 경우
// '문서객체의'이벤트 속성의 초기 설정 값은 null이다.
var body = document.querySelector('body');
// 사용자에 의해 이벤트가 설정되지 않았다면 이벤트 속성 초기 값은 null
console.log(body.onclick); //null

// 문서에서 대상 객체를 찾으려 했으나, 존재하지 않다면
// DOM API 메서드는 null을 반환한다.
var happy = document.querySelector('.happy'); // null


/////-------------------------------

// 문서에서 아래 요소노드를 찾는다.
// .increase-cound-button
// .print-count

// 버튼을 사용자 클릭하면 카운트 값을 +1 증가시킨다. (change Model)
// 변경된 카운트 값이 프린트 영역에 표시되어 업데이트 된다. (Update View)
// 단, 카운트 값이 5보다 커지면 연결된 클릭 이벤트는 해제되어야 한다.

var increase_btn = query('.increase-count-button');
var decrease_btn = query('.decrease-count-button')
var print_count = query('.print-count');
var original_text = print_count.textContent;
var count = 0;
decrease_btn.setAttribute('disabled', true);

increase_btn.onclick = function (){
  if (count < 5) {
  count += 1;
  print_count.textContent = original_text +' '+ count;
  console.log(count);
  decrease_btn.removeAttribute('disabled');
    if (count == 5) {
      increase_btn.setAttribute('disabled', true);
    }
}
}

decrease_btn.onclick = function (){
  if (count > 0) {
  count -= 1;
  print_count.textContent = original_text +' '+ count;
  console.log(count);
  increase_btn.removeAttribute('disabled');
    if (count == 0){
      decrease_btn.setAttribute('disabled', true);
    }
}
}

/**
 *  데이터 형 변환
 *  1. 숫자 -> 문자
 */

'숫자 상수' => 문자

// 1-1. '숫자 상수' =>

// 1-2. 숫자를 복사한 변수 '' => 문자

// 1-3. String(숫자 상수  or 숫자를 복사한 변수 )함수 => 문자

// 1-4. 숫자를 복사한 변수.toString()=>문자
