# 면접준비! 철저히!!

# 1. GENERAL

## 트위터를 사용하시나요? 트위터를 사용한다면, 트위터에서 누구 팔로우 하시나요?
-> 사용하지 않고 있습니다.

## 깃헙을 사용하시나요?
-> 사용하고 있습니다. 프로젝트를 위해 사용해 보았고, vue관련 리포짓을 포크떠서 예제등을 참고 하고 있습니다.

##  어떤 블로그를 구독하고 있나요?
-> naver D2

## vue와 리엑트의 차이
->

## vue와 엥귤러의 차이
->

## 어떤 버전관리시스템을 사용하시나요?
-> git / github(원격저장소)

## 웹 페이지를 어떻게 만들었는지 과정을 설명할 수 있나요?
-> 이건 그냥 설명

## 점진적 향상법(Progressive Enhancement) / 우아한 성능 저하법(Graceful degradation)
-> 점진적인 향상과 적절한 낮춤 둘 다 같은 것을 하기 위함이라고 말할 수 있다: 우리 제품을 모든 사용자에게 유용하도록 하는 것이다. 점진적 향상은 좀 더 정교하고 동시에 안정된 방법을 보증하지만 시간과 노력이 더 필요하다. 적절한 낮춤은 이미 존재하는 제품을 위한 패치로 더 용이하게 사용될 수 있다; 나중에 유지보수하기가 더 힘들어지지만 처음 들이는 수고는 줄어든다.

### 1) 점진적 향상 (더 좋아 보임)
일단 낮은버전의 브라우저를 사용하는 유저를 생각하여 웹어플리케이션을 만들고, 점차 최신기술로 기능을 추가 시킨다. 혹은 기능이 실행될 수 있는 환경에서만 기능을(버튼등) 제공한다.
시간과 노력이 더 필요하다.

### 2) 우아한 성능 저하법
일단 최신기술로 웹어플리 케이션을 만들고나서, 낮은버전의 브라우저를 사용하는 유저들을 위하여 웹어플리케이션의 성능을 저하 시킨 버전을 만든다. 혹은 기능이 실행되지 않을때 애러 메시지등을 출력한다.
처음에는 편하다.

## "시멘틱 HTML(Semantic HTML)"이 무엇을 뜻하는지 설명해주세요.
-> `'의미론  적인  Web'을 만드는 HTML.`
시맨틱 웹(Semantic Web)은 '의미론적인 웹'이라는 뜻으로, 현재의 인터넷과 같은 분산환경에서 리소스(웹 문서, 각종 화일, 서비스 등)에 대한 정보와 자원 사이의 관계-의미 정보(Semanteme)를 기계(컴퓨터)가 처리할 수 있는 온톨로지 형태로 표현하고, 이를 자동화된 기계(컴퓨터)가 처리하도록 하는 프레임워크이자 기술이다. 웹의 창시자인 팀 버너스리가 1998년 제안했고 현재 W3C에 의해 표준화 작업이 진행 중이다.
-> `컴퓨터가 이해할 수 있는 잘 정의된 의미`
지금과 같이 사람만이 웹에 산재한 정보의 의미를 파악하는 것이 아닌, 자동화된 기계가 해석할 수 있는 일종의 표준 의미정보 교환의 수단이 되는 것이 시맨틱 웹의 목적이다.
## URI
-> 통합 자원 식별자 (Uniform Resource Identifier, URI), URI의 하위개념으로 `URL`, `URN` 이 있다.

## URL
-> URL(Uniform Resource Locator, 문화어: 파일식별자, 유일자원지시기)은 네트워크 상에서 자원이 어디 있는지를 알려주기 위한 규약이다.
흔히 웹 사이트 주소로 알고 있지만, URL은 웹 사이트 주소뿐만 아니라 컴퓨터 네트워크상의 자원을 모두 나타낼 수 있다. 그 주소에 접속하려면 해당 URL에 맞는 프로토콜을 알아야 하고, 그와 동일한 프로토콜로 접속해야 한다.
FTP 프로토콜인 경우에는 FTP 클라이언트를 이용해야 하고, HTTP인 경우에는 웹 브라우저를 이용해야 한다. 텔넷의 경우에는 텔넷 프로그램을 이용해서 접속해야 한다

## 최소화(minification) 한다는 건 무슨 뜻입니까?
-> 개발단계를 지나 배포단계에 이르러 빌드처리 할때, 코드안에 있는 공백(줄바꿈, 공백, 주석등)등을 제거 함으로서 사람을 읽을 수 없으나, 성능적으로는 더 빠르게 처리할 수 있는 코드를 만들어 배포하는 것.
보통 빌드도구인 그런트나 걸프, 웹팩에서 사용된다.

## 여러 도메인을 이용하여 서버 사이트 데이터를 제공하는 것이 더 나은 이유는 무엇인가요? (잘모름)
### 1) 도메인
-> 웹사이트는 익스플로러에 도메인을 치면 DNS(domain name server)에서 해당 도메인의 서버에 연결해주는 구조다.

