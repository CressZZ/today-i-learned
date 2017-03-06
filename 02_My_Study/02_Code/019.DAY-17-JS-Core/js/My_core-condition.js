/*
* if문
* if(조건) { 실행문; }
* if(조건) 실행문; // 실행문이 1줄일 경우
* if(조건) {} else {}
* if(조건1) {} else if(조건2) {} else {}
*
* switch(대상) { case 값: 실행; break; default; }
*/

var state = {
  'visible'   : false,
  'hidden'    : true,
  'expanded'  : true,
  'collapsed' : true
};

if ( state.visible === true ) { // -> 거짓
if ( (state && state.visible) || (4 - 5) ) {//[참&&거짓 || 거짓] -> 거짓
  console.log('state.visible is True.');
} else if( state.visible === null || state.visible === undefined ) { //거짓 || 거짓
  console.log('state.visible is Null.');
} else if( isObject(state.visible) ) { //false
  console.log('state.visible is Object Type.');
} else {
  console.log('!True, !Null, !Object');
}

var numbers = [4, 8, 12];

if ( numbers[0] > numbers[1] ) {

} else if ( numbers[2] < numbers[1] ) {

} else if ( numbers[2] === (numbers[0] / numbers[1]) ) {

} else {

}
}



var members = [];
members.push('히어로');
members.push('히로');
members.push('히');
members.push('로');

switch( members[2] ) {
  default:
    console.log('members[0]는 이도 저도 아니다.');
    break;
  case '히어로':
  case '히로':
  case '히':
  case '로':
    console.log('members[0]는 "히어로|히로|히|로"이다.');
}
