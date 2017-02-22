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
