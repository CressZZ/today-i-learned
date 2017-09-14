

## 1. 실행 컨텍 스트
- music("음악")형태로 함수를 `호출`하면
- 엔진은 실행 컨텍스트를 생성하고
  - 실행 컨텍스트 안으로 이동합니다.
- 실행 컨텍스트에서 함수 코드를 해석하고 실행합니다.
- 개념적으로 실행 컨텍스트에서 아래의 처리를 수행한다.
- (순서는 나열이다.)
1. 음악을 파라미터로 넘긴다
2. `실행 컨텍스트`를 생성한다.
3. 렉시컬 환경 `컴퍼넌트를` 생성한다.
4. 변수 환경 `컴퍼넌트를` 생성한다.
5. this바인딩 `컴포넌트를` 생성한다.
  - 호출한 함수 앞에 작성한 오브젝트를
  - this바인딩 컴퍼넌트에 선정한다.
  - this.value형으로 엑세스 할수 있게 한다.
6. 렉시컬 `환경`을 생성한다.
  - 생성한 렉시컬 환경을
  - 렉시컬 환경 컴퍼넌트와 변수 환경 컴퍼넌트에 첨부한다.
7. `환경 레코드`를 생성하여 렉시컬 환경에 첨부한다.
  - `여기에 함수 안에 작성한 함수, 변수를 바인딩 한다.`
8. `외부 렉시컬 환경 참조`를 생성하여 렉시컬 환경에 첨부 한다.
9. **공백**
10. 외부 렉시컬 환경 참조에
  - Function 오브젝트의 `[[Scope]]`를 설정한다.
---
11. 호출한 함수의 파라미터 값을
  - 호출된 함수의 파라미터 이름에 매핑한다.
12. 함수 선언문은 Function오브젝트로 생성한다.
**Context를 만들어 놓고 외부로 나가지 않겠다. 전역 변수, 스코프, 인자 거의 모든걸 초기에 Context에 넣어놓고 그 안에서 사용한다. 메모리에 올렸다가 다시 밖으로 나온다 라는 것은 메모리 밖으로 빠져 나오거나 밑으로 내려간다는 건데 이게 굉장히 성능에 영향을 미친다. 그러니까 컨텍스트에 모든걸 잡아 넣어 놓고 그다음에 밖에으로 나가지 않고 이안에서 사용할수 있게 한다.**
13. 함수 표현식과 변수 초기값을 설정합니다.
---
14. 함수 안의 자바 스크립트 코드를 실행합니다.
---
- **추가**
  1. 3번에서 10번까지가 준비 단계이고
  2. 11, 12, 13번이 초기화 단계 입니다.
  3. 14번이 실행 단계입니다.
  4. 개발자가 작성한 코드를 실행합니다.

## 2. 실행 컨텍스트
- 실행 컨텍스트 스펙
- 개요
  - Execution Contexts
  - 함수의 실행 영역
  - 함수 코드를 실행하고
  - 실행 결과를 저장
- ES5사양
  - `외부 프로그램에서 접근 불가`
- 실행 컨텍스트 처리 단계
  - 준비 단계
  - 초기화 단계
  - 코드 실행 단계
```
ES5 specification
```

## 3. 렉시컬 환경
- 렉시컬 환경 스펙
- 함수 실행 환경과 범위
  - 구조적 환경에서 독립적으로 실행
  - 오브젝트, 변수, 다른 함수를 참조
- 렉시컬 환경
  - 함수가 사용할 함수, 변수를 렉시컬 환경에 설정
  - 함수가 구조적, 독립적 환경에서의
  - 실행을 위한 메커니즘 제공
- ES5의 새로운 개념
  - ES3에 없는 개념으로 스펙상의 사양
- 초기화 단계에서 해석한
  - 모든 함수와 변수를 {key:value} 형태로 저장
> 선생님의 경우 웹의 경우 상속을 잘 사용하지 않는다. 유저 경험이 중요하고 항상 바꿔야 하기 때문에 구조적으로 묶어 놓는것은 좋지는 않다.
> 엥귤러, React, vew의 경우에는 컴퍼넌트 개념인데, 컴퍼넌트안에 객체로 들어간다. 그래서 설계가 매우 중요하다.

## 4. 개발 단계
1) 요구 Request
2) as-is 분석 : 현재 어떻게 굴러가고 있냐
3) to-be : 목표설정
4) use-case :
  - 30~50%로 중요하다.
  - 사용자가 어떤걸 쓸건지 확실히 하는것.
  - 디자인 다 나오면 사용자에게 확답을 받는다.
  - 그런 후에 개발을 들어간다.
  - (이것은 글로 풀어 쓴다.)
  - 처음에는 사용자 환경에서쓰고, 이후에 시스템 입장에서 설계한다. (문서로 다 만들어야 한다.)
  
5) 위에 있는게 다 나온후에 이것을 객체 지향으로 할지, 모듈, 컴퍼넌트 형태로 할지 결정해야 하고 설계한다.

## 5. 렉시컬 환경 구성
- 렉시컬 환경 생성
  - **`function`, `with`, `try-catch` 문에서 생성**
```javascript

*** 환경 구성 형태를 메모 하세요 ***
렉시컬 환경 (LE)={
  환경 레코드 (ER: Environment Recortd): {
    sports: "농구",
    member:"5명"
  },
  외부 렉시컬 환경 참조 (OLER: Outer Lexical Environment Reference): {
    play : function(){},
    values: [12, 34, 56]
  }
}
```
```js
실행 컨텍스트 = {
  렉시컬 환경 검퍼넌트: {
    렉시컬 환경 (LE: Lexical Environment): {
      환경 레코드 (ER: Environment Recortd): {
        선언적 환경 레코드: {},
        sports: "농구",
        member:"5명"
      },
      외부 렉시컬 환경 참조 (OLER: Outer Lexical Environment Reference): {[[scope]]}
    },
  }
  변수 환경 컴퍼넌트 : {
    렉시컬 환경 (LE: Lexical Environment): {
      환경 레코드 (ER: Environment Recortd): {
        선언적 환경 레코드: {},
      },
      외부 렉시컬 환경 참조 (OLER: Outer Lexical Environment Reference): {[[scope]]}
    }
  },
  this 바인딩 컴퍼넌트: {
    호출한 함수가 속한 오브젝트 프로퍼티
  }
}

```
- 렉시컬 환경 구성 형태

