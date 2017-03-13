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





# 내용
1. 모듈공개로 오류감지 및 오디오 객체 유효성 검사
2. 오디오 객체에 관해
    - 오디오 객체 생성
    - 오디오 대체수단 생성
    - 오디오 재생
    - 시간 업데이트
    - 시크바 프로세스 만들기 (JS: 참조,  CSS: 만들기 )
    - function.prototype.bind 메서드 빌려 쓰기
