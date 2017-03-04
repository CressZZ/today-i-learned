# Transform-style

- css 문법

```css
/* Keyword values */
transform-style: preserve-3d;
transform-style: flat;

/* Global values */
transform-style: inherit;
transform-style: initial;
transform-style: unset;
```

1. 개요

> The **transform-style** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property determines if the children of the element are positioned in the 3D-space or are flattened in the plane of the element.

> If flattened, the children will not exist on their own in the 3D-space.

> As this property is not inherited, it must be set for all non-leaf descendants of the element.



- transform-style 속성은 **요소의 자식이** <u>3D공간에 배치되는지</u> 또는 <u>요소의 평면에서 전개되는지 결정한다. </u>

- 만약 평평하게 한다면 **요소의 자식**은 3D공간에 존재하지 못한다.

- 이건 상속되지 않으며, 모든 자손에 대해 설정해야 한다. 

`transform-style: preserve-3d`
