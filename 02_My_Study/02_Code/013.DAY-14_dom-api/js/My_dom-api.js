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
  console.log("getAttribute:",demo_button.getAttribute('class'));



// 헬퍼함수를 사용하여 하는 거
// hasClass
// addClass(el_node, class_name)
// removeClass(demo_button, 'demo-button');

// // classList API 활용
// demo_button.classList.add('demo-button');
// demo_button.onclick = function() {
//   // if(this.classList.contains('on')){
//   //   this.classList.remove('on');
//   // } else {
//   //   this.classList.add('on');
//   // }
//  this.classList.toggle('on');
// };


//DocumentFragment객체 생성
var doc_frag = document.createDocumentFragment();
console.log('doc_frag 1:', doc_frag); // #document-fragment
//

var _div = document.createElement('div');
doc_frag.appendChild(_div);
console.log('_div:', _div);

_div = createElement('span');
doc_frag.appendChild(_div);
console.log('_div:', _div);
