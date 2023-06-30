/*
Sum To One Digit
Implement a function sumToOne(num)​ that,
given a number, sums that number’s digits
repeatedly until the sum is only one digit. Return
that final one digit result.

Tips:
    to access digits from a number, need to convert it .toString() to access each digit via index
    parseInt(arg) returns arg parsed as an integer, or NaN if it couldn't be converted to an int
    isNaN(arg) used to check if something is NaN
*/

const num1 = 5;
const expected1 = 5;

const num2 = 10;
const expected2 = 1;

const num3 = 25;
const expected3 = 7;

/**
 * Sums the given number's digits until the number becomes one digit.
 * @param {number} num The number to sum to one digit.
 * @returns {number} One digit.
 */

// function sumToOneDigit(num) {
//     let sum = num;
//     while (sum > 9) {
//         sum = sum.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
//     }
//     return sum;
// }
// console.log(sumToOneDigit(num1));
// console.log(sumToOneDigit(num2));
// console.log(sumToOneDigit(num3));

// function sumToOneDigit(num) {
//     let numStr = num.toString();
//     f(numStr.length === 1); {
//         return num;
//     }
// }


function sumToOneDigit(num) {
    // if num is one digit, return num
    if (num < 10) {
        return num;
    }
    // if num is not one digit, add all digits together
    // if num is one digit, return num
    return num % 10 + sumToOneDigit(Math.floor(num / 10));


}
console.log(sumToOneDigit(num1));
console.log(sumToOneDigit(num2));
console.log(sumToOneDigit(num3));

/*****************************************************************************/
