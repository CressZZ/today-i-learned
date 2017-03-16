# 2017년 03월 13일 월 수업 복습
# 개요
- 수업시간에 한거 복기
- 일단 데이터는 가져오고, html로 해보자
- 해보기전에 읽고 파악하고 하자!! 그게 더 나은듯

## 시간
18:10 시작. 1시간 목표
거의 22:00 에 끝남 
## 특이사항
- 각 언어에는 각자 지원하는 ajax 명령어가 있다.
- 피곤하지만, json까지는 하자. (txt, xml은 했음)
- json 그냥 붙여넣기 함. 엊ㅏ피 뭐
### forEach
`currentValue`
배열에서 현재 처리 중인 요소.
`index`
배열에서 현재 처리 중인 요소의 인덱스.
`array`
forEach()가 적용되고 있는 배열.
`thisArg`
선택 사항. callback을 실행할 때 this로서 사용하는 값.
### json을 해석하는 방법은 두가지
- eval()
- .parse()
# 내용
- DB를 불러 들이는 방법
- ajax `비동기` `자바스크립트` `그리고` `엑셈엘` -> 비동기

## DB의 종류는 txt, html, json, xml등을 활용한다.
- json이 편한 이유!! `responseText`를 `parse`와 `jsonify`처리한다.
- HTML은 그냥 받아서`responseText`를 `innerHTML`처리한다..?
- Text는 는 `responseText`를 `innerText`처리한다.
- xml은 그냥 이상함. 객체도 아니고, 배열도아니고 HTML도 아니고, html비스무리해서, responseXML로 파싱 한번 해주고 HTML처럼 끼어 넣어야 한다.

## XMLHttpRequest.open('GET', './data/db.txt')
- 통신 하겠다고 설정함 `GET`을 할거임 `./data/db.txt`로부터..
