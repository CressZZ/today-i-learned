var Person = function(){

}

Person.prototype.hellowSomeone = function (toGreet){
  return this.sayHello() + "" + toGreet;
}

Person.prototype.sayHello = function(){
  return "hello"
}
x