### 2) 브라우저가 한 번에 1개의 도메인에서 다운로드 받는 리소스는 몇 개 인가요?
-> 보통 6~8가지. 결국 리소스가 많아지면 화면을 그리는데 시간이 오래 걸리게 된다. 이를 위해 리소스 파일의 최소화 (minify) cdn 활용, lazy다운등을 활용하여 속도를 향상시킬수 있다

### 3) CDN (Content Delivery Network)
-> Request Routing: 사용자의 Content 요청에 대해, Cache 서버의 부하를 고려하여 사용자와 가장 인접한 Cache Server를 선택하여 사용자가 보다 빠르게 Content를 다운로드 받을 수 있도록 함

## 만약에 디자인을 표현하기 위해 8개의 다른 Stylesheet를 가지고 있다면, 사이트에서는 어떻게 통합하실 건가요?
### 1) 파일의 연결법을 찾아내세요.
### 2) Build system을 이용한 결합없이, @import를 사용하면 점수를 깎으세요.
-> 첫번째로 중복되는 부분을 찾아 제거한다. import를 써서 하나의 css파일에 묶는다. 그리고 번들로 css 파일들을 합친다.

## 당신이 프로젝트에 합류했습니다. 근데 그들은 Tab을 이용하고, 당신은 Sapce를 사용했습니다. 어떻게 하실건가요?
-> 플러그인 다운 받는다.

## 간단한 slideshow 페이지를 만들어 보세요
(no javascript)

## 당신의 코드의 성능을 테스트하기 위해서 사용하는 도구가 무엇입니까?
-> 사용해보지는 않았으나, jasmin이나 mocha를 이용하여 테스트 한다고 알고 있다.

## 올해 당신이 익히고 싶은 기술이 있다면, 그것은 무엇입니까?
-> Anithing

## 페이지 로딩 시간을 줄이는 3가지 방법은
->  css sprite image, js 파일 하나로 합치기, 상단에 스타일 시트를 넣고, 하단에 스크립트를 넣는방법, lazyloading.

## 표준의 중요함을 설명하세요.
-> 만약 새로운 팀원이 도중에 참여했다고 가정하자. 표준이 아닌 다른 명세를 사용하고 있었다면, 팀원이 우리 팀에 바로 적응하지 못하고 적응기를 거쳐야한다는 단점이 있다. 이러한 낭비가 발생할 수 있다.
-> HTML5 경우에는 시멘틱한 웹을(의미론적인 web) 만들기 위해 표준을 준수하여 마크업을 해야 한다.

# 2. HTML

## doctype이 무엇을 하는 것이고, 몇 번 지정할 수 있나요?
-> 문서형 정의(DTD:Document Type Definition)은 HTML5, XHTML, HTML의 세가지 문서 유형이 존재하며, 기술한 유형에 따라 마크업 문서의 요소와 속성등을 처리하는 기준이 되며 유효성 검사에 이용된다.
-> 한번 지정할 수 있다.
-> DTD를 적지 않는 브라우저들은 Quirks Mode 상태(어물쩡한 상태)로 렌더링 되기 때문에 바른 DTD를 적어주는 것이 좋다. 크로스 브라우징을 하기 위해서는 꼭 필요한 원칙이다.


## 표준모드(standards mode)와 쿽스모드(quirks mode)의 다른 점은 무엇인가요?
### 1) 쿽스모드
-> DOCTYPE을 지정하지 않아 렌더링 모드를 선택하지 않았을때, 비표준 모드로 렌더링 되며 오래된 브라우저의 행동을 모방하도록 렌더링 된다.
### 2) 표준모드
-> DOCTYPE으로 지정한 모드에 따라 렌더링 되며, HTML과 CSS spec에 따라 렌더링 된다.

## XHTML을 이용한 페이지의 한계점은 무엇이 있나요?
### 1) application/xhtml+xml으로 지정한 페이지에 어떠한 문제가 있나요?
-> XHTML 쓰지도 않는거 패스!

## 다국어가 포함된 페이지는 어떤 방식으로 제공하나요?
-> lang속성을 사용한다.

## HTML5에서 XHTML문법을 사용할 수 있나요? HTML5에서 XML을 어떻게 사용하나요?
->html5 표준은 기본적으로 하위호환성을 지키는 것으로 시작되었다. 즉 html5 에서 xthml 을 사용하던, html 4.0.1 의 표준을 사용하던 문제 될것이 없다.
xhtml 문법 작성시에는 MIME 타입을 `application/xhtml-html` 로 지정해 준다.
파일 최상단에 인코딩을 지정해 준다. `<?xml version="1.0" encoding="UTF-8"?>`
네임스페이스를 명시해준다. `<html xmlns="http://www.w3c.org/1999/xhtml">`
위와 같이 해당 문서에서 xhtml 문법을 사용할 것을 명시해준다면 큰 문제가 되는 일은 없을 것이다.

