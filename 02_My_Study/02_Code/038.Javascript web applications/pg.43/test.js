// console.log("test")
var App = {
  log: function(){
    if (typeof console == "undefined") return;

     //인자를 적절한 배열로 바꾼다
     var args = $.makeArray(arguments);

     // 새인자를 추가 한다.
     args.unshift("(App)")

     // console에 위임한다.
     console.log.apply(console, args);

  }
};

// var proxy = function(func, thisObject){
//   return (function(){
//     console.log("func:",func)
//     return func.apply(thisObject, arguments);
//   });
// };

var proxy = function(func, thisObject){
  return function(){
    return func.apply(thisObject, arguments);
  };
};

(function(){
  console.log("test")
})()


var clicky = {
  test: "test!",
  t: "tttt",

  wasClicked: function(e){
    console.log(this.test)
    console.log(e.target)
  },

  addListeners: function(){
    $('.clicky').click($.proxy(this.wasClicked, this));
    // $('.clicky').click(this.wasClicked);

  }
}

var Class = function(parent){
  var klass = function(){
    this.init.apply(this, arguments);
  };
  klass.prototype.init = function(){
    console.log("aa")
  };
  klass.fn = klass.prototype;

  var Person = new Class;
  //프록시 함수 추가
  klass.proxy = function(func){
    var self = this;
    return(function(){
      return func.apply(self, argumests);
    });
  }

  //인스턴스에도 함수를 추가
  klass.fn.proxy = klass.proxy;

  return klass;
}
