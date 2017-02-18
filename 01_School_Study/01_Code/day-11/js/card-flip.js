var flip_card =  document.getElementsByClassName('flip-card');
console.log(flip_card)

var first_flip_card = flip_card.item(0);
console.log(first_flip_card)

flip_front = first_flip_card.children[0];
console.log(flip_front);

first_flip_card.onclick = function(){
// this.style.transform = 'rotateY(180deg) translateX(100%)'
  this.style.cssText = 'transform: perspective(450px) rotateY(180deg)' ;
}
