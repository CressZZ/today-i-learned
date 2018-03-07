## line

```html

<svg width=600 height=400>
    <line x1=100 y1=100 x2=100 y2=200 stroke ="red"/>
    <line x1=100 y1=200 x2=200 y2=200 stroke = "green"/>
    <line x1=100 y1=100 x2=200 y2=200 stroke = "blue"/>
</svg>
```

## css Style
- svg의 스타일에 관한 사항은 CSS2 스펙에서 제공한다. (CSS3는 아님)
```css
/* css */
.test{stroke: "red"}
```
```html
<!-- html -->
<line class="test" x1=100 y1=100 x2=100 y2=200/>
```

## stroke
1. stroke(선색)
2. stroke-width(percentage)
3. stroke-opacity

...
stroke(선색)이외에는 디폴트 값이 있다. 
```html
<!-- html -->
<svg width=600 height=400>
    <line x1=20 y1=10 x2=120 y2=10 stroke=blue stroke-width= 5 />
    <line x1=20 y1=10 x2=120 y2=10 stroke=#00f stroke-width= 5 />
    <line x1=20 y1=10 x2=120 y2=10 stroke=rgb(0, 0, 255) stroke-width= 51 />
    <line x1=20 y1=10 x2=120 y2=10 stroke=rgb(0, 0, 255, 0.5) stroke-width= 5 />
</svg>
```

## stroke-width
- stroke-width 의 가운데가 좌표
```html
<!-- html -->
<svg width=600 height=200>
    <line x1=10 y1=150 x2=110 y2=150 stroke="lime" stroke-width=40 />
    <line x1=10 y1=150 x2=150 y2=150 stroke="blue" stroke-width=1 />
</svg>
```

## stroke-dasharray
- `stroke-dasharray = "20,5"`
- 20픽셀을 긋고 간격을 5픽셀 띄움
```html
<svg width=600 height=200>
    <line x1=10 y1=30 x2=200 y2=30 stroke="lime" stroke-width=5 stroke-dasharray="20,5" />
    <line x1=10 y1=30 x2=200 y2=30 stroke="lime" stroke-width=5 stroke-dasharray="30, 10, 7, 3" />
</svg>

```

## stroke-linecap
- butt 선 끝까지만 표현, 디폴트
- round 선 끝에서 둥글게 표현, 선 끝에서 반지름 만큼 밖으로 나감
- square 선 끝에서 사각형 표현, 선 끝에서 반지름 만큼 밖으로 나감

## stroke-opacity
- 불투명도, 0에서 1사이의 소숫값으로 작성

## stroke-linejoin
- miter: 모퉁이 형태, 너비만큼 큼 밖으로 표시, 디폴트
- round: 둥근 형태
- bevel: 모퉁이를 깍은 형태
```html
<svg>
    <polyline fill="none" stroke-width=30 stroke=blue stroke-linejoin-miter points=100, 160 150, 110 200, 160 />


    <line x1=130 y1=110 x2=150 y2=130 stroke="red" stroke-width=5 stroke-dasharray="20,5" />
    <line x1=150 y1=130 x2=170 y2=110 stroke="blue" stroke-width=5 stroke-dasharray="20,5" />

    
</svg>

```

## stroke-miterlimit
- stroke-linejoin="miter"에서 끝 선 표시 

## stroke-dashoffset
- stroke-dashoffset값 만큼 왼쪽으로 이동하고 그 위치부터 Stroke-dasharray수행

## 사용가능 단위
- cm, em, ex, in , mm, pc, pt, px
- stroke-width= "1px"
- stroke-width= "1pt"; 1.25px
- stroke-width= "1mm"; 3.543307px
- stroke-width= "1ex"
- stroke-width= "1pc"; 15px
- stroke-width= "1em"
- stroke-width= "1cm"; 35.43307px
- stroke-width= "1in"; 90px

# 기본도형!!!!!!!!!!(fill같은거 들어간다.!!!!!)
## rect
- 사각형
    - `<rect x=100 y=100 width=150 height=75 />`
- 둥근 사각형
    - 사각형의 모퉁이를 둥글게 표시
    - `<rect rx=100 ry=200 />`

```html
<svg>
    <rect x=100 y=200 width=100 heght=50 rx=10 ry=10 />
</svg>

```

## fill
- 도형 내부색
- `fill="none"`

