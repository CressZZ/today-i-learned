var Model = (function(){
  'use strict';
  var data_list=[];
  var generated_count = 0;

  function _Model(data){
    if(data && !Array.isArray(data)){
      throw new Error ("초기 데이터 유형은 배열만 가능한다.");
    }
    this.g = generated_count++;
    data_list.push(data || []);
  }

  _Model.prototype = {
    'creat': function(new_item){
      data_list[this.g].push(new_item);
    },
    'read': function(index){
      if (!index){
        return data_list[this.g];
      } else {
        if (index < 0 ){
          return this.read(this.size() + index);
        } else {
          return data_list[this.g][index];
        }
      }
    },
    'update': function(index, callback){
      var instance = this;
      var original_item = instance.read(index);

      data_list.splice(index, 1, callback.call(instance, original_item));
    },
    'delete': function(index){
      return data_list[this.g].splice(index, 1);
    },
    'size': function(){
      return data_list[this.g].length
    },
  };
  return _Model

})();
