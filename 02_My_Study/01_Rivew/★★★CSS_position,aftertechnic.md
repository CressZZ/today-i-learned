```css
.line-2
  &::after
    content: ''
    position: absolute
    bottom: 0
    height: 3px

    right: 100%
    left: 0
    background-color: red
    transition: 1s all


.line-2
  &:hover
    &::after
      right: 0
```
    //!!** 잘봐봐 이건, 가상요소와 포지션 absolute를 활용한 테크닉이야.  
    // 가장 중요한건 포지션의 위치를 활용한거지.  
    // 우선 가상요소에 컨턴츠가 없고, 높이를 내가 지정해 줄 수 있다는 걸 이해해야 해.   
    // 컨텐츠가 없으니 넓이도 없게 되지  
    // 여기서 right/left와 top/bottom을 조정 해서 길이를 쭉 늘리거나, 줄일 수 있다는 거야.   
    // transition과 관련해서는 분명 transition은 변화하는 것을 애니메이션 처리 해주지만, 중요한 점은 시작점과, 끝점이 있어야 된다는 거야.  
    // 가령 right와 관련된 사항에 transition을 주고자 할때, 초기 right값은 주지도 않았으면서, 나중에 right값을 주었다고 해서 transition 효과가 생기지는 않지, 시작점이 어딘지 몰기 때문이야.  
    // 오키?
