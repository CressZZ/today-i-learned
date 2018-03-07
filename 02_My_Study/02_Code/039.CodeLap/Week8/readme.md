# ES6

## setPrototypeOf()
구분|타입|데이터(값)
:---:|:---:|:---:
형태||Object.setprototypeOf()|
파라미터|Object|object, 오브젝트 또는 인스턴스
파라미터|Object|Object의 prototype또는 null
반환|Object|펏 번째 파라미터

- 첫번째 파라미터(지정한 object)의 __proto__에 두번재 파라미터 설정
- 첫 번째 파라미터에 오브젝트 또는 인스턴스 지정
    - Obejct.isExtensible()결과가 이면TypeError
    - Boolean, Number, String, Symbol이면 인스턴스 생성
    - 두 번째 파라미터를 반영하지 않고 생성한 인스턴스 반환
- 두번째 파라미터에 오브젝트 또는 null 지정
- ES5에 getPrototypeOf() 있음 
```js
그럼 왜 ES5에는 setPrototype이 없었는가?
__proto__가 es5에서는 표준이 아니었다. 표준이 아닌걸 쓸수는 없었다. 하지만 es6에는 __proto__가 표준이 됨으로서 setPrototypeOf()가 거론하게 되었다. 
setPrototypeOf()라는 것은 __proto__에 새로운 프로퍼티를 set시키는 것이다.
```
- __proto__에 설정하는 목적
    - 첫 번째 오브젝트. method()형태로 호출 가능 
- 두번째 파라미터에 오브젝트의 prototype지정 
    - function, 의스턴스도 가능하지만
    - 목적, 기능에 완전하게 적합하지는 않음

```js
const Sports = function(){
    this.count =123; 
};
Sports.prototype.getCount = function(){
    return this.count
}

const protoObj = Object.setPrototypeOf({}, Sports.prototype);
console.log(typeof protoObj.__proto__) // object

const result = protoObj.getCount();
console.log(result) // undefined

```
## __proto__
- syntax: Object.prototype.__proto__
- prototype과 __proto__의 차이는
    - prototype은 인스턴스가 접근하려면 인스턴스.prototype.someting()으로
    - __proto__는 인스턴스.something()으로 
```js
const Sports = function(){
    this.memebr = 11;

}
Sprots.prototype.getMEmebr - function(){};
const sportsObj = new Sports();
console.log(sportsObj.__proto__ === Sprots.prototype)//true
```

##  isNaN()
- NaN은 숫자이다. 
- `Number.isNaN()`
- isNaN : 파라미터 값이 NaN이면 true, 아니면 false

## Unicode
- ES6에 유니코드 관련 프로퍼티와 메소드 추가
- 유니코드는 U+0031형태
- 코드 포인트 
    - 0031이 코드 포인트, 문자 코드로 알려 질 수 있음
    - 코드 포인트 값으로 문자/기호/이모지/아이콘 표현
    - 4자리 이상의  UTF-16진수 형태
    - U+0000에서 U+10ffff까지 110만개 이상 표현
- plane: 코드 포인트 전체를 17개의 평면으로 나눔
    - 하나의 plane은 65535(U+ffff)개
    - 첫번째 plane을 basic multillingual plane라고 부름
    - ㅣㄹ반적인 무자가 여기에 속함, 한글도 여기에 속함 
- x BMP를 제외한 plan
    - Supplementary paane, Astral plane이라고 부름
    - UTF-16진수 4자리가 아닌 5자리 이상의 코드 포인트
이스케이프 시퀀스 
    - `\x31\x32\x22`
``....

## StringfromCode.point()

## String.prototype.codePointAt()

## String.prototype.includes()
- 정규표현식 불가 

## String.prototype.startsWith()
- 정규표현식 불가

## String.prototype.endsWith()

## String.prototype.repeat()

## String.prototype.normalize()

## Template Literal
Syntax: '문자열'
        '문자열 ${expression}문자열'
        'tag 문자열 ${expression}'
- 작성형태
    - \`AB${표현식}\` 형태로 작성
    - 역따옴표/backtick(\`\`)안에 문자열과 표현식 작성
    - let one = 1, two =2;
    - \`${one + two}\`
    -  one에 1이, two에 2가 설정되어 1+2 계산 실행 
```js
console.log("1라인 \n2 라인")
console.log(`1라인
2 라인`)

const one =1, two=2
const result = `1+2는 ${one+two}이 된다.` 
console.log(result); // 1+2는 3이 된다. 

```

## tagged Template
- 작성형태
     - let one = 1, two =2;
     - function show(text, value){}
     - show \`1+2=${one+two}`
