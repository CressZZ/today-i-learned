var body = document.body;

body.style.margin = 0;

var first_element = body.firstElementChild; // body.children[0]; // IE 8 호환

console.log('body 요소노드의 첫번째 자식 요소노드의 id 속성 값:', first_element.id); //.id 는 웹상에서 HTML DOM을 통해서만 쓸 수 있다 즉 웹환경에서만 가능하다.

// var container = document.getElementsByClassName('container')[0];
// console.log(container)

var container_in_doc = document.getElementsByClassName('container');
var container_in_first_el = first_element.getElementsByClassName('container');


console.log('container_in_doc:', container_in_doc);
console.log('container_in_first_el:', container_in_first_el);

var container = container_in_doc[0];

console.log('container 첫번째 요소노드의 title 속성값:', container.title);
console.log('container 첫번째 요소노드의 class 속성값:', container.className);

var h1_link = container.getElementsByTagName('a').item(0);
console.log('h1 요소노드의 자식노드인 a 요소노드:', h1_link);
var h1_link_title, h1_link_target, h1_link_href;

h1_link_title = h1_link.title;
h1_link_target = h1_link.target;
h1_link_href = h1_link.href;


console.log('h1_link_title:', h1_link_title);
console.log('h1_link_target:',  h1_link_target);
console.log('h1_link_href:', h1_link_href);

var h1 = h1_link.parentNode;
h1.getAttribute('data-heading-level');
console.log(h1.getAttribute('data-heading-level'));


console.log('h1 변수에 참조된 요소노드 객체의 노드 이름은?:', h1.nodeName);
console.log('h1 변수에 참조된 요소노드 객체의 태그 이릅은?:', h1.tagName);
console.log('h1 변수에 참조된 요소노드 객체의 로컬네임 이릅은?:', h1.localName);

h1.nodeName.toLowerCase();

console.log('h1.nodeType:', h1.nodeType); //1
console.log('h1.nodeValue:', h1.nodeValue); //null

//h1 변수가 참조하는 객체의 자식 텍스트 노드에 접근하려면?
console.log('h1_link.firstChild:' , h1_link.firstChild);
console.log('h1_link.firstChild.nodeValue:', h1_link.firstChild.nodeValue);

console.log('h1_link.firstChild.nodeType:', h1_link.firstChild.nodeType);
console.log('h1_link.firstChild.nodeValue.nodeType:', h1_link.firstChild.nodeValue.nodeType);

//hasChildNodes()
var containers = document.getElementsByClassName('container');
console.log(containers[0].hasChildNodes());
console.log(containers[1].hasChildNodes());
console.log(containers[2].hasChildNodes());