## data-* 속성은 무엇을 하는 것인가요?
-> HTML에서 표현하기 힘들어서 css의 class를 이용해서 강제적으로 스타일과 상관없는 값을 추가해서 css 해석 속도도 떨어트리고 개발자들에게도 무슨 데이터를 어떻게 다룰지에 대한 명확한 표현이 떨어졌었는데, HTML5의 Custom Data Attributes 를 이용해서 마치 XML을 표현하듯 `HTML 문서에 특정 엘리먼트의 설명을 구체적으로 할 수 있게 되었다.` HTML의 의미있는 표현도 가능하고 이 의미로 만들어진 element에 identifier나 style class가 아닌 데이터의 표현과 관리가 가능해진 것이다.
-> HTML5의 Custom Data Attribute를 CSS에서 쿼리하기 위해서는 다음과 같이 []로 표현할 수 있다.

## HTML4에서 콘텐츠 모델(content models)은 무엇이며, HTML5의 그것과 다른 점은 무엇인가요?
-> 컨텐츠 모델 : Content Model이란 HTML문서작성의 큰 구조로써, 어떤 요소가 어떤 콘텐츠 또는 요소를 포함 할 수 있는 지에 관한 정의 이다.
`HTML 문서 작성의 큰 구조`
`어떤 요소가 어떤 콘텐츠 또는 요소를 포함할 수 있는지에 관한 정의`

-> HTML4 : Bolck Level Element와 Inline Element로 구분되어지는 테그를 가지고 표현을 하였다. 즉, Tree형태의 계층 구조를 이루는 문서의 Outline을 구성하고, 그 구조에 따라 content에 접근 하였다.
- Bolck Level Element : `<div>, <p>, <h1>, <h2>`
- Inline Element : `<img>, <input>, <i>, <b>`

-> HTML5 : Contetns Model이라는 개념이 추가되어 문서의 outline을 잡고 contetns를 구성할 수 있게 되었다. 이로 인해 기존의HTML보다 훨씬 더 시멘틱(의미론 적인)한 웹 구성이 가능 해졌다.
- `Metadata Content`: 나머지 Contents의 Presentation이나 behavior를 설정 하거나 현재 문서와 다른 문서와의 관계를 설정
```
base, command, link, meta script, style, title.
```
- `Flow Contetn` : 문서와 Application의 Body에서 사용
```
a, abbr, address, area, article, aside, audio, b, button, canvas, div, dl, em, figure, footer, form, h1, header, hr, i, igrame, img, input...
```
- `Sectioning Content` : Headings와 Footers의 범위를 정의
- `Heading Content` : Section의 Header를 정의
- `Phrasing Content` : 문서의 Text 및 Text를 intra-parapgraph Level로 Markup
- `Embedded Content` : 문서에 다른 Resource를 삽입
```
audio, canvas, emved, iframe, .....
```
- `Interactive Content` : 사용자의 상호작용을 위해 특별하게 의도

## HTML5를 오픈웹플랫폼(open web platform)으로 생각해본다면, 어떤 것들로 구성돼 있을까요?
-> ? 질문 자체가 이해가 안감

## 쿠키(Cookies)와 세션저장소(sessionStorage)와 로컬저장소(localStorage)의 차이점을 설명해주세요.
-> 쿠키는 서버가 유저를 기억하기위한 수단으로, 전통적으로 사용되었습니다.
예를들어 웹페이지에서 ID:123 이라는 쿠키를 저장해놓으면, 다음에 유저가 접속했을 때에 서버가 ID쿠키를 읽어들여 유저가 123이라는 것을 확인하는 식이죠.
반면, 웹스토리지는 HTML5에서 표준으로 지정되었으며,local storage와 session storage 두종류가 있습니다.
쿠키에 비해서 큰 데이터를 저장할 수 있고, 서버로는 전송이 되지 않는 차이점이 있습니다.
Local storage는 데이터에 유효기한이 없고, session storage는 창을 닫으면 데이터가 초기화되는 점만 제외하면 완전히 같습니다.
쿠키는 HTML header에서 서버와 통신을 하지만, 웹스토리지는 그렇지 않기 때문에 속도적 측면에서 약간 더 우위를 갖고 있습니다.
-> 쿠키는 매번 서버로 전송된다.
`웹 사이트에서 쿠키를 설정하면 이후 모든 웹 요청은 쿠키정보를 포함하여 서버로 전송됩니다. Web Storage 는 저장된 데이터가 클라이언트에 존재할 뿐 서버로 전송은 이루어지지 않습니다. 이것은 네트워크 트래픽 비용을 줄여 준다는 주요한 장점이 됩니다.`

# Javascript

## 사용해 본 Javascript 라이브러리들을 말씀해주세요.
-> jQuery

## Java와 Javascript의 다른 점은 무엇인가요?
-> class 및 prototype의 차이

## 컴파일러 / 인터프리터
1) 컴파일러 : 고급언어로 쓰여진 프로그램이 컴퓨터에서 수행되기 위해서는 컴퓨터가 직접 이해할 수 있는 언어로 바꾸어 주어야 합니다. 이러한 일을 하는 프로그램을 컴파일러라고 합니다.
번역과 실행 과정을 거쳐야 하기 때문에 번역 과정이 번거롭고 번역 시간이 오래 걸리지만, 한번 번역한 후에는 다시 번역하지 않으므로 실행 속도가 빠릅니다.
2) 인터프리터 : 소스 프로그램을 한번에 기계어로 변환시키는 컴파일러와는 달리 프로그램을 한 단계씩 기계어로 해석하여 실행하는 ‘언어처리 프로그램’입니다. 줄 단위로 번역, 실행되기 때문에 시분할 시스템에 유용하며 원시 프로그램의 변화에 대한 반응이 빠릅니다.
한 단계씩 테스트와 수정을 하면서 진행시켜 나가는 대화형 언어에 적합하지만, 실행 시간이 길어 속도가 늦다는 단점이 있습니다.
프로그램이 직접 실행되므로 목적 프로그램이 생성되지 않는다.