```js
const one = 1, tow=2;
// 문자열을 배열로 받는다!!
function eachOne(text, value){
    console.log("1:", text[0])
    console.log("2:", vlaue)
    console.log("3:", text[1])
}
// 1: 1+2=
// 2: 3
// 3: 
eachOne `1+2=${one+two}`;

```
- 호출하는 곳에서
    - 표현식 결과값을 넘겨줄때
    - 태그 함수의

```js
const one =1, two =2;
function manyparam (text, plus, minu){
    console.log(text[0])
    plu
    text[1]
    minus
    text[2]
    text[3]
};

manyParam `1+2=${onw+two}이고 1-2=${one-two}다.
```

```js
const one =1, two =2;
function restParam(text, ...values){}

```

## String.raw

```js

```

## String.raw()

## Array.from()
- 이터러블 오브젝트를 array로 전환 시킨다. 

## Array.of()
- 파라미터 값을 배열로 반환한다.

## copyWithin
- Array의 특정위치부터 특정위치까지를 복사해, 같은 Array의 특정위치에 replace 시킨다. 

## generic
- 스펙이나 관련 문서에서 아래 문장을 볼 수 있음
    - copyWithin function is intentionally generic.
- generic의미는?
    - copyWithin()은 Array메소드 이므로 Array가 처리 대상
    - 이때 generic은 Array-like, 이터러블 오브젝트도
    - 처리할 수 있다는 의미
- generic오브젝트 사용방법
    - {}.copyWithin()형태로 작성 불가
    - 아래와 같이 파라미터에 genric오브젝트를 지정하고
    - call()메소드로 호출
    - Array.prototype.copyWithin.call(Array-like) 

## Array.prototype.fill()
- 범위 값을 지정한 값으로 대체 
- generic
```js
const one = [1,2,3]
one.fill(7, 1, 2) //[1,7,7]

```

## Array.prototype.entries()
- Array로 이터레이터 오브젝트를 생성하여 반환 
- Array 는 이터러블 오브젝트 이지만, 이터레이터 오브젝트는 아님

## Array.prototype.keys()

## Array.prototype.value()

## Array.prototype.find()
- 콜백함수에서 일치하는 값 반환
- find방법 및 ㅣ준
    - 배열 엘리먼트를 하나씩 읽어 가면서 콜백함수 호출
    - 콜백함수에서 true를 반환하면 find()종료
    - 이때 배열 엘리먼트 값 반환
    - 배열 끝까지 true를 반환하지 않으면 undefined반환
- 콜백 함수에 넘겨주는 파라미터 및 순서
    - 배열 엘리먼트
    - 인덱스
    - 배열 전체

```js
let result = [1,2,3].find((v, i a )=>value===2);
console.log(result)

```

## Array.prototype.findindex()
- 바로 앞의 find()와 처리방법 같음
    - 다만, 반환값이 다름

## RegExp [u 플래그]
- u(unicode)플래그
    - a매치 대상을 유니코드로 인식
- 코드 형태
    - /\u{31}\u{32}/u.test("12")
    - 설명은 코드 참조 
```js



```

## RegExp [y 플래그]
- 정규 표현식은
    - 매치된 문자열의 인덱스를 lastindex에 설정 
- y(sticky)플래그
    - lastindex위치부터 매치 수행
    - 디폴르 값: 0
    - ^패턴을 사용하지 않으면 첫 문자 부터 매치 

## Generator object [function*]
- Generator function
    - function* 키워드를 사용한 함수
- 제너레이터 함수 형태
    - function* 선언문, function* 표현식, GeneratorFunction
- 제너레이터 함수를 호출하면
    - `함수 블록{}을 실행하지 않고`
    - Generator 오브젝트를 생성하여 반환
    - Generator 오브젝트는 `이터레이터 오브젝트`
- 함수 블록 실행
    - `Generator 오브젝트의 메소드를 호출할때`
- new 연산자로 인스턴스 생성 불가 
 
## function* 선언문
```js
function* sports(p1, p2){
    yield p1+p2
};
let generatorObj = sports(1,2);
```

```js
function* sports(o, t){
    console.log("function")
    tield o+t;
}

let genObj = sports(1,2) // genObj typeof = object
```

## function* 표현식
```js

const sports = function*(o, t){
    console.log("함수 블록")
    yield o+t //yield가 여러개면 next를 많이 해야 한다.
}
const genObj = sports(10, 20);

const result = genObj.next(); //"함수 블록"
console.log(result); // {value: 30, done:false}
```

##  function* 구조
le

## generator object 구조
```js
functoin* sports(o, t){
    yield o+t
}
let gentObj = sports(1,2)

