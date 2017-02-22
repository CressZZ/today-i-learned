//생성
//삽입
//제거
//대체
//복제

var section_a, section_b;
section_a = query('.section-A');
section_b = query('.section-B');

var section_a_lis, section_b_lis;
section_a_lis = queryAll('li', section_a);
section_b_lis = queryAll('li', section_b);


for (i=1; i<section_a_lis.length; i++){
  section_a_lis[i].onclick = assignActiveClass
}

for (i=1; i<section_b_lis.length; i++){
  section_b_lis[i].onclick = assignActiveClass
}


var assignActiveClass = function(){
  this.setAttribute('class', 'active');

}

var detectActivateState = function(){


}

var switchNode = function(){


}


// *반복문을 사용하여, 수집된 li 요소도드에 일괄적으로 이벤트를 연결

section_a_li.onclick = switchNode;


section_b_li.onclick = switchNode;
