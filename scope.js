/**
* Created by Madalina Marian on 25/08/2020
* Scope
*/



// For all of these, what is the value of a when the function gets called with the alert()
// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);
} 
// rez = 5

//#2
var a = 0;
function q2() {
    a = 5;
}
// rez = 5

function q22() {
    alert(a);
}
// rez = not executed

//#3
function q3() {
    window.a = "hello";
}
// rez = not executed


function q32() {
    alert(a);
}
// rez = not executed

// //#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
}
// rez = not executed

// //#5
var a = 2;
if (true) {
    var a = 5;
    alert(a);
    // rez = 5;
}
alert(a);
// rez = 5;