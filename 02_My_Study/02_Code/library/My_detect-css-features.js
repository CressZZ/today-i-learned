// CSS 속성을 브라우저가 지원하는지 파악하기 위한 테스트 객체!
window._tester = document.createElement('div').style;
// window으로 _tester를 생성 했으므로 지울 수 있다. (delete window._tester)

function detectCSSFeature(property) {
  // 전달인자 유효성 검증
  if ( typeof property !== 'string' ) {
    throw new Error('CSS 속성 이름을 문자열로 전달해주세요.');
  }
  // 결과 값 반환
  return property in _tester;
}
