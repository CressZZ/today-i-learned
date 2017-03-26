# 2017년 3월 22일 수업 복습
# 1. 개요
- 맥북 침수됨
- 수업 못들음
- 메니저님이 맥북 빌려줌
- 맨붕
- 원래 직종에서 면접 제의 옴
- 2차 맨붕
- 나의 미래는 어찌 되는 것인가.....
- 짜증. 스트레스
- 뷰를 이용하여 스트리트파이터를 만들어 보자.

## 시간
15:30 ~ 하루종일 예상

## 특이사항


# 2. 내용
## 2.1 StreetFighter 주요 파일들
### StreetFighter 개요
#### 3개의 화면
- 시작화면, 싸우는 화면, 끝난화면
- 시작화면과 싸우는 화면은 `v-if`, `v-else`로 화면을 제어한다.
- 끝난화면의 경우 `v-else`로 제어 할수 없다. 모달창으로 띄울거기 때문에 싸우는 화면과 중복되어야 하기 때문이다. `v-else`로 처리 해버리면 두화면이 동시에 생성될 수 없다.

### StreetFighter.html

### StreetFighter.css

### StreetFighter.js
#### 1. bgm 제어 함수
- esc키 정의, esc를 누르면 멈춤, window.document에 해당 이벤트를 걸어 버림
#### 2. 각종 변수? 함수? (모듈에 사용되는 헬퍼 함수? 를 정의 하나?)
- stages변수, player변수
- choiceStage(), choicePlayer(), damage() 함수
- choice에 필요한 randomNumber() 함수
- 스테이지 배경화면, 승자, 3가지 화면 선택, 스타트화면관련 데이터, 게임 플레이어 데이터(이름, hp, 스타일), 게임 버튼s 등 스트리터파이터에 사용되는 상태데이터 속성
#### 3. 뷰 인스턴스
- `el: '#streetfighter'`
- `data: model`
- `created: //음악 재생함수 호출(전역 함수)`
- `mounted: // 스테이지 배경 선택 함수 호출`
- `computed: // `
- 인스턴스 메서드 `methods: ` (함수가 호출되면 아래의 명령을 수행하라)
    - class 설정 함수 : stageClass,
    - v-if 등을 위한 boolean설정 함수 : is_started
    - 속성 설정 함수 : src(케릭터 이미지),
    - 이벤트 설정 함수 : @click(각 버튼에 해당하는 액션)
    - 메서드안에 필요한 함수? : checkGameWineer, gameOver, reGameStart


#### 2.
## 2.2 VueJS (Study)
### Vue-js-componenet.html

### vue-js-computed-property-getter-setter.html

### vue-js-template.html

### vue-js-todos.html

# 3. 참고자료 Street Fighter

- [Street_Fighter_Wiki](http://streetfighter.wikia.com/wiki/Street_Fighter_Wiki)
- [Ken's Street Fighter II with animated sprites](http://codepen.io/jkneb/pen/smtHA)

## oncanplay의 사용법
- html
```html
<element oncanplay="myScript">
```
- javascript
```javascript
object.oncanplay = function(){myScript};
```
- javascript with addEventListener()
```javascript
object.addEventListener("canplay", myScript);
```
