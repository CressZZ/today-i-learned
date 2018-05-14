(function(global, $){
  'use strict';

// jQuery 보다 이 파일이 먼저 불러와 지면 코드 차단 및 사용자에게 안내
if (!$) {
  console.info('jQuery 라이버리를 먼저 호출 해야 jquery.ajax.extensions을 사용 할 수 있습니다');
  return; // 조건이 참이면, 함수는 아래 코드를 아무 것도 수행하지 않고 종료.
}
// get, post
//return: jqXHR
// $.ajax()


// put, delete
// return: jqXHR
if (!$.put){
  $.put = function(url, data, success, dataType){
    return $.ajax({
                    type: 'PUT',
                    url : url,
                    data : data || null,
                    success : success || null,
                    dataType : dataType || 'json'
                  })
  };
}
if (!$.delete){
  $.delete = function(url, data, success, dataType){
    return $.ajax({
                    type: 'PUT',
                    url : url,
                    data : data || null,
                    success : success || null,
                    dataType : dataType || 'json'
                  })
  };
}

})(window, window.jQuery)