## fill-opacity
```html
<svg width=500 height=400>
    <rect x=100 y=110 widthp=100 height=50 fill=#0f0 rx=10 ry=10 />
    <rect x=150 y=135 widthp=100 height=50 fill=blue rx=10 ry=10 />

    <rect x=100 y=240 widthp=100 height=50 fill=#0f0 rx=10 ry=10 />
    <rect x=150 y=265 widthp=100 height=50 fill=blue rx=10 ry=10 fill-opacity=0.5 />
</svg>
    
```

## circle
- 반지름이 같은 원 
```html
<svg width=500 height=400>
    <circl cx=200 cy=120 r=50 fill=blue stroke=green stroke-width=10 />
</svg>
```

## ellipse
- 반지름이 다른 타원형

## polyline
- 직선과 직선을 연결
- `<polyline points="100,150 150,100 200,100 200,150" />`
- 선이 연결되지 않아 열려 있는 상태라도, fill에 색상을 작성하면 작성한 색으로 도형 내부를 칠한다. 
- 도형으로 인식한다.
```html
<polyline points='100,150 150,100 200,100 200,150' fill="lime" stroke-width=3 stroke=blue />
```

## polygon
- 다각형
- 직선과 직선을 연결하여 도형 표현 
- polygon: 마지막 좌표에서 시작 좌표로 닫는 선을 그어 도형을 만듬
- polyline과 points 속성 작성이 같음 
```html
<polygon points= '100,150 150,100 200,100 200,150'>
```

## fill-rule
- 도형내부 칠하기 변경
- nonezero - 영역전체를 페인트
- evenodd - 선이 겹치는 부분을 칠하지 않음, 단 두값 모두 선의 시작 방향등에 따라 질 수 있음 
```html
<svg>
    <polygon points ="50,190 165,190 70,265 110,150 150,265" fill=lime stroke=green stroke-width=1 fill-rule="evenodd" />
</svg>
```

## g -> 그룹!
- 그룹화 
- 관련된 엘리먼트를 그룹화
- `<g id="goup"><rect><line></>`
- g안에  g를 작성 가능
- 장점
    - `<g>`에 속한 엘리먼트의 공통 속성 작성
        - 각 엘리먼트에는 작성하지 않음
    - 각 엘리먼트에 이벤트를 설정하지 않고 `<g>`에 설정
- 대체
    - `<g>`에 작성한 속성을 차일드 엘리먼트에 작성하면
    - 값이 대체되어 차일드 엘리먼트의 속성이 반영
```html
<svg width=500 height=400>
    <g  stroke=blue stroke-width="3px">
        <line x1=100 y1=230 x2=200 y2=230 />
        <line x1=100 y1=280 x2=200 y2p=280 />
    </g>
</svg>
```

## use
- 다른 엘리먼트를 참조하여 인스턴스 개념으로 사용
- 참조처 엘리먼트의 id속성 작성
- `<use xlink:href>`에 참조할 #id작성
- 속성 사용 불가
    - 참조처 엘리먼트에 작성하지 않은 속성은 <use> 에 작성 가능 
    - 참조처 엘리먼트에 작성한 속성은 <use>에 작성 불가

```html
<svg width=500 height=400>
    <g id="groupID" stroke=blue stroke-width="3px">
        <rect id="rectID" x=100 y=100 width=100 height=100 stroke=blue fill=none />
        <circle cx=150 cy=150 r=40 fill=lime>
    </g>
    <use x=0 y=150 xlink:href="#groupID" />
    <use x=0 y=300 xlink:href="#rectID" fill=blue strok-dasharray=10,4 />
</svg>


```

## defs
- 디파인
- 참조처 엘리먼트 정의 (렌더링이 안된다?)
- 다큐먼트의 가독성과 접근성 향상을 위해 상요
- 웹페이지에 표시되지 않음
- DOM 트리에 반영되지 않음
- defs를 사용하는 엘리먼트
    - 스펙에서 항상(반드시 의미 강함) `<defs>`사용 권장
    - altGlyphDef, clipPath, cursor, filter, linearGradient
    - marker,m mask, pattern, radialGradient, symbol
