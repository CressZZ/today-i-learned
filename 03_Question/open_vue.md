```javascript
javascript
(function(Vue){
  'use strict';

  window.app = new Vue({
    el: '.demo',
    data: data
  });

})(window.Vue);
```
와
```javascript

  var app = new Vue({
    el: '.demo',
    data: data
  })
```
는 같나요?

DAY-26 : `study.vue`
