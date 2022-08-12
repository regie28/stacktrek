/*1. Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2,1,10] --> 9

in Descending Order: [10, 2, 1]
Sum: (10-2) + (2 - 1) = 8 + 1 = 9

*/


function descending() {
    let num = [2, 1, 10];

    num.forEach((a,b) => b - a );

    console.log(num)
}
/* 2. Given an array of object below. Return a new array wherein the first and last name is combined separated by a space. 

*/