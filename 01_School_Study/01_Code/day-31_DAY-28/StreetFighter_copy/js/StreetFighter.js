/*! StreetFighter.js © yamoo9.net, 2017 */

(function(global) {
  'use strict';
  // 사운드 제어
  global.bgm = document.createElement('audio');
  bgm.setAttribute('src', './bgm/Street-Fighter-v5__Ryu-Theme.mp3');
  bgm.oncanplay = function() {
    // this.paly();
  };
  global.document.addEventListener('keyup', function(e){
    if ( e.keyCode === esc ) {
      bgm.pause();
    }
  });
})(window);


(function (global, Vue, bgm) {
  'use strict';

  var stages = [ 'ryu', 'factory', 'palace', 'air'];
  var players = [ 'Bison', 'Chun-li', 'Ken', 'Ryu'];


  function choiceStage(v) {
    if ( v && stages[v]) { return stages[v];}
    else { return stages[randomNumber(stages.length)]; }
  }

  function choicePlayer(v) {
    if ( v && players[v]) { return players[v];}
    else { return players[randomNumber(players.length)]; }
  }


  function randomNumber(max) {
    return Math.floor(Math.random() * max);
  }
  // 스트리트 파이터에 사용되는 상태 데이터 속성
  // 스테이지
  // ryu, factory, palace, air
  var model = {
    stageClass: null,
    is_started: false,
    settings: {
      logo:{ src: './images/Logo/sfv-logo.png', alt: 'Street Fighter'},
    message: 'Game Start!'
  },
  players: [
    {
      name: players[0],
      HP: 100,
      src: './images/Chracter/'+ players[0] +'.png',
      style: {
        animation: 'infinite-scale 2s infinite alternate 0.6s'
      }
    },
    {
      name: players[1],
      HP: 100,
      src: './images/Chracter/'+ players[1] +'.png',
      style: {
        animation: 'infinite-scale 2s infinite alternate 0.6s'
      }
    },
  ]
};
 // 뷰 인스턴스 생성
  global.vm = new Vue({
    // 마운트
    el: '#StreetFighter',

    data: model,

    created: function() {
      bgm.play();
    },
    mounted: function() {
      this.choiceStage();
    },
    methods: {
      choiceStage: function(v) {
        this.stageClass = 'stage-' + choiceStage(v);
      },
      gameStart: function() {
        this.is_started = true;
      },
      playerSrc: function(name) {
        return './images/Chracter/'+ name +'.png'
      }
    }
  });
})(window, window.Vue, window.bgm);
