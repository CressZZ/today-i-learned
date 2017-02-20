// 문서에서 id, class 같은 선택자로 문서 객체를 찾아오는데 도움을 주는 함수

/**
 *  querySelector 헬퍼 함수
 *  @author   yamoo9
 *  @version  1.0.0
 *  @param    {String}  selector_str
 *  @return   {ElementNode}  문서 요소노드 반환
 */
function query(selector_str, context) {
  var parent = null;
  if (context !== undefined) {
    parent = context;
  } else {
    parent = document;
  }
  return parent.querySelector(selector_str);
};
/**
 *  querySelectorAll 헬퍼 함수
 *  @author   yamoo9
 *  @version  1.0.0
 *  @param    {String}  selector_str
 *  @return   {Nodelist}  문서 요소노드 집합 반환
 */
function queryAll(selector_str, context) {
  var parent = null;
  if (context !== undefined) {
    parent = context;
  } else {
    parent = document;
  }
  return parent.querySelectorAll(selector_str);
};


//부모 노드 내부에 마지막 자식노드로 요소를 추가하는 헬퍼함수
//@param {HTMLElement} parent_node 부모노드
//@param {HTMLElement} child_node 자식 노드

function appendChild(parent_node, child_node){
  parent_node.appendChild(child_node);
  return child_node;
};

//부모 노드 내부에 cjtqjsWo 자식노드로 요소를 추가하는 헬퍼함수
// @param {HTMLElement} parent_node 부모노드
// @param {HTMLElement} child_node 자식노드
function prependChild(parent_node, child_node){
  var first = parent_node.children[0];
  parent_node.insertBefore(child_node, first);
  return child_node;
};


/**
* insertNode를 targerNode 앞에 삽입하는 헬퍼 함수 (형제로서 삽입)
* @param {HTMLElement} insert_node 삽입요소 노드
* @param {HTMLElement} target_node 목표요소 노드
* @return {HTMLElement} 삽입요소 노드를 반환
**/

function Before(insert_node, target_node) {
  target_node.parentNode.insertBefore(insert_node, target_node);
  return insert_node;
}

function After(target_node, insert_node) {


  //조건 1. target_node뒤에 형제 노드가 있다면 -> 형제 노드 앞에 insertBefore


  //조건 2. target_node 뒤에 형제 노드가 없다면 -> 부모 노드 뒤에 appendChild


}

function remove() {
  // var remove_el = repo.children[0];
  var remove_el = queryAll('.will-remove');

  for (i=0; i< remove_el.length; i=i+1) {
    // console.log('remove:',remove_el[i]);

    remove_el[i].parentNode.removeChild(remove_el[i]);

  };

};
