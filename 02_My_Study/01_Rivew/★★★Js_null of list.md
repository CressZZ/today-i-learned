# 변수와 배열의 값이없을때 null 판정

## 1. 변수

- 변수 지정후 값이 없을 경우 해당 변수는 null이다. 

```javascript
    var remove_els = query(".will-remove", repo); //해당 값이 없을때
    console.log(remove_els);
    if (remove_els === null) // null 임
```

2. 리스트

- 변수(리스트) 지정후 값이 없을경우에도 null은 아니다.

```javascript
    var remove_els = queryAll(".will-remove", repo); //해당 값이 없어도
    console.log(remove_els);
    if (remove_els === null) // null 이 아님, `[]``[]` 임
      // 해당 값이 있는지 없는지 확인 하고 싶으면 길이로 판단 해야 할듯 
    if (remove_els.length === 0 ) //처럼...
```

