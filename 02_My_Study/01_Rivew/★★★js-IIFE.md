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

## 글로벌 인자를 주는 이유
variables는 기본적으로 외부에 노출되지 않어서, 그 안의 또 다른 function 이외엔 접근할 수 없도록 차단되어 있는데, 그 중 원하는 것만 꼭 집어서 global에 하나로 공개된 자기만의 namespace가 가지고 있는 property에다 갖다 붙여준다. 이렇게 하면 global 환경에 공개된 기존의 variables와 methods 이름과의 충돌을 최소화할 수 있다.
