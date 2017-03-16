// (function(global, $){
//   'use strict';
//
//   // jQuery Version 출력
//   console.log('jQuery.prototype.jquery:', $.fn.jquery);
//
//
//   // ajax
//   //1. get
//   // 단축 ajax 메서드: $.get()
//   //function은 성공했을때 실행할 함수
//   $.get('/employees', function(data, textStatus, jqXHR){
//     console.log(jqXHR.status + ' ' + jqXHR.statusText);
//     console.log(data);
//     global.document.
//   }, 'json');
//
//   // $.ajax({
//   //   url: '/employees',
//   //   data: {id:9},
//   //   success: function(data, textStatus, jqXHR){
//   //     console.log(data);
//   //   },
//   //   dataType: 'json'
//   // });
//
//   //2.post
//   var new_employee = {
//     name: faker.internet.userName(),
//     email: faker.internet.email(),
//     company: faker.company.companyName()
//   };
//
//   // $.post('/employees', new_employee, function(data, textStatus, jqXHR){
//   //   console.log("Dddd",jqXHR.status + ' ' + jqXHR.statusText);
//   //   console.log(data);
//   //
//   // });
//
//   // $.ajax({
//   //   type: 'PUT',
//   //   url: '/employees/21',
//   //   dataType: 'json',
//   //   data: modified_employee
//   // })
//   // .done(functoin(date, status, xhr){
//   //
//   // })
//   // .fail(function(error){
//   //   cosole.error  P
//   // })
// //
// // $.put('/employees/7', new_employee, function(data, status, xhr){
// //   console.log(status);
// //   console.log(data);
// //   console.log("xhr",xhr);
// //
// // });
// //
// // $.delete('/employees/1', function(data, status){
// //   console.log(status);
// // })
//
//
// })(window, window.jQuery)
