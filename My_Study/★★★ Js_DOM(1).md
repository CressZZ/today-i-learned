# JavaScript- DOM 관련 리스트

#1. javascript에서 DOM 관련 `리스트`는 **유사** 리스트 이다

- 진짜 리스트인 a는 `a.item(0)`으로 접근이 불가능 하나, `a[0]`로 접근 가능 하다.
- 유사 리스트 즉, DOM API를 통해 뽑아낸 객체에 대해서는 `cards.item(0)`로도 접근 가능 하고, `cards[0]`로도 접근 가능하다.

#2. DOM의 이해
```javascript
console.log(document.getElementsByClassName("container").item(0).children.item(0));
```  
와
```javascript
var cards = document.getElementsByClassName("container");
var first_card = cards[0];
```
는 같다.


#3. 참고 예시
```javascript
var cards = document.getElementsByClassName("container");
console.log(cards);
console.log(cards[0]);
console.log(cards.item(0));
console.log(cards.item(0).children.item(0));
console.log(document.getElementsByClassName("container").item(0).children.item(0));

var a = [1, 2, 3, 4, 5]
console.log(a[0])
console.log(a.item(0))

var first_card = cards[0];

console.log("first_card = ", first_card)
console.log(first_card.children[0]);
console.log(first_card.children[1]);
```