- 절대/상대 좌표 사용
    - 참조하는 엘리먼트에서 상대좌표를 사용하지만 
    - `<defs>`의 `<rect x=0 y=0>과 같이 작성하고
    - <use x=100 y=200>형태는 절대 좌표가 됨 
```html
<svg width=500 height=900>
    <defs>
        <g id="groupID" stroke=blue stroke-width="3px">
            <rect id="rectID" x=100 y=100 width=100 height=100 stroke=blue fill=none />
            <circle cx=150 cy=150 r=40 fill=lime>
        </g>
    </defs>
    <use x=0 y=150 xlink:href="#groupID" />
    <use x=0 y=300 xlink:href="#rectID" fill=blue strok-dasharray=10,4 />
</svg>

```

## symbol
- 탬플릿 엘리먼트 정의
    - use엘리먼트로 다수의 인스턴스 생성
    - 다수의 symbol을 use에서 생성 가능 
- g 와 차이점
    - symbol은 Document에 랜더링되지 않음
    - viewBox와 preserveAspectRatio로 축소/확대 가능 

```html
<svg width=500 height=900>
    <line x1=100 y1=80 x2=200 y2=80 stroke="red" stroke-width=3 />
    <symbol id="symbolOne">
        <rect id="rectID" x=0 y=0 width=100 height=100 fill=Aqua />
        <circle cx=50 cy=50 r=40 fill=blue />
    </simbol>
    <use x=100 y=100 xlink:href="#simbolOne" width=150 height=150 />

    <symbol id="symbolTwo" viewBox="0 0 100 100">
        <rect id="rectID" x=0 y=0 width=100 height=100 fill=Aqua />
        <circle cx=50 cy=50 r=40 fill=blue />
    </simbol>
    <use x=100 y=250 xlink:href="#simbolTwo" width=150 height=150 />
    
</svg>


```

## title
- 엘리먼트 설명
    - 컨테이너 엘리먼트 또는 크래픽 엘리먼트 설명
    - 텍스트로 작성
    - 그래픽 엘리먼트로 렌더링 되지 않음
    - 스크린 리더, 검색엔진에 반영
- g 의 첫번째 차일드 엘리먼트로 작성해야 한다. 
- 툴팁이다
```html
<g id"test">
<title>사각형과 원</title> 
</g>
```

## desc
- 상세설명
- 랜더링 안되고, 툴팁도 제공되지 않느다

## path 엘리먼트
- 좌표를 직선 또는 곡선으로 연결하여 선, 도형을 그리고
- fill, stroke등으로 선, 도형을 표현
```html
<svg>
<path d="M100,160 L160,100 L220,160 z" fill=lime stroke-width=3 stroke=blue />
</svg>
```

## d속성
- d 속성 값으로 외곽선을 긋는다. 
- M100, 160 외곽선을 긋는 시작 위치
- L160,100으로 선을 긋고
- 다시 그위치에서 L220, 160으로 선을 긋는다. 
- z: 시작 좌표(100, 160)으로 선을 긋는다. 
- 이와 같이 선을 연결하여 삼각형을 만든다. 
- fill, stroke-width 속성으로 칭ㄹ하기, 선 너비 표현 

## path의 형태
- 명령
- 파라미터
- d속성 값 저체
- 서브 패스 

## d속성 작성 기준
- 명령과 파라미터 작성 형태
    1. 콤마로 구분: M100,160 L160,100
    2. 공백으로 구분 : M100 160 L160 100
    3. 파라미터와 명령어 연결: M100 160L160 100
- 같은 명령이 연속될 때 다음 명령 문자 생략 가능
- `M100, 160 L160,100 220, 160`
- 줄 분리 방법
- 현위치 

## 절대 상대 좌표
- 절대 좌표
    - 절대값을 나타내며 M, L과 같이 대문자 사용
- 상대 좌표
    - 상댓값을 나타내며 m, l과 같이 소문자 사용
    - `<path d="M50,300 L110,200 l160,100 z />`
    - l60, 100 -> L110, 200에서 (60, 100)떨어진 위치로 선을 긋는다. 
    - 따라서(110+60, 200+100)dmfh tjsdmf rmtrp ehlsek. 
- path data 에러 처리 기준 
    - 에러가 발생한 이전 명령까지만 표현, 이후는 처리하지 않음 


```html
<svg>
    <path d="M50,0 L150,0 l50,100 l-100,0, z" fill=lime stroke=blue stroke-width=5>
</svg>


```

