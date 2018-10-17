// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
function diffArray(arr1, arr2) {
  return [
    ...diff(arr1, arr2),
    ...diff(arr2, arr1)
  ]
}
const diff = (a, b) => {
    return a.filter(item => b.indexOf(item) === -1);
}
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
//---------------------------------------------------------------
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
function destroyer(arr, ...args) {
    return arr.filter((value) => !args.includes(value));
  }
console.log(destroyer([1, 2, 3, 1, 2, 3],  2, 3));
//-----------------------------------------------------------------
// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
function whatIsInAName(collection, source) {
    const srcKeys = Object.keys(source); //source input in an arr
    // filter the collection
    return collection.filter((valueObj) => {
        for(let i = 0; i < srcKeys.length; i++) {
                                                //{keys} in collection
            if(!valueObj.hasOwnProperty(srcKeys[i]) ||
                                              //{: value} in collection
                valueObj[srcKeys[i]] !== source[srcKeys[i]]) {
                    return false;
                  }
          }
        return true;
    });
}
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
//--------------------------------------------------------------
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str) {
   return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase()
}
console.log(spinalCase('This Is Spinal Tap'));
// Split the string at one of the following conditions (converted to an array)
    // a whitespace character [\s] is encountered
    // underscore character [_] is encountered
    // or is followed by an uppercase letter [(?=[A-Z])]
//--------------------------------------------------------------
// Translate the provided string to pig latin.
// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
// If a word begins with a vowel you just add "way" to the end.
// Input strings are guaranteed to be English words in all lowercase.
function translatePigLatin(str) {
  let checker = str.charAt(0);
  let checkerDue = str.charAt(0) + str.charAt(1);
  let res = /[eaiou]/gi;
  return (res.test(checker)) ? `${str}way` :
          (!res.test(checkerDue)) ? `${str.slice(2)}${str.slice(0,2)}ay` : `${str.slice(1)}${checker}ay`;
}
console.log(translatePigLatin("glove"));
//--------------------------------------------------------------------
// Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.
// You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.
// 1) The only numbers in the username have to be at the end. There can be zero or more of them at the end.
// 2) Username letters can be lowercase and uppercase.
// 3) Usernames have to be at least two characters long. A two-letter username can only use alphabet letter characters.
{
  let username = "JackOfAllTrades";
  let userCheck = /^[a-z]{2,}\d*$/i;
  let result = userCheck.test(username);
}
//-------------------------------------------------------------------
// Change the regex ohRegex to match only 3 to 6 letter h's in the word "Oh no".
{
  let ohStr = "Ohhh no";
  let ohRegex = /oh{3,6}\sno/i;
  let result = ohRegex.test(ohStr);
}
//---------------------------------------------------------------
// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).
myReplace = (str, before, after) => {
   if(/[A-Z]/.test(before[0])){
     let leaped = after.charAt(0).toUpperCase() + after.slice(1);
     return str.replace(before, leaped);
   }else {
     return str.replace(before, after);
   }
}
console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));
//---------------------------------------------------------------
// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.
function fearNotLetter(str) {
  for (let i = 1; i < str.length; ++i) {
    if (str.charCodeAt(i) - str.charCodeAt(i-1) > 1) {
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
}
console.log(fearNotLetter("abce"));
//----------------------------------------------------------------
// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
uniteUnique = (arr, arguments) => {
  const args = [].slice.call(arguments);
  args.forEach((value) => (value >= arr.length) ? arr.push(value) : ' ' );
  return arr;
}
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
//-----------------------------------BEST OPTION-----------------
function uniteUniqueII(...arrays) {
  //make an array out of the given arrays and flatten it (using the spread operator)
  const flatArray = [].concat(...arrays);
  // create a Set which clears any duplicates since it's a regular set and not a multiset
  return [...new Set(flatArray)];
}
console.log(uniteUniqueII([1, 3, 2], [5, 2, 1, 4], [2, 1]));
//---------------------------------------------------------------------
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
convertHTML = (str) => {
    str = str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,"&apos;");
    return str;
}
console.log(convertHTML("Dolce & Gabbana"));
//---------------MOST SOPHISTICATED----------------------
function convertHTMLII(str) {
  const htmlEntities = {
    '&':'&amp;',
    '<':'&lt;',
    '>':'&gt;',
    '"':'&quot;',
   '\'':"&apos;"
  }
  return str.split('').map((entity) => htmlEntities[entity] || entity).join('');
}
console.log(convertHTMLII("Dolce & Gabbana"));
//-------------------------------------------------------------------
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
function sumFibs(num) {
    const arrFib = [1, 1];
    let nextFib = 0;
    while((nextFib = arrFib[0] + arrFib[1]) <= num) {
        arrFib.unshift(nextFib);
      }
    return arrFib.reduce((acc, value) => {
      return acc + value * (value%2); //this way, I anule even numbers, xD
    }, 0);
}
console.log(sumFibs(10));
//------------------------------------------------------------
// Sum all the prime numbers up to and including the provided number.
function sumPrimes(num) {
  //  prime checker
  function isPrime(number){
      for (let i = 2; i <= number; i++){
          if(number % i === 0 && number!= i){
          // true if divisible by any number that is not itself.
             return false;
          }
       }
       // if it passes for loops conditions it is a prime
      return true;
  }
  // 1 is not a prime, so return nothing, also stops the recursive calls.
  if (num === 1){
    return 0;
  }
  // Check if your number is not prime
  if(isPrime(num) === false){
  // for non primes check the next number down from your maximum number, do not add anything to your answer
    return sumPrimes(num - 1);
  }
  // Check if your number is prime
  if(isPrime(num) === true){
  // for primes add that number to the next number in the sequence through a recursive call to our sumPrimes function.
    return num + sumPrimes(num - 1);
  }
}
// test here
console.log(sumPrimes(10));
//------------------------------------------------------------------
// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.
// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
dropElements = (arr, func) => { return arr.filter((func)); }
console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}));

