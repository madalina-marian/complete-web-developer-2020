/**
* Created by Madalina Marian on 21/05/2020
*/


// Make a keyless car EVEN BETTER!
// We are improving our car from previous exercise now.
// Solutions to future exercises will be in the .js file (meaning Javascript file) from now on.

// var age = prompt("What is your age?");

// if (Number(age) < 18) {
// alert("Sorry, you are too yound to drive this car. Powering off");
// } else if (Number(age) > 18) {
// alert("Powering On. Enjoy the ride!");
// } else if (Number(age) === 18) {
// alert("Congratulations on your first year of driving. Enjoy the ride!");
// }

//1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.
// Notice the benefit in having checkDriverAge() instead of copying and pasting the function everytime?

function checkDriverAge() {
    var age = prompt("How old are you?");
    if (Number(age) < 18) {
        alert("Sorry, you are too yound to drive this car. Powering off");
    } else if (Number(age) > 18) {
        alert("Powering On. Enjoy the ride!");
    } else if (Number(age) === 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    }

    return age;
};

checkDriverAge();




