# 가상선택자 (Pseudo) 높이를 부모에 따라 100% 로 주기

```css
p {
  position: relative;
  background-color: blue;
  padding-left: 10px;
  /* change the padding to something larger 
  than the width of the :before element to 
  add spacing for text
  */
}

p:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 10px;
  height: 100%;
  background-color: red;
}

```



```html
<p>text... text...</p>
```





To accomplish this, the OP was using `position: absolute;` on the psuedo element (`p:before`).

The error OP was encountering was because the psuedo-element was treating the `` as it's relative position point - to fix, simply set `position: relative;` on the `` tag.

