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
