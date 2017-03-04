console.log("----------------------------------------");
console.log("hi~this is My_dom-method.js");

/*  복습!!
// 대상찾기
// .getElementById()
// .getElementsByName()
// .getElementsByTagName()
// .getElementsByClassName() // IE 9+
// .querySelector() // IE 8+, DOM Level 4

// 아주 오래전 방식
// var page = document.getElementById('page');
// var divs = page.getElementsByTagName('div');
*/

// querySelector() -> ElementNode...만 찾습니다.;
var page = document.querySelector('#page');

// querySelectorAll() -> Nodelist
var container_2 = page.querySelectorAll('div');
document.querySelectorAll('div')[0]

var container_3 = document.querySelectorAll('#page+div');

console.log('page:', page);
console.log('container_2:', container_2);
console.log('container_3:', container_3);

/*----------------------------------------------------------------
DOM API
create Node
*/

// 요소 노드 생성 - 생성만 한거고 집어 넣지는 않았음
var new_div = document.createElement('div');
console.log('new_div:', new_div);

// 속성 노드 생성 - 생성만 한거고 집어 넣지는 않았음
var new_div_class = document.createAttribute('class');
console.log('new_div_class:', new_div_class);

// 생성된 속성 노드의 '유형'을 알아 내려면?
new_div_class.nodeType;
// 생성된 속성 노드의 값을 설정하려면?
new_div_class.nodeValue = 'container'; // class = 'container'
// class(속성, Attribute)를 생성하고, 값(value)를 각각해줘야 하기 때문에 사용이 용이치 않다.
// 그럴때 쓰는 것이 setAttribute, getAttribute를 사용한다.


// 텍스트 노드 생성
var el = document.createElement('span');
var attr = document.createAttribute('title');
var content = document.createTextNode('gooddat : -') // 텍스트 노드 생성시 'Text'가 아니라 'TextNode'이다.

console.log('el:', el);
console.log('attr:', attr);
console.log('content:', content);
console.log('%c------------------------------', 'color: #3d9a21');//우앙....콘솔에 컬러로 나온당...'%c'
console.log('el.nodeType:', el.nodeType);
console.log('attr.nodeType:', attr.nodeType);
console.log('content.nodeType:', content.nodeType);

// 만들었으니, 삽입을 합시다. (Insert Inside)
// <parentNode>.appendChild(<childNode>)
// element, attr, content = 요소, 속성, 내용(값, Text Node!)
// 텍스트노드를 요소노드의 마지막 자식으로 추가

el.appendChild(content); // <span>goodday :-</span>

// 속성노드를 요소노드에 삽입 setAttributeNode
// attr // title=""
attr.nodeValue = 'this is span element';
console.log(attr);

/*
- 요소, 속성, 텍스트 노드는 생성 할 수 있다.
- 요소에 텍스트 노드를 삽입하는 건, 자식 노드가 들어간다고 생각할 수 있다. 때문에 `appendChild`를 사용
- 속성에 값을 줄떼는 ``텍스트 노드가``들어가는 것이 아니라, 속성 값이 들어가는 거기 때문에 자식 노드가 들어간다고 생각하면 안된다. 때문에`createTextNode` 후에 `appendChild`사용불가.
이 경우에는 `nodeValue`라는 노드 값을 정확히 만들어 줘야 함. (childNode가 아니라 value이기 때문)
*/
// var content2 = document.createTextNode('this is ');
// attr.appendChild(content2);

// 이제 el을 완성시켜보자
el.setAttributeNode(attr); // 다시 강조하지만, attr은 자식 노드의 개념이 아닌듯 하다. appendChild를 쓸수 없다.
// setAttribute와 setAttributeNode와는 다르다... 전자는 두개의 인자가 필요.. 후자는 한개의 인자가 필요..
console.log('완성된 el:', el);



// javaScript안에서 또다른 JavaScript 및 stlesheet를 로드

// head 위치 참조 (head에 넣어 줄거임)
var head = document.head;

// async.js 파일 로드
// <script src='js/async.js'></script>
var async_js = document.createElement('script');
async_js.setAttribute('src', 'js/async.js');
console.log('async_js:', async_js);

//<link rel = "stylesheet" href="css/a.css">
var css_a_file = document.createElement('link');
css_a_file.setAttribute('rel', 'stylesheet');
css_a_file.setAttribute('href', 'css/a.css');
console.log(css_a_file);

//<link rel="stylesheet" href="css/b.css">
var css_b_file = document.createElement('link');
css_b_file.setAttribute('rel', 'stylesheet');

var css_b_file_href = document.createAttribute('href');
css_b_file_href.nodeValue ='css/b.css';
console.log(css_b_file_href);

css_b_file.setAttributeNode(css_b_file_href);
console.log(css_b_file);

console.log("href속성의 값은:", css_b_file.getAttribute('href'));

// 자~ 이제 다 만들었으니 head에 붙어 볼까?

head.appendChild(css_a_file);
head.appendChild(css_b_file);
// <head> 내부 안쪽 마지막 자식으로 async_js 코드를 추가(삽입)
head.appendChild(async_js);
