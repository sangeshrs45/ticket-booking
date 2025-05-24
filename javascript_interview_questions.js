// 1. Find the Largest Number in an Array
// Question: Write a function to find the largest number in an array without using Math.max().

// Solution:

function findLargest(arr) {
    let largest = arr[0];
    for (let num of arr) {
        if (num < largest) {
            largest = num;
        }
    }
    return largest;
}

console.log(findLargest([3, 5, 8, 1,15,25,10,332,52])); 

// 2. Reverse a String
// Question: Write a function to reverse a string without using reverse().

// Solution:

function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    // return reversed;
    if (reversed.toLowerCase() === str.toLowerCase()){
        return `${str} is palindrome`
    }
    else{
        return `${str} is not palindrome`
    }
}

// console.log(reverseString("Amma")); // Output: "olleh"

// 3. Check for Palindrome
// Question: Write a function to check if a string is a palindrome (reads the same backward as forward).

// Solution:
// let a = "apple"
// let b = [4,5,2,0,1]
// console.log(b.reverse())
// console.log(a.reverse())


function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-z]/g, "");
    console.log(cleanedStr)
    return cleanedStr === cleanedStr.split("").reverse().join("");
}

// console.log(isPalindrome("A man6, a plan, a canal8, Panama")); // Output: true


// 4. FizzBuzz Problem
// Question: Print numbers from 1 to 100. For multiples of 3, print "Fizz"; 
// for multiples of 5, print "Buzz"; for multiples of both, print "FizzBuzz".

// Solution:
// Falsy Values in JavaScript:

// false, 0, "", null, undefined, NaN

// for (let i = 1; i <= 100; i++) {
//     let output = "";
//     if (i % 3 === 0) {
//         output += "Fizz";
//     }
//     if (i % 5 === 0){
//         output += "Buzz";}
//     console.log(output || i);
// }

// 
// 5. Find Missing Number in an Array
// Question: Given an array of numbers from 1 to N with one missing number, find the missing number.

// Solution:


function findMissingNumber(arr) {
    const n = arr.length + 1;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((sum, num) => sum + num);
    return expectedSum - actualSum;
}

// console.log(findMissingNumber([1, 2, 4, 5])); // Output: 3

// find sum of array without using reduce method
// let data = [1,2,7,14,55,100,55]
// sum = 0
// for(i=0;i<data.length;i++){
//     sum+=data[i]

// }
// console.log(sum)



// let b = data.reduce((a,b) => a+b)
// console.log(b)


// 6. Count Vowels in a String
// Question: Write a function to count the number of vowels in a string.

// Solution:

function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;}
    }
    return count;
}

// console.log(countVowels("Hello World"));

// 7. Find Factorial of a Number
// Question: Write a function to compute the factorial of a number (using recursion).

// Solution:


function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

// console.log(factorial(5)); // Output: 120




// 9. Print prime numbers

function printPrimes(limit) {
    for (let num = 2; num <= limit; num++) {
      let isPrime = true;
      // Check if num is divisible by any number other than 1 and itself
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        console.log(num);
        // return num
      }
    }
  }
  
  // Example: Print primes up to 100
printPrimes(100);

// 10.Make the array like ascending order
data = [4,1,5,7,10,41,2,11,31,57,17,100,51]
for(i=0;i<data.length;i++){
    for (j=i+1;j<data.length;j++){
        if (data[i]>data[j]){
            temp = data[i]
            data[i] = data[j]
            data[j] = temp
        }
    }
}
// console.log(data)

// 11.Make the array like descending order
data = [4,1,5,7,10,41,2,11,31,57,17,100,51]
for(i=0;i<data.length;i++){
    for (j=i+1;j<data.length;j++){
        if (data[i]<data[j]){
            temp = data[i]
            data[i] = data[j]
            data[j] = temp
        }
    }
}
console.log(data)


// 12. Find maximum numbers
// data = [4,1,5,7,10,41,2,11,31,57,17,100,51]
// let start = data[0]

// for (let i = 0;i<data.length;i++){
//     if (data[i] > start){
//         start = data[i]
//     }
// }
// console.log(start)

13.// 12. Find minimum numbers
data = [4,1,5,7,10,41,2,11,31,57,17,100,51]
let start = data[0]

for (let i = 0;i<data.length;i++){
    if (data[i] < start){
        start = data[i]
    }
}
 console.log(start)