# 2017년 03월 06월 수업 복습
## 개요
- 수업중 쓴 code를 따라서 한번더 치며 복기를 해본다.
- bgm: 러브홀리 live
## 시간
- 목표 1시간
- 17:00 시작,
- 3시간 정도 걸린거 같습니다. (공부좀 하자)
## 특이사항
### 이거 실행 안됨
```javascript
var fn_b = function test_b(arg){
  console.log("fn_b? test_b?");
  // test_b('inner execution fn_b()'); // 무한루프
};

fn_b();
test_b(); // 어라? 실행이 안되네 ㅋㅋㅋㅋ 이거 왜 몰랐지??
```
### 아톰 스니펫 기능 습득.

# 1. 함수
- 정의(선언)
- 표현식
- 확장
- 호출
- 반환/종료
- 객체.메소드() -> 다른 객체가 빌려쓸 수 있다. [메소드 빌려쓰기 패턴]
- 로컬 영역(Scope) -> 스코프 체이닝
- 호이스팅(Hoisting)
- 클로저(Closure)

# 2. 스코프
- 자바스크립트 스코프는 함수 한정

# 3. 호이스팅
- 함수 내부 호이스팅은 함수의 최상위로.
- 나머지는 전역으로 (if나 for문)

# 4. 클로저
- 클로저...변수를 전역으로 안만들기 위한 일종의 꼼수