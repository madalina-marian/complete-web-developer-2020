/**
* Created by Madalina Marian on 29/07/2020
* Math Objects
*/

/**
a) Write a JavaScript function to generate a random integer. Function will take two parameters "min" and "max".

b) Create random CSS background color code. The code could be HEX or RGB.
Call that function and apply it to a container of an HTML page.
**/

var generateRandomInteger = function(min,max) {
     // return Math.random() * (max - min) + min;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
};

console.log(generateRandomInteger(1, 2));
console.log(generateRandomInteger(5, 8));
console.log(generateRandomInteger(50, 110));