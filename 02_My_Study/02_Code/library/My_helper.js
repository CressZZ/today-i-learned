/**
 * JavaScript 데이터 유형을 체크해주는 헬퍼 함수
 * prototype에 대한 공부가 필요할 것으로 사료됨
 * @author   cressZZ
 * @version  1.0.0
 *  @param  {everything}  data JavaScript 데이터 유형
 *  @return {String}           체크된 데이터 유형을 문자열로 반환
 */
function checkType(data) {
  return
  Object.prototype.tostring.call(data).slice(8, -1).toLowerCase();
}


/**
 * 해당 data가 숫자 데이터 유혀인지 감지하는 헬퍼함수
 * @author   cressZZ
 * @version  1.0.0
 *  @param  {everything}  data JavaScript 데이터 유형
 *  @return {Boolean}          체크된 데이터 유형이 숫자 유형인지 참/거짓 반환
 */
 function isNumber(data){
   return checkType(data) === 'number';
 }

 /**
  *  JavaScript 문자 데이터 유형인지 감지하는 헬퍼 함수
  *  @param  {everything}  data JavaScript 데이터 유형
  *  @return {Boolean}          체크된 데이터 유형이 문자 유형인지 참/거짓 반환
  */
 function isString(data) {
   return checkType(data) === 'string';
 }
 /**
  *  JavaScript 불리언 데이터 유형인지 감지하는 헬퍼 함수
  *  @param  {everything}  data JavaScript 데이터 유형
  *  @return {Boolean}          체크된 데이터 유형이 불리언 유형인지 참/거짓 반환
  */
 function isBoolean(data) {
   return checkType(data) === 'boolean';
 }
 /**
  *  JavaScript 함수 데이터 유형인지 감지하는 헬퍼 함수
  *  @param  {everything}  data JavaScript 데이터 유형
  *  @return {Boolean}          체크된 데이터 유형이 함수 유형인지 참/거짓 반환
  */
 function isFunction(data) {
   return checkType(data) === 'function';
 }
 /**
  *  JavaScript 배열 데이터 유형인지 감지하는 헬퍼 함수
  *  @param  {everything}  data JavaScript 데이터 유형
  *  @return {Boolean}          체크된 데이터 유형이 배열 유형인지 참/거짓 반환
  */
 function isArray(data) {
   return checkType(data) === 'array';
 }
 /**
  *  JavaScript 객체 데이터 유형인지 감지하는 헬퍼 함수
  *  @param  {everything}  data JavaScript 데이터 유형
  *  @return {Boolean}          체크된 데이터 유형이 객체 유형인지 참/거짓 반환
  */
 function isObject(data) {
   return checkType(data) === 'object';
 }
 /**
  *  요소노드 데이터 유형인지 감지하는 헬퍼 함수
  *  @param  {Node}    node  노드 유형
  *  @return {Boolean}       체크된 데이터 유형이 요소노드 유형인지 참/거짓 반환
  */
 function isElementNode(node) {
   return node && node.nodeType === 1;
 }



/**
 *  요소 노드를 생성하는 헬퍼 함수
 *  @param   {String}  el_name   생성하고자 하는 노드 이름
 *  @return  {HTMLElement}       생성된 요소 노드 반환
 */
function createElement(el_name) {
  return document.createElement(el_name);
}


/**
 *  텍스트 노드를 생성하는 헬퍼 함수
 *  @param   {String}  content   생성하고자 텍스트 콘텐츠
 *  @return  {TextNode}          생성된 텍스트 노드
 */
function createText(content) {
  return document.createTextNode(content);
}


/**
 * 요소노드를 생성하거나, 생성후 특정부모노드 아래 자식노드로 삽입하는 헬퍼 함수
 * @author   cressZZ
 * @version  1.0.0
 * @param    {string} el_name 생성할 노드 이름
 * @param    {string} html_str 노드값
 * @param    {HTMLElement} target 노드위치 (부모)
 * @param    {String} metod 부모앞인지 뒤에인지 등..
 [append, prepend, before, after]
 [beforeend, afterbegin, beforebegin, afterend]
 * @return   {HTMLElement} 생성된 노드 반환
 */

