// Functional Programming: Refactor Global Variables Out of Functions
// So far, we have seen two distinct principles for functional programming:
// 1) Don't alter a variable or object - create new variables and objects and return them if need be from a function.

// 2) Declare function arguments - any computation inside a function depends only on the arguments, and not on any global object or variable.
// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add (arr,bookName) {
    return [...arr,bookName];
}

function remove (arr,bookName) {
    if (arr.indexOf(bookName) >= 0) {
        return arr.filter((value) => value !== bookName);
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');
console.log(bookList);
//---------------------------------------------------------------------
// The watchList array holds objects with information on several movies. Use map to pull the title and rating from watchList and save the new array in the rating variable. The code in the editor currently uses a for loop to do this, replace the loop functionality with your map expression.
// Add your code below this line

var rating = watchList.map( (item) => ({"title":item["Title"], "rating":item["imdbRating"]}) );

console.log(rating);
//------------------------------------------------------------------------
