function(){
  'use strict';
  this.test.forEach = function (data, callback){ //callback은 함수, 인자 3개가 있는 함수
    for (var i = 0, l=data.length; i<l; i++){
      callback.call(data, data[i], i, data);
    }
  };
})();
