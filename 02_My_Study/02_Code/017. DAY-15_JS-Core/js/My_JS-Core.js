var pass_by_value, another_value;

pass_by_value = 2017;
another_value = pass_by_value;

pass_by_value= "이것은 문자!";

// another_value = 2017

var pass_by_reference, another_reference
pass_by_reference=['a', 'b', 'c', 'd'];
another_reference = pass_by_reference;
console.log(pass_by_reference);
console.log(another_reference);



pass_by_reference.push('e');
console.log(pass_by_reference);
console.log(another_reference);


avengers       = ['아이언맨', '토르', '헐크', '캡틴 아메리카'];
justice_league = avengers;

console.log('avengers:', avengers);
console.log('justice_league:', justice_league);

justice_league = ['슈퍼맨', '배트맨', '플래시', '원더우먼'];

console.log('avengers:', avengers);
console.log('justice_league:', justice_league);


// 변수와 상수
var pen ='볼펜';
const FAST_CAMPUS = '학원';
// const FAST_CAMPUS = 'campus'; //오류냠
console.log(FAST_CAMPUS);



// undefined 와 null
// 1. undefined
// - 변수를 정의하고 값을 할당 하지 않을 경우
var special_one; //undefined

// - 함수를 실행했을때 return값이 명시적이지 않다면
function getSomeBeer() {}
getSomeBeer(); //undefined

// 1. null
// - 문서 객체 이벤트 속성의 초기 설청
// - 문서에서 대상 `객체`를 찾으려 했으나, 조재하지 않다면, DOM API 메서드는 null을 반환
var happy = document.querySelector('.happy'); // null




//------------------------------------------------



var button, print_area, count;
button = document.querySelector(".ui-spinner__button-inc");
print_area = document.querySelector(".ui-spinner_input");
// console.log(print_area);
count = 0;

// button.onclick = function (){
//   count = count + 1; // count += 1;
//   if (count > 5) {
//     this.onclikc = null;
//     this.setAttribute('disabled', true);
//   } else {
//     print_area.setAttribute("value", count);
//   }
// };


// 버튼 사용
// 5이상 되면 이벤트 해제 (null)


// UI 컴포넌트 대상 찾기
var ui_spinner;
ui_spiner = document.querySelector('.ui-spinner');

var ui_spin_inc_btn, ui_spin_dec_btn;
ui_spin_inc_btn  = ui_spiner.querySelector(':first-child');
ui_spin_dec_btn = ui_spiner.querySelector(':last-child');

var ui_spin_input;
ui_spin_input = ui_spiner.querySelector('input');


var count_min, count_max, count;
count_min = 0;
count_max = 10;
count = count_min;

// 초기화
ui_spin_input.setAttribute('value', count);

// 위에 초기화를 함수로
// function updateCount(number){
//   ui_spin_input.setAttribute('value', number);
// }
// updateCount(count);

// 버튼 이벤트
ui_spin_dec_btn.onclick = function (){
  var is_disabled_another_btn = ui_spin_inc_btn.getAttribute('disabled');
  if (is_disabled_another_btn){
    ui_spin_inc_btn.removeAttribute('disabled');
  }
  if (count <= count_min){
    this.setAttributed('disabled', true);
    return;
  }
  updateCount(--count);
};


ui_spin_inc_btn.onclick = function (){
  var is_disabled_another_btn = ui_spin_dec_btn.getAttribute('disabled');
  if (is_disabled_another_btn){
    ui_spin_dec_btn.removeAttribute('disabled');
  }
  if (count <= count_min){
    this.setAttributed('disabled', true);
    return;
  }
  updateCount(++count);
};



/**
 * --------------------------------
 * 데이터 유형 변환
 * 1. 숫자 -> 문자
 * ----------------------------- */

// 1-1. '숫자 상수' => 문자

// 1-2. 숫자를 복사한 변수 + '' => 문자

// 1-3. String(숫자 상수 or 숫자를 복사한 변수) 함수 => 문자

// 1-4. 숫자를 복사한 변수.toString() => 문자


/**
 * --------------------------------
 * 데이터 유형 변환
 * 2. 문자(숫자형) -> 숫자
 * ----------------------------- */

// 2-1. -, *, /

// 2-2. +

// Number()

// parseInt()
// parseFloat()