## 프로토 타입
-> JavaScript에서 기본 데이터 타입` boolean, number, string, 그리고 특별한 값인 null, undefined `을 제외한 모든 것이 객체입니다. 객체가 만들어지기 위해서는 자신을 만드는 데 사용된 원형인 프로토타입 객체를 이용하여 객체를 만듭니다. 이때 만들어진 객체 안에 __proto__ (비표준) 속성이 자신을 만들어낸 원형을 의미하는 프로토타입 객체를 참조하는 숨겨진 링크가 있습니다. 이 숨겨진 링크를 프로토타입이라고 정의합니다.
-> prototype이 여러 개 이어져 있는 것이 바로 prototype chain

## Javascript에서 어떻게 상속을 하는지 설명할 수 있나요?
-> 기본적으로 상속을 할수 는 없으나, prototype을 이용하여 상속 한것 처럼 할 수 는 있다.
1) 생성자 함수(1)를 만든다. 그럼 프로토타입 객체(1)이 나오겠지
2) 생성자 함수(1)에 메서드와 속성을 부여한다.
3) 다른 생성자 함수(2)를 만들고 그 생성자 함수의 prototype(2)을 첫번째 성성자 함수로 지정한다.
4) 그럼 생성자 함수(2)의 prototype(2)은 생성자 함수(1)이되고 prototype(1)의 속성과 메서드 또한 상속 받는다.
5) 무슨 법망을 패해 재산 상속하는 대기업도 아니고,,,,
-> Object.create() : IE9부터 지원함ㅁㅂ₩ ㄱ

## apply 와 call (소유자인 함수를 호출하면서 this를 넘긴다.)
->

## scope
->  Scope은 if, for 문 같은 블럭에서는 생성되지 않고 오직 function 단위로만 생성된다. 하지만 with 문, 또는 try-catch 문으로 scope을 변경 할 수 있다.
- 각각의 Context는 언제나 1개의 변수 환경(Variable Environment), 1개의 Lexical Environment, 그리고 1개의 ThisBinding 속성, 총 3개의 부분으로 구성되 있다.
- Scope은 크게 Global Scope 과 Local Scope, 두가지 종류로 나뉘는데, 이 중 Global Scope은 스크립트 실행시 생성되는 Execution Context의 Scope이고, local scope은 function 호출시 생성되는 Execution Context의 scope이다. 참고로 Scope은 if, for 문 같은 블럭에서는 생성되지 않고 오직 function 단위로만 생성된다. 하지만 with 문, 또는 try-catch 문으로 scope을 변경 할 수 있다.

(1) Lexical Environment Object
한글로 번역(의역)하자면 "구성 환경 객체"이라고 할 수 있겠다. 해당 Context에서 서언된 변수/함수들의 Reference 값을 저장하는 객체이다.(내부 구성은 Variable Environment Object 에 저장된다). Identifiers(변수/함수이름)을 Reference(메모리 참조값)으로 변환할 때 사용된다. Execution Context의 생성 초기시점에는 아래에서 설명할 Variable Environment Object와 정확히 같은 값을 가지나, Context 내부에서 Scope Augmentation이 실행될 시, Variable Environment Object와는 달리 새로운 Identifier 와 그의 Reference 값이 추가된다.

(2) Variable Environment Object
한글로 번역(의역)하자면 "변수 환경 객체"이라고 할 수 있다. 사실 변수 환경 또한 Lexical Environment(구성 환경)에 포함되는 개념이나, 위에서 설명한 Lexical Environment Object가 생성 후에 내부 값이 변할 수 있는 것과 달리 Variable Environment Object는 내부에서 선언된 변수(Variables) 함수 선언(Function Declarations) 함수 매게 변수(Formal Parameters) 들을 저장하기 때문에 Hoisting등 this 키워드를 이용한 Expression에 의해 새로운 변수/함수가 등장하더라도 절대로 값이 변하지 않는다.

## this
1) Global scope에서 사용될 때에는 window를 가르킨다. (window 객체)
2) 함수에 사용될 떄에도 this는 전역 객체를 가르킨다. (window 객체)
3) **객체에 속한 메서드에서 사용될 때 this는 메서드가 속한 객체를 가르킨다.**
4) 객체에 속한 메서드의 내부 함수에서 실행될때 this는 전역 객체를 가르킨다. (window)
5) 생성자 함수에서 사용될때 this는 이 생성자 함수로 생성된 새로운 객체를 가르킨다.
6) __객체에 속한 메서드 내부의 함수에서 실행될때, this를 메서드가 속한 객체를 가리키고 싶을때, var self = this 등을 사용하여 별도 함수로 지정해 준다.__

