# 1.`inline-block`이 부모(block)안에 있을때
- margin-top가 부모를 기준으로된다.
- margin-right, left가 안먹는다.  

### 1.1 html
```html
  <div class="img-bg">
    <img src="images/home-work1/2-intro-img.png" alt="intro-picture" class="intro-picture">
  </div>
  ```
  
### 1.2 CSS
```css
.intro-picture{
  display: inline-block;
  margin-top: 100px; /*부모기준 적용됨*/
  width: 60px;
  height: 48px;
  margin-left: auto; /*적용안됨*/
  margin-right : auto; /*적용안됨*/
}
```
  
  
# 2. `block`이 부모(bolck)안에 
- margin-top이 부모가 아닌 다른 길막하고 있는 기준으로된다.
- margin-right, left가 부모 기준으로 된다.  

### 2.1 html
```html
<div class="img-bg">
    <img src="images/home-work1/2-intro-img.png" alt="intro-picture" class="intro-picture">
</div>
```

### 2.2 css
```css
.intro-picture{
  display: inline-block;
  margin-top: 100px; /*부모가 아닌 다른 길막하고 있는 기준으로된다.*/
  width: 60px;
  height: 48px;
  margin-left: auto; /*부모기준 적용됨*/
  margin-right : auto; /*부모기준 적용됨*/
}
```
