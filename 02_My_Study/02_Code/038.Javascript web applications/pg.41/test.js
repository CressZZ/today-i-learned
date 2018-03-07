var Class = function(parent){
  var klass = function(a){
    // Class로 생성된 새로운 생성자 함수 (Person)들이 가지는 최초의 함수.
    this.init.apply(this, arguments)
    this.name = a
  }
  if(parent){
    //일시적으로 사용하는 익명함수(subclass)코드가 하는 역할은 부모 클래스(parent)를 상속할때 부모 클래스(parent)의 인스턴트를 만들지 않도록 방지한다.
    //(A instanceof B 로 안읽힌다! 등....)
    //이때, 클래스 프로퍼티를(parent.somting) 제외한 인스턴스 프로퍼티만(parent.prototype)을 상속한다는 점을 기억하자
    var subclass = function(){};
    subclass.prototype = parent.prototype;
    klass.prototype = new subclass;
  }
  klass.prototype.init = function(){
    console.log(this.name)
  };
  // 단순히 이름만 klass로 명명, 이름에 중요한 의미는 없다. klass라는 이름자체가 쓰이지 않는다.
  // 잘생각해 보면 return klass이기 때문에 위에 정의된 함수 내용! 만이 return될뿐 klass란 이름은 더이상 쓰이지 않는다.
  return klass;
};

// Person이라는 것은 결국 또하나의 생성자 함수가 된다.
// Class는 klass라는 함수를 반환하기 때문에 Person이라는 생성자 함수는 klass함수 내용을 가지는 생성자 함수가 된다.
// 즉 Class는 하나의 생성자 함수를 만들어 내는 생성자 함수인것이다.
// *******중요한 점은 생성자 함수의 return부분이다.
// Class생성자 함수는 klass를 리턴하고 있는데, 만약 명시적인 return이 없으면, this를 리턴함으로서 Class내부의 내용을 리턴하게 된다.
var Person = new Class
