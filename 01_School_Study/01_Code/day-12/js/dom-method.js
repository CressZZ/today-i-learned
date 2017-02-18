//대상 찾기
//.getElementById()
//.getElementsByName()
//.getElementsByTagName()
//.getElementsByClassName() // IE 9+
//.querySelector() // IE 8+

//아주 오래전 방식


//querySelector()
var sm6 = document.querySelector('#page .col-sm-6')

console.log('sm6:', sm6)

var page = document.querySelector('#page');
var divs = document.querySelectorAll('div');

//document.querSelectorAll('div')[0];
//document.querySelector('div');


console.log('div:', divs);

//DOM API 중에 Create node-info


//요소 노드 생성
 var new_div = document.createElement('div');

 //속성 노드 생성
  var new_div_class = document.createAttribute('class');

  console.log('new_div:', new_div);
  console.log('new_div_class:', new_div_class);

  console.log(new_div_class.nodeType)

  //생성된 속성 노드의 유형을 알아내려면
  new_div_class.nodeType; // 2 === document.ATTRIBUTE_NODE
  //생성된 속성 노드의 갑슬 설정 하려면?
  new_div_class.nodeValue = 'container'; //class="container"


  //그렇다면 어떤 방법을?
  //getAttribute(), setAttribute()를 사용하면 된다.


  //텍스트 노드는 어떻게 생성할까?
  var el = document.createElement('span'); // 요소노드 생성
  var attr = document.createAttribute('title'); // 속성노드 생성
  var content = document.createTextNode('goodday : -'); // 텍스트노드 생성

  console.log('el:', el)
  console.log('attr:', attr)
  console.log('content:', content)

//삽입 (Insertion Inside)
//<parentNode>.appendChild(<childNode>)
//el, attr, content
//텍스트노드를 요소노드의 마지막 자식으로 추가
el.appendChild(content); // <span>goodday :-)</span>

//속성노드를 요소노드의 속성으로 설정하는 방법은?
//attr // title=""
attr.nodeValue = 'this si span element.';
el.setAttributeNode(attr);

console.log('완성 조립된 el:', el)
