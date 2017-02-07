# 1. Sass (앞 S만 대문자) 변수 Scope

```scss
// 전역변수 초기화
$variable: 'initial value';

  //전역변수 덮어씀
  @mixin global-variable-overriding{
    $variable: 'mixin value' !global;
  }


.loval-scope::before {
  // 지역변수 생성
  $variable: 'local value';
  // 전역변수를 mixin전역변수로 덮어 씀
  @include global-variable-overring;
  // 변수 값 출력 (! 지역변수 출력 !)
  content: $variable;
}


.other-loval-scop::before {
  // 덮어 쓰여진 전역변수 출력!
  content: $variable
}

//https://sass-guidelin.es/ko/#section-63
```



## 2 !default 플래그

- 라이브러리나 프레임워크, 그리드 시스템, 혹은 배포되어야 할 Sass등은 **모든변수**를 !default 플래그로 정의 해야 함





# 3. Extend

- 요즘은 안쓴다. 

  1. 내 현재 선택자가 어디에 첨부될 것인가?
  2. 원치 않는 부작용이 초래될 수도 있는가?
  3. 이 한번의 확장으로 얼마나 큰 CSS가 생성되는가?
- @extend지시어를 완전히 피하라;;;
- 만약 쓰고 싶으면

  1. 다른 모듈들에 걸치지 않게, 한 모듈 안에서 확장을 사용하라
  2. 오로지 플레이스홀더에만 확장을 사용하고, 실제 선택자에는 사용하지 말라
  3. 확장하는 플레이스 홀더`% 대체 선택자`가 가능한 적게 존재 하도록 하라.

# 4. mixins

- 작성가자 .float-left같은 시맨틱 하지 않은 클래스에 기대지 않고도 스타일 시트 내내 재사용할 수 있는 스타일을 정의 할 수 있게 해준다. 

# 5. Vendor prefixes



### 5.1 BAD

```scss
@mixin transform ($value) {
  -webkit-transform: $value;
  -moz-transform: $value;
  transform: $value;
}
```



### 5.2 Recommandation

```scss
@mixin prefix($property, $value, $prefixes:()) {
  @each $prefix in $prefixes{
    -#{$prefix}-#{property}: $value;
  }
  #{property}: $value;
}


.foo {
  @include prefix(transform, rotate(90deg), ('webkit','ms'));
}
```

