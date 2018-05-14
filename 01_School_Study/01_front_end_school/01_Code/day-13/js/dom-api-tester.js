var append_btn = queryAll('[class*=-button]')[0];
var prepend_btn = queryAll('[class*=-button]')[1];
var before_btn = queryAll('[class*=-button]')[2];
var after_btn = queryAll('[class*=-button]')[3];
var remove_btn = queryAll('[class*=-button]')[4];


console.log(append_btn);
console.log(prepend_btn);
console.log(before_btn);
console.log(after_btn);
console.log(remove_btn);


//button
// - prepend, append 번튼의 경우 (.tester)
// - before, after 버튼의 경우 (.tester *:last-child)
// 1) 버튼 이벤트
var tester = query('.tester');
var wrapper = query('.wrapper');
var repo = query('.repository');

console.log(tester);

var prepend_btn, append_btn, before_btn, after_btn;


append_btn.onclick = function(){
  console.log('clicked append_btn');
  //.repository 요소의 첫번째 자식요소노들리. tester내부 마지막 자식 요소노드로 이동
  appendChild(tester, repo.children[0]);

}
prepend_btn.onclick = function(){
  console.log('clicked prepend_btn');
  prependChild(repo, tester.children[0]);
}

var tester_target = null;
var oneClickActivation = function (){
 tester_target = this;
 this.setAttribute('class', 'activation');
 tester.children[0].onclick = null;
 tester.children[1].onclick = null;
 };

tester.children[0].onclick = oneClickActivation;
tester.children[1].onclick = oneClickActivation;

//
//
// tester.children[0].onclick = function(){
//   this.setAttribute('class', 'activation');
//   console.log(this);
// }
//
// tester.children[1].onclick = function(){
//   this.setAttribute('class', 'activation');
//   console.log(this);

// }
console.log('tester_target:', tester_target);

before_btn.onclick = function(){
  // console.log('clicked before_btn');
  console.log('tester_target:', tester_target);
  Before(repo.children[0], tester_target);
};
after_btn.onclick = function(){
  console.log('clicked after_brn');
  After(tester_target, repo.children[0] );

}

// .tester영역
// - 마지막 자식 요소 기점 (기준)

var tester_last_child = query('.tester > :last-child');

var repo_first_child = query('.repository > :first-child');

console.log('tester_last_child:', tester_last_child);
console.log('repo_first_child:', repo_first_child);

var assignWillRemoveClass = function(){
  this.setAttribute('class', 'will-remove')
};

for (var i=0; i<repo.children.length; i=i+1) {
  repo.children[i].onclick = assignWillRemoveClass;
}


remove_btn.onclick = function(){
  console.log(this);
  // var remove_el = queryALL('.will-remove');

  remove();
};



// .repository 영역
// - 첫번째 자식 요소 (이동 객체))

// reokaceChild()실습
// <h1 class="alternate-h1">DOM API 완전 정복 했다! :-)</h1>

// 1) .replace-button 찾기
// 2) .replace-button 요소노드 클릭 이벤트 설정 (연결)
// 3) .replace-h1 대신 직접 생성한 요소노드를 대체 하기 (헬퍼함수 replace() 만들어 보기)

var button_set = query(".button-set");
var replace_btn = query(".replace-button", button_set);

var alt_h1 = document.createElement('h1');
alt_h1.setAttribute('class', 'alternate-h1');
var alt_h1_content = document.createTextNode('DOM API 완저 정복 했다! :-');
appendChild(alt_h1, alt_h1_content);


console.log(replace_btn);

replace_btn.onclick = function () {
  alt_h1.parentNode.replaceChild(alt_h1, alt_h1_content);
}
