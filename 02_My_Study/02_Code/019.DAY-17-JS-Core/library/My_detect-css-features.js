// CSS 속성을 브라우저가 지원하는지 파악하기 위한 테스트 객체!
window._tester = document.createElement('div').style;
// window으로 _tester를 생성 했으므로 지울 수 있다. (delete window._tester)

function detectCSSFeature(property) {
  // 전달인자 유효성 검증
  if ( typeof property !== 'string' ) {
    throw new Error('CSS 속성 이름을 문자열로 전달해주세요.');
  }
  // 결과 값 반환
  return property in _tester;    //'property'가 _tester 안에 있나요?
}

function detectCSSFeatures(properties){
  var _root = document.documentElement;
  if (isArray(properties)){

  }
  for(var property, i=properties.length-1; i>=0; i--){
    property = properties[i];
    if (detectCSSFeature(property)){
      _root.classList.add(property);
    } else {
      _root.classList.add("no-" + property);
    }
  }
}

function isArray(data) {
  return checkType(data) === 'array';
}
function checkType(data) {
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase();
}


console.log(Object.prototype); // Object {}
console.log(Object.prototype.toString); // Function: toString
console.log(Object.prototype.toString.call(false)); // [object Boolean]
console.log(Object.prototype.toString.call(11)); // [object Number]
console.log(Object.prototype.toString.call("hello")); // [object String]
console.log(Object.prototype.toString.call(null)); // [object Null]
console.log(Object.prototype.toString.call(undefined)); // [object Undefined]
console.log(Object.prototype.toString.call(new RegExp()));
