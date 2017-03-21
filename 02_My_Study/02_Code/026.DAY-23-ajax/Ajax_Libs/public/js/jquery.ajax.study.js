(function(global, $){
  'use strict';

  var employees_ol = document.querySelector('.employees');
  var add_btn = document.querySelector('.add-employee');
  var del_btn = document.querySelector('.delete-button');


  //get
  $.get('/employees')
    .done(function(data, textStatus, jqXHR){
      console.log('data:',data);
      console.log('data.length:',data.length);
      console.log('jqXHR:',jqXHR);

      data.forEach(function(data){
        employees_ol.insertAdjacentHTML('beforeend', `<li class="id_${data.id}">id:${data.id} </br>name: ${data.name}</li>`);

      });
    });

  //post
  add_btn.onclick = function() {
    var new_employee = {
      name: faker.internet.userName(),
      email: faker.internet.email(),
      company: faker.company.companyName()
    };
    $.post('/employees', new_employee)
     .done(function(data, textStatus, jqXHR) {
       $.get('/employees')
        .done(function(data, textStatus, jqXHR) {
          employees_ol.innerHTML = '';
          data.forEach(function(item) {
            // console.log(item.name);
            employees_ol.insertAdjacentHTML('beforeend', '<li>'+ item.name +'</li>');
          });
        });
     });
  };

  //delete

  del_btn.onclick = function(){
    let selected_id = document.querySelector(".selected-id").value;
    console.log('selected_id:',selected_id);
    $.ajax({
      type: 'DELETE',
      url: `/employees/${selected_id}`,
      dataType: 'json'
    }).done(function(data, textStatus, jqXHR){
        let selected_el = document.querySelector(`.id_${selected_id}`);
        selected_el.parentNode.removeChild(selected_el);
      })
    }




})(window, jQuery);
