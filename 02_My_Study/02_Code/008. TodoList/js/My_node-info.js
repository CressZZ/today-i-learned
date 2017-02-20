/*
Node Information
---------------------
.id
.className
.title

.nodeName -> .tagName
.nodeType
.nodeValue -> .data
 */

var body = document.body; //body라는 변수에 document.body의 위치를 참조 시킴.
// body.style.margin = 0;
// 위치.속성.속성 = 값 (?)

// var first_element = body.firstElementChild; // IE 9+
var first_element = body.children[0];
// first_element에 document.body의 자식들중 첫번 째 자식을 참조.
console.log('body 요소노드의 첫번째 자식 요소노드의 id 속성 값:', first_element.id);

var first_element_2 = document.body.children[1];

console.log('body 요소노드의 첫번째 자식 요소노드의 id 속성 값_2:', first_element_2.className);

var container_in_doc    = document.getElementsByClassName('container');
var container_in_first_el  = first_element.querySelector('.container');

//quirySelector() metod는 CSS selector 문법 형식의 매개 변수를 허용한다.

console.log('container_in_doc:', container_in_doc);
console.log('container_in_first_el:', container_in_first_el);

var container  = container_in_doc[0];

// console.log('body 요소노드의 첫번째 자식 요소노드의 id 속성 값:', first_element.id);
// console.log('container 첫번째 요소노드의 title 속성 값:', container.title);
// console.log('container 첫번째 요소노드의 class 속성 값:', container.className);

var h1_link = container.getElementsByTagName('a').item(0);
console.log('h1 요소노드의 자식노드인 a 요소노드:', h1_link);

var h1_link_title, h1_link_target, h1_link_href;

h1_link_title = h1_link.title;
h1_link_target = h1_link.target;
h1_link_href = h1_link.href;

console.log('h1_link_title:', h1_link_title);
console.log('h1_link_target:', h1_link_target);
console.log('h1_link_href:', h1_link_href);

// h1_link 요소노드 찾아논 상태
// h1_link 요소노드의 부모노드를 찾으려면?
var h1 = h1_link.parentNode;
console.log('h1:', h1);

// h1 요소노드의 data-heading-level 속성 값을 가져오려면?
// data-heading-level 속성은 웹의 초창기에 없던 속성이기에 xml dom api 방식을 사용해야 한다.
var h1_data = h1.getAttribute('data-heading-level');
console.log('h1_date:', h1_data);

//querySelector는 속성의 값을 가져 오는 거니까;;;; 해당 문구는 잘못된 것이다.
// 왜냐하면 'data-heading-level'은 속성의 값이 아니라, 속성 그자체 이기 때문이다.
var h1_data_2 = h1.querySelector('data-heading-level');
console.log('h1_date_2:', h1_data_2);

// .getAttribute('class')와 .className은 둘다 해당 요소 속성인 class의 값을 가져온다.
var h1_data_3 = h1.getAttribute('class');
console.log('h1_date_3:', h1_data_3);
var h1_data_4 = h1.className;
console.log('h1_date_4:', h1_data_4);


// 노드의 이름은? 노드,,,테그...로컬....
console.log('h1 변수에 참조된 요소노드 객체의 노드 이름(대문자)은?: ', h1.nodeName);
console.log('h1 변수에 참조된 요소노드 객체의 태그 이름(대문자)은?: ', h1.tagName);
console.log('h1 변수에 참조된 요소노드 객체의 로컬 이름(소문자)은?: ', h1.localName);


// 문자유형의 데이터를 소문자로 변경하려면?
h1.nodeName.toLowerCase();

console.log('h1.nodeType:' , h1.nodeType);
console.log('h1.nodeValue:', h1.nodeValue);

// h1 변수가 참조하는 객체의 자식 텍스트 노드에 접근하려면?
console.log('h1_link.firstChild:', h1_link.firstChild);
console.log('h1.nodeValue:', h1_link.firstChild.nodeValue);

// children은 직계 element노드만을 제공하며 element가 아닌 노드 (예: text 노드)는 제외된다.
// 'firstChild'및 'lastChild' 같은건 element노드 뿐 아니라 모든 자식을 찾기 때문에 띄어쓰기도 Text노드로 인식 해버린다.
console.log('h1_link.children:', h1_link.children);

// 텍스트 노드와 텍스트 값?
// *차이점을 이해하라!
// 텍스트 값은 nodeType을 가지고 있지 않다?
console.log('h1_link.firstChild.nodeType:', h1_link.firstChild.nodeType);
console.log('h1_link.firstChild.nodeValue.nodeType:', h1_link.firstChild.nodeValue.nodeType);

//요소노드가 자식 노드를 가졌는가 확인하려면?
// hasChildNodes는 띄어 쓰기도 인식한다. ..... 즉, 'firstChild'및 'lastChild'처럼 element 뿐 아니라 모든 자식을 찾는다.
var containers = document.getElementsByClassName('container');

console.log (containers[0].hasChildNodes());
console.log (containers[1].hasChildNodes());
console.log (containers[2].hasChildNodes());