## path 명령어
1. M, m : moveto
- 선 시작 위치 
- 새로운 시작 좌표 
- m-50,10과 같이 pat중간에 (M, m)을 작성하면
- 새로운 시작 좌표로 인식
- 앞의 명령과 선을 연결하지 않음
- d속성 처음에 소문자 사용하면,,,,
    `d="m100,200"` 대문자 M으로 처리해 버린다.
2. L, l: lineto
- 선을 긋는다. (현위치를 기준으로)
- lineto 명령어 생략 가능 (명령어가 없으면 lineto 로 간주)
- `d="M160,130 160,210"`
3. H, h:  수평선
- `<path d="M100,160 L160,100 H220" />`
- 수평선이므로 **x좌표만 지정**, y좌표는 지정하지 않음
4. V, v:수직선
- `<path d="M100,160 L160,100 V220" />`
- 수직선이므로 **y좌표만 지정**, x좌표는 지정하지 않음
5. Z, z: 치ㅐㄴ뎀소
- 대소문자 구분 없음 
- sub-path의 시작 위치로 선을 긋는다. 


## <path> curve
## 타원호
- A, a: 타원호
- 선을 여결하여 호, 타원호 표현 
```html
<svg width=500 height=400>
    <path d="M200,100 A50,50 0 1, 0 200, 150" fill="none" stroke-width=3 stroke=blue />
    <path d="M200,300 A50,50 0 1, 1 200, 150" fill="none" stroke-width=3 stroke=blue />
    <path d="M200,500 A50,50 0 0, 0 200, 150" fill="none" stroke-width=3 stroke=blue />
    
</svg>

```
- 시작점-x좌표, 시작점-y좌표, x축 회전각도, 시계방향(1,0), 호길이(1,0), 끝점-x좌표, 마지막점-y좌표

## 2차 베지어 곡선
- Q, q
- 시작점에서 제어점을 경유하여 끝점으로 포물선을 그린다. 
```html
<path d="M30,250 Q130,50 230,250" stroke=blue />

```
1. x1 : x축 제어점
2. y1 : y축 제어점
3. x  : x축 끝점
4. y  : y축 끝점


## 3차 베지어 곡선
- C, c
- <path d="M30,250 C130,50 230,250 300,320" stroke=blue />

## 대칭
- S, s

## text
- 개요
- 텍스트 표현
- 자동으로 줄 바꿈 하지 않음
- path와 같이 좌표, 칠하기 등 사용가능
- 가로쓰지 세로쓰기
- 왼쪽에서 오른쪽으로, 오른쪽에서 왼쪽으로 문자 표시 

```html
<text x=60 y=150 font-size=34>여행, 괜찮음 </text>
<line x1=50 y1=150 x2=250 y2=150 stroke=orange stroke-width=1 />

<text x=60 y=220 font-size=34>ㅇㅇㅇㅇ</text>
<line x1=50 y1=220 x2=270 y2=220 stroke=orange stroke-width=1/>


```

## dx, dy
- 기준에서 dx, dy값 만큼 이동하여 텍스트 표현 
```html
<text x=100 y=150 dx=50>가나다라</text>
<text x=100 y=150 dx=-50>가나다라</text>

```

## textLength
- 텍스트 전체를 값에 맞추어 배치
    - 값을 지정하지 않으면 브라우저가 계산하여 표시
- 값으 ㄹ지정하면 텍스트 간격을 축소/확대하여 맞춤
```html
<svg width=500 height=400 font-size=36>

```

## lengthAdjust
- testLength값에 텍스트를 맞추는 기준
1. spacing : 디폴트, 문자는 조정하지 않고 간격으로 폭조정
2. spacingAndGlyphs : 글리프도 확대/축소하여 폭 조정
```html
<text x=50 y=150 textLength=250>가나 다라 마</text>
<text x=50 y=200 textLength=250 lengthAdjust=spacingAndGlyphs>가나 다라 마</text>

```



## rotate
- 텍스트 회전
```html
<text x=50 y=100 rotate="30">가나다라마</text>
<text x=50 y=180 rotate="0, 0, 90, 90, 45">가나다라마</text>
```

## text-anchor
- 텍스트 위치 맞춤

## writing-mode
- 가로, 세로, 오른, 왼
1. lr
2. rl
3. tb

