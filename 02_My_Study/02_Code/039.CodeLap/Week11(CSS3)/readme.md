## CASCADE
- 스타일 시트 원천(origin)형태
    - 저자(autor), 사용자, 브라우저
    - 저자: 스타일시트 작성자. 본강좌에서는 개발자로 표기
    - 사용자: 콘텐츠 사용자. 사용자가 스타일시트 작성 가능
    - 브라우저: 디폴트 스타일시트 적용
- 스타일시트 적용
    - 3가지 타입의 범위가 중복되기도 하고, 
    - 작성된 순서에 따라 서로 상호 작용도 한다. 
    - 이상황에서 가장 우선순위가 높은 스타일 시트 반영
- 케스케이딩(cascadig)
    - 3가지 스타일시트를 적용규칙에 따라 적용하는것

- 기본적인 강함
1. 브라우저 디폴트 스타일 시트
2. 사용자 스타일 시트
3. 개발자 스타일 시트
4. 개발자 !important
5. 사용자 !important

- Selector 적용
    - 스타일 시트 적용 순위가 같으면
        - 스타일 시트 적용 점수 계산
        - 점수가 많은 것을 우선 적용

**되도록이면 인라인에는 작성하지 말자!**

## Box model
- padding, border, margin, content로 구성 
- 박스는 HTML엘리먼트를 기준으로 생성하고(generate)
- 생성한 박스에 CSS프로퍼티를 추가한다. 
- CSS프로퍼티가 반영되면 박스 크기가 결정된다. 

- line box
    - margin, border, padding, content를 가진 엘리먼트 지칭
    - DOM 트리의 논리적 순서 중심
- inline box
    - margin, border, apdding, contetn를 브라우저가 랜더링 하면
    - style중심의 시각적인 순서로 각 엘리먼트를 정리함
    - 이를 inline box라고 함
- 시각적 순서

마진 상돼
- 마진상쇄
    - 2개 이상의 box(엘리먼트)가 연속되어 있을 때, 
    - 각 box의 margin을 모두 사용하지 않고 결합하여 하나만 사용
    - 이를 collapse라

## visual formating model spec.
- 브라우저의 style sheet 적용 기준
    - DOM 트리의 각 엘리먼트는 박스 모델에 따라 박스(box)생성
    - 엘리먼트는 HTML기준이고, 박스는 CSS기준
- 시각적 형태 모델(Visual foramtting model)
    - DOM트리 구조를 시각적 형태와 구조로 만들려면 규칙이 필요
    - 시각적인 형태를 만들기 위한 규칙을 정의한 것 
    - 모든 측면을 규정하지 않음, 예: letter-spacing 알고리즘 
- 박스 생성의 레이아웃 조건!!
    1. 박스 치수는 width, heigh
    2. 타입 : block level, inline lever등
    3. 위치 결정 체계: 일반적인 flow, float, 절대위치
    4. DOM트리에서 엘리먼트 간의 관계
    5. 외부정보. 예: vieport size(overflow 등), 이미지의 본래 치수 등

**div는 블록 레벨이기때문에 DOM에서는 옆에다가 놀수 없는데, (무조건 수직형으로 된다.)이것을 시각적으로 보여주기 위해서는 CSS가 시각적 형태 모델로 가야 한다. 

- 사용 프로퍼티 
    - 시각적 형태 모델에서 사용하는 프로퍼티
        - display: 박스표시
        - position: 박스 위치
        - float: 박스 정렬
        - clear
        - z-index

- Viewport
    - 브라우저가 제공하는 window 또는 다른 형태의 스크린 영역
    - viewport에 다큐먼트의 컨텐츠 표현
- CSS에서 캔버스
    - 정형화된 구조로 랜더링되는 공간을 의미
    - 스크린, 프린터등의 공간
- viewport 사이즈
    - 뷰포트 사이즈가 변경되면 브라우저는 다큐먼트 레이아웃을 변경
    - 다큐먼트가 렌더링 랜더링된 영역보다 뷰포트가 작으면 스크롤 표시 
    - 하나이상의 canvas에 랜더링 

- 포함블록
    - (Containig Block)
    - 박스위치와 크기는 사각형 가장자리 기준으로 계산, 사각형을 포함 블록이라고 부름
    - 박스기능
        - 생성된 박스는 일반적으로 자손 박스에 대한 포함블록으로 기능
        - 이를 박스가 자손에 대한 포함 블록을 설치 했다고 함 

## 용어정리

- block-level 엘리먼트
    - `<p>, <div>` 와 같은 HTML 블록 레벨 엘리먼트
    - 이 엘리먼트는 블록 레벨 박스 생성
