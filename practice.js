// let a  = [2,3,5,6,7,8,9];
// let b = a.reduce((a, b) => a + b);
// console.log(b);

// / 11.Make the array like descending order
// data = [4,1,5,7,10,41,2,11,31,57,17,100,51]
// for(i=0;i<data.length;i++){
//     for (j=i+1;j<data.length;j++){


//         if (data[i]>data[j]){
//             temp = data[i]
//             data[i] = data[j]
//             data[j] = temp;
//         }
//     }
// }
// console.log(data) 

13.// 12. Find minimum numbers
// data = [4,1,5,7,10,41,2,11,31,57,17,100,51]
// let start = data[0]

// for (let i = 0;i<data.length;i++){
//     if (data[i] >  start){
//         start = data[i]
//     }
// }
//  console.log(start)

// function countVowels(str) {
//     let count = 0;
//     for (let char of str.toLowerCase()) {
//         if ('aeiou'.includes(char)) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countVowels("Hello World")); // ➜ 3


// function reverseNumber(num) {
//     return parseInt(num.toString().split('').reverse().join(''));
// }

// console.log(reverseNumber(12345)); // ➜ 54321


// function printPrimes(limit) {
//     for (let num = 2; num <= limit; num++) {
//       let isPrime = true;
//       for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//           isPrime = false;
//           break;
//         }
//       }
//       if (isPrime) {
//         console.log(num);
        
//       }
//     }
//   }
//   printPrimes(100);

// let num = 153;
// let temp = num;
// let sum = 0;
// let length = temp.toString().length;

// while (temp > 0) {
//   let lastdigit = temp % 10;
//   sum += Math.pow(lastdigit, length);  // Fixed here
//   temp = Math.floor(temp / 10);
// }

// if (sum == num) {
//   console.log("It's an Armstrong number");
// } else {
//   console.log("Not an Armstrong number");
// }

// function printPrimes (limit){
//   for (let num = 2; num < limit;num++){
//     let isPrime = true;
//     for(let i = 2 ;i < num; i++){
//       if(num % i == 0){
//         isPrime = false;
//         break;
//       }
//     }
//     if(isPrime){
//       console.log(num);
//     }
//   }
// }
// printPrimes(100)
 
// function findLargest(arr) {
//   let largest = arr[0];
//   for (let num of arr) {
//       if (num > largest) {
//           largest = num;
//       }
//   }
//   return largest;
// }

// console.log(findLargest([3, 5, 8, 1,15,25,10,332,52])); 

// function findMissNumber(arr) {
//   let n = arr.length + 1;
//   const expectedSum = (n * (n + 1)) / 2;
//   const actualSum = arr.reduce((sum, num) => sum + num, 0);
//   return expectedSum - actualSum;
// }

// console.log(findMissNumber([1, 2, 3, 5])); // Output: 4


// let data = [1,2,7,14,98,100,95]
// let  sum = 0;
// for(let i = 0; i<data.length; i++){
//   sum =+ data[i]
// }
// console.log(sum)

// function dublicatenumber (arr){
//      let dub = arr[0]
//      let dublic = [];
//      let 
//      for(let i = 0;i<dublicatenumber.length;i++){
//       for(let j =i+1; j<dublicatenumber.length;j++){
//         arr.forEach(val => a,b = a < b );{
//           if( dub[i] === arr[j]){
//             dublic.
//           }
          
//         };
//       }
//      }
// }
// console.log(dublicatenumber([1,2,3,4,1,5,6,3]))

let arr = [11,22,11,22,34,54,23,1,1,1]
let myset = new Set (arr)
console.log(myset)