(function(global, $, axios){
  'use strict';

// 1. get
axios.get('http://www.omdbapi.com/?s=smile')
     .then(function(response){
       console.log(response);
       console.log('ddddd' + response.status + ' ' + response.statusText);
       reponse.data.Search.forEach(function(item){
         var poster = item.Poster;
         $('<li>',{
           html: '<img src="'+poster+'" alt="temp">'
         }).appendTo($employees);
       });
     })
     .catch(function(error){
       console.log(error.message);
     });
})(window, window.jQuery, window.axios);
