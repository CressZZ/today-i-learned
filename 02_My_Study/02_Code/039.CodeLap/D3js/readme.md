## 그래프 작성 방법
### 1. Google Charts
### 2. d3.js
- 정해진 그래프 유형 없음
- 데이터를 다큐먼트에 표현하기 위한 기능 제공
- 개발자 프로그램으로 그래프 수정 및 추가 
- 제공 기능과 데이터를 이용하여 그래프를 그림

## svg 생성

## selection.select()
- d3.select()로 생성한 인스턴스를 나타냄 
- selection.select()
    - selection을 대상으로 select()수행
    - 첫번째 매치되는 엘리먼트 반환
    - 매치된 엘리먼트가 포함된 인스턴스 반환

## selction()
- root엘리먼트 추출

## style()
- selection 을 대상으로 style설정, selection 반환
- 두번째 파라미터에 style속성 값 작성 
    - 작성하면 selection 엘리먼트에 style값으로 설정
    - 작성하지 않으면 style속성 값 반환
- 두번째  파라미터에 function작성
    - 함수가 반환한 값을 style에 적용


## property()
- HTML의 value, checked와 같은 속성이 대상 
- 두번째 파라미터가 없으면, 속성값을 반환
- 두번째 파라미터가 있으면, 속성값을 지정

## insert()
- selection 엘리먼트의 마지막 차일드로 첨부 
- tag이름을 작성하면 엘리먼트를 첨부

## data()
- selection.data()
    - selection에 반복할 데이터 설정
- 첫번째 파라미터
    - selection에서 반복하여 사용할 배열 타입의 데이터 지정
- 두번째 파라미터
    - 함수를 작성하면 함수의 파라미터에 데이터 설정
    - 파라미터 : `datum, index, group(selection 전체)`
    - 

## enter()
- delection.enter()
    - selection의 각 엘리먼트에 데이터를 바인딩
    - selection에 엘리먼트가 없을 때 바인딩하기 위해 사용
    - 
- enter()를 하는데 이미 element가 append되어 있는 상태라면, 새로 추가 되지는 않는다. 

## on()
- selection.on()

## barchart

## line차트
- 
