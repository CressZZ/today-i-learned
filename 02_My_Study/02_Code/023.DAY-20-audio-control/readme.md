# 2017년 03월 08일 수업 복습
# 개요
- 수업복습
- 음악 플레이어 만들기

## 시간
- 18:40분 시작
- 23:42분 끝... 놀면서..밥도 먹고... 근데 힘듬...아;;;
## 특이사항
- 겁나 하기 싫음
### **Button 이벤트 관련**
- button등 이벤트 걸때에는 함수가 필요하다.
- 예를 들면 아래와 같은 형식은 이벤트가 아니라 바로 재생이 되어 버린다.
```javascript
btn_play.onclick  = audio.play();
```
- 하지만 function을 아래와 같이 걸던가
```javascript
btn_play.onclick  = function(){audio.play()};
```
- bind처리로 자기 자신을 빌려오면 어떻게는 되는듯
```javascript
btn_play.onclick  = audio.play.call(audio);
```
### audio관련 이벤트!!!!!!원래 있는거
- onloadstart
- ondurationchange
- onloadedmetadata
- onloadeddata
- onprogress
- oncanplay
- oncanplaythrough

## data 생성자 함수로 data 생성 시 여러개 생성 할 수 있게 하는것
```javascript
var Model = (function(){
  'use strict';
  //일단 data를 저장할 배열, 그리고 배열이 '몇개째'인지 확인해 줄 카운트 변수를 함수에 선언함으로서 이 두 변수는 모두가 공유한다.
  // 전역에서는 접근 불가 합수.
  var data_list=[];
  var generated_count = 0;


  // 아래 생성자 함수로 데이터가 생성 될 때.
  function _Model(data){
    if(data && !Array.isArray(data)){
      throw new Error ("초기 데이터 유형은 배열만 가능한다.");
    }
    // this!!즉 생성자 함수로 생성 될때 마다 생성된 객체는 고유의 .g값을 가지고 있다. 우앙......시리얼 넘버 같은걸 준다.
    // data_list에는 배열이 하나씩 추가된다.

    this.g = generated_count++;
    data_list.push(data || []);
  }
```



# 내용
1. 모듈공개로 오류감지 및 오디오 객체 유효성 검사
2. 오디오 객체에 관해
    - 오디오 객체 생성
    - 오디오 대체수단 생성
    - 오디오 재생
    - 시간 업데이트
    - 시크바 프로세스 만들기 (JS: 참조,  CSS: 만들기 )
    - function.prototype.bind 메서드 빌려 쓰기
