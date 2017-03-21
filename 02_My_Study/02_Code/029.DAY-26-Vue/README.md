# 2017년 03월 20일 월 수업 복습

---
# 1. 개요
- Vue-js를 공부한다.
- Vue.js는 렌더링 된 DOM을 기본 Vue 인스턴스의 데이터에 선언적으로 바인딩 할 수있는 HTML 기반 템플릿 구문을 사용합니다. 모든 Vue.js 템플릿은 스펙을 호환하는 브라우저 및 HTML 파서로 구문 분석 할 수있는 유효한 HTML입니다.
내부적으로 Vue는 템플릿을 가상 DOM 렌더링 함수로 컴파일 합니다. 반응형 시스템과 결합된 Vue는 앱 상태가 변경 될 때 최소한으로 DOM을 조작하고 다시 적용할 수 있는 최소한의 컴포넌트를 지능적으로 파악할 수 있습니다.
가상 DOM 개념에 익숙하고 JavaScript의 기본 기능을 선호하는 경우 템플릿 대신 렌더링 함수를 직접 작성할 수 있으며 선택사항으로 JSX를 지원합니다.
- 프레임 워크
## 시간
- 06:20 ~ 아몰라. 4시간 걸린듯.
## 특이사항
### IIEP 문법
```javascript
(function(Vue){
  'use strict';

  window.app = new Vue({
    el: '.demo',
    data: data
  });

})(window.Vue);
```
와
```javascript

  var app = new Vue({
    el: '.demo',
    data: data
  })
```
는 같나요?

### replace 함수 정규식
Javascript의 `replace`정규식은 다음과 같은 형태로 사용한다.
```
replace(바꿀 문자, 바뀌어질 문자)

바꿀 문자는 다음과 같은 형태로 정규식으로 사용할 수 있다. (정규식을 사용하지 않으면 위의 예에서 보았듯이 대체 대상 문자 중에서 첫 번째 만다는 문자만 대체된다.)


/패턴/정규식옵션

패턴 : 대체할 문자를 입력
정규식옵션 : g, i, m 중에 필요한 것 입력

g (global) : 첫번째 문자만이 아닌 패턴에 해당하는 모든 문자들을 검색하여 대체한다.
i (ignoreCase) : 대소문자 구분하지 않음.
m (multillineM) : 여러 줄 검색
```

### addEventListener
```javascript
function bindEvent(){
  demo_input.addEventListener('keyup', updateInputField);
}
function updateInputField(e){
  var user_input = e.target.value;
  updateData(user_input);
  updateText();
  updateArea();
}
```

### `<template> tag요소`
- v-if는 디렉티브기 때문에 하나의 엘리먼트에 추가해야합니다. 하지만 하나 이상의 엘리먼트를 전환하려면 어떻게 해야할까요? 이 경우 우리는 보이지 않는 래퍼 역할을 하는 ``<template>`` 엘리먼트에 v-if를 사용할 수 있습니다. 최종 렌더링 결과에는 ``<template>`` 엘리먼트가 포함되지 않습니다.
```html
<template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</template>

```
- 템플릿 v-if와 마찬가지로, v-for와 함께 <template> 태그를 사용하여 여러 엘리먼트의 블럭을 렌더링 할 수 있습니다. 예를 들어,
```html
<ul>
  <template v-for="item in items">
    <li>{{ item.msg }}</li>
    <li class="divider"></li>
  </template>
</ul>
```

---
# 2. 내용
## 주요 파일들
### 1. `data-binding__template-directives.html`
- `new Vue`를 통해 Vue를 생성하고(el, data 입력), `v-once`를 사용해 봄.

### 2. `study.vue`
- DOM에 데이터를 렌더링 하는 것을 `dom-script`, `jquery` 그리고 `vue`를 통해 구현해 보고, 왜 `vue`를 쓰는지 알아본다.
```javascript
var data = {
  message: ''
};
```
공통으로 쓰는 data

- jQuery 함수실행
- ``$(init)``

### 3. `vue-directive-if.html`
- `v-if`, `v-else-if`, `v-else`, `v-show`
- v-if 는 토글할때마다 불러들이고 삭제하는데, v-show는 한번에 불러들이고 보여준다.
- 상황에 따라 토글이 많은경우v-show를 쓰고 아니면 v-if를 쓰자

### 4. `vue-study-loop-v-for.html`
- `v-for` 문
- `template` tag를 쓸 수 있다.
### 5. `vue-study-template.html`
- 엥...아무것도 안함
### 6. `vue-study-text-html.html`
- `v-text`, `v-html`
#### 6.1 v-html
엘리먼트의 innerHTML을 업데이트 합니다. 내용은 일반 HTML으로 삽입되므로 Vue 템플릿으로 컴파일 되지 않습니다. v-html을 사용하여 템플릿을 작성하려는 경우 컴포넌트를 사용하여 솔루션을 다시 생각해 보십시오.

> 웹사이트에서 임의의 HTML을 동적으로 렌더링하면 XSS 공격으로 이어질 수 있으므로 매우 위험할 수 있습니다. 신뢰할 수 있는 컨텐츠에만 v-html을 사용하고 사용자가 제공한 컨텐츠에는 절대로 사용하지 마십시오
