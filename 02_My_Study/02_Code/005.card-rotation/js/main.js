var cards = document.getElementsByClassName("card");

//*
//실험
//*


var first_card = cards[0];

//*
//실험
//*

var card_front = first_card.children[0];
var card_back = first_card.children[first_card.children.length - 1];

//*
//실험
//*
//
// card_front.onclick = function() {
//   var parent = this.parentNode;
//   parent.style.cssText = 'transform: rotatey(180deg) translateX(100%)';
// };
//
// card_back.onclick = function() {
//   var parent = this.parentNode;
//   parent.style.cssText = '';
// };


// 9장의 카드 Js구현
// 1. 9장 각각의 카드의 front, back을 같은 변수 card_front, card_back에 저장 하여 한번에 함수를 선언하기
// 2. 결국엔 한장 클릭 할때마다 그 카드의 부모가 회전 한다. (모든 부모의 회선 X)


for (var i=0; i < cards.length; i=i+1) {
    var card_front = cards[i].children[0];
    var card_back = cards[i].children[cards[i].children.length - 1];
    card_front.onclick = function(){
      this.parentNode.style.cssText='transform: rotatey(180deg) translateX(100%)';
      }
    card_back.onclick = function(){
      this.parentNode.style.cssText='';
      }
    }
