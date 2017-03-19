# es6에 추가된 `객체`인 map, set, weakmap, weakset
- map은 Object를 set은 Array를 변형한 것.
---
## map
- 데이터가 들어간 순서가 기억됨 (stack)
- object의 키는 항상 `string`이지만, map은 아무거나 다 된다. 
### map 속성, 메서드
- `set`,`get`,`has`,`delete`,`clear`,`size`
- `forEach` 반복 가능
## set
- 값이 중복될 수 없다.
- size로 크기를 확인한다.
### set 속성, 메서드
- `set`,`get`,`has`,`delete`,`clear`,`size`
- map과 비슷하다.



# 참조
- A라는 메모리를 통해 (명시적이든 암시적이든) B라는 메모리에 접근할 수 있다면 "B는 A에 참조된다.
-  "더 이상 필요없는 오브젝트"를 "어떤 다른 오브젝트도 참조하지 않는 오브젝트"라고 정의한다. 어떤 오브젝트를 참조하는 다른 오브젝트가 하나도 없다면 그 오브젝트에 대해 가비지 콜렉션을 수행한다.
