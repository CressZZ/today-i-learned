# instanceof vs. typeof
## typeof  |  typeof()
- typeof는 data type 체킹 하는 것.
- typeof는 '함수'가 아니다
-   * 주의) sass에서의 type-of는 함수!
- null, array 유형 체크시 문제가 생김
-   * 배열을 배열로 인식못하고 object로 출력.
-   * null도 object로 출력

##  instanceof
- typeof의 설계 오류를 보완
- 붕어빵과 붕어빵틀중에 붕어빵!
- 문제점) 원시데이터타입을 체킹할때 명시적방법이아닌 숫자값,문자값,불리언값을 체킹하는 경우가 아니면 기대에 부응하지 않는다
> `null`과 `Array`의 동작에 주목  
> 일반적인것을 체킹할때는 typeof를 사용하고, 배열을 체킹할때는 instanceof를 쓰자. (null은 불가능)

```javascript
console.log(Number instanceof Object); // true
console.log(String instanceof Object); // true
console.log(Boolean instanceof Object); // true
console.log(NaN instanceof Object); // false
console.log(undefined instanceof Object) // false
console.log(null instanceof Object) // false
console.log(Array instanceof Object) // true
console.log(Function instanceof Object) // true
console.log(Object instanceof Object) // true
```

```javascript
console.log(typeof 1); //number
console.log(typeof "hello"); //string
console.log(typeof true); //boolean
console.log(typeof NaN); // number
console.log(typeof undefined); //uundefined
console.log(typeof null); // object
console.log(typeof new Array()); //object
console.log(typeof new Function()); //function
console.log(typeof new Object()); //object
```
