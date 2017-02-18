# css

```scss

// NOTE: 보간법을 쓰지 않았을 경우
=element($element)
  &__$element
    content: "this is #{$element * 10}"
    width: 1001px

.element-1
  +element(1)


// NOTE: 보간법을 사용한 경우
=element-2($element-100)
  &__#{$element-100}
    width: 100px

.element-2
  +element-2(1)





// NOTE: @content없이 선택자가 아닌 mixin에 내용이 들어 있는 경우
// mixin 안의 변수를 따른다.
=element-3($element-3)
  width: $element-3 * 10
  height: $element-3 * 10

.element-3
  +element-3(1)


// NOTE: @content를 사용하여 mixin이 아닌 선택자에 내용이 들어 있는경우
// mixin 안의 변수를 인식 할 수 없다.
=element-4($element-4)
  @content

.element-4
  $element-5: 2
  +element-4(2)
    width: $element-5 * 10
    height: $element-5 * 10
     

```



# css

```css
.element-1__$element {
  content: "this is 10 ";
  width: 1001px;
}

.element-2__1 {
  width: 100px;
}

.element-3 {
  width: 10;
  height: 10;
}

.element-4 {
  width: 20;
  height: 20;
}
```

