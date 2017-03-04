//1.버튼에 대한 정보 수집

var append_btn, prepand_btn, before_btn, after_btn, remove_btn, replace_btn;

append_btn = query(".append-button");
prepand_btn = query(".prepand-button");
before_btn = query(".before-button");
after_btn = query(".after-button");
remove_btn = query(".remove-button");
replace_btn = query(".replace-button");

var tester_target = null;
// tester 선택자를 전역변수로 선언해주었다.
// 그 이유는....나중에 해당 선택자를 사용해야 되니까....이해가 갈듯..잘 안간다..
// 뭐...나중에 아래 함수가 실행된 뒤, class를 가진 노드를 tester_target'전역'변수로 지정 해줘도 상관 없다.
// 그 실행된 뒤라는게....조금 애매하긴 하다. 아래 함수가 실행 된뒤에 다른 함수가 실행될 때 그 안에 있어야 하는 듯 하다.
// 사실 완변하게는 모르겠다.
// 대충은 알거 같다.


//2.선택자에다가 선택 되었다고 표시 해주기 ''함수''(class=activation)
var onClickActivation = function (){
  tester_target = this;
  this.setAttribute('class', 'activation');
};


//3.선택에 대한 정보 수집
//3.1 tester field에 대한 정보 수집
var tester = query(".tester");

//3.2 tester 선택에 대한 정보 수집 및 선택 됬다고 표시해주기
for(i=0; i < tester.children.length; i++) {
  tester.children[i].onclick = onClickActivation
}



//4.제거 선택자 에다가 선택 되었다고 표시 해주기 '함수' (class=will-remove)
var assignWillRemoveClass = function () {
  this.setAttribute('class', 'will-remove');
};




//5.선택에 대한 정보 수집
//5.1 repo field에 대한 정보 수집
var repo = query('.repository');

//5.2 repo 선택에 대한 정보 수집 및 선택 됬다고 표시해주기
for (i=0; i<repo.children.length; i++) {
  repo.children[i].onclick = assignWillRemoveClass;
};



//6. 버튼 설정
//6.1 append_btn // helper 함수
//.repository 요소이 첫번째 자식 요소노드를 .tester내부의 마지막 자식 요소노드로 이동
  append_btn.onclick = function(){
    append(tester, repo.children[1]);
  };

//6.2 prepand_btn // helper 함수
//.repository 요소의 첫번째 자식 요소노드를 .tester내부의 첫번째 자식 요소노드로 이동
  prepand_btn.onclick = function(){
    prepend(repo.children[1], tester);
  };

//6.3 after_btn // helper 함수
//.repository 요소의 첫번째 자식 요소노드를 .tester_target 후의 요소노드로 이동
  after_btn.onclick = function(){
    after(tester_target, repo.children[1]);
  };

//6.4 before_btn // helper 함수
//.repository 요소의 첫번째 자식 요소노드를 .tester_target 이전의 요소 노드로 이동
  before_btn.onclick = function(){
    console.log("repo:", repo.children[1]);
    console.log("target:",tester_target );

    before(repo.children[1], tester_target);
  };

//6.5 remove_btn // helper 함수
  remove_btn.onclick = function(){
    var remove_els = queryAll(".will-remove", repo);
    console.log(remove_els);
    if (remove_els.length === 0) {  //!! 제대로 되는지 볼것!!
      console.log('선택 바람');
      return;
    }
    for (i=0; i<remove_els.length; i++){
      remove(remove_els[i]);
    }
  }


  // 1) .replace-button 찾기
  var replace_btn = query('.replace-button');
  var replaced_h1 = query('.replaced-h1');
  var alt_h1 = document.createElement('h1');
  alt_h1.setAttribute('class', 'alternate-h1');
  var alt_h1_content = document.createTextNode('나는 천재이다!!!!');
  append(alt_h1, alt_h1_content);
  // console.log('alt_h1:', alt_h1);
  // 2) .replace-button 요소노드 클릭 이벤트 설정(연결)
  replace_btn.onclick = function() {
    // console.log(this);
    replaced_h1.parentNode.replaceChild(alt_h1, replaced_h1);
  };
  // 3) .replaced-h1 대신 직접 생성한 요소노드
