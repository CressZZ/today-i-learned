function getTarget(e){
  if(!e){
    e = window.event;
  }
  console.log('event.target:', e.target);
  return e.target || e.srcElement;
}

var el = document.querySelector('#shoppingList')
console.log(el)
if(el.addEventListener){
  el.addEventListener("click", function(e){
    itemDone(e);
    console.log("event")
  }, false);
} else {
  el.attachEvent('onclick', function(e){
    itemDone(e);
  });
}

function itemDone(e) {
  var target, elParent, elGrandparent;
  console.log("click")
  target = getTarget(e);
  elParent = target.parentNode;
  elGrandparent = target.parentNode.parentNode;
  elGrandparent.removeChild(elParent);
  if (e.preventDefault){
    e.preventDefault();
  } else {
    e.returnValue = false;
  }
}