## 6. 렉시컬 환경이해
- 기록(설정)하는것
  - 환경 레코드에 함수 안의 `함수`, `변수` 기록
  - `외부 렉시컬 환경 참조`에 **가장 근접한** 스코프 기록(this)
- 함수, 변수 검색 방법
  - 우선 환경 레코드에서 검색
  - 없으면 외부 렉시컬 환경 참조에서 검색
- 소스 코드 작성 최적화 방법
  - 되도록 1단계 안에 변수, 함수 작성
  - 1단계 밖에서의 실행 환경이 스코프 이며,
  - 외부 렉시컬 환경 참조에 설정 되기 때문에
  - ES6에도 이 논리 적용 (let, const)

## 7. 외부 렉시컬 환경 참조
- 장점
  - 근접한 렉시컬 환경의 논리적 연결을 통해
  - 현재 렉시컬 환경에 영향을 미치지 않으면서
  - 1단계 밖 스코프로 이동하지 않고 `프로퍼티` 사용
- 스코프 체인과 외부 렉시컬 환경 참조 차이
  - ES3는 스코프 체인으로 근접한 스코프 인식
    - 인식하기 위한 별도 처리 필요(밖으로 나가는등)
  - 렉시컬 환경
    - 실행 콘텍스트에 근접한 스코프를 가지고 있으므로
    - 별도 처리 없이 프퍼티에 엑세스 가능

## 8. 외부 렉시컬 환경 참조
```js
var value = 123;
var sports = function(){
  var value = 456;
  var getMember = function(){
    return valuew;
  }
}
sports();
```
- 마지막 줄에서 `sports()`함수가 호출되면 `렉시컬 환경(LE)`를 생성 합니다. 이를 형상화 하면 아래 모습이 됩니다.

```js
Sport 렉시컬 환경 (LE)={
  환경 레코드 (ER):{},
  외부 렉시컬 환경 참조 (OLER): 글로벌 렉시컬 환경
}
```
- 렉시컬 환경 형성 과정
1. 마지막 줄에서 `sports()`를 호출합니다.
2. 실행 컨텍스트를 생성합니다
3. 렉시컬 환경(LE)을 생성합니다.
4. 환경 레코드를 생성하여 렉시컬 환경에 첨부합니다.


```
렉시컬 환경 (LE) = {
  환경 레코드 (ER):{}
}
```
5. 외부 렉시컬 환경 참조를 생성하여 렉시컬 환경에 첨부
```
렉시컬 환경 (LE) = {
  환경 레코드 (ER):{}
  외부 렉시컬 환경 참조(OLER): null
}
```
6. 외부 렉시컬 환경 참조를 설정합니다.
```
렉시컬 환경 (LE) = {
  환경 레코드 (ER):{}
  외부 렉시컬 환경 참조(OLER): 글로벌 렉시컬 환경
}
```
  - 현재 함수가 실행되는 환경은 글로벌 오브젝트 입니다.
  - sports오브젝트의 `[[scope]]`를
  - 외부 렉시컬 환경 참조에 설정합니다.

//추가 설명
1) 실행 컨텍스트 안에 스코프의 변수와 함수를 갖고 있으므로
    - 1단계 밖의 스코프에서 변수, 함수를 찾기 위해
   - 실행 컨텍스트를 벗어나지 않아도 됩니다.
2) sports함수가 다른 오브젝트에 영향을 주거나 받지 않고
    - 독립적으로 수행할 수 있습니다.
3) 함수의 상하 관계를 구조적으로 엮는
   - 별도의 처리를 하지 않아도 됩니다.


## 9. 검색 메커니즘(중요!)
- 프로퍼티 검색 순서, 방법
  - 함수 안에서 프로퍼티 검색
  - 존재하지 않으면 외부 렉신컬 환경 참조에서 검색
- `[[scope]]`사용
  - `Function오브젝트를 생성할때`(중요!)
  - 스코프를 `[[scope]]`에 설정한 상테
- 함수가 실행되면
- Function 오브젝트의 `[[scope]]`를
- 외부 렉시컬 환경 참조에 설정

## 10. 환경 레코드
- 환경 레코드 스펙
- 환경레코드
  - 함수, 변수를 사용하기 위해서는
  - 엔진이 인식할 수 있는 곳에 기록해야 하며
  - 그곳이 환경 레코드
- 환경레코드 구성
  렉시컬 환경 ={
    선언적 환경 레코드 :
    오브젝트 환경 레코드 :
  }

## 11. 환경레코드 구분
- 환경레코드 구분 이유
  - 기록 대상에 따라 처리 방법이 다르기 때문
- 선언적 환경 레코드(정적?)
  - function, 변수, catch문에 사용
- 오브젝트 환경 레코드
  - 글로벌 오브젝트의 함수, 변수(variable을 쓰니까 오브젝트 환결 레코드로 ??? 아니면 선언??? 동적?)
  - with문에 사용
    - with문을 반복할 때마다 바뀌기 때문

## 12. 선언적 환경 레코드

## 13. 오브젝트 환경 레코드
- `쓰지 마세요`

## 14. 글로벌 환경

## 15. 실행컨텍스트
- 생성시점
  - 실행 가능 코드를 만났을 때
- 실행 가능 코드 유형
  - 함수 코드
  - 글로벌 코드
  - eval코드
- 코드 유형 분리 이유
  - 실행 컨텍스트에서 처리 방법과 환경이 다르기 때문
  - **함수 코드 : 렉시컬 환경**
  - 글로벌 코드 : 글로벌 환경
  - eval 코드 : 동적 환경

## 16. 상태 컴퍼넌트
- 상태 컴퍼넌트
- 컴퍼넌트 구조 형태
  ```
  실생컨텍스트 (EC)={
    렉시컬 환경 컴퍼넌트 (LEC):{}
    변수 환경 컴퍼넌트
    this 바인딩 컴퍼넌트
  }
  ```

## 17. 환경 컴퍼넌트
- 환경 컴퍼넌트 구성
  - `렉시컬 환경 컴포넌트`와 `변수 환경 컴포넌트` 지칭
- 환경 컴포넌트 내용
  - 렉시컬 환경을 환경 컴포넌트에 설정
  - 생성 시점에는 함수 코드를 해석하지 않았으므로
    - 렉시컬 환경의 `환경 레코드`는 빈 상태이고
    - `외부 렉시컬 환경 참조`에 `[[scope]]`가 설정된 상태
