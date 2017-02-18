#### Block

애플리케이션의 컴포넌트(부품)로써 독립된 영역을 지칭한다.

[![img](https://github.com/yamoo9/FDS/raw/3rd_FDS/ASSETS/BEM_search-bar.jpg)](https://github.com/yamoo9/FDS/blob/3rd_FDS/ASSETS/BEM_search-bar.jpg)

블럭은 문맥 의존적이지 않은 독립된 객체 또는 높은 수준으로 추상화 한 컴포넌트다.
하위에 요소만 포함할 수도 있고, 또 다른 블럭을 포함할 수도 있다.

[![img](https://github.com/yamoo9/FDS/raw/3rd_FDS/ASSETS/BEM_block.jpg)](https://github.com/yamoo9/FDS/blob/3rd_FDS/ASSETS/BEM_block.jpg)

#### Element

블록(영역)을 구성하는 작은 단위로 요소를 말한다.

[![img](https://github.com/yamoo9/FDS/raw/3rd_FDS/ASSETS/BEM_input-button.jpg)](https://github.com/yamoo9/FDS/blob/3rd_FDS/ASSETS/BEM_input-button.jpg)

요소는 블럭을 구성하는 작은 단위로써 특정 기능을 담당한다.
블럭과 달리 문맥 의존적이며 요소가 속한 블럭 내에서만 의미를 가진다.

[![img](https://github.com/yamoo9/FDS/raw/3rd_FDS/ASSETS/BEM_Elem.jpg)](https://github.com/yamoo9/FDS/blob/3rd_FDS/ASSETS/BEM_Elem.jpg)

#### Modifier

블럭 또는 요소의 스타일이나 동작을 표현할 경우 사용한다. (상태 디자인, State Design)

[![img](https://github.com/yamoo9/FDS/raw/3rd_FDS/ASSETS/BEM_state-button.jpg)](https://github.com/yamoo9/FDS/blob/3rd_FDS/ASSETS/BEM_state-button.jpg)

숨겨놓은 요소를 출력하거나 특정 버튼에 커서를 올렸을 때, 배경색을 변경하는 등 블럭이나 요소의 상태를 표현한다.
기존과 비슷하지만 스타일이나 동작이 조금 다른 블럭이나 요소를 만들고 싶은 경우에 사용한다.

## 

### MindBEMding

BEM 방법론을 기반으로 한 이름 작성법(Naming Guide)이다.

BEM은 클래스 명명 규칙을 강제하지 않는다. 많은 사람이 오해하고 있는 호불호가 극명하게 갈리는 명명법은 BEM 방법론을 기반으로 한 [MindBEMding](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) 명명법이다. 다른 것으로 [modified BEM](https://pages.18f.gov/frontend/#suggested-custom-methodology)이 있다.

- `.block {}` : `.block` 영역
- `.block__element {}` : `.block`을 지원하는 자식 요소
- `.block--modifier {}` : `.block`의 상태를 나타내는 변환자

BEM 명명법에 따라 클래스 이름을 작성한 예를 살펴보면서 이해해보자.

```
.site-search        { ... } /* Block */
.site-search__field { ... } /* Element */
.site-search--full  { ... } /* Modifier */
```

**[BAD]**: 아래 class 속성 이름의 경우, 각 이름이 명확하게 무엇을 의미하는지, 어떤 경우에 사용되지는 파악하기 쉽지 않다.

- `full` ↔ ?
- `field` ↔ ?
- `button` ↔ ?

```
<form class="site-search  full">
  <input type="text" class="field">
  <input type="Submit" value ="Search" class="button">
</form>
```

**[GOOD]**: 아래 class 속성 이름의 경우, 각 이름이 무엇을 의미하며, 어떤 경우에 사용되는지 파악이 쉽다.

- `site-search--full` ↔ site-search 블록 변경자
- `site-search__field` ↔ site-search 블록 요소
- `site-search__button` ↔ site-search 블록 요소

```
<form class="site-search  site-search--full">
  <input type="text" class="site-search__field">
  <input type="Submit" value ="Search" class="site-search__button">
</form>
```

## 

```
.media           { ... }
.media__img      { ... }
.media__img--rev { ... }
.media__body     { ... }
```

**[BAD]**

```
<div class="media">
  <img src="logo.png" alt="Foo Corp logo" class="img-rev">
  <div class="body">
    <h3 class="alpha">Welcome to Foo Corp</h3>
    <p class="lede">Foo Corp is the best, seriously!</p>
  </div>
</div>
```

**[GOOD]**

```
<div class="media">
  <img src="logo.png" alt="Foo Corp logo" class="media__img--rev">
  <div class="media__body">
    <h3 class="alpha">Welcome to Foo Corp</h3>
    <p class="lede">Foo Corp is the best, seriously!</p>
  </div>
</div>
```

## 

### 

