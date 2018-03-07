# proxy


# reflect
```js
class Sports{
    constructor(ground){
        this.ground = ground;
    }
    getGround(){
        return this.ground
    }
};

class Soccer{
    getGround(){
        return "Soccer.getGround() 사용";
    }
};

const obj = 
Reflect.construct(Sports, ["상암구장"], Soccer);
console.log(obj.getGround());

```

# ArrayBuffer
이 예제에서는 8 바이트 크기의 버퍼를 생성하고 이를 Int32Array에 참조시켰습니다.
```js
var buffer = new ArrayBuffer(8);
var view   = new Int32Array(buffer);
```
## Typed Array
- Typed Array: 단어를 띄우면 개념적인 접근
- TypedArray: `하나의 단어로 포괄적인 오브젝트 이름`
- Typed Array
    - Arry-like 형태로 각 엘리먼트가 일정한 타입으로 구성
    - 각 엘리먼트의 값을 바이너리(binary)로 표현
    - typed Array에서 typed는 바이트 수에 따른 타입
        - 1바이트, 2바이트, 4바이트, 8바이트
- ES5에서는 8바이트밖에 없었지만, ES6에서 4개가 생겼다. 
- 자바스크립트에서 Array는 엘리먼트 추가삭제가 용이하다.
    - 반면, 배열 길이가 유동적이면 처리 속도에 영향을 미침
- Array처리 메커니즘
    - 배열의 길이가 조정되는 것을 최소화하기 위하여 
        - 엘리먼트를 삭제하면 그 위치에 undefined를 설정
        - 배열을 읽을 때 undefined로 설정된 엘리먼트 제외
        - 삭제한 엘리먼트 위치에 다음 엘리먼트를 당겨서 설정하고
        - 다시 당겨서 설정하면 처리 속도가 떨어짐 
- 메모리 측면의 자바스크립트 단점
    - 64Bit(8byte)를 사용하므로 필요 이상의 메모리 차지
    - 숫자 1은 1바이트면 충분
    - 작은 데이터는 무제가 없지만
        - 이미지 같은 청크 데이터는 문제
    - typed Array필요성
        - 배열 길이가 변하지 않는 형태 필요
        - 숫자 1표현에 바이너리로 1바이트 사용
        - 값을 메모리에 설정하려면 바이너리로 변환 필요
        - 처음부터 바이너리로 저장하므로 변환 처리 불필요
## ArrayBuffer
- 길이가 고정된 바이너리 버퍼 오브젝트
    - new ArrayBuffer()로 인스턴스 생성
    - 생성한 인스턴스의 길이 변경 불가
- ArrayBuffer에 직접 악세스 불가 
    - TypeArray또는 DataView를 사용하여 엑세스
    - 이를 사용하여 ArrayVuffer의 데이터 타입 지정
        - 8비트, 16비트, 32비트 등
    - ArrayBuffer의 엘리먼트 구조 (structure)정의
        - 구간(시작/끝)타입 

## new ArrayBuffer()
- ArrayBuffer 인스턴스 생성, 반환
- 파라미터에 ArrayBuffer의 바이트 수 지정

```js 
// 20바이트의 ArrayBuffer 인스턴스 생성
const bufferObj = new ArrayBuffer(20);


// bufferObj구조(일부 작성 생략)
bufferObj: ArrayBuffer


```

## TypedArray
- TypedArray 오브젝트
    - ArrayBuffer 데이터를 Array-like 형태로 view(CRUD)
    - 9개 typedArray오브젝트를 총칭하는 스펙상의 오브젝트
        - 9개 오브젝트
    - 스펙에서는 `%TypedArray%`로 표기
    - 강의에서는 TypedArray로 표기 
- ArrayBufferView
    - 
- TypedArray 오브젝트 프로퍼티 구분 
    - TypedArray오브젝에만 있는 프로퍼티
        - Array에 같은 이름의 프로퍼티 없음
    - Array 메소드와 이름이 같은 메소드도 있지만, 일부는 기능이 다르지만, 대부부누 기능도 같음 
    - Array에만 있고 TypedArray에는 없는 메소드
- Attay에만 있는 메서드
    - pop, push, shift, splice, unshift, concat
    - 이 이ㅚ의 Array메서드는 TypedArray에도 있음. 

## new TypedArray()
- 9개의 인스턴스 생성, 반환

