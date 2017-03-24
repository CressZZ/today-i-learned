;(function(global, Vue){
  'use strict';

  // Vue.component('app-header',{
  //   template:`
  //   <header class="app-header">
  //     <slot></slot>
  //   </header>
  //   `
  // })
  //
  // Vue.component('app-brand',{
  //   template:`
  //     <h1 class="app-brand">brand name </h1>
  //   `
  // })
  // 전역 컴포넌트 등록
  // Vue.component 스태틱 메서드
  Vue.component('app-custom-el',{
    template:`
    <ul>
      <li v-for="data of items">/li>
    </ul>
    `,
    data: function(){
      return{
        items: [1, 3, 5, 7]
      };
    },
    mounted: function(){
      console.log('mounted');
    }
  });


  Vue.component();

  var Brand = {
    template: `
    <h1 class="app-brand">hi</h1>
    `
  };

  var Header = {
    props:['content'],
    template: `
    <header class="app-header">
         {{content}}
      <app-brand></app-brand>
    </header>
       `,
    components:{
      'app-brand': Brand
    },
    

  };

  Vue.component('app-brand-2',{
    template:
    `
    <h2> hihihihihi</h2>
    `
    ,

  })
  // 전역 컴포넌트 등록
  var app = new Vue({
    el:'#app',
    // 지역 컴포넌트 등록
    components:{
      'app-header': Header,
      'app-brand' : Brand,
      // 'app-brand': {
      //   template: `
      //     <h1 class="app-brand">{{content}}</h1>
      //   `,
      //   data: function(){
      //     return{
      //       content: 'Vue Component'
      //     }
      //   }
      // },
      // 'app-header':{
      //   template:`
      //   <header class="app-header">
      //     <slot></slot>
      //   </header>
      //   `
      // }
    }


  });
  global.app = app;

})(window, window.Vue)
