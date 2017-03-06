// 배경화면 바뀌는거
var theme_colors = document.querySelectorAll('.theme-list > li')

for(i=0; i<theme_colors.length; i++){
  theme_colors[i].onclick = function (){
    var now_color = window.getComputedStyle(this,null).background;
    document.body.style.background = now_color
  }
}

//삭제 버튼 누르면 삭제 하기
var del_btn = queryAll('.todo-list-cancel');
console.log('del_btn:',del_btn);
for (i=0; i < del_btn.length; i++){
  console.log('del_btn[i]:',del_btn[i]);
  del_btn[i].onclick = function (){
    var del_list = this.parentNode
    // del_list.classList.add('delete');
    this.parentNode.style.transform = "translateX(-80vw)";
    // var del_list_position = window.getComputedStyle(this,null).left;
    // console.log('del_list_position;',del_list_position);
    window.setTimeout(function() {
        del_list.parentNode.removeChild(del_list);
      }, 1000)
  }
}

//데모
// query('.fade-finished').tra


//삭제 버튼 보이게 하기
var selected_list = document.getElementsByClassName("todo-list-span");
for (i=0; i<selected_list.length; i++){
  selected_list[i].onclick = function(){
    var del_btn = this.nextElementSibling
    var original_class = del_btn.getAttribute('class').split(" ");
    for (i=0; i<original_class.length; i++){
      console.log(original_class[i]);
      if ('selected' === original_class[i]){
        original_class.splice(i, 1);
        del_btn.setAttribute('class', original_class);
        return;
      }
    }
    del_btn.setAttribute('class', original_class + " " + "selected");
  }
}



//리스트 추가하기 / 리스트 추가 후 모든 이벤트 재 설정 필요!
// 1. 삭제 버튼 보여주기
// 2. 삭제 버튼 누르면 삭제하기
var add_btn = query('.new-list-btn');
add_btn.onclick = function() {
  var todo_list = query('.todo-list');
  var input = query('#new-list-input');
  if (input.value === ""){
    alert('please input your to do...');
    return;
  }
  var input_text = input.value;
  var frag_doc = document.createDocumentFragment();
  var new_li = document.createElement('li');
  var new_span = document.createElement('span');
  var new_button = document.createElement('button');
  var new_textnode = document.createTextNode(input_text);
  new_button.textContent = "X";
  new_li.setAttribute('class', 'todo-list-list');
  new_span.setAttribute('class', 'todo-list-span');
  new_button.setAttribute('class', 'todo-list-cancel selected');
  new_span.appendChild(new_textnode);
  new_li.appendChild(new_span);
  new_li.appendChild(new_button);
  frag_doc.appendChild(new_li)
  todo_list.appendChild(frag_doc);

  for (i=0; i<selected_list.length; i++){
    selected_list[i].onclick = function(){
      var del_btn = this.nextElementSibling
      var original_class = del_btn.getAttribute('class').split(" ");
      for (i=0; i<original_class.length; i++){
        console.log(original_class[i]);
        if ('selected' === original_class[i]){
          original_class.splice(i, 1);
          del_btn.setAttribute('class', original_class);
          return;
        }
      }
      del_btn.setAttribute('class', original_class + " " + "selected");
    }
  }

  //삭제 버튼 누르면 삭제 하기
  var del_btn = queryAll('.todo-list-cancel');
  console.log('del_btn:',del_btn);
  for (i=0; i < del_btn.length; i++){
    console.log('del_btn[i]:',del_btn[i]);
    del_btn[i].onclick = function (){
      var del_list = this.parentNode
      // del_list.classList.add('delete');
      this.parentNode.style.transform = "translateX(-80vw)";
      // var del_list_position = window.getComputedStyle(this,null).left;
      // console.log('del_list_position;',del_list_position);
      window.setTimeout(function() {
          del_list.parentNode.removeChild(del_list);
        }, 1000)
    }
  }

}
