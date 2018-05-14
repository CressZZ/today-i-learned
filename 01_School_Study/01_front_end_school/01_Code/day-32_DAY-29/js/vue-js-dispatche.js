(function(global,Vue){
  'use strict';

  //이벤트 관리자 객체
  // var ev_dispatcher = new Vue();

  //Vue 인스턴스 생성
  global.app = new Vue({
    el: '#app',
    components:{
      'app-message':{
        template:`
          <div class="app-message">
            <header class="app-message__header">
              <slot name="header">
                <h3 class="app-message__headline">우리 모두 다같이!</h3>
              </slot>
            </header>
            <div class="app-message__body">
              <slot><p>반가워요!</p></slot>
            </div>
            <footer class="app-message__footer">
              <slot name ="footer">
               <a>FDS</a>
              </slot>
            </footer>
          </div>
        `
      }
    }

  })
})(window, window.Vue);
