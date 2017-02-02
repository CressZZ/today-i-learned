# 0201.img tag는!!!!! 왜 bottom margin 같은걸 가지고 있죠? 어떻게없애죠?

## html
```html
<div class="parent2">
    <div class="child-inbl">inline-block 요소</div>
    <p class="child-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, labore.</p>
    <div class="child-bl">block 요소</div>
    <p class="child-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, labore.</p>
    <img src="#" alt="child-img" class="child-img">
    <p class="child-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, labore.</p>
  </div>
  ```
  
  ## css
  ```css
.parent2{
  width: 1000px;
  height: 1000px;
  margin-top: 10px;
  background-color: aqua;
  border: 1px black solid;

}
.child-inbl{
  display: inline-block;
  background-color: red;
  height: 100px;
}
.child-bl{
  background-color: yellow;
  height: 100px;
}

.child-img{
  width: 100px;
  height: 100px;
  background: green;
  border: 0;
}
.child-p{
  background-color: orange;
  margin:0;
}
```

![예시](https://github.com/CressZZ/today-i-learned/blob/master/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202017-02-02%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%202.46.15.png)


  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