- 실행 컨텍스트 초기화 단계에서
  - 변수 이름, 함수 선언문, 함수의 파라미터를
  - `렉시컬 환경 컴퍼넌트`과 `변수 환경 컴퍼넌트`의 `환경 레코드`에 같이 설정
- 컴퍼넌트를 분리하는 이유
  - 실행 단계에서 실행 결과를 렉시컬 환경 컴포넌트에 설정
  - 변수 환경에서는 설정하지 않음
  - 이유는 초기값으로 환원할 때 사용하려고

## 18. this바인딩 컴퍼넌트
- 목적
  - this로, 호출한 함수가 속한 오브젝트의 프로퍼티에 엑세스
  - 예: this.property_name
- 엑세스 메커니즘
  - 호출한 함수가 속한 오브젝트를 참조할 수 있도록
  - this바인딩 컴퍼넌트에 호출된 함수가 속한 오브젝트 참조 설정
  - obj.sport()에서 this로 obj참조
  - obj를 this 바인딩 컴퍼넌트에 설정
  - obj의 프로퍼티가 변경되면 동적으로 참조

## this 바인딩 컴퍼넌트
  **설명**
  [소스코드]의 목적은 get value 함수의 amount변수 값이 123 이 되는 원리를 알아보는 것입니다.  
  // 123이 amount변수에 할당되는 과정을 살펴봅니다.
  1. 마지막 줄의 obj.getValue()를 만나 함수를 호출합니다.
  2. 실행 컨텍스트를 생성합니다.
  3. 3개의 컴포넌트를 생성합니다.
      - 렉시컬/변수 환경 컴퍼넌트, this 바인딩 컴포넌트
  4. `this 바인딩 컴퍼넌트`에
      - obj.getValue()에서 obj의 모든 프로퍼티를 설정합니다(참조한다).

```js
  this 바인딩 컴퍼넌트 ={
    value: 123.
    getValue: function(){}
  }

```
  5. 렉시컬 환경을 설정합니다.
  6. 환경 레코드를 생성, 렉시컬환경에 첨부
  7. 외부 렉시컬 환경 참조를 생성하여
      - 렉시컬 환경에 첨부 한다.
  8. 함수 선언문이 없으므로 함수의 첫 문장으로 이동
  9. {코드} var amount = this.value;
      - amount 를 렉시컬 환경의
      - 선언적 환경 레코드에 바인딩 합니다.
      - 프로퍼티 이름이 amount이고 값은 undefined입니다 .
10. 함수의 첫문장으로 이동하여
    - `var amout = this.value;`를 실행합니다.
  11. this 바인딩 컴포넌트에서 value프로퍼티를 검색합니다.
      - 4번에서 호출한 함수가 속한 오브젝트의 프로퍼티를
      - this 바인딩 컴포넌트에 설정한 상태이다.
  12. this 바인딩 컴포넌트에
      - value프로퍼티가 있으므로 123을 반환한다.
  13. 반환받은 123을 amount 변수에 할당합니다 .

  //추가 설병
  1) 함수가 호출되면 호출한 함수 앞에 작성한 오브젝트
    - 즉, obj.getValue()에서 obj의 모든 프로퍼티를
    - 실행 컨텍스트의 this바인딩 컴퍼넌트에 설정한다.
  2) 이 형태가 되도록 의도적인 설계가 필요합니다.

## 19. 스택 흐름
- 스택
  - 실행 컨텍스트의 논리적 구조
  - 함수 안의 자바스크립트 코드가 실행되는곳
- FILO 순서


## 20.글로벌 코드
- 글로벌 코드
  - 글로벌 오브젝트에 작성된 자바스크립트

## 21. 함수코드
- 함수코드 처리 단계
- 실행 컨텍스트

## 22. 함수 호출(중요!)
- 함수가 호출되면
  - 실행 컨텍스트에 파라미터를 넘겨 줌
- 호출한 함수가 속한 오브젝트를
  - this 바인딩 컴퍼넌트에 설정

## 23. 정리시간
- 엔진 관점에서 출력된 값의 논리를 제시하시오
  1. 함수의 파라미터 값이 매핑되는 과정을
    - {key:value}형태로 기술하고
  2. 최종 값이 출력되는 논리를 생각하세요
```js
function sports(one, two, two){
  console.log(one+two)
}
sports(11,22,33)
```
- 주의, 힌트
  - 주의 : 두세번째 파라미터 이름이 같다 (two)
  - 힌트 : 파라미터 식별자 해결 기준


## 24. 함수, 변수 바인딩
- 바인딩 순서
  1. 파라미터 이름/값을 선언적 환경 레코드에 설정
  2. 함수 선언문은 Function오브젝트로 생성하여
    - 선언적 환경 레코드에 설정
  3. argumensts오브젝트를 선언적 환경 레코드에 바인딩
  4. 변수화 함수 표현식을 선언적 환경 레코드에 바인딩
- 설정과 바인딩 차이
  - 설정은 프로퍼티 이름이 존재하더라도 값을 할당
    - 파라미너 이름과 함수 이름이 같으면 함수로 대체
  - 바인딩은 프로퍼티 이름이 존재 하면 값을 설정하지 않음
    - 파라미터 이름과 변수 이름이 같더라도
    - 초기화 단계에서는 대체되지 않음
## 파라미터 값 매핑
- 파라미터 값 매칭이란?
  - 호출한 함수에서 넘겨 준 파라밑터 값음
  - 호출받은 함수의 파라이머 순서에 맞추어 값을 설정하는것
- 엔진관점
  - 실행 컨텍스트에 파라미터로 넘겨 준 값과
  - 함수의 `[[FormalParameters]]`에 작성된 이름을 사용하여
  - 이름과 값을 매핑하고 결과를 선언적 환경 레코드에 설정

## 환경설정과 관련한 준비 단계
```javascript
var obj ={}
obj.music = function(one, two){
  return one + tow
}
obj.music(10,20)
```

//함수 코드 실행 환경 설정
1. 실행 컨텍스트를 생성한다.
2. 3개의 파라미터를 갖고 실행 컨텍스트 안으로 들어간다.
  - 호출한 함수가 속한 오브젝트
  - 함수코드
  - 호출한 함수의 파라미터 값
3. 렉시컬 환경 컴퍼넌드 (LEC)를 생성한다.
4. 변수 환경 컴퍼넌트 (VEC)를 생성한다.
5. this바인딩 컴퍼넌트를 생성한다.