```

##  yield
syntax: [returnValue] = tield[expression]
- 코드 형태 
    - result = yield 10+20;
- yield 키워드는 제너레이터 함수를 멈추거나 재실행에 사용
- `yield 오른쪽`의 표현식을 평가하고 결과 반환 
    - 표현식을 작성하지 않으면 undefine반환
- [[retunValue]]
    - 오른쪽의 평가결과가 설정되는 것이 아니라
    - 다음 next()에서 파라미터에 지정한 값이 설정됨

```js
function* sports(one){
    const two = yield one;
    const param = yield two + one;
    yield param + one;
}
const genObj = sports(10);

let result = genObj.next()
console.log(result); // {value: 10, done: false}

result = genObj.next();
console.log(result); // {value: NaN, done: false}

result = genObj.next(20); // {value: 30, done: false}
console.log(result);


```

- yeild를 완료 하면 


## genratorObject.next()
- next()는 yield단위로 실행
- 제네레이터에 yield가 다수 있으면 next()를 다수 실행 해야 함 
- 함수는 호출 할 때 마다 변수에 초깃값 설정
- 제너레이터는 제너레이터 오브젝트를 생성할 때 설정하고
    - 넥스트로 실행할 때마다 초깃값을 설정하지는 않음 
    - 그 전 단계까지 진행한 변수는 그대로 유지됨 
- next()에 설정한 인자는 그 이전의 yield의 왼쪽에 있는 변수에 할당됨!(겁나 어려움 )

## function* 에서 throw
- 에러 발생 

## yield*
- yield*[[표현식]]
---
## Class
- class는 Function 오브젝트가 바탕
- 객체지향에서 사용하는 syntax추가
    - static, super
- class선언문과 class표현식으로 작성 
```
Even though ECMAScript includes syntax for class definition, ECMAScript objects are not fundamentally class-based usch as thise in c++, smalltalk, or Java. instead objects may be created in various ways including via a literal notation or vai consro....
```
## Class 선언문 
- 코드형태
```js
class Member {
    getName(){
        return 123;
    }
}
let memberObj = new Member();
memberObj.getName;
```
```js


```
## class 표현식
```js
let Member = class {
    getNmae(){
        return 123;
    }
}
let memberObj = new Member();
memberObj.getName;
```

```js
const Member = class{
    getName(){
        retunb "이름";
    }
};
vonst obj = new Member();

const result = obj.getName();
const.log(result);
// const Member = function(){}와 같음 
```

## class 특징
- class는 function과 같지만 몇가지 특징 있음
- "use strict"를 작성하지 않아도 strict모드에서 실행
- class 안에 메소드 작성 방법 
    - getName(){}
    - getName:function(){}형태에서 메소드 이름만 작성
    - 메소드와 메소드 사이에 콤마(,) 작성하지 않음
    - 세미콜론(;) 작성은 선택
- class_name의 typeof는 function.

```js
let Member = class{
    setName(name){
        this.name = name;
    }
    getName(){
        return this.name
    }
}

