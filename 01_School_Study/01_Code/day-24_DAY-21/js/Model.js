var Model = (function(global){
  'use strict';

  var data_list;

  function _Model(data) {
    if ( data && !Array.isArray(data) ) {
      throw new Error('초기 데이터 유형은 배열만 가능합니다.');
    }
    data_list = data || [];
  }

  _Model.prototype = {
    'create' : function(new_item) {
      data_list.push(new_item);
    },
    'read'   : function(index) {
      if ( typeof index === 'undefined' ) {
        return data_list;
      } else {
        if ( index < 0 ) {
          return this.read(this.size() + index);
        } else {
          return data_list[index];
        }
      }
    },
    'update' : function(index, callback) {
      data_list.splice(index, 1, callback.call(this, data_list[index]));
    },
    'delete' : function(index) {
      return data_list.splice(index, 1);
    },
    'size': function() {
      return data_list.length;
    }
  };

  return _Model;

})(window);