```js 
const int16Obj = new int16Array(3)
console.log(int16Obj)

// 1. int16Array이므로 16비트 
//  - 2바이트 단위로 값을 저장하는성
//  - 3개의 엘리먼트를 가진 인스턴스 생성
// 2. 각 엘리먼트의 초깃값으로 0 설정
// 3. 각 엘리먼트는 사인 부호(+, -) 를 가진
//  - 바이너리 데이터이며
//  - 2의 보수법으로 음수를 표현한다.

 int16Obj[0] = 123;
 int16Obj[1] = 456;
 console.log(int16Obj)
 // 1. int16Obj가 Array-like이므로 인덱스 값을 key로 하여 값을 설정할 수 있음 

console.log(int16Obj[0]);

const emptyObj = new int16Array();
console.log(emptyObj)
// 1. 파라미터에 값을 저정하지 않아도 TypeArray인스턴스를 생성하지만, 엘리먼트가 없으므로 특별한 목적에 사용한다.
```
## new TypedArray()
- TypedArray를 복사하여 9개 타입의 인스턴스 생성, 반환
    - 파라미터에 복사항 TypeArray지정
    - 복사 받는 인스턴스의 바이트 수가 작으면 값이 짤림
    - 예: int16Array를 복사하여 int8Array인스턴스 생성 

```js
// 파라미터에 TypedArray지정
const int16 = new int16Array(3)
int1r6[0] = 12345;

// 1. int16Array인스턴스를 생성하고 0번 key에 12345를 설정
// 2. 엘리먼트가 16비트이므로, 2의 16승인 65536까지 정장이 가능
//  - 즉, 12345를 저장할 수 있음 

const int16Copy = new int16Array(int16);
consolt.log(int16copy)

// 1. 파라미터에 int16Array인스턴스 지정 
// 2. 인스턴스를 복사하여 int16Array인스턴스 생성 

const int8Copy = new int8Array(int16);
console.log(int8Copy);

// 1. int16Array를 복사하여 int8Array인스턴스 생성
// 2. int16에서 int8타입으로 복사하므로 값이 잘림
//  - 8비트의 최댓값이 256이므로 12345가 잘림 

// 3. 비트 단위로 앞에서 부터 잘리므로 비트로 표현된 값에 따라 복사되는 값이 다름 
// 4. 콘솔에 [57, 0 , 0]이 출력되며 12345 - 57 은 12288
```

```js
const bufferObj = new ArrayBuffer(32)
// 1. ArrayBuffer인스턴스 생성, 32바이트를 가진 buffer형태의 인스턴스
// 2. TypedArray에서 ArrayBuffer를 view
//    - ArrayBuffer에 데이터를 저장하고
//    - typedArray에서 ArrayBuffer 데이터 사용
// 3. TypedArray에서 바이트 단위를 지정하여 사용 

const oneObj = new int16Array(bufferObj) 
// 1. 파라미터의 ArrayBuffer인스턴스로 인스턴스 사용
// 2.16타입은 
con

```

## 구조체
- 구조체(structure)
    - 다른 데이터 타입을 하나로 묶어 놓으 형태
    - TypedArray로 구조체를 만들 수 있음 
    - `{kewy:value}`는 구조체와 형태에서 차이 있음
