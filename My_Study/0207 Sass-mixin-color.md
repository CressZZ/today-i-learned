# sass

```scss
@mixin background-opacity($color, $opacity: 0.3) {
    background: $color; /* The Fallback */
    background: rgba($color, $opacity); //!그러니까 rgba 내장 함수를 쓰는 이유는 rgba가 아닌 color함수를 rgba로 표현 하려고 하는 거라니까!!
  
}

@mixin background-opacity-2($color, $opacity:0.4){
$red: red($color);
$green: green($color);
$blue: blue($color);

background: rgb(1,1,1); /* same as using "background: $color" */
content:"red=#{$red}", "green=#{$green}", "blue=#{$blue}";
}

element {
     @include background-opacity(rgb(55,55,55)); //! 그러니까 rgb (rgba)를 여기에 인자로 건네 주어 봐야 결과는 rgb밖에 안나온다. 단지 opacity값은 변경 될 수 있겠지!!!
  .element2{
         @include background-opacity-2(#555);
  }
}		
```

- !그러니까 rgba 내장 함수를 쓰는 이유는 rgba가 아닌 color함수를 rgba로 표현 하려고 하는 거라니까!!
- //! 그러니까 rgb (rgba)를 rgb함수에 인자로 건네 주어 봐야 결과는 rgb밖에 안나온다. 단지 opacity값은 변경 될 수 있겠지!!!

# css

```css

element {
  background: #373737;
  /* The Fallback */
  background: rgba(55, 55, 55, 0.3);
}
element .element2 {
  background: #010101;
  /* same as using "background: $color" */
  content: "red=85", "green=85", "blue=85";
}
```