## apply와 call로 this를 제어
```javascript
var obj = {}
function func(){
  if(this===window){
    console.log("this===window")
  }
  else if(this===obj){
    console.log("this===obj")
  }
  func();
  func.apply(obj);
}
```
- apply로 인자값에 obj를 전달하여 `func.apply(obj)`를 실행하면 `"this===obj"`가 실행된다. 즉 aplly를 통해 저 함수의 this를 window에서 obj로 변경 시킨 것이다.

```javascript
apply([thisObj[,argArray]])
```
- thisObj: 선택사항 - this개체로 사용될 개체, thisObj가 제공되지 않으면 global 개체가 thisObj로 사용됨.
- argArray : 선택사항 - 함수에 전달될 인수 집합

```javascript
var o = {x: 15};

function g(object, func){
  var args = [];
  for(var i = 2; i < arguments.length ; i++){
    args.push(arguments[i]);
  }
  func.apply(object, args)
}

function f(message1, message2){
  slert(message1 + (this.x * this.x) + message2);
}

g(o, f, "The value of x squared = "," .wow!");
```

## bind (ES5에 추가된 문법)
```javascript
var foolycooly = {
  name: "FoolyCooly",
  introduce: function(){
    "use strict"
    return "I'm " + this.name
  }
}
foolycooly.introduce();    // "I'm foolycooly" var func = foolycooly.introduce; func()    // Uncaught TypeError: Cannot read property 'name' of undefined
```
얼핏 보면 func 실행시 "I'm foolycooly"라는 문장이 나와야 하나 name을 찾을 수 없다며
에러가 난다. (use strict 모드를 빼고 실행하면 "I'm "이라는 문자열만 리턴된다)

**객체에서 메서드를 추출하는 순간 그 메서드는 일반 함수가 된다.**
func의 실행 컨텍스트
this가 window 객체를 바라보기 때문에 this.name이 undefined가 된다. 해결방법은
```javascript
var func2 = foolycooly.introduce.bind(foolycooly); func2()    // "I'm foolycooly"
```
이런식으로 바인딩 해줘야 한다.

## undefined와 undeclared 변수는 무엇인가요?
-> `undefined`는 변수는 정의 됬으나 값이 참조 되지 않은 변수이고,
`null`은 참조가 끊어진 변수 이며(어떤 참조값이 존재 하지 않음으로 비어있는 값을 가진 변수),
`undeclared`는 변수자체가 정의 되지 않은것 을 뜻한다.

## 객체 속성 함정!!!!
```javascript
counter.increment() === counter['increment']()
```
## 클로져(Closure)는 무엇이며, 어떻게/왜 사용하는지 설명해주세요.
-> 1)클로져
- 흔히 함수 내에서 또다른 함수를 정의하고 사용하면 클로저라고 한다. 하지만 대개는 정의한 함수를 리턴하고 사용은 바깥에서 하게된다.
- 클로저는 독립적인 (자유) 변수 (지역적으로 사용되지만, 둘러싼 범위 안에서 정의된 변수)를 참조하는 함수들이다. 다른 말로 하면, 이 함수들은 그들이 생성된 환경을 '기억'한다.
- _클로저를 사용할때 대부분의 문제는 반복문에서 나타난다... ...onfocus이벤트에 연결된 함수가 클로저이기 때문이다. 이 클로저는 함수 정의와 setupHelp 함수 범위에서 캡처된 환경으로 구성된다. 루프에서 세개의 클로저가 만들어졌지만, 각 클로저는 값이 변하는 변수가(item.help) 있는, 같은 단일 환경을 공유한다. onfocus 콜백이 실행될 때 콜백의 환경에서 item변수는(세개의 클로저가 공유한다. ) helpText리스트의 마지막 요소를 가리키고 있다._


```javascript
function getClosure() {
  var text = 'variable 1';
  return function() {
    return text;
  };
}
var closure = getClosure();
console.log(closure()); // 'variable 1'

```

```javascript
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12
```
- 이 예제에서 단일 인자 x를 받아서 새 함수를 반환하는 함수 makeAdder(x)를 정의했다. 반환되는 함수는 단일 인자 y를 받아서 x와 y의 합을 반환한다.

- 본질적으로 makeAdder는 함수 팩토리다. (특정한 값을 원래 함수의 인자에 덭붙일 수 있는 함수들을 만든다). 위의 예제에서 두 개의 새로운 함수들을 만들기 위해 함수 팩토리를 사용한다. 하나는 원래 인자에 5를 더하고 다른 하나는 원래 인자에 10을 더한다.

- add5와 add10은 둘 다 클로저다. 이들은 같은 함수 본문 정의를 공유하지만 서로 다른 문법적 환경을 저장한다. add5의 환경에서 x는 5이지만 add10의 환경에서 x는 10이다.

- **프라이빗 메소드 (private 메소드) 흉내내기**
```javascript
var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };
})();

console.log(counter.value()); // logs 0
counter.increment();
counter.increment();
console.log(counter.value()); // logs 2
counter.decrement();
console.log(counter.value()); // logs 1

```


