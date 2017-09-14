var = obj {value: 123}
obj.getValue = function(){
  var amount = this.value
  debugger
}

obj.getValue()''


var sports={
  value: 123,
  get: function(){
    var value = 456;
    console.log(this === window)
    console.log(this.value)
  }
};

var comp = sports.get;
comp()

function get(){
  console.log("사과")
}

var sports=function(){
  function get(){
    console.log("애플")
  }
  this.get();
  get();
}
sports();

//bind
var bonus = {
  value: 123,
  get: function(){
    return this.value;
  }
};
console.log(bonus.get());
var fnObj = bonus.get.bind();
console.log(typeof fnObj);
console.log(fnObj());

fnObj = bonus.get.bind(bonus);
console.log(fnObj());