## kerning
- 문자간격
1. kerning: 문자간격을 조정하는 기법
2. kerning table: 문자 간격 기준을 제공하는 테이블

## letter-spacing
- kerning에 추가하여 문자 사이 공간 조정
```html
<text x=50 y=130 letter-spacing="5">
<text x=50 y=130 letter-spacing="10">
```

## word-spacing
- 단어간격
```html
<text x=50 y=130 word-spacing="5">
<text x=50 y=130 word-spacing="10">
```

## 간격 지정 띄어 쓰기
- 문자와 문자 띄어 쓰기
- 띄어쓰기 할 문자ㅗ아 문자 간격 지정
- x축 y축 모두  가능
```html
<text x="50 60 90" y=130 letter-spacing="10">가나다라마</text>
```

## text-decoration
- 텍스트 장식
- blink는 브라우저에서 지원하지 않아도 됨 
1. underline
2. overline
3. line-through

## <text> fill, stroke
- text에 fill, stroke, stroke-width사용
- 도형에 사용하는 속성을 text에 사용한다. 

# font프로퍼티
## font-fgamily
## font-style
## font-variant
- small-caps : 소문자를 대문자로 변경
## font-weight
## font-stretch(아직 지원안함;)
- 폰트 폭 축소, 확대
## font-size-adjust(fire-fox  지원)
- x-height 가 유지되도록 엘리먼트의 가로/세로 비율 지정
## font


---
## tspan
- div의 span과 같다 
- `x, y dx, dy, rotate, textLength, lengthAdjust`
- text의 차일드로 작성하며 하나 이상 작성 가능
```html
<svg width=500 height=300>
    <text x=50 y=50 font-size=30>스포츠:
        <!-- tspan으로 텍스트를 분리하여 font-size, fill 지정 -->
        <tspan fill=blue font-size=16>축구,</tspan>농구
    </text>
</svg>
```

- dx, dy를 사용하여 위치 조정 가능
- 위치조정을 끝내려면 tspan 안엔 tspan작성 
```html
<svg width=500 height=300>
    <text x=50 y=50 font-size=30>스포츠:
        <!-- tspan으로 텍스트를 분리하여 font-size, fill 지정 -->
        <tspan fill=blue font-size=16 dy=-10>축구,
            <tspan dy=-10 fill=black font-sizep=30>농구</tspan>
        </tspan>
    </text>
</svg>

<!-- 또는 -->
<svg width=500 height=300>
    <text x=50 y=50 font-size=30>스포츠:
        <!-- tspan으로 텍스트를 분리하여 font-size, fill 지정 -->
        <tspan fill=blue font-size=16 dy=-10>축구, </tspan>
        <tspan fill=black>농구</tspan>
    </text>
</svg>
 ```

## tref
- 작성된 텍스트 참조
- xlink:href 속성에 참조할 <text>의 #id작성
```html
<svg>
    <defs>
        <text id="textID">가나다라</text>
    </defs>
    <text x=50 y=50 font-size24 fill=blue>
        <tref>
```

## textPath
- 텍스트를 분리하거나 절대/상대 위치 조정
- `startOffset, method, spacing, xlink:href`
- text가 path를 따라감
```html

 <svg>
    <defs>
        //포물선을 그리고 텍스트를 포물선을 따라 표시하기 위한 path
        <path id = 'pathId' d='M50,250 C50,100 250,100 250,250'>
    </defs>
    //link:href를 사용하여 path를 참조 하여 사용
    <use xlink:href='#pathID'>
    </use>
    <text font-size=24 fill"blue">
        //link:href를 사용하여 path를 참조 하여 사용
        <textPath xlink:href='#pathID'>
            path를 따라 텍스트 표현
        </textpath>
    </text>
</svg>
```

