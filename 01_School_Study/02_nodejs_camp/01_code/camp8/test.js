// new Promise(
//     function(resolve, reject){
//         console.log("Making promise function");
//         // resolve(console.log('going promise'))
//         setTimeout(
//             function(){
//                 // when promise gone, 
//                 resolve(console.log('going promise2'))
//             }
//             ,500
//         )
//     }
// );

// var p1 = new Promise(
//     function(resolve, reject){
//         console.log("프로미스 함수 제작 p1");
//         setTimeout(
//             function(){
//                 resolve({p1:'p1'});
//             }, 1000
//         )
//     }
// );
// var p2 = new Promise(
//     function(resolve, reject){
//         console.log("프로미스 함수 제작 p2");
//         setTimeout(
//             function(){
//                 resolve({p2:'p2'});
//             }, 300
//         )
//     }
// );

// Promise.all([p1,p2]).then((result)=>{
//     console.log(result);
//     console.log(result[0].p1);
//     console.log(result[1].p2);
// })

// Promise.all([p2,p1]).then(function(result){
//     console.log(result);
//     console.log(result[0].p1);
//     console.log(result[1].p2);
// })

// function test(){
//     console.log('test')
// };

// test(console.log('test?'))


function* iterFunc(){
    yield setTimeout(
        function(){
            console.log('zero')
        }, 300
    )
    yield console.log("first")
    yield console.log("second")
    yield console.log("third")
    yield console.log("forth")
};

var iter = iterFunc();
// iter
iter.next();
iter.next();
console.log(iterFunc)