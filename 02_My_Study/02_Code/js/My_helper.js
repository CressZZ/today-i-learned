/**
* querySelector 헬퍼 함수
* @author   cressZZ
* @version  1.0.0
* @param    {string} selector_str
* @param    {string} context
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
};


/**
* querySelector 헬퍼 함수
* @author   cressZZ
* @version  1.0.0
* @param    {string} selector_str
* @param    {string} context
* @return   {ElementNode} 문서 요소 노드 반환
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


/**
* 선택한 노드의 부모노드 아래 첫번째 자식으로 삽입 헬퍼 함수
* @author   cressZZ
* @version  1.0.0
* @param    {string} parent_Node
* @param    {string} insert_Node
* @return   N/A
*/

function prepend(insert, parent_Node) {
  parent_Node.insertBefore(insert, parent_Node.children[0]);
}


/**
* 선택한 노드의 부모노드 아래 마지막 자식으로 삽입 헬퍼 함수
* @author   cressZZ
* @version  1.0.0
* @param    {string} parent_Node
* @param    {string} insert_Node
* @return   N/A
*/

function append(parent_Node, insert) {
  parent_Node.appendChild(insert);
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
 * @param    {}
 * @param    {}
 * @return   {ElementNode} 문서 요소 노드 반환
 */

function hasClass(el_node, class_name){
  // el_node의 class를 공백을 기준으로 분리시키면 각각의 class명이 나온다.
  // original_classes =
  original_classes = query(el_node).getAttribute('class').split(' ');
  console.log(original_classes);

  for(i=0; i<original_classes.length; i++) {
    if (original_classes[i] === class_name) {
      return true;
    }
  }
  return false;
}