- startoffset
```html
 <svg width=500 height=400>
    <defs>
        //포물선을 그리고 텍스트를 포물선을 따라 표시하기 위한 path
        <path id = 'pathId' d='M50,250 C50,100 250,100 250,250'>
    </defs>
    //link:href를 사용하여 path를 참조 하여 사용
    <use xlink:href='#pathID'>
    </use>
    <text font-size=24 fill"blue">
        //link:href를 사용하여 path를 참조 하여 사용
        <textPath xlink:href='#pathID' startoffset=35>
            path를 따라 텍스트 표현
        </textpath>
    </text>
</svg>
```
- spacing
```html
 <svg width=500 height=400>
    <defs>
        //포물선을 그리고 텍스트를 포물선을 따라 표시하기 위한 path
        <path id = 'pathId' d='M50,250 C50,100 250,100 250,250'>
    </defs>
    //link:href를 사용하여 path를 참조 하여 사용
    <use xlink:href='#pathID'>
    </use>
    <text font-size=24 fill"blue">
        //link:href를 사용하여 path를 참조 하여 사용
        <textPath xlink:href='#pathID' spacing=auto>
            path를 따라 텍스트 표현
        </textpath>
    </text>
</svg>
```
## marker
- 화살표 등의 형태로 선의 시작, 방향 표시
- path, line, plyline, plygon에서 사용
- <defs>에 <marker>를 작성하고 사용하는 엘리먼트에서 #id로 참조 
```html
<marker id="id1">
    <path></path>
</marker>

<path marker-end='url(#id1)' />
```
## markerUnints="strokeWidth"
- markerUnits="strokeWidth" : stroke-width을 기준으로 refY, refX좌표 값 산출 
```html
<svg width=400 height=500></sbf>

```

## refY, refX
-  markerUnits을 기준으로 marker의 위치를 지정한다. 

## markerWidth, markerHeight
- markerUnits을 기준으로 (디폴트는 markerUnits="strokeWidth")
- marker형태를 지정한다. 

## markerUnits="userSpaceOnUse"

## orient=angle(number)
- marker의 회전 


## image
## a 
- 하이퍼 링크 표현
- html의 a와 비슷하지만 차이가 있다. 
- 언더라인 표시되지 않음
- fill=none은 마우스 클릭이 인식되지 않음

```html
<svg>
    <a xlink:href="www.naver.com" target="_blank">
        <rect x=0 y=0>
        <text>네이버</text>
</svg>
```
## image
- `preserveAspectRatio`
- lasterimage 확장자가 png, jpeg등의 파일
- svg image

```html
<svg>
    <image x=50 y=100 width=150 height=150 xlink:href='logo-15o0.png'>
    <title>SVG이미지</title>
</svg>
```
- 확대/축소 비율이 다를때 
- 이미지의 표시위치와 크기를 브라우저가 결정
- width만 축소
- height도 width에 따라 축소
```html
<svg width=500 height=400>
    <image x=50 y=50 width=200 height=200 xlink:href='logo-15o0.png'>
    <title>SVG이미지</title>
    <image x=50 y=50 width=150 height=200 xlink:href='logo-15o0.png'>

</svg>


```
## align
- preserveAspectRatio='none'
- 원본이미지 보다 width, height가 큰 경우
- 균등하게 확대 하지 않고 지정한 값 그대로 이미지 표현
```html
<svg width=500 height=500>
    <image x=50 y=50 width=100 height=100 xlink:href=test.png preserveAspectRatio='none'/>
    <image x=50 y=165 width=150 height=100 xlink:href='test.png'>
    <image x=50 y=280 width=100 height=150 xlink:href='test.png'>
</svg>
```

## meetOrSlice
- preserveAspectRatio = 'meetOrSlice'
- xMin, yMin meet

## defer 
- preserveAspectRatio = 'defer'
- 위에껄 참조 한다. ??

## viewbox, transform
- 표시영역 지정
- `<svg viewBox='min-x, min-y, width, height`>
- min-x, min-y지점에서 width, height크기를 웹페이지에 표시
- <svg viewbox="min-x, min-y, width, height">
- 스펙에서 viewBox로 기술했으나, viewbox의 소문자도 가능
- min-x, min-y, width, height와 같이 공백으로 구분 가능
- viewbox를 작성하지 않았을때 기준 좌표(0,0)

```html
<svg width=200 height=200 viewbox='0 0 200 200'>
    <rect x=0 y=0 width=200 heigth=200 fill=none stroke=red />
    <circle cx=0 cy=0 r=50 fill=lime />
    <circle cx=0 cy=200 r=50 fill=red />
    <circle cx=200 cy=0 r=50 fill=blue />
    <circle cx=200 cy=200 r=50 fill=purple />
    <circle cx=100 cy=100 r=50 fill=green />
</svg>
    
    
```


