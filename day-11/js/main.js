

function inits(){
  //문서에서 .rect .circle 요소노드를 찾는다.

  // var rect = document.getElementsByTagName("figure")[0];
  // var circle = document.getElementsByTagName("figure")[1];
//
('circle')[0];

  var rect_bg, circle_bg;
  rect_bg = '#9292b9';
  circle_bg ='#d485af';



  var rect, circle;
    rect=document.getElementsByClassName('rect').item(0);
    circle = document.getElementsByClassName('circle')[0];


  console.log('`rect!` parentNode:', document.getElementsByClassName('rect')[0].parentNode);
  console.log('`rect` firstchild:', rect.firstChild);
  console.log('rect lastchild:', rect.lastChild);
  console.log('rect lastchild:', rect.nextSibling);


  console.log('`rect` parentNode:', circle.parentNode);
  console.log('`rect` firstchild:', circle.firstChild);
  console.log('rect lastchild:', circle.lastChild);
  console.log('rect lastchild:', circle.nextSibling);

  console.log('%c하하하하', 'font-size:100px')
  console.log(circle.childNodes)
  console.log(circle.childNodes)





//

var rect_firstchild = rect.firstchild

  //찾은 문서 객체의 스타일을 변경한다.
  rect.style.border = '4px solid' + rect_bg;
  circle.style.border = '4px solid' + circle_bg;

  // circle.style.backgroundColor = circle_color;

  // console.log(rect_color);


  //border 속성을 설정하겠다. (테두리 디자인 적용)

  // circle.style.borderRadius = 50%;



};


window.onload = inits;

function printdisplayHTMLElements() {
    var html, head, body;
}
    html = document.documentElement;
    head = document.head;
    body = document.body;

    console.log('html:', html);
    console.log('html:', head);
    console.log('html:', body);