function makeEl(el_name, html_str, target, method){
  var el = createElement(el_name); //helper
  //el.innerHTML 정의, 3항식
  el.innerHTML = (!html_str || !isString(html_str))?'':html_str;

  //target
  if(target && isElementNode(target) && target.parentNode) {
    switch(method){
      default:
      case 'append': target.insertAdjacentElement('beforeend', el);
      break;
      case 'prepend':
        target.insertAdjacentElement('afterbegin', el);
      break;
      case 'before':
        target.insertAdjacentElement('beforebegin', el);
      break;
      case 'after':
        target.insertAdjacentElement('afterend', el);
      break;
    }
  }
  return el;
}




/**
* querySelector 헬퍼 함수
* @author   cressZZ
* @version  1.0.0
* @param    {string} selector_str
* @param    {HTMLElement} context
* @return   {ElementNode} 문서 요소 노드 반환
*/

function query(selector_str, context) {
  var parent;
  if (context !== undefined){
    parent = context;
  }
  else{
    parent = document;
  }
  return parent.querySelector(selector_str);
  //**!!! return (context || document).querySelector(selector_str);

};


/**
* querySelector 헬퍼 함수
* @author   cressZZ
* @version  1.0.0
* @param    {string} selector_str
* @param    {HTMLElement} context
* @return   {Nodelist} 문서 요소 노드 반환
*/

function queryAll(selector_str, context) {
  var parent;
  if (context !== undefined){
    parent = context;
  }
  else{
    parent = document;
  }
  return parent.querySelectorAll(selector_str);
};

//
// /**
// * 선택한 노드의 부모노드 아래 첫번째 자식으로 삽입 헬퍼 함수
// * @author   cressZZ
// * @version  1.0.0
// * @param    {string} parent_Node
// * @param    {string} insert_Node
// * @return   N/A
// */
//
// function prepend(insert, parent_Node) {
//   parent_Node.insertBefore(insert, parent_Node.children[0]);
// }


/**
 *  부모 노드 내부에 첫번째 자식노드로 요소를 추가하는 헬퍼 함수
 *  @param    {HTMLElement|Selector}  parent 부모노드 또는 선택자(문자열)
 *  @param    {HTMLElement|Selector}  child  자식노드 또는 선택자(문자열)
 *  @return   {HTMLElement}           자식노드
 */
function prepend(parent, child) {
  if ( parent.nodeType !== 1 ) {
    parent = query(parent);
  }
  if ( child.nodeType !== 1 ) {
    child = query(child);
  }
  // parent.insertBefore(child, parent.children[0]);
  // return child;
  return parent.insertAdjacentElement('afterbegin', child);
}



// /**
// * 선택한 노드의 부모노드 아래 마지막 자식으로 삽입 헬퍼 함수
// * @author   cressZZ
// * @version  1.0.0
// * @param    {string} parent_Node
// * @param    {string} insert_Node
// * @return   N/A
// */
//
// function append(parent_Node, insert) {
//   parent_Node.appendChild(insert);
// }

/**
 *  부모 노드 내부에 마지막 자식노드로 요소를 추가하는 헬퍼 함수
 *  @param    {HTMLElement|Selector}  parent 부모노드 또는 선택자(문자열)
 *  @param    {HTMLElement|Selector}  child  자식노드 또는 선택자(문자열)
 *  @return   {HTMLElement}                  자식노드
 */
function append(parent, child) {
  if ( parent.nodeType !== 1 ) {
    parent = query(parent);
  }
  if ( child.nodeType !== 1 ) {
    child = query(child);
  }
  // return parent.appendChild(child);
  return parent.insertAdjacentElement('beforeend', child);
}



/**
* 선택한 노드의 뒤에 노드로 삽입 헬퍼 함수
* @author   cressZZ
* @version  1.0.0
* @param    {string} target_Node
* @param    {string} insert_Node
* @return   N/A
*/

function after (target_Node, insert_Node) {
  var next = target_Node.nextElementSibling;
  // 조건 1. target_node 뒤에 형제 노드가 없다면?
  if (next === null) {
    append(target_Node.parentNode, insert_Node);
  }
  // 조건 2. target_Node 뒤에 형제 노드가 있다면?
  else {
    before(insert_Node, next);
  }
  return insert_Node;
}


/**
* 선택한 노드의 '앞'에 노드로 삽입 헬퍼 함수
* @author   cressZZ
* @version  1.0.0
* @param    {string} insert_Node
* @param    {string} target_Node
* @return   N/A
*/