## viewbox 축소
- svg width, height는 변경하지 않고
- 표시할 전체 영역을 viewbox의 width/height에 지정
```html
<svg width=200 height=200 viewbox='-50 -50 300 300'>
    <rect x=0 y=0 width=200 height=200 fill=none stroke=red />
    <circle cx=0 cy=0 r=50 fill=lime />
    <circle cx=0 cy=200 r=50 fill=red />
    <circle cx=200 cy=0 r=50 fill=blue />
    <circle cx=200 cy=200 r=50 fill=purple />
    <circle cx=100 cy=100 r=50 fill=green />
</svg>
```

## transform
- transform 프로퍼ㅣ 자체는 기능이 없으며, 속성 값에 의해 표현 
- `<rect transform='translate(50,50)' />`
```html
<svg width=300 heighth=300></svg>
<rect x=50 y=50 width=100 height=100 fill=none stroke=black />
<rect x=50 y=50 width=100 height=100 transform=translate(50,50) fill=none stroke=black />
```


## scale-양수
- scale을 쓰면 width, height뿐 아니라, 기본 점 (x, y)도 늘어나게 된다. 

## scale-음수
- scale을 쓰면 width, height뿐 아니라, 기본 점 (x, y)도 줄어들게 된다.  

## rotate
- 양수 시계방향, 음수 시계 반대 방행
- 회전 기준점 cx, cy

## skewX
- x축을 기준으로 기울기 표현
- 원점(0,0)을 기준으로 기울기 표현

## transform="matrix(a,b,c,d,e,f)"
- x축 확대/축소, y축 기울기, x축 기울기, y축 확대/축소, x축 이동, y축 이동

## gradient
- 그라디에이션
- 선형 그라데이션 : <linearGradient>, 선 형태로 변화
- 원형 그라데이션 : <radialGradient>, 원 형태로 변화
- 변화 간격: <stop>, 선형과 원형에 공통 사용


## 선형 그라데이션
- x1, y1, y2의 디폴트 값이 0%dlrh, ㅌ2 의 디폴트 값이 100%
```html
<svg>
    <defs>
        <linearGradient id='id1'>
            <stop offset=0% stop-color=lime />
            <stop offset=50% stop-color=yellow />
            <stop offset=100% stop-color=orchid />
        </linearGradient>
    </defs>
    <rect x=0 y=0 width=200 height=50 fill="url(#id1)" />
    <rect x=0 y=120 width=200 height=50 stroke="url(#id1)" />
</svg>
```

## objectBoundingBox
- 도형 기준 그라데이션
- x1, y1, x2, y2 좌표로 그라데이션 박스 지정
- 도형 안에서만 그라데이션 진행
- 디폴트: objectBoundingBox

## userSpaceOnUse
- 

## spreadMethod
- 도형의 남은 영역의 그라데이션 방법 지정
- pad: 디폴트, offset의 stop-color사용

## gradientTransform

## radialGradient
- 방사형 그라디언트

## pattern
- 일정한 형태를 정의 하고 이를 반복하여 표현
- x, y, width, height정의
```html
<pattern id='id1' x=0 y=0 width=20 height[=20 patternUnits="userSpaceOnUse">
    <rect x=0 y=0 width=10 height=10 fill=gray>
</pattern>
```

## viewbox
- 패턴을 viewBox에 반영
```html

```

## clipping path
- 개요
    - path, text, 도형의 특정 영역을 오려내는 것
    - 오려내는 것: clipping
    - 오려 내는 영역: clipping path
    - 오려낸 영역을 표시, 비표시 불투명으로 표현

## clipPath


## masking
- pc의 색표현
- pc화면은 대부분 rgb등의 단색을 조합하여 표현
- 알파채널: 단색 데이터에 직접 표시되지 않는 색데이터르 추가한것

##  mask


## filter
- 필터
- 라스터 이미지(픽셀), 도형의 시각적 효과 도모
- 이미지를 흐리게 하거나 농도, 채도, 색상 등을 조정
- 이를 필터 효과라고 부름

- 원본은 변경하지 않고 표시되는 영역에 적용
- filter 기능이 매우 많음 
- filterRes, filterUnits, primitiveInites, xlink:href

```html
<svg width=300 height=400>
    <defs>
        <filter id='id1'>
            <feGaussianBlur in="SourceGraphic" stdDeviation=2/>
        </filter>
    </defs>
    <image x=0 y=0 width=150 height=150 xlink:href='logo-150.png' filter='url(#id1)' />
</svg>>
```

