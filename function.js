// function abc(){
//     console.log("sangeshwaran")
// }
// abc()   //output 

// let data = function(){
//     console.log("thankyou")
// }
// data()

// function abc(){
//     return "sangeshwaran"
// }
// console.log(abc())  // output sangeshwaran

// function abc (a=2){
//     return a<5
// }
// console.log(abc()) // true  

let arr =[1,2,3,4,5]
let knowsum=function(arr){
    let sum = 0;
    for(let value of arr){
        sum+= value
    }
    return sum
}
 console.log(knowsum(arr))  // output 15
