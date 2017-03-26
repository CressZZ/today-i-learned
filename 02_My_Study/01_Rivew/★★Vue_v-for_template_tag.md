# Vue에서 v-for를 쓸때
- HTML에 `template tag`를 쓰는 경우가 있는데 이럴경우 `template`가 rendering 되지 않는다. 또한 `class`값이 있다고 해도 해당되는 css 또는 script가 적용되지 않는다. 그냥, `v-for`만 동작하고 사라진다.
- 반면 `div`를 사용해도 크게 문제는 없는데 `class`값이 없는경우 빈 `div`가 rendering 되고, `class`가 있는 경우 `class`에 해당하는 css 또는 script가 적용된다.
## 결론
- template는 표준이 아닌듯 하니 그냥 `div`를 쓰는 것이 어떨까?...
