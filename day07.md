# day07

new-layer-new artboard

custom

1440 px 4000px

artboard후 크기정한후



```url
http://www.clearboth.org/
```

- HTML5명세
- HTML 오픈 레퍼런스



<input type="search" required="required">

업그레이드를 하면 더 좋은 것을 할수있습니다 
라는 말로 여러가지 선택사항을 주고 니가 원하면 더 나은것도 있다는 말을 주면 사용자는업그레이드를 할수도 있다.

```
<input type="search" required placeholder="검색어를 입력하세요" aria-label="검색어" >
```

전에는 aria-label은 title로도 사용가능하다.

접근성 지킴이 라는것이 있다
html과 css를 볼줄알고 웹접근성에 관심이 있으면

```html
<button>
</button>
```

button은 기본이 submit임



### 버튼기능을 만드는 두가지방법

```html
  <button class="btn-search" class="btn-searching">검색</button>
  <input type="submit" value="검색">
```

### input:image

```html
<input type="image" src="images/html5_logo.png" alt="검색 버튼">
```

<input type="submit" value="검색">

              <input type="image" src="images/html5_logo.png" alt="검색 버튼">

약도이미지에 alt를 약도라는 단어로 주는것은 옳지않다.
alt는 대체텍스트이기에 신사역 5번출구 직진 이런식으로 써야함

만약에 약도이미지가 있고
밑에 버스로 오는 방법 ,지하철로 오는 방법이라고 텍스트로 써있다면
alt에는 어디로 오는 방법 아래 설명이 나와있음 같은 식으로 적어줘야 한다.?
title에는 보충설명?

title을 넣으면 툴팁이 나왔는데 IE8에 버그였다
그럴떄 alt를 읽어서 hover시 서버쪽에서 툴팁이 나오고 정보가 나오게 하면된다.

약도이미지

alt는 약도

title에 본문 내용참조

aria-descriedby="아이디"

p태그에 아이디값을 주고 



```css
.search-heading::before{
  content:url()
}
```

가상요소에 이미지를 바로 집어넣을수도 있음

유연한 크기를 위해서 em단위를 사용할수도 있다 그대신 완벽히 설계후 해야한다 상속문제가 생길수도 있음

```css
background: #ccc linear-gradient(to bottom, #ccc 0%, #fff 80%, #fff 100%);
```

0%, 80%, 100%는 그라데이션의 위치 



# WAI-ARIA

마크업에 역할, 속성, 상태정보를추가하여 보조기기를 통해서 접근성 및 상호 운용성을 향상시키고 보다 나은 사용자 경험을 제공하기 위함

### 센스리더들

Jaws, NVDA, voiceover, windowEyes, Dolphin, satogo

## Aria 의 세가지 기능

1. 역할

   - 특정 요소에 역할을 정의하는것
   - 역할을 부여하여 사용자에게 정보를 제공
   - 부여된 역할은 동적으로 변경할 수 없음

   ```html
   <div role="menu", ></div>
        <div class="btn_01" role="button">
   <div id="auth_error" role="alertdialog">
     
   </div>
   ```

2. 속성 과 상태

   - 요소가 기본적으로 갖고 있는 특징이나 현황

   - 속성과 상태는 'aria-'접두어를 가진다.

   - 상태는 요소의 상황을 나타내므로 애플리케이션이 실행중에 자주 

     속성은 상대적으로 

     ​

     * 속성

       ​

     ```html
     <input type="checkbox" aria-required="true">
     ```

     ```html
     <input type="text" aria-describedby="reference">
     <div id="reference">추가설명</div>
     ```

     ```html
     <div role="group" aria-label="그룹제목"></div>
     ```

     * 상태

       aria-expanded="true" 확장되어 이씨는 상태의 탭패널

       aria-invalid="true" 오류가 발생한 상태의 입력상자

       aria-pressed="true" 선택된 상태의 토글버튼

   ## ARIA와 html5

   <nav role="navigation">

   이런거는 안좋음

   ​

   <h1 role="button">버튼<h1>

   키보드 사용보장

   <span role="button" tabindex="0"> 버튼</span>

   키보드포커스가 순서대로 tabindex의 순서마다 걸린다.

   - 레이블 제공

     <div

     div id=user-name 이름

     input text id=name aria-labelledby="user-name"

     이 인붓의 레이블이 유저네임이 됨

   - label for=usr=pwd 비밀번호

   - input type=password id=usr-pwd name=usr-pwd aria-message

   - span

```html
<p>
  <i class="fa fa-pied-piper-alt" aria-hidden="true"></i><!--hidden으로 읽지마-->
  fa-pied-piper-alt
</p>
```

ir기법

```html
<div role="button" tabindex="0">
  print page
</div>
```

role로 button으로 주어서 버튼임을 명시

```html
<div role="button" tabindex="0" aria-pressed="true">
  Button
</div>
```

aria-pressed="true" 버튼이 눌린상태
이값을 없애는것은 자바스크립트로 false를 줌

```html
<span id="tip" class="tooltip" role="tooltip">
	also known as user ID
</span>
<input id="user-name" name="user-name" type="text" aria-describedby="tip">
```

인풋에 커서를 대면 span의 팁이의 내용이 나옴? 이 인풋이 스판에 있는거라고 설명하는것

tabindex="-1" 

캡션,썸머리(테이블을 대표하는 요약)



```html
<a href="#" class="notice-more bullet" title="공지사항">더보기</a>
```

title에 공지사항 더보기 보다는 공지사항이라고 적는게 낫다 센스리더가 읽을때 공지사항 더보기 더보기링크라고 읽어서 정보중복이 생기기떄문