function before(insert_Node, target_Node){
  console.log(insert_Node);
  console.log(target_Node);
  console.log(target_Node.parentNode)
  target_Node.parentNode.insertBefore(insert_Node, target_Node);
}


/**
* 선택한 노드 제거 헬퍼 함수
* @author   cressZZ
* @version  1.0.0
* @param    {string} insert_Node
* @param    {string} target_Node
* @return   N/A
*/

function remove(remove_el){
  remove_el.parentNode.removeChild(remove_el);
  return remove_el;
}


/**
 * ReplaceChild 헬퍼 함수
 * @author   cressZZ
 * @version  1.0.0
 * @param    {HTMLElement} replace_node 교체 할 노드
 * @param    {HTMLElement} replaced_node 교체 될 노드
 * @return   {HTMLElement} 교체된 노드 반환
 */

function replace(replace_node, replaced_node) {
  replaced_node.parentNode.replaceChild(replace_node, replaced_node);
  return replaced_node;
}


/**
 * node 위치 변경 헬퍼 함수
 * replace()메서드는 바뀌어 버린 노드가 사라진다. 바뀌는 노드를 살릴 필요가 있어서 만든 함수이다.
 * @author   cressZZ
 * @version  1.0.0
 * @param    {HTMLElement} replace_node 교체 할 노드
 * @param    {HTMLElement} replaced_node 교체 될 노드
 * @return   n/a
 */

function change(replace_node, replaced_node) {
  var sibling = replace_node.nextElementSibling;
  var parent = replace_node.parentNode;

  replace(replace_node, replaced_node);

  if (sibling !== null){
    before(replaced_node, sibling);
  } else {
    append(parent, replaced_node);
  }
}

/**
 * clone 함수
 * 노드를 가볍게 또는 깊게(자손, 인라인 스크립트 이벤트 까지)복제하는 헬퍼 함수
 * @author   cressZZ
 * @version  1.0.0
 * @param    {HTMLElement} node 복사할 노드
 * @param    {Boolean} 깊은 복사 설정
 * @return   {HTMLElement} 복제된 노드 반환
 */

function clone(node, deep) {
  if(deep === undefined) {
    deep = false;
  }
  return node.cloneNode(deep);
}


/**
 * hasClass, 요소노드에 전달된 class 속성 이름 값이 일치하는 것이 있는지 파악하는 헬퍼 함수
 * @author   cressZZ
 * @version  1.0.0
 * @param    {HTMLElement} el_node -class 속성 값을 포함하는지 확인 하고자 하는 요소노드
 * @param    {String} class_name -일치 유무를 파악하고자 하는 `문자형` 데이터
 * @return   {boolean} 일치 유무 파악 후 결과 반환
 */

function hasClass(el_node, class_name){

  original_class = el_node.getAttribute('class');
  original_classes = original_class.split(' ');

  for(i=0; i<original_classes.length; i++) {

    if (original_classes[i] === class_name) {
      return true;
    }
  }

  return false;
}



/**
 *  요소노드에 class 속성을 추가하는 헬퍼 함수
 *  @param  {HTMLElement}  el_node    - class 속성을 추가할 HTML 요소노드
 *  @param  {String}       class_name - 적용할 class 속성 값 이름
 */

function addClass(el_node, class_name) {
  if (el_node.nodeType !== 1) {
    throw new Error("첫번째 전달 인자의 유형은 요소노드여야 한다.");
  }

  if (!hasClass(el_node, class_name)){
    //1. HTML DOM
    // el_node.className += ' ' + class_name;

    //2. Core DOM
    var original_classes = el_node.getAttribute('class') || '';
    el_node.setAttribute('class', original_classes + ' ' +class_name);
  }
}


/**
 * 요소노드에 class 속성을 제거하는 헬퍼 함수
 * @author   cressZZ
 * @version  1.0.0
 * @param    {HTMLElement} el_node
 * @param    {string} class_name
 */

function removeClass(el_node, class_name) {
  if (el_node.nodeType !== 1) {
    throw new Error ("첫번째 인자는 요소노드여야 합니다.");
  }

  if (hasClass(el_node, class_name)){
    var original_classes = el_node.getAttribute('class').split(' ');
    for (i=0; i<original_classes.length; i++){
      if (original_classes[i] === class_name) {
        original_classes.splice(i, 1);
        i = i - 1;
      }
    }
    el_node.setAttribute('class', original_classes.join(' '));
  }
}
