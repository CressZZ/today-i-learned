# 2017년 03월 03일 수업내용 복습
# 1. 순환문
- `;`를 넣지 않는다.
  1. while() {}
  2. do {} ~ while() : 조건이 거짓이라도 1회는 반드시 실행한다.
  3. for() {}     // Array, Like Array Object
      - 뒤에서부터 반복하는게 좀더 빠르다고 함
      ```JavaScript
      for (var m=lis.length-1; m>=0; m--) {
          var li = lis.item(m);
          console.log(li);
      }
      ```
  4. for( in ) {} // length???, Object
  5. forEach()
# 2. 조건문
    1. if(조건) { 실행문; }
    2. if(조건) 실행문; // 실행문이 1줄일 경우
    3. if(조건) {} else {}
    4. if(조건1) {} else if(조건2) {} else {}
    5. switch(대상) { case 값: 실행; break; default; }

# 3. library/My_helper.js 변경

# 4. library/My_detect-css-features.js 추가
- CSS 속성을 브라우저가 지원하는지 파악하기 위한 테스트 객체!

# 5. 모더 나이저
- modernizr.com
- 하위 브라우저 polyfill
- 체크사항
    - modernizr.mq : 6,7,8에서 미디어커리를 사용할 수 있도록 해준다.
    - html5print : 프린트 환경
    - html5shiv : html5 이하 버전 지원
- 우아한 기능저하 (신기술을 사용하고, 환경에 따라 하위 기능을 사용함)
