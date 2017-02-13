# background-opacitye



```css
div {
  width: 200px;
  height: 200px;
  display: block;
  position: relative;
}

div::after {
  content: "";
  background: url(image.jpg);
  opacity: 0.5;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;   
}
```

- 가상선택자 `::after`와`apsolute`그리고  `z-index`가 핵심이다.
- 배경화면을 absolute해주면 제일 앞에 나와 있기 때문에 모든 것을 가려 버린다. 
- 따라서 z-index로 맨 뒤로 넘겨서 배경화면 역할을 하게 하며 opacity 값을 준다. 
- opacity 값은 배경화면에만 들어가는 것이 아니라, div 요소 전체에 들어가기 때문에 가상선택자 없이 opacity값을 주면 배경화면 뿐만아니라 해당 div요소에 들어가는 content도 opacity 값이 적용되는 것을 볼 수 있을 것이다아아아아아아아아아 