6. 호출한 함ㅎ수가 속한 오브젝트의 프로퍼티를
  - this바인딩 컴퍼넌트에 설정한다.
7. 렉시컬 환경(LE)를 생성한다.
8. 렉시컬 환경을 렉시컬 환경 컴퍼넌트에 설정한다.
9. 렉시컬 환경을 변수환경 컴퍼넌트에 설정한다.
  - 렉시컬 환경 컴퍼넌트와
  - 변수환경 컴퍼넌트의 초기값이 같게된다.
10. 환경 레코드를 생성하여 렉시컬 환경에 첨부한다.
11. 선언적 환경 레코드를 생성하여
  - 환경 레코드에 첨부한다.
  - 아직 함수코드를 해석하지 않았으므로 빈 상태이다.
12. 외부 렉시컬 환경 참조를 생성하여
  - 렉시컬 환경에 첨부한다.
13. 호출한 함수 오브젝트의 `[[Scope]]`를
  - 외부 렉시컬 환경 참조에 설정한다.

## try~catch
```js
//실행결과
//1.member is not defined
//2.catch수행

//소스코드
function sports(){
  try{
    var check = member,
  }catch(e){
    debugger;
    console.log(e.message)
    return 'catch 수행'
  }
}
var result = sports()
consoole.log(result)
```
1. try블록의 var check = member 문장에서
   - member가 존재하지 않으므로 에러가 발생하며
   - catch(e)블록을 수행하게 됩니다.
2. catch 블록은 별도의 실행 컨텍스트를 생성하지 않고
   - sports실행 컨텍스트에서 실행합니다.
3. 이것은
   - `렉시컬/변수 환경 컴퍼넌트`, `this 바인딩 컴퍼넌트`를
   - sports실행 컨텍스트에 설정된 것을
   - 사용한다는 것을 의미 합니다.


## this
- this
  - 키워드
  - 실행컨텍스트의 this 바인딩 컴퍼넌트 참조
  - this.name 형태로 프로퍼티에 엑세스

## this와 글로벌 오브젝트
- this 참조
  - 글로벌 오브젝트에서 this는 글로벌 오브젝트 참조
  - this바인딩 컴퍼넌트에 글로벌 오브젝트가 설정되기 때문
```js
console.log(this === window); // true
var price = 100;
var globalPrice = this.price;

this.amount = 123;

console.log(this.amount) // 123
console.log(window.amount) // 123
console.log(this.globalPrice) // 100
console.log(this.globalPrice) // 100
```

## this와 window
```js
// window.onload 이벤트 함수이다.
window.onload = function(){ 
  debugger;
  var price = 100;
  var localPrice = this.price;

  localPrice = 456;
  this.amount = 123;

  console.log(this === window); //true
  console.log(this.amount) //123
  console.log(window.amount) //123
  console.log(this.localPrice) //undefined
  console.log(window.localPrice) //undefined
}
```

## this와 strict모드
- `strict모드`에서  this 사용
  - 함수 앞에 오브젝트를 작성해야 하는데
  - 글로벌 오브젝트는 이름이 없으므로
  - window.get()과 같이 window 를 글로벌 오브젝트로 사용  
  - 함수 앞에 오브젝트를 작성하지 않으면
  - this 바인딩 컴퍼넌트에 undefined가 설정되므로
  - this로 window를 참조할수 없음
```js
function music(){
  "use strict";
  return this
}
var result = music();
console.log(result === undefined) //true

result = music();
console.log(result === null); //false

result = window.music();
console.log(result === window) //true
```
1. 글로벌 오브젝트에서 그리고 strict모드에서
    - 오브젝트를 지정하지 않고 함수를 호출하면 
    - this 바인딩 컴퍼넌트에 undefined가 설정되므로
    - undefined가 반환되어 true가 설정됩니다, 
2. 마찬가지로 undefined가 반환되고 
    - 이것은 `null`이 아니므로 
    - false가 출력된다. 
3. strict모드에서 window를 통하여 함수를 호출 했으므로 
    - this === window가 된다.

## this 참조 범위
- 호출한 함수 앞에 작성한 함수의 범위

```js
var sports={
  value: 123,
  get: function(){
    var value = 456;
    console.log(this === window)
    console.log(this.value)
  }
};
var comp = sports.get

// get()를 호출한 곳이 window이다
comp() //true, undefined

// get()를 호출한 곳이 sports이다.
sports.get() // false, 123
```
- `comp()를 실행한 의미는 window.comp()니까 this가 window로 된다.`

## this와 인스턴스(개 중요!!!)
- `this의 목적은`
  - `호출한 함수가 속한 오브젝트 참조`
  - `new연산자로 생성한 인스턴스 참조`
  - this.method()형태로 __proto__에 있는 method()호출
- 인스턴스 생성 목적은?
  - 인스턴스마다 고유의 값 유지
  - this로 인스턴스 참조
  - this.name형태로 인스턴스의 name프로퍼티에 접근
- __proto__프로퍼티 접근
  - prototype에 연결된 프로퍼티가
  - 인스턴스의 __proto__에 첨부되며
  - this.method()형태로 __plroto__에 첨부된 method()호출

```js
// 1. sales오브젝트를 생성하여 글로벌 오브젝트에 설정한다.
var sales = {};
// 2. sales의 Book프로퍼티에 Function오브젝트를 생성하여 할당한다.
sales.Book = function(option){
  this.option = option;
}

// 3. sales.Book의 prototype에 getValue메서드를 연결한다.
sales.Book.prototype = {
  getValue: function(){
    // getValue를 평범하게 호출하면
    // 함수를 호출한 오브젝트(전역이라면 window)가 this가 되며
    
    // sales.Book을 new연산자를 통하여 생성자 함수로 써먹어
    // sales.Book의 인스턴스를 생성한다면
    // this는 sales.Book의 인스턴스를 가르킬 것이다.
    console.log(this.option)
  }
};

// 4. new연산자를 통해 seles.Book의 인스턴스를 생성 하였으므로.
// getValue안의 this는 sales.Book의 인스턴스인 obj가 호출 했을 것이며
// 이는 this가 sales.Book으로 생성된 인스턴스를 가리킨다고 볼수 있다.  
var obj = new sales.Book(100);
obj.getValue() // 100
```
- this의 목적  
    1. 호출한 함수가 속한 오브젝트 참조
    2. new 연산자로 생성한 인스턴스 참조 
    3. this.metod()형태로 __proto__에 있는 method()호출