- 블록 레벨 박스
    - display프로퍼티로 엘리먼트를 block-level box로 만들며
    - display: `block`, `list-item`, `table이` 해당
- 블록 컨테이너 박스 (block container box)
    - block-level box가 블록 컨테이너 박스임. 단 table 제외
    - block-level box와 inline-level box포함 가능
    - display:block, list-item, inline-block이 해당
- 블럭
    - 3개 용어의 약칭으로 블록이라고 부를 수 있음
    
- 익명 블록 박스
    - 익명 블로박스
        - DOM 트리의 블록 엘리먼트의 텍스트 노드가 익명 블록 박스 
            ```html
            <div>
                Some text
                <p>more text</p>
            </div>
            ```
    - 블록 엘리먼트 안에 블록 엘리먼트가 있을때
        - `<div>`: 블록 컨테이너 박스 
        - `<p>`: 블록 엘리먼트이므로 블록 레벨 박스
        - `"some text"`: 블록 엘리먼트의 텍스트이므로 익명 블록 박스 
        

- linline-level box
    - 인라인 레벨 박스 
        - `<em>, <strong>`과 같은 인라인 엘리먼트는 
        - 새로운 `컨테츠블록`을 형성하지 않고
        - 라인 안에서 컨텐르르 부리
        - 일ㄴ라인 엘리먼트는 인라인 레벨 박스 생성
    - display 프로퍼티로 변경가능
        - inline, inline-table, inline-block: 인라인 레벨 박스가 됨
        - 예: `p {display: inline;}`
    
- 익명 inline-box
    - HTML 형태
        - `<p> before<em>em-text</em>after</p>`
    - box생성
        - `<p>`는 block box를 생성하고 그안에 인라인 박스 생성
        - `em-text`는 인라인 엘리먼트으니 `<em>`에 의해 인라인 박스로 생성
    - 익명 인라인 박스 
        - 반면 before, after는
        - 블록 레벨 엘리먼트인 p에 의해 인라인 박스로 생성
        - 이때 생성된 인라인 박스를 익명 인라인 박스라고 부름
        - 구분이유: 인라인 엘리먼트와 관련이 없기 때문
        - 익명 인라인 박스는 블록 패어런트 박스에서 프로퍼티를 상속 받음

##  위치 결정 체계
    -  위치결졍
        -  Normal flow, Float, Absolute Positioning
    - Normal Flow
        - 일반적인 포지셔닝
        - Block-level box의 블록 포맷팅
        - Inline-level box의 인라인 포맷팅
        - inline-level과 block-level box의 혼합 포맷팅
    - Float 
        - 우선 Normal Flow로 포지셔닝한 후 
        - 박스를 왼쪽 또는 오른쪽으로 이동
    - 절대 포지셔닝
        - 지정한 위치로 박스 이동
        - Normal Flow의 포지셔닝 체걔와 연동 안함
        - 박스 이후의 형제 박스에 영향 미치지 않음 
    - out of flow
        - flow, 절대 포지셔닝, root 엘리먼트이면
        - flow를 벗어났다/떠났다 (out of flow)라고 부름 
    

## 
- replace element
    - 본 강좌에서는 대체, 치환으로 부름
    - CSS이외 방법으로 표현되는 엘리먼트
    - `<img>, <objecgt>,<video>,<audio>,<canvas>`
    - `<textarea>, <input>`과 같은 엘리먼트

- non-replced Element
    - 스펙에 명확하게 기술되어 있지 않으며
    - CSS스펙 레벨에 따라 다르게 기술, 해석되고 있음
    - 강사의 개인적 해석
        - non-replace 단어에 변경/대체 불가가 포함된 뉘앙스
        - img의 src속성을 작성하지 않았다가 작성하면 이미지 대체
        - `<textarea>`에 값을 입력할 수 있으며 값이 바뀜
        - 이런 기준에서 외부에 의해 변경되지 않는 엘리먼트 지칭
        - `<p>,<strong>`의 텍스트는 외부에서 변경하지 않음 

- width, margin 계산
    - 값을 적용할 때 고려할 엘리먼트 타입(적용 안되는거)
    1. inline, noe-replaced elements
    2. inline, replaced elements
    3. block-level, none-replaced elements in noraml flow
    4. block-level, replaced elements in mormal flow
    5. floating, none-replaced elements,
    6. floating, replace elements,
    7. absolutely posioned, non-replaced elements
    8. absolutely positioned, replaced elements
    9. inline-block, none-replaced elemenstin normal flow
    10. ionline-bnlock, replaced elements in normal flow

- height 계산
    - ..

- min-width
    - 이것 만큼은 보장 해줘

- vertical-align
    - super, middle, top,,,,

## Flexible Box Layout Module
- 
