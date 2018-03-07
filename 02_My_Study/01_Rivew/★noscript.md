# noscript
- noscript요소는 스크립트를 지원하는때에는 표시되지 않고, 스크립트를 지원하지 않는 경우에만 표시된다. 
```html
<script>
    document.write("Hello World!")
</script>
<noscript>
    Your browser does not support JavaScript!
</noscript>
```
- `<noscript>`엘리먼트는 `<head>`태그와 `<body>`태그 사이에 쓸 수 있다. 
- <head>태그 안에 <noscript>를 쓸 경우, <noscript>안에는 오직 <link>,<styel>,<meta>요소만 사용 할 수 있다. 