## SourceGraphic, SourceAlpha

## feBlend
- normal, multiply, screen, darken, lighten


## Animation
- 기능이 매우 많음
- 애니메이션 구현 방법
- <animate> SVG + JavaScript, CSS애니메이션
- SMIL 확장
- SVG : 멀티미디어용 확장

## Animate
- attributeName(애니메이션 대상 속성이름), attributeTpe(CSS, XML, auto), from, to, begin, end, dur, fill, by, values
```html
<svg width=400 height=400>
    <circle cx=50 cy=100 r=30 fill=lime stroke=blue stroke-width=6>
        <animate attributeName=cx attibuteType=auto from=50 to=200 begin=0s dur=3s />
    </circle>

    <circle cx=50 cy=200 r=30 fill=yellow stroke=orange stroke-width=6>
        <animate attributeName=cy attibuteType=auto from=200 to=300 begin=1s dur=3s fill=freeze />
    </circle>

    <circle cx=50 cy=200 r=30 fill=yellow stroke=orange stroke-width=6>
        <animate attributeName=r attibuteType=auto by=50 begin=1s dur=3s fill=freeze />
    </circle>
</svg>

<svg width=400 height=400>
    <rect x=20 y=70 width=200 height=200 fill=none stroke=green />
    <circle cx=50 cy=100 r=30 fill=blue>
            <animate attributeName=cx attibuteType=auto to=70  begin=0s dur=5s fill=freeze />
            <animate attributeName=cy attibuteType=auto to=220  begin=0s dur=5s fill=freeze />
            <animate attributeName=r attibuteType=auto to=50  begin=0s dur=5s fill=freeze />
                
        </circle>
    
    <circle cx=190 cy=100 r=30 fill=blue>
        <animate attributeName=cx attibuteType=auto to=170  begin=0s dur=5s fill=freeze />
        <animate attributeName=cy attibuteType=auto to=220  begin=0s dur=5s fill=freeze />
        <animate attributeName=r attibuteType=auto to=50  begin=0s dur=5s fill=freeze />
            
    </circle>
</svg>
```

## 마우스 이벤트
- begin : click, mousedown, mouseup, mouseover, mousemove, mouseoutx

## 애니메이션 이벤트
- javascript  함수를 콜백으로 호출
    - onbegin : 애니메이션 시작할때 발생
    - onend : 애니메이션 끝났을 때 발생
    - onerepeat : 애니메이션 반복할때 발생

## restart
- `always` : 항상 시작 가능, 디폴트
- `whenNotActive` : 애니메이션이 실행 중일때는 시작 불가
- `never` : 처음 한번만 (크로스 브라우징 문제 있음)

## end
- begin, end 연결 
    - begin-"id1.end'
    - begin='id1.begin+2s'
    - begin='id1.end+3s'
    
## begin=indefinite
- a와 연동
```html
<a xlink:href="#id33">
</a>
<rect>
<animate attributeName=x id='id33' begin=indefinite to=200 dur=2s fill=freeze>
</rect>

```

## 이벤트 연동
- begin="id1.click"

## repeatCount
- 반복시간
- 10s or infinite

## additive
- 앞의 모든 <animate>속성값과 비교하여 차이를 반영

## accumulate
- 앞의 모든 <animate>속성값을 더함

## keyTimes
- 애니메이션 시작에서 종료까지를 100분율로 구별

## calcMode
- linear 
- paced
- discreter
- spline

## animateTransform
- translate
- rotate
- scale
- skewX, 
- sdkewY

## amimateMotion
- path를 따라 애니메이션됨
```html
<svg width=400 height=500>
    <g id='id111'>
        <rect x=10 y=140 width=100 height=30 fill=yellow />
        <text x=60 y=160 text-anchor=middle>여기 click</text>
    </g>

    <path id="idpath" d="M20,20 L170,70 20,120 20,20 80,70 20,120" fill=none stroke=gray stroke-width=2 />
        <circle cx=0 cy=0 r=10 fill=blue>
                <animateMotion dur=3s repeatCunt=2 rotate=auto begin="id111.click" fill=freeze>
                <mpath xlink:href="#idpath" />
                </animateMotion>
        </circle>
</svg>

```