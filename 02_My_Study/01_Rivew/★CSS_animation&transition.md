# animation 과 transition의 차이
## transition
- 더 작은 개념!
- 시작과 끝 사이 즉, 한 stage간의 에니메이션만 적용
## animation
- 더 큰 개념
- `@keyframe`을 이용하여 더 다양한 걸 설정 할수 있다.
```css
  @keyframes somethig {
    from
      transform: translateY(20px)
    to
      transform: translateY(0)
  }
```
