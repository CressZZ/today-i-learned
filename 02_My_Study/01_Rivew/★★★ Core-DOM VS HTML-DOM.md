##[Core-DOM VS HTML-DOM](http://www.florakid.com/florakid_lib/sub/javascript/dom_core_vs_html_dom.html)
[http://www.florakid.com/florakid_lib/sub/javascript/dom_core_vs_html_dom.html](http://www.florakid.com/florakid_lib/sub/javascript/dom_core_vs_html_dom.html)

제레미 키스의 "DOM 스트립트"에서 발췌
지금까지 우리는 원하는 기능을 구현하기 위해서 다음과 같은 몇 가지 메소드들을 사용했습니다.
```
▣ getElementById
▣ getElementsByTagName
▣ getAttribute
▣ setAttribute
```
이 메서드들은 DOM 코더 기능에 해당하는 것들입니다. 이것들은 자바스크립트에서만 사용되는 게 아니라 DOM을 지원하는 모든 프로그래밍 언어에서 사용할 수 있습니다. 즉 웹 문서뿐만 아니라 XML과 같은 모든 마크업 언어로 작선된 문서에서 사용할 수 있습니다.  
**그런데 자바스크립트 (X)HTML 문서에 쓰인 DOM을 이용할 때 사용할 수 있는 프로퍼티가 더 많습니다. 이런 프로퍼티를 HTML-DOM이라고 부르며 DOM 코어 기능은 아닙니다.**  
## 1.
예를 들어 HTML-DOM은 forms 객체를 제공합니다. 즉 DOM 코더에 따르면 다음과 같이 표시해야 합니다.    
`document.getElementsByTagName("form")`

HTML-DOM에서는 이것을 다음과 같이 써도 됩니다.   
`document.forms`
## 2.
유사하게 HTML-DOM은 각 요소의 속성도 간단하게 쓸 수 있게 해줍니다. 예를 들어 특정 이미지 요소의 src 속성을 표시한다고 해보면 DOM 코더에서는 다음과 같이 표현합니다.  
`element.getAttribute("src")`

HTML-DOM에서는 다음과 같이 써도 됩니다.  
`element.src`  
## 3.
이들 메서드와 프로퍼티들은 서로 바꿔 쓸 수 있습니다. DOM 코어를 쓰든 HTML-DOM을 쓰든 간에 큰 문제는 없습니다. 보시다시피 HTML-DOM은 좀더 간단하지만, 웹 문서에만 국한된다는 사실을 기억하셔야 합니다. 또한 다른 문서 종류에서 DOM을 이용하려면 DOM 코어를 써야 한다는 사실을 꼭 기억해두셔야 합니다.
우리가 HTML-DOM을 사용한다면 showPic 함수를 더 짧게 만들 수 있습니다.
다음 코드는 DOM 코어를 사용해서 whichpic 요소의 href 속성을 가져와서 변수 값을 지정하고 있습니다.  
`var source = whichpic.getAttribute("href");`  

HTML-DOM에서는 다음과 같이 써도 됩니다.  
`var source = whichpic.href;`  
## 4.
또 DOM 코어를 사용해서 placeholder의 src 속성 값을 source 변수로 지정할 때 다음과 같은 코드를 사용했습니다.  
`placeholder.setAttribute("src", source);`  

HTML-DOM에서는 다음과 같이 사용해도 됩니다.  
`placeholder.src = source;`  
## 5.
비록 여러분이 DOM 코어 메서드만을 사용하기로 했다 하더라도 HTML-DOM에 대해서도 알고 계셔야 합니다. 다른 사람이 만든 스크립트 소스코드를 볼 때 그 사람이 좀더 짧은 코드를 작성하기 위해 HTML-DOM을 사용할 수도 있으니까요. 적어도 그 걸 알아보실 수는 있어야 합니다.