## 클로져를 만들 때 선호하는 패턴은 무엇인가요? argyle (IIFEs에만 적용할 수 있다)
-> IIFE함수
javascript는 실행코드 블럭 단위로 context 를 스텍에 쌓게 되고 push, pop 을 통해 코드블럭이 실행 된다. 이때 각각의 실행 코드블럭이 수행되는 시점에서 실행 환경을 저장하게 되는데 이는 실행 유효범위인 scope 에 의해 결정된다.
이 scope 는 chain구조로 연결되어 있어 현재 실행 시점 이전의 scope 를 타고 올라가는 형태로 참조 되기 때문에 현재 scope 에 선언되지 않는 객체참조가 가능하다.
이는 java 등의 언어만 다루던 사람들에겐 좀 의아한 모습으로 동작한다. local 변수와 global 변수의 경계와 유요범위 설정에 대한 이해를 한번에 무너트려버리기 때문이다.

## 익명함수(anonymous functions)는 주로 어떤 상황에서 사용하나요?
-> 익명함수의 사용은 함수 선언이 아닌 함수표현식을 이용하는 방법이다.
`주로 IIFE함수를통해 프라이벳 변수를 정의 할 수 있다. `

## "Javascript 모듈 패턴(Javascript module pattern)"이 무엇인지 설명을 해주시고, 언제 사용하는지도 말씀해주시기 바랍니다
-> 일반적으로 Module Pattern은 원래 기존의 소프트웨어 엔지니어링에서 클래스에 대한 **private 과 public한 캡슐화**를 제공하는 방법으로 정의되었습니다. 자바스크립트에서 Module Pattern은 클래스의 컨샙을 모방해서(ES6 부터는 클래스를 지원합니다.) private, public 메서드 모두를 포함시킬수가 있고 단일 객체 내의 변수를 포함할수있습니다. 이렇게 하면 특정부분의 전역 스코프로 부터 보호하는 것이 가능해집니다. 이런 특성의 결과로 우리는 동일 페이지 내에서도 함수이름이나 변수가 출동하는 것을 예방할수있습니다. 예를들면 다음과 같습니다.
-> **IIFE함수에서 return으로 된건 public(여튼 함수의 이름을 통해서만 접근할 수 있다.)이고 return이 아닌것은 완전 privat으로 전역에서 완전히 분리된다.**

## 당신의 코드를 어떻게 구성하는지?(모듈 패턴, Class기반 상속?)
모듈패턴을 주로 사용한다. vue의 경우 data들이 보관되는 data가 함수로 되어 있고 return 객체로 취급된다.

## 호스트 객체(Host Objects)와 네이티브 객체(Native Objects)의 차이점은 무엇인가요
-> 네이티브 객체: ECMAScript 표준에 정의된 객체
-> 호스트 객체: 호스트 환경(예를 들면, 브라우저 환경)에서 정의된 객체
네이티브 객체는 내장 객체(예를 들면, Array나 Date) 또는 사용자 정의 객체(var o = {};)로 분류된다. 호스트 객체의 예로는 window 객체나 모든 DOM 객체를 들 수 있다. 어떤 객체가 호스트 객체인지 궁금하다면 코드를 브라우저가 아닌 다른 환경에서 실행시켜보면 된다. 만약 잘 동작한다면 네이티브 객체만을 사용하고 있는 것이다.

## 다음 코드의 차이점은 무엇인가요?
```javascript
function Person(){}
var person = Person()
var person = new Person()
```
1) `function Person(){} `
- 함수 선언이다. 이는 함수 객체 생성을 위한 기본 그릇이 되며, Person의 prototype이 참조할 `함수의 환경`을 담고 있다.  Global scope에서는 Person이라는 함수가 선언되었다.
2) person이라는 변수에 Person()함수의 return값을 저장한다.
3) person변수에 Person생성자 함수 객체를 생성하여 할당한다는 의미가 된다. 이때 할당되는 객체는 Person의 prototype을 `기반으로`작성된다.

## .call과 .apply의 차이점은 무엇인가요?
-> 함수를 빌려와서 인자를 마음대로 바인딩 시키고 this도 바꿔줄 수 있다.
-> call은 원시데이터를 인자로 넘겨 줄 수 있고, apply는 array를 넘겨 줄 수 있다. (참조값)
- this는 현재 객체로 호출한 객체를 참조합니다.


## AJAX에 관해 가능한 자세히 설명하세요.
-> AJAX (Asynchronous JAvaScript and XML) XMLHttpRequest객체를 이요아여 비동기 방식으로 서버와 통신하는 것
- Ajax는 서버로부터 데이터를 가져와 전체페이지를 새로 고치지 않고 일부만 로드할 수 있게 하는 기법이다.
- Asynchronous JavaScript and XML 의 약자로서 XMLHttpRequest 객체를 이용하여 비동기 방식으로 서버와 통신을 하는 것을 말한다.

- 웹 브라우저의 클라이언트와 서버간 통신은 url를 이용한 http 통신으로 이루어진다. 즉 브라우저가 서버로 request를 날리기 위해서는 해당 브라우저의 url 주소를 변경하여야 하는데 이때는 페이지 이동이 일어나게 된다.