//-----------OTHER INTERESTING SOLUTION--------------
function dropElementsII(arr, func) {
  while(arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}
// test here
console.log(dropElementsII([1, 2, 3, 9, 2], function(n) {return n > 2;}));
//-----------------------------------------------------------------------------------
// Intermediate Algorithm Scripting: Steamroller
// Flatten a nested array. You must account for varying levels of nesting.
steamrollArray = arr => {
  let flat = [].concat(...arr);
  // Array.some() method to find out if the new array contains an array still
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}
console.log(steamrollArray([[["a"]], [["b"]]]));
//--------------------------------------------------------------------
// Intermediate Algorithm Scripting: Binary Agents
// Return an English translated sentence of the passed binary string.
// The binary string will be space separated.
function binaryAgent(str) {
     // Removes the spaces from the binary string
    str = str.replace(/\s+/g, '');
    // Pretty (correct) print binary (add a space every 8 characters)
    str = str.match(/.{1,8}/g).join(" ");

    let newBinary = str.split(" ");
    const binaryCode = [];

    for (let i = 0; i < newBinary.length; i++) {
        binaryCode.push(String.fromCharCode(parseInt(newBinary[i], 2)));
    }
    return binaryCode.join("");
}
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
//--------------------------------------------------------------------
// Intermediate Algorithm Scripting: Everything Be True
// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
function truthCheck(collection, pre) {
  let counter = 0;
  for (let key in collection){
      (collection[key].hasOwnProperty(pre)) ? counter++ : ' ' ;
  }
  return (counter == collection.length) ? true : false;
}
console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));
//-------------------------------BEST OPTION------------
function truthCheckII(collection, pre) {
  return collection.every(obj => obj[pre]);
}
console.log(truthCheckII([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));
//--------------------------------------------------------------------
// Intermediate Algorithm Scripting: Arguments Optional
// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
function addTogether() {
    const args = Array.from(arguments);
    return args.some(n => typeof n !== 'number') ? undefined :
            args.length > 1 ? args.reduce((acc, n) => acc += n, 0) :
            //Had I just 1 argument & it's number, then sum it up.
            (n) => typeof n === "number" ? n + args[0]:
            undefined;
}
console.log(addTogether(2)(3));
//-------------------------------------------------------------------
// Intermediate Algorithm Scripting: Make a Person
// Fill in the object constructor with the following methods below:
var Person = function(firstAndLast) {
  var fullName = firstAndLast;

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function(name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.setFullName = function(name) {
    fullName = name;
  };
};
//------------------------------------CHALLENGE 1--------------------
// Return true if the given string is a palindrome. Otherwise, return false.
function palindrome(str) {
  str = str.replace(/\s+|\_|\W/g, '').toLowerCase();
  let test = str;
  let test1 = test.split('').reverse().join('').toLowerCase();
  return (test1 == str) ? true : false;
}
console.log(palindrome("_eye"));
//--------------------------------------CHALLENGE 2---------------------
// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.
const convertToRoman = function(num) {
    const decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
    const romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
    let romanized = '';
    for (let index = 0; index < decimalValue.length; index++) {
        while (decimalValue[index] <= num) {
            romanized += romanNumeral[index];
            num -= decimalValue[index];
        }
    }
  return romanized;
}
console.log(convertToRoman(36));
//-----------------------------------------------------------------
// JavaScript Algorithms and Data Structures Projects: Caesars Cipher
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
