// .parent, .target, .insert, .insert-action-button
// .insert-action-button을 사용자가 클릭하면
// .insert 요소노드를 .target요소노드 앞에 삽입한다.

var parent = query('.parent');
var target = query('.target');
var insert = query('.insert');
var button_prepend = queryAll('.insert-action-button')[0];
var button_append = queryAll('.insert-action-button')[1];


console.log(parent);
console.log(target);
console.log(insert);
console.log(button_prepend);
console.log(button_append);


// .insert-actin -button을 사용자가 클릭하면
button_prepend.onclick = function(){
  console.log('clicked button');
  //목표노드.부모노드.isert-before(삽입노드, 복표노드)

  //경우1. target의 부모를 이미 알고 있을 때
  // parent.insertBefore(insert, targer);

  //경우2. target의 부모를 모를때
  // target.parentNode.insertBefore(insert, target)
  //경우2-1, 헬퍼함수 prependChild()를 활용한 예
  prependChild(target.parentNode, insert);
  // 헬퍼함수 appendChild() 사용

  //
};

button_append.onclick = function() {
  appendChild(target.parentNode, insert);

};