```

## class 특징
- prototyp징에 여녈하여 작성하지 않음
    - class 
- class로 인스턴스를 생성한 후 prototype에메서드를 추가 하면 모든 인스턴스에서 공유
- window 오브젝트에 설정되지 않유

## constructor
- class인스턴스 생성 및 인스턴스 초기화
- 디폴트 constructor
    - class에 constructror를 작성하지 않으면
    - 디폴트 constructor 가 호출됨 
    - 엔진이 class 키워드를 만나 class오브젝트를 생성할때
    - constructor 에서 class전체를 참조 하도록 설정
- constructor 에서 인스턴스가 아닌 다른 값 반환 가능 
    - number, String을 반환하면 이를 무시하고 인스턴스 환환
    - Object를 반환하면 인스턴시를 반환하지 않고 Object반환

```js
class Member{
    constructor(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
};
const memberObj = new Member("스포츠");

const result = memberObj.getName();
console.log(result);
// new Member("스포츠")를 실행하면 
// constructor 가 자동으로 호출됨
// 파라미터 값으로 넘겨줌 
// 생성한 인스턴스 반환


// 1. new연산자가 constructor 호출 
// 2. 엔진은 우선 Object{}생성하고
//  - Ibject에 필요한 프로퍼티 이름과 값 설정
//  - 이것이 인스턴스 
// 3. constructor 블록의 코드 실행

```

## getter 
```js
class Member{
    get getName(){
        return "name"
    }
}
```
```js
class Member{
    constructor(name){
        this.name = name
    }
get getName(){
    return this.name;
    }
}
const memberObj = new Member("test")

const result = memberObj.getName;
console.log(result) // "test"
```

## setter
```js
class = Member{
    set setName(param){
        this.param = param;
    }
}
let memberOIbj = new Member();
memberObj.setName = "축구"
```


## 상속 
- 상속은 객체 지향 기능 중에 하나
- 다른 class를 상속 받아 메소드와 프로퍼티 사용
- 상속 받을 class
    - 부모 클래스, 슈퍼 클래스라고 부름
    - 강좌에서는 슈퍼 클래스로 표기
    - ES6의 super 키워드로 슈퍼 클래스 지칭
- 상속 받는 classs
    - 작식 클래스, sub 클래스 등으로 부름
    - 강좌에서는 서브 클래스로 표기
    - 슈퍼와 서브의 시맨틱을 맞추기 위한것 

```js
 function Sporst(member){
     ~~ 사진 3876
 }

// 예전

```
## 상속
- ES6에서는 extends키워드로 상속 구현
- class Soccer extends Sports{}
    - Soccer가 상속받는 서브 클래스 이고 
    - Sports가 상속받을 슈퍼 클래스 

```js
중요! 사진 3877

```

## super

- 슈퍼 class와 서브 class에 같은 이름이 있을때, 
    - 서브 class의 메서드가 호출됨
    - super.name()형태로 슈퍼 class메서드 호출
- 서브의 constructor 에 super ()를 작성하면 
    - tbvj 침ㄴㄴdml  constructor가 호출됨 


```js
// super 호출
// 상암 
class Sports{
    constructor(member){
        this.memeber = member;
    };
    setGround(ground){
        this.ground = ground;
        console.log(this.ground);
    }
};
class soccer extends Sports{
    setground(ground){
        console.log('super 호출')
        super.setGround(ground); //중요
    }
};
const obj = new Soccer(11);
obj.setGround("상암");
```


##  super, constructor
- 서브와 슈퍼에 constructor를 작성하지 않으면
    - 디폴트 constructor 가 호출되면
...


## built-in 상속 
- extends로 Array와 같은 빌트인 오브젝트를 상속할 수 있다. 
    - super()로 built-in 오브젝트의 constructor 호출
```js
class ExtendArray extends Array{
    constructor(){
        super();
    }
    getTotal(){
        let tatal = 0;
        for (const value of this){
            total += value
        }
        return total;
    }
}


const obj = new ExtendArray();
obj.push(10, 20, 40)

const result = obj.getTotal();
console.log(result) //60
```

## super와 object

## 강사의 생각
-  ES6의 class에 대한 세간의 평가
    - function의 확장 정도이고 특별한 것이 없다. 
    - 간편하게 코드를 작성할 수 있다는 정도이다. 
- ES5 모습 
    - super기능이 없어 코드로 만들어서 사용했음
    - ES5의 Onject.create()도 한계가 있음
-  강사님 생각
    - ES6는 OOP구현의 기반 제공
    -  OOP gkfuaus tjfrP aocdy
    - OOP 개념 설계기법, 기술 이해 필요
    - 이런 가이드 라인을 제공하는 것은 바람직한 모습

## static
- class에 정적(static)메서드 선언
- static 메서드 특징
    - portotype에 연결되지 않고 class에 직접 연결
    - class로 생성한 인스턴에 할당되지 않음
    - 인스턴스에서 호출 불가
    - class이름.메서드() 로 직접 호출
    - static 메서드 변경/삭제가능, 열거 불

```js
class Sports {
    static getitem(){
        return "sports";
    }
}

constr result = Sports.getitem()
consol.log(result) 
```
```js
class Music{
    static getTitle(){
        return this.getTitle;
    }
}
let obj = new Miusic("tst");
obj.getTitle // undefinted
```

## 호이스팅
- class는 호이스팅 ㅗ되지 않음 
```js


```


## computed name 사용
```js
const type = "Type";
class Sports{
    static ["get" + type](kind){
        return kind ? "스포츠" : "음악";
    }
}
const result = Sp[osrts []]
```

## this
- static 메서드에서 this는 
    - 인스턴스가 아니라 class전체를 참조 한다.
- 

## gereraor 함수
- class안에 generator함수를 만들 수 있다. 

## new.target

## interface
- image, Audio같은 DOM을 상속 받을 수 있다. 

```js
class Extendsimaget extends image{
    constructor(){
        super();
    };
    setProperty(){
        this.src = ""
        this.alt =""
        this.title=""
    };
}

```
## 선택
- 모든경우에 
    - class를 사용하는 것이 적합하다고 할수 없다.
- 경우에 따라
    - function이 좋을 수 도 있다. 
- 분명한것은 설계를 해야 한다!


