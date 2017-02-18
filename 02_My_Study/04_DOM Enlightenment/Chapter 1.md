- DOM의 목적은 JavaScript를 사용해서 이 문서에 대한 스크립트 작성(삭제, 추가, 바꾸기, 이벤트 처리, 수정)을 위한 `프로그래밍 인터페이스`를 제공하는 것이다.
- DOM은 원래 XML문서를 위한 애플리케이션 프로그래밍 인터페이스였지만, HTML문서에서도 사용되도록 확장 되었다.
- `for (var key in Node)`
- HTML 문서를 다룰 때 마주치게 되는 가장 일반적인 `노드 유형 (nodeType/노드분류)`은 다음과 같다.
  1. DOCUMENT_NODE (ex: window.document)
  2. ELEMENT_NODE(ex: <body>,<a>,<p>,<style>...)
  3. ATTRIBUTE_NODE(ex: class="funEdges")
  4. TEXT_NODE(ex: 줄바꿈과 공백을 포함한 HTML 문서 내의 텍스트 문자)
  5. DOCUMENT_FRAGMENT_NODE (ex: document.createDocumentFragment())
  6. DOCUMENT_TYPE_NODE (ex: <!DOCTYPE HTML)

- Attribute 노드는 DOM4에서는 사용이 금지(deprecated)되었다.
- 모든 노드 개체(Element, Attr, Text)등은 속성과 메서드를 1차적으로 Node 개체로부터 상속 받는다. 이 속성 및 메서드는 DOM을 조작, 조사, 탐색하는 기주니 되는 값과 `함수`다.
1. 노드 개체 (Object)
  1. 노드 속성 (Attr)
    1. childNodes
    2. firstChild
    3. lastChild
    4. nextSilbling
    5. nodeName
    6. nodeType
    7. nodeValue
    8. parentNode
    9. previousSibling
  2. 노드 메서드 (Method)
    1. appendChild()
    2. cloneNode()
    3. compareDocumentPosition()
    4. contains()
    5. hasChildNodes()
    6. insertBefore()
    7. isEqualNode()
    8. removeChild()
    9. replaceChild()
  3. Document 메서드 (Method)
    1. document.createElement()
    2. document.createTextNode()
  4. HTML*Element 속성
    1. innerHTML
    2. outerHTML
    3. textContent
    4. innerText
    5. outerText
    6. firstElementChild
    7. lastElementCild
    8. nextElementChild
    9. previousElementChild
    10. Children
  5. HTML element 메서드
    1. insertAdjacentHTML()

-