## 오브젝트 반환
- new연산자로 인스턴스를 생성할때
  - 생성자 함수에 retunr문을 작성하지 않으면 인스턴스 반환
  - 생성자 함수에 return문을 작성하면
    - 표현식 평가 결과에 따라 인스턴스가 반환되지않을 수 있음
- return문에서 숫자, 문자열을 반환샇면
  - 생성한인스턴스를 반환
  - 숫자, 문자열을 반환하지 않음

## return 오브젝트 
- 생성자 함수에서 `return`으로 오브젝트를 반환하면
- new연산자를 통하여 생성자 함수를 썼을때,
- 인스턴스를 생성하는 것이 아니라 return문의 오브젝트를 반환한다
```js
var Title = function(){
  return {value : 123};
};

Title.prototype = {
  getValue:function(){}
};

var obj = new Title();
console.log(obj) // {object Object}
console.log(obj.value) //123
console.log(obj.getValue) // Uncaught TypeError: test.getValue is not a function at <anonymos>:1:6
```

## return 숫자, 문자열
- 생성자 함수에서 `return`으로 `숫자` 또는 `문자열`을 return 하면 
- return 문의 값을 반환하는 것이 아니라 인스턴스를 생성한다.
- 거지같군.
```js
var Music = function(){
  return 123;
}
Music.prototype = {
  getValue: function(){
    return 456;
  }
};
var obj = new Music();
console.log(obj.getValue()); //456
```




## call()과 this
|구분|타입|데이터(값)|
|:---:|:---:|:---:|
|object|Functoin|호출할 함수 이름|
|파라미터|Object|this로 참조할 오브젝트
|파라미터|Any|호출된 함수로 넘겨 줄 파라미터Opt, 콤마로 구분, 다수작성가능|
|반환|Any|호출된 함수에서 반환한 값|
|

- 개요
  - getTotal.call(this, 10, 20)
  - `getTotal에서 this로 엑세스 할수 있는걸 지정하기 위해서 call을 쓴다.`
  - `(filter, forEach, map등에는 `,`를 찍고 this를 지정해 줄 수 있다.)`
  - getTotal()함수를 호출하면서 10과 20을 파라미터로 넘겨줌
  - 첫번째 파라미터에 호출된 함수에서 this로 참조할 오브젝트 지정
    - 일반적으로 this를 사용하지만 다른 오브젝트를 지정할 수 있음
    - 첫번째 파라미터는(this) 호출된 함수의 파라미터로 넘어가지 않고 두번째 부터 넘어감

## call()의 this 지정
```js
// 이건 예제가 잘못된거 같다.
// call로 함수를 호출하던, 그냥 전역에서 호출을 하던 this는 window를 참조 하기 때문에 this.value가 456을 참조 할 일은 없기 때문이다. 라는게 내생각.

// window.value = 100
var value = 100;

var get = function(one){
  var value = 456;
  return one + this.value;
}
// get함수를 call로 호출하며 this를 바인딩 했는데,
// 이 this는 window 이다. 
console.log(get.call(this, 50)); // 150
```

## call()의 this인자에 특정 오브젝트 지정
```js
var get = function(value){
  retiurn this.base * this.rate + value
};
// get함수의 this가 get함수를 호출한 오브젝트 (여기에서는 글로벌인 window)를 참조 하지 않고,{base:20, rate:30}를 참조 한다. 
var result = get.call({base:20, rate:30}, 50);
console.log(result) // 650

// ES5의 배열 함수는 두번째 파라미터에
// this로 참조할 오브젝트를 지정할 수 있다. 
// 이것이 for()문과의 차이점 이다. 
var obj = {value: 100}
var values = [1,2,3].map(function(element, index){
  return element + this.value;
}, obj)
console.log(vlaues) // [101, 102, 103]
```

## call()의 숫자값 지정
```js
var get = function(){
  debugger;
  return this.valueOf();
}
// this는 오브젝트를 참조 해야 하므로
// 숫자 123을 this로 넘기면 애러가 나야 하지만, 
// 그냥 Number오브젝트로 생성하여 오브젝트로 넘긴다. 
// 그래서 Number의 prototype중 하나인 valueOf()매서드가
// 먹히는 것이다.
var result = get.call(123);
console.log(result) // 123
```
## this 참조 변경
```js
var sprots = {
  value:123,
  soccer:{
    value:456,
    get:functionO(){
      return this.value
    }
  }
};
//sports.soccer오브젝트의 get()함수를 호출하면서
//첫 번째 파라미터에 sports오브젝트를 넘겨 줍니다.
console.log(sports.soccer.get.call(sports)); // 123

//sports.soccer 오브젝트의 get()함수를 호출하면서
//첫 번째 파라미터에 sports.soccet 오브젝트를 넘겨줍니다. 
console.log(sprots.soccer.get.call(sports.soccer)); // 456
```
- 이렇게 this로 참조할 오브젝트를 바꿀 수 있다. 

## apply()와 this
- 개요
  - getTotal.apply(this, [10,20])
  - getTotal()함수를 호출하면서 `[10,20]`을 파라미터로 넘겨줌
  - 함수를 호출하는 방법이 call()과 같지만
  - 파라미터를 배열로 넘겨주어야 하는 것과
  - arguments를 넘겨줄 수 있는 점이 다름
## bind()와 this
- 개요
  - **bind()는 한번에 처리하지 않고 나누어 처리**
    1. Function 오브젝트를 생성하여 반환
    2. 생성한 Function오브젝트를 함수로 호출
- 작성 방법
  - 첫 번째 파라미터에 생성한 Function오브젝트를 호출할 때
    - this로 참조할 오브젝트 지정
  - 두 번째에 bind메서들에 넘겨 줄 파라미터 작성
