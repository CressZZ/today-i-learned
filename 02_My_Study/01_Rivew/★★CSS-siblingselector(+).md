# CSS 선택자  `+`

CSS에서 형제 요소 선택은  `+` 인데....이건 직계 자손만 선택한다!!

```HTML
<ul>
  <div>One</div>
  <li>Two</li>
  <li>Three</li>
</ul>
```

```CSS
div + li {
  color: red;
}
```