- 하지만 ajax 의 경우 브라우저의 url 주소의 변경을 이용하지 않고 내부적으로 통신하여 response 를 받아오기 때문에 특정 데이터만 불러오거나 비동기로 데이터를 불러와야하는 경우 사용된다.

- 이때 Same Origin Policy 정책으로 인해 cross domain 을 허용하지 않기 때문에 외부 도메인을 사용하여야 하는경우 JSONP, XML 등을 이용하여야 한다.

##  "호이스팅(Hoisting)"에 대해서 설명 하시오.
- 호이스팅은 자바스크립트 엔진이 실행 컨텍스트를 생성하면서 scope 를 정의 할때 기술된 순서에 상관없이 선언부에 대한 처리를 해석 우선순위 최우선으로 끌어올려 먼저 해석하는 것을 의미한다.

싶게 말해서 코드 작성 순서에 상관없이 `선언구문`을 최우선으로 해석한다는 것이다.
- 이때 유념해야할 것이 하나 있는데 호이스팅은 선언에만 적용되고 할당구문에는 적용되지 않는다.
- 선언과 동시에 값을 할당하는 경우 호이스팅 되지 않으며 해당구문을 만나야만 해석하게 된다

## 코드 최적화를 하는 시점은 언제인가요?
-> code refactoring 할때?

## FOUC가 무엇이며 FOUC를 어떻게 방지하나요?
-> FOUC(Flash Of Unstyled Content)는 외부의 CSS가 불러오기 전에 잠시 스타일이 적용되지 않은 웹 페이지가 나타나는 현상이다. 이를 해결하기 위해서 CSS 관련 로딩 구문은 반드시 head 안에 포함시켜 css 로드 전에 D.O.M 트리를 구성하는 것을 방지 주는 것이 좋다.

## JSONP가 무엇인가요?(Same Origin Police / Cross-Origine Resource Sharing)
->웹 브라우저에서 CSS나 js같은 리소스 파일들은 동일 출처 정책에 영향을 받지않고 로딩이 가능하다. 이런점을 응용해서 외부 서버에서 읽어온 JS파일을 Json으로 바꿔주는 일종의 편법적인 방법이다. 단점은 리 소스 파일을 GET메서드로 읽어오기 때문에 GET방식의 API만 요청이 가능하다.
-> ‘JSONP’라는 데이터 타입 요청이 아닌 `script` 호출 방식

## 이벤트 버블링(Bubbling)에 대해서 설명하세요.
-> 이벤트가 부모를 타고 올라가는 것.
` event.stopPropagation()`
`event.preventDefault()`

## "속성(Attribute)"와 "요소(property)"의 차이가 무엇인가요?
-> attribute 는 element가 가지고 있는 것. element의 형식을 지정한다. (html tag의 속성)
-> property는 object가 가지고 있는 구성요소 이다. window object가 가 지고 있는 prioperty로는 name, parent, history, innerHeight, self, status 등등 object가 이들의 property를 가지고 object자신의 역할을 합니다. property는 object가 가지고 있는 것들입니다. 또 CSS style에 지정한 것들도W3C에서 property라고 부ㅠ릅니다. `<div style-"color:red; font-size:15pt;">` 에서 굵은 글자들이 style property 입니다.

## Javascript 객체를 확장하는 것이 좋지 않은 이유는 무엇인가요?
Javascript의 객체를 Object.prototype 을 이용해서 확장하는 것은 좋은 방법이 아니다. 이는 기본적으로 참조 무결성을 깨틀여 버리게 된다 Object.prototype 을 확장하거나 변경하는 행위는 해당 prototype을 참조로 하는 모든 객체에 영향을 미치게 된다. 즉 특정 영역에서 변경을 위해 수행된 코드로 인해 애플리케이션 전체에 영향을 주게 된다는 것이다.
이는 극히 위험한 일이다. 상황에 따라 변형되어버리는 이런 구조로는 프로그램을 예측할수도 없을 뿐아니라 추후 코드 실행의 무결성을 보장하지 않는다.

## Document Load 이벤트와 Ready 이벤트의 차이가 무엇인가요?
-> 두 이벤트 모두 DOM을 다루기위한 이벤트 이다.
1) Ready 이벤트 : DOM트리가 만들어 지면 실행됨. 단 Resouce(이미지, 동영상등)은 아직 로드되지 않은 상황이여서, DOM 접근은 가능하나 Resource를 핸들링 하려 하면 오류를 내밷음.
2) load 이벤트 : window를 로드하고난 이후에 실행되는 코드들은 모든 객체나 프레임들(외부 contents를 담는 프레임까지), 이미지까지 모두 로드한 이후에 실행되므로 document에서 제한된 작업을 진행할 수 있겠습니다. 다만, 그렇게된다면 페이지의 로드타임만큼 사용자는 오랜 시간을 모니터앞에서 답답하게 기다려야하겠죠.

## ==와 ===의 차이점은 무엇인가요?
-> `==`은 값만 비교 `===`는 타입까지 비교. 즉 `===`더 확실하다.

## 브라우저의 URL에서 파라메터를 얻을 수 있는 방법에 대해서 설명하세요.
-> `var a = String(document.location).split("/")`

