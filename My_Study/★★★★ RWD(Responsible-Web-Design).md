# 1. 유연한 이미지(1) (background 사용)

## 1.1 html

```html
<p>1. 유연한 이미지 (background)</p>
  <div class="rwd-img"> </div>
```

- background로 처리할 예정이기때문에 아무런 content가 없음.  

## 1.2 css

```css
.rwd-img {
      background: url("../images/cat.jpg") no-repeat;
      background-color: yellow;
      padding-bottom: calc(768 / 1024 * 100%);
      width: 100%;
      height: 0;
      background-size: contain;
    }
```

- **유연한 이미지 (background) 핵심은 padding-bottom을 통해 height (%)를 확보한다는 것이다. **

- height자체에 %를 먹이는 것은 애매하다.  그 이유는...

  1)  height는 html을 제외한 모든 부모요소에 height (%) 가 지정되어 있을때 height (%)가 작동 할 수  있으며,

  ​     (%가 아닌 값은 그 위의 부모에만 height (고정값)만 있어도 된다. )

  2) 작동한다 해도 그 기준이 부모의 height이기 때문에

  3) width값의 변화에 따라 유연하게 변하는 것을 만들때는 적절치 않다. (현재의 width값이 기준이 되어야 하기 때문)

- 따라서 padding-bottom을 통해 height를 확보해야 하는데 padding-bottom의 %값의 기준은 width 기준이다. 

- 그래서 height를 0으로 주고(안줘도 상관은 없어 보인다. ), paldding-bottom(or top)을 width기준 비율로 주면..

- 유동형 으로 변화하긴 하나, 배경화면이 짤리거나, 남는다. 

- 이때, background-size : contain( or cover)을 하면~ 

- 짠~!!



# 2 유연한 이미지(2) (img tag 사용)

## 2.1 html

```html
  <p>2. 유연한 이미지-2 (img 속성)</p>
  <img class="rwd-img-2" src="../images/cat.jpg" alt="cat">
```

2.2 css

```css
  .rwd-img-2 {
      width: 100%;
      height: auto;
    }
```

- background 유연한 이미지 보다 쉽다. 
- width만 100%를 줘도 완성~~은 개뿔....height : auto의 의미를 모르겠다. 질문란으로 옮기자
- height : auto 안해도 잘만 작동한다. ...



# 3. 유연한 iframe 

## 3.1 html

```html
  <p>3. 유연한 iframe</p>
  <div class="rwd-iframe">
    <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/c487AyZG6Ww" allowfullscreen></iframe>
  </div>
```

## 3.2 css

```css
    .rwd-iframe {
      width: 100%;
      overflow: hidden;
      position: relative;
      background-color: blue;
      height: 0;
      padding-bottom: calc(480 / 854 * 100%);
    }


    .rwd-iframe iframe {
      width: 100%;
      position: absolute;
      height: 100%;
      top: 0;
      bottom: 0;
      
    }
```

- 핵심은 `iframe`요소와 이 요소를 감싸고 있는 `container`역할의 요소가 있다는 점이다. 

  1) 우선 `container`의 크기를 브라우저 창에 유동적으로 반응 할 수 있게 만들자!

  ​	(1) width 100%를 `container`에 줌으로서 창 크기 변화에 유동적으로 반응 할 수 있게 한다.

  ​	(2) height 는 calc(480 / 854 * 100%)으로 유동적 변화를 할 수 있게 하자

  2) 자, 그럼 화면에 보이는 `container`의 크기는 유동적으로 딱 확정 되었으나, 자식인 `iframe`은 부모보다 크거나 작아 부모의 품안은 벗어난다. 

  ​	(1) overflow:hidden을 주어 벗어난걸 잡아주자.

  3) 자, 그럼 넘처 흐르는 것은 잡아 주었느나,

  ​	(1) 부모보다  `iframe` width가 작아지는 건 아직 못잡았다. 

  ​	(2) 또한 부모보다 `iframe`이 클때 width 내용이 잘린다. 

  4) 그럼 `iframe`에 width 100%를 주자. 짠, ~  width는 완성~ 그럼 문제는 height 이다. height는 아직 안잡아 주었기 때문에 

  ​	(1) 부모보다  `iframe` height가 작아지는 건 아직 못잡았다. 

  ​	(2) 또한 부모보다 `iframe`이 클때 height 내용이 잘린다. 

  5)  그럼 height를 잡아 주자. 뭘로? **absolute** 로. 왜냐....하면....

  ​	(1) height를 잡아 준다는 이야기는 부모의  height크기의 100%만큼 `iframe`을 100%로  늘리거나 줄이겠다는 건데...

  ​	(2) 부모의 height를 기준으로 %를 적용할 수 있는 상황은 모든 부모가 height를 %로 가지고 있거나,

  ​	(3) 바로 위의 부모가 height를 고정값으로 가지고 있는 경우인데,

  ​	(4) 여기서는 유동적 변화를 위해 부모가 height를 0로 가지고 있고, padding 을 이용했기 때문에	

  ​		(위의 이유와 같이 부보에 height를 %로 주는게 어려웠다;;;;)

  ​	(5) 젠장, 부모의 height가 0이기 때문이다. 

  ​	(6) 그럼, `iframe`도 height:0 에 padding %를 주면 되지 않겠냐? 라고 생각 할수 이겠지만, 

  ​	(7) 안되더라....;;; 배경이미지의 경우는 height 0  여도 padding %가 있으면 되지만, 

  ​	(8) 이건 height 0 이면 아에 iframe이 안나온다. ;;;;

  6) absolute 후 height를 %로 주면!!!! 자기자신의 크기를 기준으로 %가 된다.

  ​    **일반적인 div같은 겨우 absolute후 height를 주면!!!! 부모의 기준으로 크기가 %가된다. (grid-view 만들시..))**

  `**img 배경 유동의 경우 위의 내용을 background-size: contain으로 전부 해준거다.!!!!! 이게 차이임! 개중요**`

  7)  아.............뭐라는거야;;;

  ​



# 4. 재단 이미지(1) (img  tag 사용)

## 4.1 html

```html
  <p>4. 재단 이미지 (background)</p>
    <div class="cutted-img">
    </div>  

```



## 4.2 css

```css
.cutted-img{
      width: 100%;
      height: 200px;
      background: url("../images/cat.jpg") no-repeat;
      background-position: center;
    }
```

- **background-position 이 핵심**

  ​



# 5. 재단 이미지(2) (background 사용)



## 5.1 html

```html
  <p>5. 재단이미지-2 (img)</p>
    <div class="cutted-container">
      <img class="cutted-img-2" src="../images/cat.jpg" alt="cat">
    </div>
```

## 5.2 css

```css
    .cutted-container{
      width: 100%;
      height: 200px;
      position: relative;
      overflow: hidden;
    }

    .cutted-img-2{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

```

- **absolute 및 transform: translate(-50%, -50%)가 핵심 !!**

  ​