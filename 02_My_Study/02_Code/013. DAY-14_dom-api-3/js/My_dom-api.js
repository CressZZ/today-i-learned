/**
 *  DOM API
 *  아래의 기능으로 jQuery를 안써도 된다는 의견이 등장
 *  .classList [**IE 10+**]
 *    .add()
 *    .remove()
 *    .contains()
 *    .toggle()
 */

// 버튼을 탐색해서 변수에 참조 (Reference)
var demo_button = query('button');

//-----------------------------------------------------------
// 1.동적으로 속성(el -> class) 할당

// 1.1 HTML DOM 방식
  // demo_button.className='demo-button';
  // demo_button.className+= ' ';
  // demo_button.className+='demo-button--pressed';

  // console.log(demo_button.className);
  // demo_button.className;


// 1.2 Core DOM 방식 (setAttribute는 재설정 이다.)
  demo_button.setAttribute('class', 'demo-button');
  demo_button.setAttribute('class', 'demo-button' + ' ' + 'demo-buttton--pressed');
  // console.log(demo_button.getAttribute('class'));



// 헬퍼함수를 사용하여 하는 거
// hasClass
// addClass(el_node, class_name)
// removeClass(demo_button, 'demo-button');
