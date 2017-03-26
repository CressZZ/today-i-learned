//Controller-player
function AudioPlayer(parent, model){

    //공간 나누기 이건 html에서 해도 될것같은데
 var divMain = document.createElement('div');
 var divControl= document.createElement('div');
 var divList= document.createElement('div');

 divMain.appendChild(divControl);
 divMain.appendChild(divList);

 var viewControl = new ViewControl(divControl, this, model.read(model.getId()));
 var viewList = new ViewList(divList, this, model);

 this.model = model;
 this.viewControl = viewControl;
 this.viewList = viewList;

 parent.appendChild(divMain);
}

AudioPlayer.prototype.playSong = function(id){
 var song=this.model.read(id);
 this.viewControl.nowSong(song);
 this.viewList.nowSong(id);
 this.model.setId(id);
};

AudioPlayer.prototype.endSong = function(){
 var nextId=this.model.nextId();
 this.playSong(nextId);
};

//view-control
function ViewControl(parent, player, song){
 var audio = document.createElement('audio');
 audio.setAttribute("controls", "controls"); //이렇게 하면 보이는거당 //
 audio.setAttribute('src', song.source);
 audio.onended = function(){
  player.endSong();
 };

 var img = document.createElement('img');
 img.setAttribute('src', song.cover);
 img.setAttribute('alt', song.title);
 img.classList.add('cover-img');

 var title = document.createElement('p');
 title.textContent = song.title;

 this.audio = audio;
 this.img = img;
 this.title = title;

 parent.appendChild(audio);
 parent.appendChild(img);
 parent.appendChild(title);
}

ViewControl.prototype.nowSong = function(song){
 this.audio.setAttribute('src', song.source);

 this.img.setAttribute('src', song.cover);
 this.img.setAttribute('alt', song.title);

 this.title.textContent = song.title;
 this.audio.play();
}

//view-list
//----------------인젝션패턴
function ViewList(parent, player, model){
 var ol = document.createElement('ol');
 var i;
 var length = model.size();
 var song;
 var li;
 var img;

 var lis=[];
 for(i = 0 ; i < length ; i++){
  song = model.read(i);
  li = document.createElement('li');
  img = document.createElement('img');
  img.setAttribute('src', song.cover);
  img.setAttribute('alt', song.title);

  img.classList.add('list-img');

  li.appendChild(img);
  li.setAttribute('data-id', song.id)
  li.appendChild(document.createTextNode(song.title));
  li.onclick = function(){
   var id= Number(this.getAttribute("data-id"));
   player.playSong(id)
  };
  lis.push(li);
  ol.appendChild(li);
 }
  this.lis = lis;
  parent.appendChild(ol);
}
ViewList.prototype.nowSong = function(id){
 var i;
 var length = this.lis.length;
 var li;
 var dataId;
 for(i =0; i< length; i++){
  li=this.lis[i];
  console.log(li);
  dataId= Number(li.getAttribute('data-id'));
  console.log( dataId, id );
    if(dataId === id){
     li.classList.add('current-play');
    } else {
     li.classList.remove('current-play');
    }
 }
};

var parent = document.querySelector(".main");

var model = new Model(data);
var player = new AudioPlayer(parent, model);