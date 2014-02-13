/*
HOW TO USE THIS:
Fuzzy search in sublime by hitting Command-P, enter # before search query
Straight up search with Command-F to find syntax
Keywords are commented in to help searches
*/

/*FUNCTIONS
*Creating Functions
*
*/

//Creates anonymous function attached to variable = BAD
var functionName = function() {

}

//Creates function named functionName GOOD
function functionName() {

}
/*REGULAR EXPRESSIONS (Reg exp)
*Syntax and modifiers
Usage:
-Finding stuff
-Find and replace
-Searches
*/

//general syntax, requires second / even without modifiers 
var reg_exp = /exp/modifiers;

//example modifiers follow

//does a global search, returning all instances instead of just the first
reg_exp = /search/g;
//does a case-insensitive search
reg_exp = /expression/i;

/*STRINGS
*String Object
*Handling String Input
*Indexes for strings
*/

//INDEXES
/*
*Indexes start at 0
*Negative(-) indexes start from the end
*If position doesn't exist, returns -1
*/

var string = "example_string"
var integer_limit = 5;

//returns concatentated strings
string.concat("string(s) to concatenate");

//returns the index (position) of the reg_exp within str or -1
string.search(reg_exp);

//returns the matches as an array rather than their indices
string.match()

//returns array of strings based on separator, up to limit number of them
string.split("separator", integer_limit);
//returns entire string if no separator is specified
string.split();
//returns entire string following index if only one index is given
string.split(index_s);

//index_s = start index, index_e = end index
var index_s = 5;
var index_e = 7;
//returns "slice" extracted from the string, includes index_s, excludes index_e
string.slice(index_s, index_e);

//returns string all to upper/lower case respectively
string.toUpperCase();
string.toLowerCase();

/*
*MATH
*/

var float = 1.000;

Math.floor(float);