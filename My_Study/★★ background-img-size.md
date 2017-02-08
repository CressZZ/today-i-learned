# 배경 img의 사이즈는 배경이 들어가는 div의 back-ground size에 따라 늘어나거나, 줄어 들 수 있다. (img해상도는 깨지겠지 뭐..)
- `background-size: (위아래) (양옆) ;`

## css
```css
.feature-list .column2{
  background: skyblue url("/images/home-work1/mockup.png") no-repeat;
  background-size: 100% 100%; //이거임!
  width: 47.2px;  //배경이미지에 비해 width가 터무니 없이 작을 
  height: 519px;
}
```
