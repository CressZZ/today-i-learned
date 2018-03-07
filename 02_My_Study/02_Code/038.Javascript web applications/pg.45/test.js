// 생서자 함수 Class
var Class = function(parent){
  // 생성자 함수 klass
  var klass = function(){
    // this.init -> klass로 생성된 인스턴스객체.init
    // klass가 샐행될때 또는 klass로 함수를 생성할때, init이 실행된다.
    // 인스턴스는 klass.prototype을 상속 받기 때문에 init 메서드를 가지고 있다.
    // 그 메서드를 apply로 실행하고 this객체에 klass로 생성된 인스턴스책체를 참조 시킨다.
    // 만약 apply를 안쓰고 그냥 this.init을 실행 시켰다면,
    this.init.apply(this, arguments);
    this.init()
    console.log("klass start!")
    console.log("this:",this)
  };
  klass.prototype.init = function(){
    //
    return console.log("this.name:",this.name)

  };
  klass.name = "hihi"

  klass.fn = klass.prototype;

  //프록시 함수 추가
  klass.proxy = function(func){
    var self = this;
    return (function(){
      return func.apply(self, arguments);
    });
  }

  //인스턴스에도 함수를 추가
  klass.fn.proxy = klass.proxy;

  //클래스 프로퍼티 추가
  klass.extend = function(obj){
    var extended = obj.extended;
    for(var i in obj){
      klass[i] = obj[i];
    }
    if (extended) extended(klass)
  }

  //인스턴스 프로퍼티 추가
  klass.include = function(obj){
    var included = obj.included;
    for(var i in obj){
      klass.fn[i] = obj[i];
    }
    if (included) extended(klass)
  }

  return klass;
};

var Button = new Class;

Button.include({
    init: function(element){
        this.element = $(element)
        console.log("this:",this)
        console.log("this:",this.element)
        this.element.click(this.proxy(this.click));
        // this.element.click(this.click.bind(this))
    },
    click: function(){
        console.log("aa")
        console.log("click this:",this)
    }
});
