# 겁나 유용한 이미지 중앙정렬 하기!!!

## css
```css
.img-1 {
  position: absolute; (or fixed, 부모가 relative)
  top: 50%;
  left: 50%;
  
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
}
```
**The translate value for transform is based off the size of the element, so that will center nicely.**
** translate의 값은 요소 이미지의 크기에서 가져온다!! (translate, transform은 좀더 알아 봐야 함!!!!!!!!!!)**
