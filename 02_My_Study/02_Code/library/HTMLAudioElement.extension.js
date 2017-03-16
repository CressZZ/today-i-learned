;(function(){
  'use strict';

  var Audio = window.HTMLAudioElement;
  var fn = Audio.prototype;
  console.log('fn:',fn);


  if(!fn.stop){
    fn.stop = function(){
      this.pause();
      this.currentTime = 0;
    };
  }

  if(!fn.getProgress){
    fn.getProgress = function(preciusion){
      var percent = this.currentTime / this.duration * 100;
      return percent.toFixed(preciusion || 0 );
    }
  }

  if (!fn.getReadableTime){
    Audio.getReadableTime = function(seconds){
      var min, sec;
      seconds = Math.floor(seconds);
      min = Math.floor(seconds / 60);
      min = min >= 10 ? min : '0' + min;
      sec = Math.floor( seconds % 60 );
      sec = sec >= 10 ? sec : '0' + sec;
      return min + ':' + sec;
    }
  }
})();
