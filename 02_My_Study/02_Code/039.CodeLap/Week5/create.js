//함수 선언문
function sports(){
  debugger;
  var player = 11;

  function soccer(){
    return player;
  }

  //함수 표현식
  var baseball = function(){};
  soccer();
}



//  1. 선언문, 호출, 선언문
function test_a(){
  debugger;
  function a(){
    console.log("a_1")
  }
  a()
  function a(){
    console.log("a_2")
  }
}


//  2. 표현식, 호출, 표현식
function test_b(){
  debugger;
  var b = function(){
    console.log("b_1")
  }
  b()
  var b = function(){
    console.log("b_2")
  }
}


//  3. 선언문, 호출, 표현식
function test_c(){
  debugger;
  function c(){
    console.log("c_1")
  }
  c()
  var c = function(){
    console.log("c_2")
  }
}

//  4. 표현식, 호출, 선언문
function test_d(){
  debugger;
  var d = function(){
    console.log("d_1")
  }
  d()
  function d(){
    console.log("d_2")
  }
}

function test_string(){
  debugger;
  var test = "aa"
}




  function sales(){
    debugger;
    var a = "a"
    function gets(){
      function discounts(){
        console.log("discounts")
      };
      discounts();
      console.log("gets")
    }
    gets();
  };

  function test_e(){
    var value = 123;
    function soccer(){
      return value;
    }
    var baseball = function(){
      return value;
    }
    debugger;
    baseball();
  }
