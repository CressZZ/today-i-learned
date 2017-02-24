# js에서 if 쓰면서 method 를 생으로 넣을때 의미 하는 것
```javascript
if ( item.matches );
```
위의 메서드가 존재 할때! 라는 의미 인것 같다. 예를 들면

```javascript
if ( item.matches ) {
  matching = item.matches('.demo-matches-target');
} else {
  // MS IE, Edge
  matching = item.msMatchSelector('.demo-matches-target');
}
```

- **item.matches가 있으면 수행하고, 없으면,  IE로 해야 되니까, IE 용으로 사용한다.**
