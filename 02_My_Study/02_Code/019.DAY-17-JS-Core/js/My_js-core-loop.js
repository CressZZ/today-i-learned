var arr = [1,2,3];
var item = [];
while(arr.length){
  var shift = arr.shift();
  console.log(shift);
  item.push(shift)
  console.log(item);
}

// while(){}
//do {} while () -> 조건이 거짓일지라도, 1회는 반드시 수행

// for ~ in ~

var obj = {
  a: 1,
  b: true,
  c: []
};

for( var prop in obj ) {
    console.log(prop);
}

// if ( !kkey ) {
  // function kkeys(obj) {
  //   var props = [];
  //   for( var prop in obj ){
  //     props.push(prop);
  //   }
  //   return props;
  // }

  var tester_style = document.createElement('span').style;

  for ( var prop in tester_style ) {
    console.log('%ckey:', prop, 'color: tan' );
    console.log('value:', tester_style[prop] );
  }
