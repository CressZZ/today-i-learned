# html 상속 개념 관련
## 가상 선택자  
- 상속 받는 곳은 `body`등 진짜 부모요소이다.  
- 가령 `<div><a class="test"></div>`에서 `.test:visited`가 상속받는 것들은 `<div>`에서 상속 받는다.
- CSS pseudo-class 는 선택될 요소(element)의 특별한 상태를 지정하는 선택자(selector)에 추가된 키워드입니다. 예를 들어 :hover는 사용자가 선택자에 의해 지정된 요소 위를 맴돌(hover) 때 스타일을 적용합니다.

## 가상 요소  
- 상속 받는 곳은 `::`가 적용된 클래스 이다.
- 가령 `<div class="test">`에서 `.test::before`가 상속받는 것들은 `.test`에서 상속 받는다.
- 가상 클래스(pseudo-classes)처럼, 가상 요소(pseudo-element)는 선택자(selector)에 추가되지만 특별한 상태를 기술하는 대신, 문서의 특정 부분을 스타일할 수 있습니다. 예를 들어, ::first-line 가상 요소는 선택자에 의해 지정된 요소의 첫 줄만을 대상으로 합니다.
