/**
* Created by Madalina Marian on 22/05/2020
*/


//2. Create another function that does the same thing, called checkDriverAge2() using Function Expression.

//BONUS: Instead of using the prompt. Now, only use console.log and make the checkDriverAge() 
// function accept an argument of age, so that if you enter:
// checkDriverAge(92);
//it returns "Powering On. Enjoy the ride!"


function checkAge(age) {
   if (Number(age) < 18) {
        return "Sorry, you are too yound to drive this car. Powering off";
    } else if (Number(age) > 18) {
        alert("Powering On. Enjoy the ride!");
    } else if (Number(age) === 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
}


