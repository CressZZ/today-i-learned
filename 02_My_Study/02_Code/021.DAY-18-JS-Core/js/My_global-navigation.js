var init  = function(){
  'use strict';
  globalNavInit();
};

var globalNavInit = function(){
  'use strict';

  var gnb = document.querySelector('.global-navigation');
  var gnb_link = gnb.querySelectorAll('a');
  var i = gnb_links.length - 1,
      gnb_link;

  for (;gnb_link = gnb_links.length[i];){
    gnb_link.onclick = clickGetIndexWrapper();
  }
}
/**
 *  clickGetIndexWrapper 함수
 *  @param  {Number}  index - 순환문 처리 시, 인덱스 값
 *  @return {Function}        clickGetIndex (클로저 함수)
 */
var clickGetIndexWrapper = function() {
  'use strict';

  var clickGetIndex = function(e) {
    e.preventDefault();
  };

  return clickGetIndex;

};


// 애플리케이션 초기화
init();
