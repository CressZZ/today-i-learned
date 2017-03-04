var modal_window = document.createElement('div');

var headline = document.createElement('h1');
var headline_content = document.createTextNode('modal-window');

var close_button = document.createElement('button');
var close_button_content = document.createTextNode('X');

modal_window.setAttribute('class', 'modal-window');
headline.setAttribute('class', 'modal-window__headline');
close_button.setAttribute('class', 'modal-window__close-button');
close_button.setAttribute('type', 'button');


headline.appendChild(headline_content);
close_button.appendChild(close_button_content);

modal_window.appendChild(headline);
modal_window.appendChild(close_button);


var dim = document.createElement('div');
dim.setAttribute('class', 'dim');

var body = document.body;
var modal_btn = body.querySelector('.button__create-modal');
// var close_btn = close_button;


modal_btn.onclick = modal;

function modal(){
  body.appendChild(modal_window);
  body.appendChild(dim);

  var close_btn = body.querySelector('.modal-window__close-button');
  close_btn.onclick = close_modal;

}

function close_modal(){
  body.removeChild(modal_window);
  body.removeChild(dim);
}
