//Array

// var a=[1,2,3,4,5,6,7,8,9];

//  a.pop() last se delete


// a.push(10) last ma add

// a.unshift(0) front ma add

// a.shift() front se delete

// a.splice(1,1) centre se delete

// console.log(a)

// var b = [10,11,12,13,14,15,16,17,18,19];

// var c = [...a,...b]  two array ko combine krne kk liye

// console.log(c)

// conditional statement

// if else & else if



// function testNum(a){
//     let result;
//     if (a > 0){
//         result ="postitve";

//     }
//     else{
//         result ="not positive";
//     }
//     return result;
// }
// console.log(testNum(9));


// function checkValue(a, b) {
//     if (a===0){
//             if (b===2){
//             console.log("a is 1 and b is 2");
// }
// }else {
//         console.log("a is not 1")
//     }
// }

// var a = 4 ;
// if (a>0){
// console.log("positive")
// }
// else{
//     console.log("not positive")
// }

// var b= 100;
// if (b>99)
//     console.log("three digit no.")
// else{
//     console.log("two digit no.")
// }

//asynchronous//

// console.log("hello world") //synchronous 

 
// setTimeout(function(){
//     console.log("asynchronous")  // all tasks started same time but execute different.
// },6000)                          //Callback function


//Promise

var ans = new Promise((res,rej)=>{
    if(true){
        return res();

    }
    else{
        return rej();

    }
})
ans
.then(function(){
    console.log("resolve hogya")
})
.catch(function(){
    console.log("reject hogya tha")
})




      

