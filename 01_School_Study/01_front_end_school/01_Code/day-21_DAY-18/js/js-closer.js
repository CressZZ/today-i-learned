//클로저

/*
지역 공간은 해당 지역 공간을 포함하는 외부 공간에서 접근이 불가능하다.
반대로 지역공간 내부의 지역 공간에서는 상위 영역으로 접근이 가능하다.
함수는 일급 객체임으로 함수 내부에서 함수를 밖으로 내보낼 수 있다.
이때 밖으로 내보내진 함수는 이미 사라졌어야 할 공간을 기억한다.
*/


//closer 사용

var counter = function (){
  // 함수 counter공간
  var init_count = 0;
  var countDown = function () {
    // 함수 countDown 공간
    return init_count++;
  };
  return countDown;
};

var countDown = counter();

// 전역변수 오염
var n=0;
var numbering = function (){
  return n++;
};

//함수가 아닌, 객체를 내보내는 함수
function counterMaker(init_count){
  //초기 값 설정
  var _count = init_count || 0;
  //감춰진 맴버(보안 처리, 은폐)
  var increase = function(){
    _count = init_count++
    return _count;
  };
  var decrease = function(){
    _count = init_count--
    return _count;
  };
  var get = function(){
    return _count;
  };
  var set = function(number){
    _count = number;
  };
  var reset = function(){
    _count = init_count;
  };

  // 출력 패턴
  return {
    'increase'  : increase,
    'decrease'  : decrease,
    'get'       : get,
    'set'       : set,
    'reset'     : reset
  };
}
