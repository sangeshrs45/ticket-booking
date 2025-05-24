let num = 370;
let temp = num;
let sum = 0;
let length = temp.toString().length
while (temp > 0) {
    let lastDigit = temp % 10;
    sum += Math.pow(lastDigit,length);
    temp = Math.floor(temp / 10);
}


if (sum == num) {
    console.log("It's an Armstrong number");
} else {
    console.log("Not an Armstrong number");
}

// function isArmstrong(num) {
//     let temp = num;
//     let digits = 0;

//     let n = num;
//     while (n > 0) {
//         digits++;
//         n = Math.floor(n / 10);
//     }

//     let sum = 0;
//     temp = num; 
//     while (temp > 0) {
//         let digit = temp % 10;
//         let power = 1;

//         for (let i = 0; i < digits; i++) {
//             power *= digit;
//         }
//         sum += power;
//         temp = Math.floor(temp / 10);
//     }
//     return sum === num;
// }
// for (let i = 1; i <= 1000; i++) {
//     if (isArmstrong(i)) {
//         console.log(i);
//     }
// }


