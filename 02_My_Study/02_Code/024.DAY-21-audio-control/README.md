# 2017년 03월 10일 수업 복습
# 개요
- 수업복습
- 음악 플레이어 만들기

## 시간
-
-
## 특이사항
- 수업땐 이해한거 같았음
### 생성자 함수의 this
- new 없이 쓰면 윈도우!!!!!!!!!!!!
- new 로 쓰면 생성된 객체
- use strict로 new 없이 쓰면 언디파인드!!
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
  ## !some.trim()
  - 앞뒤 공백을 짤랐을 때 'false'이면 원래 공백이다.

  ## 도저히 이해가 안가는 부분 (VolumeUp)
  ```javascript
  AudioCtrl.fn.volume = (function(){
    'use strict';

  var volumeUp = function(value) {
    if ( this.media.volume >= 1 ) { return; }
    var vol = this.media.volume + (value || 0.1);
    this.media.volume = vol > 1 ? 1 : vol;
    return this.media.volume;
    console.log("Aaaaaaaaa");

  };
  var volumeDown = function(value) {
    if ( this.media.volume <= 0 ) { return; }
    var vol = this.media.volume - (value || 0.1);
    this.media.volume = vol < 0 ? 0 : vol;
    return this.media.volume;
  };

    return function(value) {
      // 상황 1. value가 전달되지 않았을 경우 (GET)
      if ( !value ) {
        return this.media.volume;
      }
      // 상황 2. value가 전달된 경우 (SET)
      else {
        // 숫자 값 [0,1] 전달된 경우
        if ( typeof value === 'number' ) {
          if( value >= 0 && value <= 1 ) {
            this.media.volume = value;
          }
        }
        // 문자 값이 전달된 경우
        // +
        if ( AudioCtrl.hasSign(value, '+') ) {
          value = this.media.volume + Number(value.replace(/+/, ''));
          this.media.volume += value >= 1 ? 1 : value;
        }
        // -
        else if ( AudioCtrl.hasSign(value, '-') ) {
          value = this.media.volume - Number(value.replace(/-/, ''));
          this.media.volume += value <= 0 ? 0 : value;
        }
      }
    };

  })();
  ```


# 내용
### 오디오 컨트롤 (생성자 함수)

#### 초기화
- 오디오 객체 생성
- 오디오 소스 설정

#### 이벤트 (콜백)

- 생성 시점
- 재생 가능 시점
- 재생중...
- 일시정지 상태
- 정지 상태
- 음원 종료 상태
- 파괴 시점

-

### 인스턴스 메서드

- 분:초 함수

-

### 오디오 컨트롤 프로토타입 객체

#### 메서드

- 재생
- 일시정지
- 정지
- 음소거
- 볼륨 업
- 볼륨 다운
