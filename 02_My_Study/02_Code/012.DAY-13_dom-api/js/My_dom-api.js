// .component 요소를 찾아 이 내부에 아래의 HTML 코드를 '동적'으로 추가 한다.
// input 2개, button 1개


var comp = query('.component');
var comp_input_heading = '섹션 제목';
var comp_input_heading_placeholder = '섹션 제목을 입력!';
var comp_input_language = '작성된 언어';
var comp_input_language_placeholder = 'ko';
var comp_button_content = '문서 객체 생성';

// HTML Template CODE

// Markup 하듯이 하는 방법 1
// str을 하나씩 써서 하나씩 더해서 innerHTML 해버린다.


// var comp_complete_html_str = '';
//
// comp_complete_html_str += '<div class="input-field" role="group" lang="en">';
// comp_complete_html_str += '<div role="group">';
// comp_complete_html_str += '<label for="input-heading">'+ comp_input_heading +'</label>';
// comp_complete_html_str += '<input type="text" id="input-heading" placeholder="'+ comp_input_heading_placeholder +'">';
// comp_complete_html_str += '</div>';
// comp_complete_html_str += '<div role="group">';
// comp_complete_html_str += '<label for="input-language">'+ comp_input_language +'</label>';
// comp_complete_html_str += '<input type="text" id="input-language" placeholder="'+ comp_input_language_placeholder +'">';
// comp_complete_html_str += '</div>';
// comp_complete_html_str += '<button type="button" class="add-HTML-btn">'+ comp_button_content +'</button>';
// comp_complete_html_str += '</div>';
//
// comp.innerHTML = comp_complete_html_str;


// Markup 하듯이 하는 방법 2

// .join()메서드를 사용하여 한줄씩 전부 배열에 쳐 집어 넣고 합쳐 버린다.

var comp_complete_html_str = [
  '<div class="input-field" role="group" lang="en">',
    '<div role="group">',
      '<label for="input-heading">'+ comp_input_heading +'</label>',
      '<input type="text" id="input-heading" placeholder="'+ comp_input_heading_placeholder +'">',
    '</div>',
    '<div role="group">',
      '<label for="input-language">'+ comp_input_language +'</label>',
      '<input type="text" id="input-language" placeholder="'
      + comp_input_language_placeholder +
      '">',
    '</div>',
    '<button type="button" class="add-HTML-btn">'
    + comp_button_content +
    '</button>',
  '</div>'
].join('');

comp.innerHTML = comp_complete_html_str;

// ------------------------------------------------------------
//

//문서에서 .demo-innerHTML 대상찾기
// var demo = query('.demo-innerHTML');

//문서에 동적으로 생성할 HTML 코드 (문자유형 데이터)
// var add_html_string = '<header class="container-header"><h1 class="site-brand" lang="en">Using DOM Script</h1></header>';
//demo 참조 변수에 add_html_string문자열을 innerHTML 속성을 사용하여 문서 객체를 해석/생성한다.
// demo.innerHTML = add_html_string;

//문서에서 .add-HTML-btn 버튼을 찾아 이벤트를 연결해 보자.
//**!! 근데 .add-HTML-btn은 js을 통해 동적으로 추가한 것이다?
query('.add-HTML-btn').onclick = function() {
  //사용자가 입력한 데이터 (Model)
  //사용자가  <input> 필드에 입력한 데이터를 가져와야 하낟.
  var lang = query('#input-language').value || comp_input_language_placeholder;
  var heading = query('#input-heading').value || comp_input_heading_placeholder;

  // 데이터를 조합하는 HTML 템플릿
  var template = '<header class="container-header"><h1 class="site-brand" lang='+ lang +'>'+ heading +'</h1></header>';

  var demo = query('.demo-innerHTML');
  demo.innerHTML = template;
};

//--------------------------------------------------------

//DOM API - HTMLElement.matches('css selector')

var demo_matches = query('.demo-matches'); //ul
var demo_matches_children = demo_matches.children;

for (i=0; i<demo_matches_children.length; i+=1){
  var item = demo_matches_children[i];
  var matching = null; // undefined, null
  if (item.matches) {
    //IE, Edge를 제외한 브라우저
    //item.matches가 수행 가능할때(?)
    matching = item.matches('.demo-matches-target');
  } else {
    //MS IE, Edge
    matching = item.msMatchSelector('.demo-matches-target');
  }
  if (matching == true){
    item.setAttribute('style', 'font-weight:900; letter-spacing: 0.34em;');
  }
}

// insertAdjacentHTML(beforevegin, string)
var demo_insert_ad = query('.demo-insertAdjacentHTML');

var prev_sibling = '<section class="before-demo-insertAdjacentHTML">beforebegin</section>';
var next_sibling = '<section class="after-demo-insertAdjacentHTML">afterend</section>';
var first_child  = '<article class="first-child-demo-insertAdjacentHTML">afterbegin</article>';
var last_child   = '<article class="last-child-demo-insertAdjacentHTML">beforeend</article>';

demo_insert_ad.insertAdjacentHTML('beforebegin', prev_sibling);
demo_insert_ad.insertAdjacentHTML('afterbegin', first_child);
demo_insert_ad.insertAdjacentHTML('beforeend', last_child);
demo_insert_ad.insertAdjacentHTML('afterend', next_sibling);


// insertAdjacentElement(beforebegin, HTMLElement)
var demo_element = query('.demo-insertAdjacentElement');

// <h1>Insert Adjacent Element</h1>
var h1 = document.createElement('h1');
h1.innerText = 'Insert Adjacent Element';

var p = document.createElement('p');
p.innerText = 'kkkkkkkkk';

demo_element.insertAdjacentElement('beforebegin', document.createElement('figure'));
demo_element.insertAdjacentElement('afterbegin', h1);
demo_element.insertAdjacentElement('beforeend', p);
demo_element.insertAdjacentElement('afterend', document.createElement('span'));
