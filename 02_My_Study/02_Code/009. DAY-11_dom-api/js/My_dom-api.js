var insert_action_btn = query(".insert-action-button", document.body);
var parent            = query(".parent");
var target            = query(".target");
var insert            = query(".insert");
console.log(insert_action_btn)
console.log(parent)
console.log(target)
console.log(insert)

insert_action_btn.onclick = function () {
  //CASE 1. target의 부모를 알고 있을때...
  // parent.insertBefore(insert, target);

  //CASE 2. target의 부모를 모를때...
  // target.parentNode.insertBefore(insert, target);

  //CASE 3-1 헬퍼함수 prepend() 이용
  // prepend(insert, parent);

  //CASE 3-2 헬퍼함수 append() 이용 -> 변화 없음...
  append(insert, parent);
}