- 생성한 Function오브젝트를 호출 할 때에도 파라미터 지정 가능
- 두개의 파라미터를 병합하여 사용
```js
var bonus = {
  value: 123,
  get: function(){
    return this.value;
  }
};
console.log(bonus.get());
// bind를 한다는 것은 새로운 함수를 하나 만든다는 것이다.
// 새로운 함수가 fnObj에 설정된다.
var fnObj = bonus.get.bind();
console.log(typeof fnObj);
// fnObj가 속한 객체는 윈도우 객체
console.log(fnObj());


fnObj = bonus.get.bind(bonus);
console.log(fnObj());
```
## bind()활용
```js

// bind()활용
// html
// <button id = clickID>클릭하세요</button>
window.onload = function(){
  var el = document.getElementById('clickID');
  el.onclick = show.bind(sports, el);
}
var sports = {
  value: 123
}

function show (element, event){
  console.log(element.textContent);
  console.log(event.target.id)
  console.log(this.value)
}

```
- 이벤트 처리에 있어 어려움 중의 하나가 이벤트를 설정한 오브젝트를 this로 참조하기 어렵다는 것입니다.
- bind()를 사용하면 해결할 수 있습니다 .!

## Function 인스턴스 생성
- function 구분
  - 빌트인 Function 오브젝트
  - `Function 오브젝트`: function 키워드로 생성
  - `Function 인스턴스`: new연산자로 생성
- Function 오브젝트도 인스턴스
  - 빌트인 Function오브젝트로
    - 다수의 Function 오브젝트를 생성하므로
    - 성격적으로 인스턴스 이지만
  - new연산자로 생성하는 인스턴스와 구분하기 위해
    - Function 오브젝트로 표기(강사 임의 구분)
```js
// Function 인스턴스 생성

function Sports(value){
  this.value = value;
}
Sports.prototype.getValue = function(){
  reutrn this.value + 300;
}
var sportsObj = new Sports(123)

console.log(sportsObj.value) // 123
console.log(sportsObj.getValue()) // 423
```
## 생성자 함수
- 생성자 함수
  - new연산자와 함께 인스턴스를 생성하는 함수
  - new Sports()에서 Sports()가 생성자 함수
- 인스턴스 생성 함수
  - new 연산자: 인스턴스를 생성 및 제어만 하고,
  - 생성자 함수가 사실상 하는 일이다:
    - 인스턴스 생성 및 반환
    - 인스턴스 에 초깃값 설정
- 생성자 함수 형태
  - 코딩 관례로 첫 문자를 대문자 사용
  - new Number(), new String(), new Sports()
  
## Constructor
- constructor 프로퍼티
  - Function 오브젝트를 생성할 때 설정되며
  - `생성하는Function오브젝트를 참조 하도록 설정`
  - `prototype에 연결되어 있음`
- 개인 경험
  - constructor가 없더라도 인스턴스가 생성됨
  - 엔진에서 이를 고려하여 생성하는 것으로 생각됨
  - 하지만, 스펙에 정의된 사항이며 필요하지 않다는 의미는 아님
  - ES6에서 constructor가 중요하므로 이해 필요
## prototype
- Prototype 오브젝트 목적
  - 프로퍼티 연결을 통한 프로퍼티 확장
  - 생성한 각 인스턴스에서 prototype의 프로퍼티 공유
  - 다른 Function 인스턴스를 상속받음
- 프로퍼티 확장
  - prototype이 오브젝트이므로 프로퍼티를 연결하여 확장 가능
- 프로퍼티 공유
  - prototype에 연결된 프로퍼티로 인스턴스 생성
  - 인스턴스에서 prototype에 연결된 프로퍼티 값 공유

## 인스턴스 상속
- 인스턴스 상속 방법
  - `Function` 오브젝트를 인스턴스로 생성하여 porototype에 연결
  - 객체 지향의 상속 개념
  - prototype-based ingeritance(상속)이라고도 하지만
  - 자바스크립트에서 prototype은 상속이 주된 목적이 아님
  - 프로 퍼티연결이 주된 목적
  - 인스턴스 연결은 프로퍼티 연결의 하나
- prototype chain
  - prototype으로 상속을 구현한 형태를
  - 프로토 타입 체인이라고 함

