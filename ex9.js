/**
* Created by Madalina Marian on 17/06/2020
* Special Methods for strings, numbers and arrays
*/


var example = "This is a special method for strings, numbers and arrays";
var exampleLength = example.length;
var exampleIndexOf = example.indexOf('is');
var exampleIndexOf = example.indexOf('is', 5);
var exampleLastIndexOf = example.lastIndexOf('is');
var exampleLastIndexOf2 = example.lastIndexOf("locate", 5);
var exampleSearch = example.search('is');

/* 
The two methods, indexOf() and search() are NOT equal. These are the differences:
*The search() method cannot take a second start position argument.
*The indexOf() method cannot take powerful search values (regular expressions).
*/

/**
Extracting String Parts
* slice(start, end)
*/

var exampleSlice = example.slice(5, 18);
var exampleSliceNegative = example.slice(-18, -5);
var exampleSlice2 = example.slice(5);
var exampleSlice3 = example.slice(-6);

/* substring(start, end) (this method can't accept negative index) */
var exampleSubstring = example.substring(5, 18);

/*substr(start, length). This is similar to slice(). The difference is that the second 
parameter specifies the length of the extracted part. */

var exampleSubstr = example.substr(5, 18);

/**
Replacing String Content
*/

var exampleReplace = example.replace("special", "cool");

/**
Converting to Upper and Lower Case
*/

var exampleUperCase = example.toUpperCase();
var exampleLowerCase = example.toLowerCase();

/**
concat
*/

var exampleConcat = "example".concat("", example);

/**
trim
*/

var exampleTrim = example.trim();

/**
Extracting String Characters
*/

var examplecCharAt = example.charAt(0);

/**
Converting a String to an Array
*/
var exampleSplit = example.split("");

