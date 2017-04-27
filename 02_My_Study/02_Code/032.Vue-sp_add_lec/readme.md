# vue에 대한 추가 수업(녹화분)
# 개요
- 수업시간에 진행하지 못한 vue 나머지 수업
- vue-cli, vue transition, router, resorce등의 활용
## 시간
- 2017년 4월 4일 22:00 ~
---
# 1.vue-cli
- vue.js project의 구성을(scaffolding)을 위한 command line interface
- vue를 사용할때, 폴더 구조 및 테스트, 빌드에 대한 프로젝트 관리 인터페이스
- `npm install -g vue-cli`
- `vue init <template-name> <project-name>`

# 2. vue-router
- vue.js 와 vue-router로 단일 페이지 에플리케이션을 만들 수 있다
- vue.js를 통해 컴포넌트로 애플리케이션을 구성한다.
- 각 컴포넌트를 route에 `mapping`하고 `vue-router`가 어디서 렌더링 할지 지정 함으로서 `single page`를 구성할 수 있다.

## vue 구조
`index.html <- /dist/build.js <- (vue.js에 의한 변환) main.js <- `

## `<router-link>`
- `<router-link>`는 라우터 지원 앱에서 사용자 네비게이션을 가능하게 하는 *컴포넌트* 이다.

## 동적 세그먼트
- 동적 세그먼트의 값은 모든 컴포넌트에서 this.$route.params로 표시된다.
- 즉, USer의 템플릿을 다음과 같이 갱신하여 현재 사용자 ID를 표현할 수 있다.
```js
const User = {
  templater: '<div>User{{ $route.params.id}}</div>'
}
```
- 동일한 라우트에 여러 동적 세그먼트를 가질 수 있으며, $route.parmas의 해당 필드에 매핑된다. 
