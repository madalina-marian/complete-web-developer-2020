/**
* Created by Madalina Marian on 14/07/2020
* Data Objects
*/


/**
Write a JavaScript function to get the number of days in a month.

Write a JavaScript function to get the month name from a particular date

Write a JavaScript function to compare dates (i.e. greater than, less than or equal to).

Write a JavaScript function to test whether a date is a weekend.**/

// var d = new Date();

var getDaysInMonth = function(month,year) {
 return new Date(year, month, 0).getDate();
};
console.log(getDaysInMonth(1, 2020));
console.log(getDaysInMonth(2, 2020));
console.log(getDaysInMonth(3, 2020));
console.log(getDaysInMonth(4, 2020));
console.log(getDaysInMonth(5, 2020));
console.log(getDaysInMonth(6, 2020));
console.log(getDaysInMonth(7, 2020));
console.log(getDaysInMonth(8, 2020));
console.log(getDaysInMonth(9, 2020));
console.log(getDaysInMonth(10, 2020));
console.log(getDaysInMonth(11, 2020));
console.log(getDaysInMonth(12, 2020));


var date = new Date(2020, 9, 22); 
var month = date.toLocaleString('default', { month: 'long' });
console.log(month);

var compare_dates = function(date1,date2){
     if (date1>date2) return ("Date1 > Date2");
   else if (date1<date2) return ("Date2 > Date1");
   else return ("Date1 = Date2"); 
  }

console.log(compare_dates(new Date('11/14/2020 00:00'), new Date('11/14/2020 00:00')));
console.log(compare_dates(new Date('11/14/2020 00:01'), new Date('11/14/2020 00:00')));
console.log(compare_dates(new Date('11/14/2020 00:00'), new Date('11/14/2020 00:01')));


var is_weekend =  function(date1){
    var dt = new Date(date1);
     
    if(dt.getDay() == 6 || dt.getDay() == 0)
       {
        return "weekend";
        } 
}

console.log(is_weekend('Nov 14, 2020'));
console.log(is_weekend('Nov 15, 2020'));
console.log(is_weekend('Nov 16, 2020'));
