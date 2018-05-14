/**
 * 조건을 통해서 제어
 * if문
 * if(조건) {실행문;} -> 추천
 * if(조건) 실행문; -> 비추천 '안티패턴' // 실행문이 한줄일 경우
 * if(조건) {} else if (조건2) {} else {}
 *
 * switch(대상){ case 값: 실행; break; default; }
 *
 */

 var state = {
   'visible': false,
   'hidden': true,
   'expanded': true,
   'collapese': true
 }; // 메서드가 아닌 프로퍼티이다.

 // 객체의 속성에 접근하는 2가지 방법
 // 1. 객체.속성 -> 조건(?)
 // 2. 객체['속성'] -> 순환 시킬때 많이 사용 for문.

 // if(state.visible === false) {
 // if(state.visible === true) {

// if ((state && state.visible) || (4 - 5)) {
//    console.log('state.visible is true.'); break;
//  } else if (state.visible === null || state.visible === undefined){
//    console.log('state.visible is Null');
//  } else if (isObject(state.visible)){
//    console.log('state.visible is Object Type.', state.visible);
//  } else{
//    console.log('!True, !Null, !Object');
//  }

/**
 *  Switch  구문
 */

 var members = [];

 members.push('히어로');
 members.push('히로');
 members.push('히');
 members.push('로');

 switch(members[0]){
  case '히어로':
    console.log('members[0]는 히어로이다.'); break;
  case '히로':
    console.log('members[0]는 히로이다.'); break;
  case '히':
    console.log('members[0]는 히이다.'); break;
  case '로':
    console.log('members[0]는 로이다.'); break;
  default:
    console.log('members[0]은 이도저도 아니다.');
 }


 //while

// var condition = true

// 조건이 참일동안 계속 반복해서 실행
// while (condition) {
//   // console.log('this is true.');
// }

var arr = ['one', 'two', 'three'];
while (arr.length){
  var test = arr.pop()
  if(test !== 'two'){
    console.log('this is '+ test);
  }
}
