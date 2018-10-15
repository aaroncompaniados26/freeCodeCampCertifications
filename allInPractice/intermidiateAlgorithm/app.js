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
