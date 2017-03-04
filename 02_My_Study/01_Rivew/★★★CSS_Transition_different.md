## CSS Transition을 마우스 호버 및 아웃에 다르게 주고 싶을때


If you want different CSS transition delays on hover and mouseout, you have to set them using the relevant selectors. In the example below, when an element is hovered, the initial delay on hover is 0 but on mouseout the transition is delayed by 1s.

```css
/* These transition properties apply on "mouseout" */
#bar { transition:height .5s ease-out 1s; }

/* These transition properties apply on hover */
#bar:hover { transition:height .5s ease-out 0s; }
```





transition: `<property> <duration> <timing-function> <delay>;`
