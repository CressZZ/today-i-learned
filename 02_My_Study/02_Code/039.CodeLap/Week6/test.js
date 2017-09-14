
// bind()활용
// html
// <button id = clickID>클릭하세요</button>
window.onload = function(){
  var el = document.getElementById('clickID');
  el.onclick = show.bind(sports, el);
}
var sports = {
  value: 123
}

function show (element, event){
  console.log(element.textContent);
  console.log(event.target.id)
  console.log(this.value)
}
