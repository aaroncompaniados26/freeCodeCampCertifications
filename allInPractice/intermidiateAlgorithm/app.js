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
