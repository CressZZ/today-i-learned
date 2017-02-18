# Js 의 .this의 의미


```javascript
for (var i=0; i < cards.length; i=i+1) {
    var card_front = cards[i].children[0];
    console.log(card_front)
    var card_back = cards[i].children[cards[i].children.length - 1];
    card_front.onclick = function(){
      this.parentNode.style.cssText='transform: rotatey(180deg) translateX(100%)';
      }
    card_back.onclick = function(){
      this.parentNode.style.cssText='';
      }
    }
```
- 위 Code에서....
- `this.parentNode.Sty~~`로 나가면 즉, `this.`을 쓰면 현재의 `card_front`값이 `this.`에 저장 되지만, `this.`대신에 변수 이름인 `card_front`를 쓰게 되면 **for** 문이 끝나는 순간의 `card_front`값이 실행 된다.
- 이거 조금 중요한듯!
