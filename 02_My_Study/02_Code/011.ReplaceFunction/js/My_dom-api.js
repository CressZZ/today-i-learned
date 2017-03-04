//생성
//삽입
//제거
//대체
//복제


//본 Script의 목적!!!!
//1. section 요소노드 하위에 li 요소노드를 클릭하면
//2. 해당 li 요소노드에 active 클래스 속성이 추가된다.
//3. section 요소노드를 변수에 참조 한다.
//4. 하위의 li를 수집하여 클릭 이벤트를 연결 한다.


// 각 section 아이템 수집
var section_a, section_b;
section_a = query('.section-A');
section_b = query('.section-B');

var section_a_lis, section_b_lis;
section_a_lis = queryAll('li', section_a);
section_b_lis = queryAll('li', section_b);


// 버튼

//**함수들**
// assignActiveClass : 선택된 클래스에게 표시
// 기존에 선택된게 없으면 새롭게 표시,
// 기존에 있으면 기존에 표시된걸 삭제하고 새롭게 선택된거에 새롭게 표시;
// a, b 둘 중 한 Section에만 해당
var assignActiveClass = function(clicked_target){
  var actived_li = query(".active", clicked_target.parentNode);
  if (actived_li === null){
    clicked_target.setAttribute('class', 'active');
  }  else {
    actived_li.removeAttribute('class');
  clicked_target.setAttribute('class', 'active');}
};

// detectActivateState : 상대방이 있나 없나 확인
var detectActivateState = function(clicked_target){
  var cross_actived = null;
  if (clicked_target.parentNode.parentNode === section_a) {
    cross_actived = query(".active", section_b);
  } else {
    cross_actived = query(".active", section_a);
  }
  return cross_actived;
};

// switchNode : 메인 (이 안에 2개의 함수가 들어 있다. )
//change 함수 -> helper함수 : append, before함수 로 만듬
//replace 함수 -> helper함수 : .replaceChild 메서드로 만듬

var switchNode = function(){
  cross_actived = detectActivateState(this);
  if (cross_actived !== null) {
    change(this, cross_actived);
    //잘 생각해보면 , .active가 주어진건, cross_actived밖에 없다.
    //그러니까 this에는 class .active가 주어진 적이 없다.
    //때문에 cross_actived에만 .removeAttribute()를 진행한다.
    cross_actived.removeAttribute('class');
  } else {
    assignActiveClass(this);
  }
}
 // *반복문을 사용하여, 수집된 li 요소도드에 일괄적으로 이벤트를 연결

//클릭시 이벤트 연결, 하나하나 반복문으로 걸어주기
for (i=0; i<section_a_lis.length; i++){
  section_a_lis.item(i).onclick = switchNode;
}

for (i=0; i<section_b_lis.length; i++){
  section_b_lis.item(i).onclick = switchNode;
}
