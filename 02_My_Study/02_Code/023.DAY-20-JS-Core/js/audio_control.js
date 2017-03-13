// 모듈 패턴 (비공개\공개 설정)
(function (global){
  'use strict';

// 만약 오류 메세지 띄우고 싶은 기능을 쓰고 싶을 때 이 모듈을 쓴다.
  function validate(condition, error_message){
    if (condition) {throw new Error(error_message);}
    console.log("D");
  }

// 만약 이게 오디오 객체인지 체크하고 싶으면 이 함수를 쓴다.
  function isAudioObject(data){
    return data && data.constructor === HTMLAudioElement;
  }

  //중요한 부분 :외부공개
  // 여튼 접근가능 하고 이용 가능하지만 function validate(){}의 직접적인 수정은 불가능
  // window.validate 의 변경은 가능 하다.
  // ....
  global.validate = validate;
  global.isAudioObject = isAudioObject;
  // return {'validate': validate};


})(window);

;(function(){
  'use strict';

  var audio = document.createElement('audio');
  var audio_src = '001.  Ed Sheeran - Shape Of You.mp3';
  var $ = window.HTMLAudioElement;
  audio.setAttribute('src', audio_src);
  console.log('isAudioObject(audio):',isAudioObject(audio));

  audio.oncanplay = function() {
    audio_time_total.innerHTML = $.getReadableTime(audio.duration);
    // console.log('audio.duration:',audio.duration);

  };

  // 오디오 객체 재생 중, 시간 업데이트 이벤트 핸들링
  audio.ontimeupdate = function() {
    seekbar_progress.style.width = this.getProgress(3) + '%';
    console.log('this:',this);
    audio_time_current.innerHTML = $.getReadableTime(this.currentTime);
  };




  var seekbar_progress   = document.querySelector('.audio-seekbar-progress');
  var audio_time_current = document.querySelector('.audio-time-current');
  var audio_time_total   = document.querySelector('.audio-time-total');
  var btn_play           = document.querySelector('.audio-control__play');
  var btn_pause          = document.querySelector('.audio-control__pause');
  var btn_stop           = document.querySelector('.audio-control__stop');


  btn_play.onclick  = function(){audio.play()};
  btn_pause.onclick  = audio.pause.bind(audio);
  btn_stop.onclick  = audio.stop.bind(audio);



})()