- 시나리오
    - 아래 형태로 ArrayBuffer를 구성하고 값 설정
    - 품명코드:Unit(1*10)
    - 품명: Unit16(2\*10), 수량: Unit16(2\*1)
    - 단가: Unit(2\*1), 금액: Float32(4\*1)
    - 메모리에 바이트를 펼친 모습
 
 ```js

//    - 품명코드:Unit(1*10)
//    - 품명: Unit16(2\*10), 수량: Unit16(2\*1)
//    - 단가: Unit(2\*1), 금액: Float32(4\*1)
// 총 38btye
let item = {code: "book", desc:"자바스크립트", qty: 10, price: 20, amount: 200}

let buffer = new ArrayBuffer(40);
// 1. item의 전체 바이트수가 40이므로
// 2. 파라미터에 40을 지정하여 ArrayBuffer인스턴스 생성

let code = new Uint8Aray(buffer, 0, 10);
// 1. 품명코드를 저장하기 위한 인스턴스 생성
// 2. 품명 코드는 숫자와 영문 대소문자 사용가능
// 3. 숫자와 영문자 값이 255보다 작으므로 Uint8타입의 인스턴스에 저장할 수 있음
// 4. ArrayBuffer의 0번부터 1바이트 10개 사용

for (let k=0; k<item.code.length; k++){
    code.set([item.code.charCodeAt(k)],k);
};
// 1. ArrayBuffer에 바이너리 값을 설정해야 하며 영무자를 유니코드로 변환하면 숫자 값을 사용할 수 있음
// 2. item.code 값은 'book'이며, 하나씩 charCodeAt()으로 유니코드로 변환하여 인덱스 번째에 설정
// 3. 전체가 10바이트이지만 앞에 4바이트만 값이 설정되고 나머지는 디포트 값인 0이 설정 됨 

const descObj = new Uint16Array(buffer, 10, 10);
// 1.품명을 저장하기위한 인스턴스 생성
// 2. 품명은 숫자, 영문, 한글 사요ㅕㅇ 가능 
// 3. 한글은 유니코드 2바이트를 사용하므로  Uint16타입의 인스턴스 생성
// 4. 앞ㅁ의 품명코드가 10바이트를 사용하므로 2바이트 단위로 10번 인텍스부터 10개씩 20바이트 사용 
for (let k=0; k<item.desc.length; k++){
    code.set([item.desc.charCodeAt(k)],k);
};

// 1.품명 length만큼 반복하면서 유니코드로 변환하여 설정 

const qty = new Uint16Array(buffer, 30, 1);
qty.set([item.qty])
// 1.수량을 저장하기 위한 인스턴스 생성
// 2. 음수가 없다는 가정에서 Uint16타입의 인스턴스 생성
// 3. vnaaudzhem(10), 품명(20)이 총 30바이트 사용, 수량은 30번 인덱스부터 2바이트(16비트)1개사용

const price = new Uint16Array(buffer, 32, 1)
price.set([item.price]);
1. 단가를 저장하기 위한....


const amount = new Uint32Array(buffer, 36, 1);
amount.set([item.amout]);
// 1. 금액을 저장하기 위한 인스턴스 생성
// 2. 여기서 중요한 것이 있음
//     - 바로 앞 단가의 offset단위르르 맞추어야 함
// 3. 단가 인스턴스가 32와 33번 인덱스를 사용하므로 34번 인덱스부터 사용할 수 있지만, 
// 4. Uint32타입이 4바이트 이므로 34를 4로 나누면 2가 남아 4바이트 단위에 맞지 않음. 맞지 않으면 애러 발생
// 5. 이를 맞추기 위해 오프셋에 36을 지정한것 
// 6. 이로서 40바이트에 값 설정완료
//  - 이어서ArrayBuffer값을 문자열로 연결하여 출력 


 ```

 # DataView
- ArrayBuffer view 방법
    - TypedArray 사용
    - Dataview 사용
- DataView
    - getter, setter 제공
    - Endian 지정 가능

## new DataView()
- DataView 인스턴스 생성, 반환
     - ArrayBuffer 데이터 view(CRUD)를 위한 인스턴스 
     - view구간만 지정, view타입은 메소드로 지정
- 파라미터 
    - 두번째: ArrayBuffer의 바이트 오프셋, 디폴트:0
    - 세번째: DataView에서 사용할 바이트 수 
        - 디폴트: ArrayBuffer전제 length

```js
const buffer = new ArrayBuffer(16);
const view = new DataView(buffer)

console.log(view)
console.log(view.byteOffset)

```

## Endian
- 엔디언
    - 메모리에 데이터를 배치하는 방식
    - 바이트 오더 (Byte Order)라고도 부름
- 엔디언 구분
    - 빅엔디언, 리틀엔디언
    - 믹스트 엔디어: 오래되고 드룸
- 메모리에 데이터 배치 형태
    - 10진수로 305,419,896은 16진수로 12,345,678
    - 빅엔디언: 0x12 0x34 0x56 0x78
    - 리틀 엔디언 : 0x78 0x56 0x34 0x12
    - 믹스트 엔디언: 0x34 0x12 0x78 0x56
- 엔디언 결정 기준 
    - TypedArray : 호스트 컴퓨터 기준으로 빅엔디언, 리틀 엔디언 결정
    - DataView: 엔디언 지정. 디폴트: 빅-엔디언
- 고려 사항
    - OS, CPU, 컴퓨터에 따라 엔디언이 다름 

# getint8()
- 사인 부호를 가진 8비트 값 반환 
```js
const buffer = new arrayBuffer(4)
const int8 = new int8Array
```