## 이벤트 딜리게이션(Event Delegation)에 대해서 설명하세요.
코드를 통해 살펴보자. 예를 들어, 다음과 같은 마크업을 가진 메뉴가 있다고 하자.
```html
<ul id="menu">
    <li><button id="file">파일</button></li>
    <li><button id="edit">편집</button></li>
    <li><button id="view">보기</button></li>
</ul>
```
각각의 기능 클릭 시 특정 동작을 하게 하려면 보통은 다음과 같이 이벤트를 등록한다.
```javascript
document.getElementById('file').addEventListener('click', function(e) {
    // 파일 메뉴 동작
});
document.getElementById('edit').addEventListener('click', function(e) {
    // 편집 메뉴 동작
});
document.getElementById('view').addEventListener('click', function(e) {
    // 보기 메뉴 동작
});
```
메뉴가 추가될 때마다 이벤트 핸들러가 하나씩 늘어날 것이다.

하지만 이벤트 위임을 사용하면 상위 엘리먼트인 <div id='menu'>에만 이벤트 리스너를 추가하면 된다.
```javascript
document.getElementById('menu').addEventListener('click', function(e) {
    var target = e.target;
    if (target.id === 'file') {
        // 파일 메뉴 동작
    } else if (target.id === 'edit') {
        // 편집 메뉴 동작
    } else if (target.id === 'view') {
        // 보기 메뉴 동작
    }
});
```
파일, 편집, 보기 등을 클릭하면 `항상 부모에 등록된 핸들러를 거치게 된다.` target(또는 srcElement)은 이벤트가 발생한 엘리먼트를 반환하기 때문에 엘리먼트의 특징에 따라 분기 처리만 하면 된다. 메뉴가 추가될 때마다 핸들러를 추가할 필요도 없다.
이와 같이 이벤트 위임 이용하면 각주 개발 시 고민했던 매번 이벤트를 붙여야 하는 문제를 해결할 수 있을 것이다.
동적인 엘리먼트에 대한 이벤트 처리가 수월하다.
상위 엘리먼트에서만 이벤트 리스너를 관리하기 때문에 하위 엘리먼트는 자유롭게 추가 삭제할 수 있다.
### 이벤트 위임(Event Delegation)의 장점
- `이벤트 핸들러 관리가 쉽다. `
동일한 이벤트에 대해 한 곳에서 관리하기 때문에 각각의 엘리먼트를 여러 곳에 등록하여 관리하는 것보다 관리가 수월하다.
- `메모리 사용량이 줄어든다. `
동적으로 추가되는 이벤트가 없어지기 때문에 당연한 결과이다. 1000건의 각주를 등록한다고 생각해보면 고민할 필요로 없는 일이다.
- `메모리 누수 가능성도 줄어든다. `
등록 핸들러 자체가 줄어들기 때문에 메모리 누수 가능성도 줄어든다.


## 다음 코드를 동작하게 만드세요. javascript [1,2,3,4,5].duplicator(); // [1,2,3,4,5,1,2,3,4,5]

```javascript
Array.property.duplicatior = function(){
  var self = this;
  return self.concat(self);
};

console.log([1,2,3,4,5].duplicator() );
// [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
```

## Javascript에서 메모이제이션(memoization, 중복 계산 방지)에 대한 전략을 설명해주세요.
- `메모이제이션 패턴` : 함수내에 불필요한 작업을 피하기 위해 이전에 연산된 결과를 저장하고 사용하는 패턴


아래 함수를 수행하면 무려 fibonacci함수가 453번이 실해된다(count1를 확인해보라) 이렇게 되면 성능에 막대한 영향을 준다. 따라서 위에 함수를 메모제이셔패턴으로 아래처럼 변경해보자.
```javascript
var count = 0;
fibo(n){
  count++;
  return n < 2 ? n : fibo(i-2) + fibo(i-1);
}

for (var i=0; i<=10; i+=1){
  console.log("i=", fibo(i))
}
```
이렇게 변경되면 29번만 함수가 실행된다(count2를 확인해보자) 전자의 경우에는 1~10번까지의 모든 각각의 수를 비교하기 위해서 fibonacci 함수가 호출되었으나. 후자인 경우에는 핵심은 memo라는 배열을 만들고 그 배열을 클로저 를 통해 접근한다. 로직을 처리하는 클로저 가 반복되서(피보니치수열을 찾을때까지) 수행됨으로 더 빠르게 처리할 수 있는 것이다.
```javascript
var count = 0;
(fibo(){
  var memo = [0, 1];
  var count = 0;
  var fib(n){
    count++
    var result = memo[n];
    if (typeof result !== 'number'){
      result = fib(n-1) + fib(n-2);
      memo[n] = result;
    }
    return reusult;
  }
  return fib;
})();

```

## 결과가 무엇일까요~?
```javascript
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```

# CSS

## media print
```html
<style type="text/css">

@media print {
    .advertising {display:none;}
}

</style>

<div class="advertising">광고</div>

본문
```

## 점수 환산
- `!important` : 10,000점
- `inline style`: 1,000점
- `id` : 100점
- `class` : 10점
- `tag` : 1점
- `*`: -점
