# console.log() 입력시 실행 순서!!
- 자 만약 내가 console.log 를 사용하여 함수를 하나 실행 했다고 해보자

```javascript
  console.log(replace(replace_node, replaced_node));
  ```
- 이때 javaScript는 `replace` 함수를 먼저 실행한다.
- 함수를 실행한다는 건. 진짜로 그 함수를 실행 한다는 것이다.
- 이후 함수에 return값이 있으면 그다음 console.log를 통하여 console창에 보여 준다.

# return에 대한 고찰...
```javascript
function function_2(C, D) {
  // 밑의 `A, B`인자를 `C, D` 인자로 받아들임
  replaced_node.parentNode.replaceChild(C, D);

  // *중요!* .replaceChild 메서드는 애초에 변수 D값을 리턴한다.!!
  // 하지만, 리턴은 function_2에만 해당 하기 때문에 function_1에서 console.log(function_2)를 해봐야 D값이 나오지는 않는다.

  return 'a'; //의미 없는 text return

}
```


```javascript
function function_1(A, B) {

  console.log(function_2(A, B));//function_2의 return값인 'a'출력.

}
  ```