# Promise
- 자바스크립트는 기본적으로 동기 실행
    - 앞 코드가 실행을 완료한 후에 다음 코드 실행
- Promise: 비동기 실행(처리)
    - XMLHttpRequest의 비동기 처리와 흐름이 같음
    - 코드를 연속하여 처리하지 않고 중간에 흐름이 끊어짐
    - 다음 코드를 처리할 수 있는 환경이 되었을 때 실행 
- 비동기 처리에 맞도록 코드 작성 
    - Promise오브젝트에서 비동기 처리 메커니즘 제공
- DOM스펙에서 javaScript로 전환
    - DOM에서도 사용 가능 
> 참고:DOM은 인터페이스를 지원한다. DOM은 오브젝트를 지원하지 않는다. DOM은 인터페이스를 지원하기 때문에 java도 사용할 수 있다. 

```js
function check(){
    return new Promise(function(resolve, reject){
        resolve();
        console.log("Promise");
    })
}

check().then(function(){
    console.log("성공");
}, function(){
    console.log("실패");
});

console.log("end");

/*
1. check(); 호출
2. new Promise() 실행
3. console.log("Promise")
 - resolve(); 호출하지 않음 
4. return new Promise();
 - then()실행하지 않음
5. console.log('end')
6. console.log('성공');
*/
```
## Promise 상태
- 처리를 진행할때 마다
    - 현재 상태를 [[promiseState]]에 저장
- 상태는 두가지로 반드시 하나만 발생
    - pending, setting(fulfiled, rejected)
- pending 상태에서 처리하는 것   
    - new Promise()로 인스턴스 생성
    - promise 성공과 실패 핸들러 바인딩
- Promise처리의 성공, 싪패는 알수 없음 

- settled 상태 
    - pending이 종료된 상태를 나타냄
    - fulfilled와 rejected로 구분 

## new Promise()
- Promise 인스턴스 생성, 반환
- 파라미터 
    - function을 지정하며 executer라고 함
    - new Promise(function(resolve, reject){...})
- executer 파라미터
    - 첫번째: Promise 생성자 코드를 성공했을때의 핸들러 이름
    - 두번째: 실패했을 때의 핸들러 이름 
- excuter 블로{}에 성공, 실패를 구분하여 핸들러 호출 코드 작성

```js
function check(param){
    return new Promise(
        function(resolve, reject){
            if(param ==='ok'){
                resolve(param);
                console.log('resolve');
            }else{
                reject(param;)
            }
        }
    )
}

check('ok').then(function(){
    console.log("성공");
}, function(){
    console.log("실패");
});

console.log("end");


``` 
## then 
- 성공과 실패 핸들러 정의
- 파라미터 
    - 첫번째: Promise가 fulfilled상태일때 실행될 핸들러
    - 두번째: Promise가 rejected상태일때 실행될 핸들러
- fulfilled, rejected 함수 파라미터
    - new Promise()의 resolve(), reject()에 파라미터를 하나만 작성
    - 다수의 파라미터를 작성하더라도 핸들러에서 처음 하나만 사용
    - 다수의 파라미터를 넘겨주려면 배열, Object로 작성 
```js
function check(){
    return new Promise(
        (resolve, reject) => resove(100)
    )
}
const one = check().then(()=>
console.log('then-1'));

const two = check().then((param)=>{
    console.log('then-2', param);
    return param + 5();
});

check().then((param)=> {
    console.log('then-3', param)
    return param + 7();
}).then((param)=>console.log("then=-4"),param)

```
- fullfiled, rejected의 처리 
    - return문 작성에 관계 없이 Promise 인스턴스 반환
    - return문의 표현식 결과를 

## catch()
- 실패(reject)핸들러 정의
    - then()의 두번째 파라미터 함수를 작성하지 않고
    - catch(param)작성
    - 파라미터를 하나만 사용할 수 있음
    - return 문의 표현식 경과를 [[promiseValue]]에 설정
- cat

## resolve()
- Promise 인스턴
```js
const promis
```

## Promise all

```js
function order(mili){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('mili:', mili);
            resolve(mili);
        },mili);
    })
}
Promise.all([order(150), order(100), order(50)]).then((milis)=>console.log(milis));
```

