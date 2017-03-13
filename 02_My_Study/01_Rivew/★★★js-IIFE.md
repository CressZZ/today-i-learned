# IIFE 즉시실행 함수 인자, 매개변수 관련

```javascript
var test = function (a,b){
  return a+b;
};

// test (2,3) = 5

var test_2 = function(a,b){
  return a+b;
}(2, 3);

// test_2 = 5

```