## 프로퍼티 확장
- 프로퍼티 확장 팡법
  - Function 오브젝트의 prototype에 프로퍼티 연결
  - prototype = {키{키벨류}형태로 확장
  - 벨류 위치에 자바스크립트 지원 데이터 타입을 연결
  - 프로토타입에 널을 설정하면 확장 불가
```js
var Sports = function(){};
Sports.prototype.getMember = function(){
  console.log("파라미터", member);
}

var SportsObj = new Sports();
SportsObj.getMember(123); //123
```

## 프로퍼티 연결 목적  
- 인스턴스 생성 기준
  - prototype에 연결된 프로퍼티로 인스턴스 생성
  - 복사기로 원본을 복사해서 사용하는 모습
- prototype의 프로퍼티 공유
  - 생성한 모든 인스턴스에서 prototype의 프로퍼티 공유
  - 각각 다른 인스턴스에서 같은 결과를 얻을 수 있음
  - 공유하므로 한 곳에서 값을 바꾸면 모든 인스턴스에 반영 
- 인스턴스마다 값을 사용하려면
  - this.getMember(), this.value형태를 사용
  - this가 원본 Function오브젝트를 참조하지 않고
  - 생성한 인스턴스를 참조 

## this와 prototype
```js
function Sports(){
  // 생성자 함수에서는 this가 인스턴스를 참조한다. 
  console.log(this.member);
}

Sports.prototype = {
  member: 123,
  getMember: function(value){
    console.log(this.member + value);
  }
}
  // 생성자 함수에서는 this가 인스턴스를 참조한다. 
var sportsObj = new Sports(); // 123

// 1. this는 호출한 함수 앞에 작성한 '오브젝트'를 참조 하고
// sportsObj를 참조 한다.
// 2. prototype에 연결한 프로퍼티가 인스턴스프로퍼티가 되므로
// this.member형태로 member 프로퍼티값을 사용할 수 있다.
sportsObj.getMember(500); // 623
```

## prototype 프로퍼티 공유 시점 
- prototype 프로퍼티의 공유 시점 
  - `사용하는 시점`에 공유
- 공유 메커니즘
  - prototype에 연결된 프로프티로 인스턴스를 생성하지만
  - 인스턴스의 프로퍼티는 원본 prototype의 프로퍼티를 `참조`
  - `복사하여 인스턴스에 갖고 있는 개념이 아님`
  - 인스턴스의 메서드를 호출하면 
  - 원본 prototype에 연결된 메서드를 호출 
- 원본 prototype에 메서드 추가
  - 생성한 모든 인스턴스에서 추가한 메서드 호출 가능 
  - 인스턴스에 메서드가 이닌 원본 prototype의 메서드를 호출 하기 때문
  - prototype에 연결된 프로퍼티 값을 변경하더라도 마찬가지 

## 인스턴스 프로퍼티
- 인스턴스 프로퍼티
```js
var Sports = function(){}
Sports.prototype.member = 123;
var sportsObj = new Sports

console.log(sportsObj.member); // 123
sportsObj.member = 456;
console.log(sportsObj.member); // 456
console.log(Sports.prototype.member); // 123
```

## Object.create()
구분|타입|데이터(값)
:---:|:---:|:---:
object|Object|Object
파라미터|Object|오브젝트
파라미터|Object|프로퍼티 option
반환|Object|생성한 인스턴스

- 오브젝트 상속 구현
  - 첫번째 파라미터에 상속받을 오브젝트 지정
  - 두번째 파라미터로 인스턴스를 생성하고
    - 첫 번째 파라미터의 오브젝트를 상속 받음
  - 두번째 파라미터의 프로퍼티를 오브젝트 프로퍼티로 설정

```js
var baseball = {
  member:123,
  setValue: function(param){
    this.member = param
  }
}
var sports = Object.create(baseball, { 
  member: { // Object.create의 두번째 파라미터인 프로퍼티를 인스턴스의 프로퍼티로 설정.
            // 만약 프로퍼티가 정의 되어 있지 않다면, 첫번째 파라미터의 프로미터를 인스턴스의 프로퍼티로 설정 
    value: 456, 
    writable: true
    },
  getValue: {
    value: function(){
      return this.member;
    }
  }
});
console.log(sports.getValue()); // 456
sports.setValue(789)
console.log(sports.getValue()); // 789

```
1. new Object()로 인스턴스를 생성하는 것과 같이
   - Object인스턴스를 생성하고 __proto__를 첨부 합니다. 
2. Object.create()의 두 번째 파라미터인
   - `프로퍼티(디스크립터)`를 
    - `인스턴스 프로퍼티로 설정 `합니다.
3. Object.create()의 첫번째 파라미터인
    - baseball 오브젝트를 인스턴스로 생성하여 
    - __proto__에 첨부 합니다. .....



# **중요!!** 객체 지향 프로그래밍
## 객체 
- 객체의 기본 요소
  - `행위`(behavior): `메서드`로 표현
  - `속성`(attribute)
    - 자바스크립트는 속성보다 `프로퍼티`가 더 적절
- 객체
  - `독립적으로 존재하며`
  - 객체 자체에서 목적 달성
- 객체 지향 프로그래밍
  - OOP:Object Oriented Programming
  - 객체 중심으로 프로그래밍하는 방법, 형태
  - 개념은 비슷하지만 언어마다 구현 방법, 형태에 차이 있음  
    (Class 베이스, prototype 베이스)

## 클래스
- 클래스(class)
  - 객체의 `행위`(메서드)와 `속성`(프로퍼티)을 선언하는 영역
  - 텍스트 형태이므로
  - 오브젝트로 생성해야 사용할 수 있음
- 자바스크립트의 클래스
  - ES5까지 클래스가 없었으나 Es6부터 사용

## OOP 주요 개념
- 주요개념
  - `추상화`(**중요**) 공통개념(Abstraction)
  - 캡슐화(Encapulation)
  - 다형성(Polymorphism)
  - 상속(Ingeritance)
- 추상화
  - 추상화의 목적은 최적화!
  - `공통 개념을 하나로 정의하는 것부터 시작`
  - `여러 가지 사물이나 개념에서 공통되는 특성이나 속성 따위를 추출`하여 파악하는 작용.
- 자바스크립트에서 추상화
  - 일반적으로 사용하지 않음
  - 이유는 상속을 크게 사용하지 않기 때문

## 캡슐화
- 캡슐화
  - 객체의 메서드와 프로퍼티를 외부에 숨김
  - 처리방법은 숨기고
    - `사용할 수 있는 메서드와 파라미터를 외부에 공개`
  - 관련 OOP용어
    - 정보 은닉(`information hiding`)
- 자바스크립트의 캡슐화
  - `함수 안의 함수를 외부에서 호출 불가`
  - `지역 변수 값을 외부에서 접근 불가`
  - source가 오픈되는 것과 exe파일의 차이 있음
## 다형성
- 다형성
  - `파라미터 수`, `파라미터 데이터 타입`에 따라 메소드 존재
    - 메서드를 호출하면 파라미터와 타입에 맞는 메소드 호출
  -  OOP관련 용어
    - 오버로딩
- 자바스크립트의 다형성
  - 파라미터수와 데이터 타입에 영향을 받지 않음

## 상속
- 상속
  - 상속의 목적은 객체의 재사용
  - 목적에 맞는 객체를 내 객체에 포함시키는 것
  - 다중 상속
    - Java: 다중 상속 불가, c#: 가능
    - 다중 상속은 논란의 여지 있음
- 자바스크립트의 상속
  - `오브젝트{}와 오브젝트{}를 병합`
  - 함수의 `prototype에` `인스턴스 연결`
  - 다중 상속 불가
  - `다수의 인스턴스가 연결된 형태 : Prototype Chian`

## 상속 메커니즘
...


## Object.create()
- 오브젝트 상속 구현
  - `첫번째 파라미터`에 상속할 오브젝트 지정
  - `두번째 파라미터`로 인스턴스를 생성하고
    - `첫번째 파라미터`의 오브젝트를 상속 받음
  - `두번째 파라미터`의 `프로퍼티`를 오브젝트 프로퍼티로 설정

## 프로토타입 체인
- 프로타입 체인
  - Function prototype에
    - new연산자로 생성한 인스턴스를 연결한 형태
  - 연속해서 prototype에 인스턴스를 연결할 수 있으므로
  - 계층 구조로 상속 형태를 만들 수 있음
- super class, sub class
  - 객체 지향 용어로
  - 서브 클래스에서 슈퍼 클래스를 상속 받음
- 자바스크립트 super키워드 지원
  - ES5: 지원 x, ES6: 지원 o
```js
function Baseball(){
  this.member=123;
};
Baseball.prototype.getMember = function(){
  return this.member;
};
function Sports(){
  this.member = 456;
}
Sports.prototype = new Baseball();
Sports.prototype.constructor = Sports;

var sportsObj = new Sports();
console.log(sportsObj.getMember()); // 456 

```

## 검색 우선 순위
- this.propertyName 형태로 검색하면
- 우선 자신(서브)오브젝트에서 검색
- 검색되지 않으면 슈퍼 오브젝트에서 검색  
(차일드랑 슈퍼랑 이름이 같으면 슈퍼꺼는 못가져옴)
- 이(형태)를 검색 우선 순위라고 함
- 변수는 글로벌 까지 올라가지만, 이경우에는(this로 검색) 연결된 프로타입 안에(super)로 찾아 가기 때문에 안으로 들어간다고 생각하면됨
- Prototype에서 검색
  - 슈퍼와 서브 오브젝트 각각에 프로퍼티가 존재할 때
  - 슈퍼의 프로퍼티가 서브의 프로퍼티를 대체하지 않음
  - 검색 우선순위로 프로퍼티 검색
- 변수와 prototype의 창이
  - 변수
    - 함수 밖으로 나가 글로벌 오브젝트로 올라가면서 검색
  - prototype
    - this.prototypeName 형태로 검색
    - 상속받은 인스턴스로 올라가면서 검색
    - 글로벌 오브젝트 까지 올라가지 않고 상속 받은 범위에서 검색 



## 슈퍼 오브젝트 접근
- call, apply()
  - Baseball.prototype.getMember.call(sportsObj)형태

## Object.create()
- Function오브젝트 상속
  - 첫번째 파라미터에 상속받을 protytype작성
  - 다른 것은 앞서 살펴보았던 Object.creste()와 같음

```js
//prototype 지정 
//Object.create()
// ES5에서 상속을 구현하는 전형적인 형태이다. 
function Baseball(){
  this.memeber = 123;
}
Baseball.protytpe.getMember = function(){
  return this.member
}
function Sports(){
  this.member = 456;
};
Sports.prototype = Object.create(Baseball.prototype,{
  setMember:{
    value: function(param){
      this.member=param
      }
  }
});
Sports.prototype.constructor = Sports;
var sportsObj = new Sports();
console.log(sportsObj.getMember()); //456
```
## 프로퍼티 연동 방지
- 오브젝트에 오브젝트를 할당하면
  - 앞 뒤 오브젝트의 프로퍼티 값이 연동 됨
  - 배열도 마찬가지로 연동됨
```js
//오브젝트
var baseball = {memeber:9}
var sports = baseball;
sports.member = 789;
console.log(baseball.member); // 789

//배열
var list = {1,2,3}
var allocate = list
allocate[1] = 456;
console.log(list); // [1, 456, 3]
```
  - 이를 방지하려면 프로퍼티 단위로 할당
  - Object일 때 for-in문으로 프로퍼티 단위로 설정하면 값이 연동되지 않는다. 
  - ES6에서는 Object.assign()을 사용한다.
```js
var sports = {member: 9}
var dup = {}

for (var name in sports){
  dup[name]=sports[name]
}
dup.member = 123

console.log(sports.member); // 9
console.log(dup.member);// 123
```

## 오브젝트 단위로 설정
## 프로퍼티 단위로 설정

## 재귀 함수
  - for-in 문으로 오브젝트를 전개 할때
    - `soccer:{member:11, time:90}`을 전개 하려면 
    - for-in문 안에 for-in문을 작성해야 한다. 
  - 이때 재귀함수를 실행한다.  
  - Recursive Function
    - 함수 안에서 자신 함수를 호출
    - {키:{키:{키:벨류}}}형태에 사용
    - `[[1,2],[3,4,[5,6]]]`형태에 사용

## 재귀함수 코딩시간

## 함수 즉시 실행
- 함수 즉시실행
  - 엔진이 함수 코드를 만나면
  - 자동으로 함수를 실행하는 형태
- 먼저 예제를 실행하여 코드 형태를 이해
```js
window.onload = function(){
  (function(){
    console.log('sport')
  }());
}
```
1. 함수 이름이 없으므로 함수를 호출할 수 없는데
2. `console.log()`가 실행되어
  - `[실행 결과]`에 sport가 출력된다.
- 무명함수, 익명함수
- `(function(){}())`형태 문법
  - 함수 이름이 없으므로 선언문, 표현식도 아님
  - 문법에러도 없음

## 자동 실행 메커니즘
- 표현식 평가
  - 함수 자동 실행되어 
- 파라미터값 설정된다. 

## 클로저
- 클로저 개요
  - 자바스크립트의 특정 기능을 지칭
  - Function오브젝트를 생성할테 `[[scope]]`에 렉시컬 환경을 설정하고
  - 함수가 호출되었을때 `[[scope]]`의 프로퍼티를 사용하는 메커니즘
  - Function오브젝트 생성과정을 이해하면 클로저는 단지 논리적인 접근
- 실행 컨텍스트의 렉시컬 환경 구조
```js
렉시컬 환경 = {
  환경 레코드 : {
    선언적 환경 레코드 : 함수 안에서 선언한 프로퍼티
    오브젝트 환경 레코드 : {}
  }
  외부 렉시컬 환경 참조 : [[Scope]]에 설정된 프로퍼티 
}
```
## 클로저의 논리
- 클로저 논리 근거
  - 실행중인 함수 오브젝트의 `[[scope]]`에 설정된 프로퍼티는
    - 1단계 밖의 함수와 변수로 구성
  - `[[scope]]`가 외부 렉시컬 환경 참조에 설정되므로
  - 변수 이름으로 접근하여 값을 사용하거나 변경할 수 있음
  - 함수를 호출하거나 함수 코드를 변경 할수 있음 

## 클로저 논리 전개
```js
function sports(){
  var value = 100;
  function setValue(param){
    value = param;
  };
  var getValue = function(param){
    value = value + param;
    return value;
  };
  return getValue;
}
var getObject = sports();

console.log(getObject(123)); //223
console.log(getObject(77)); //300
console.log(getObject.value): //undefined

```

## 클로저 정리
- 자바스크립트에서 클로저
  - 함수에서 1단계 밖의 변수 사용은
    - 자바스크립트의 기본 메커니즘
  - 논리적 근거는 외부 렉시컬 환경 참조
  - 외부 렉시컬 환경 참조에 1단계 밖의 변수가 설정되며
    - 함수에서 함수안의 변수처럼 접근할 수 있음
- 클로저로 구분할 명분, 이유 없음
  - 이런 모습을 나타내는 용어

` 클로저는 외부 변수에 대해 값이 아닌 참조로 접근하기 때문입니다`
[참조! 링크 클릭!!](http://chanlee.github.io/2013/12/10/understand-javascript-closure/)