```js
function order(m){
    return new Promise((resolve, reject)=>{
        setTimeout(()=> {
            console.log(m);
            m === 100 ? reject('reject') : resolve(m)
        }, m)
    })
}
Promise.all([order(150), order(100), order(50)]).then((m)=>console.log(m), (error)=> console.log(error))

```

## race()
- 처음 한 번만 then() 실행 
    - 

```js
function order(m){
    return new Promise((resolve, reject)=>{
        setTimeout(()=> {
            console.log(m);
            resolve(m);
        }, m)
    })
}
Promise.race([order(150), order(100), order(50)]).then((m)=>console.log(m), (error)=> console.log(error))
```

# ES8
## padStart
- 대상문자여릉ㄹ 첫 번째 파라ㅣ터 길이만큼 늘리고 
    - 대상 문자열을 늘어난 길이 끝에 채운다. 
- 두번째 파라미터 (선택)
    - 채울 문자열을 작성
    - 늘어난 길이끝에 대상 문자열을 채운후 
    - 남은 영영에 파라
    
## entreis
```js
const one = {book:"책", music:"으악"}
let result = Object.entries(one);
console.log("1:", result)

/*
1. {book: '책', music:"음악"}형태를 
2. [["book", "책"], ["music", "음악"]]
형태로 변환
*/

const two = {100:"백", book:"책", music:"으악", 7:"칠"}
console.log("2", Object.entries(two))
/*
1. key 값을 숫자, 문자 순으로 바꾸어서 반환- 순서가 중요할 때는 사용을 고려해야 한다. 
2. [["7", "칠"], ["100", "백" ],["book", "책"], ["music", "음악"]]
*/

```

```js

```

## async 함수
- 개요
    - 비동기 함수로 AsyncFunction오브젝트 생성하여 반환
    - `함수가 호출되면 Promise반환`
    - Promise가 완료 되면 resolve 결과를 반환
    - async함수에서 return한 값을 처리하려면
        - then()을 연속하여 작성
    - 함수 선언문과 함수 표현식 형태 
```js
// end
// soccer

async function sports(){
    return: soccer;
};
sports().then(param => {
    console.log(param)
});
console.log("end")
/*
1. 함수 선언문 형태로 async 함수 선언, -AsyncFunction 오브젝트 생성 
2. 함수에서 soccer반환

1. 
*/
```
## await
- await 키워드 
    - Promise가 끝나는 것을 기다린다. 
    - Async 함수 안에만 작성 할 수 있다. 
    - await function music(){}과 같이 톱 레벨로 사용 불가
- 사용형태 
    - [resolve value]=await 표현식 
    - 표현식에 Promise또는 Promise resolve 값을 작성 
    - promise의 resolve값을 [resolved value]에 할당
    - 표현식이 promise가 아니면 prmise의 resolve로 변환
    - Promise가 reject이면 reject값을 throw 

```js

// 끝
// 2000
// 1000
function sports(delay, value){
    return new Promise((resolve)={
        setTimeout(()=>{
            resolve(value);
        }, delay)
    })
};
function outer(){
    sports(2000)
        .then(()=>console.log(2000))
        .then(()=> sports(1000, "1000"))
        .then(param => consol.log(param))
};
ourter();
console.log("끝")
```


```js
function sports(delay, value){
    return new Promise((resolve)={
        setTimeout(()=>{
            resolve(value);
        }, delay)
    })
};
async function outer(){
    await sports(2000);
    console.log(2000);
    const param = await sports(500, "500");
    console.log(param)
}
ourter();
```

```js
// 끝
// 100

async function sporst(){
    const result = await 100
    console.log(result)
}
sporst()
console.log("끝")
```
```js
function sporst(){
    try{
        const result = awit Promise.reject(100);
    }catch(error){
        console.log(error);
    }
};
sports();
console.log("end")
```
## XHR환경 비교
- XHR 다수 실행에 있어  promise.all()과 async비교
- async, await
    - 직관적으로 실행순서를 알수 있음 
    - 처리순서를 쉽게 파악할 수 있음 
    - try-catch를 다수 작성해야 하므로 코드가 길어짐
        - 이를 보완하기 위해 함수로 분리한 후 호출 가능 
- promise.all()
    - 파라미터에 실행할 것을 하나씩 작성
    - 전체가 끝났을 때 then()실행
        - 전체가 끝난 것을 체크 하지 않아도 됨 

```js
async getServerFile(){
    for (let k = 0l k)
}

```

Promise, async / await..
