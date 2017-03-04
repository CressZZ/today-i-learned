var cards = document.getElementsByClassName("card");

//*
//실험
console.log(cards);
console.log(cards[0]);
console.log(cards.item(0));
console.log(cards.item(0).children.item(0));
console.log(document.getElementsByClassName("card").item(0).children.item(0));
var a = [1, 2, 3, 4, 5]
console.log(a[0])
//*


var first_card = cards[0];

//*
//실험
console.log("first_card = ", first_card)
console.log(first_card.children[0]);
console.log(first_card.children[1]);
//*

var card_front = first_card.children[0];
var card_back = first_card.children[first_card.children.length - 1];

//*
//실험
console.log("card_front :", card_front);
console.log(first_card);
console.log(first_card.children.length);
console.log("card_back :", card_back);
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
    console.log(card_front)
    var card_back = cards[i].children[cards[i].children.length - 1];
    card_front.onclick = function(){
      this.parentNode.style.cssText='transform: rotatey(180deg) translateX(100%)';
      }
    card_back.onclick = function(){
      this.parentNode.style.cssText='';
      }
    }
