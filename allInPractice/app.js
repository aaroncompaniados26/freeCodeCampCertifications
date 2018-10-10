// Basic Algorithm Scripting: Reverse a String
reverseString = str => {
  let result = str.split('').reverse().join('');
  return result;
}
reverseString("hello");
//----------------------------------------------------------------------
// Basic Algorithm Scripting: Convert Celsius to Fahrenheit
convertToF = celsius => {
  let fahrenheit = celsius * 9/5 +32;
  return fahrenheit;
}
convertToF(30);
//--------------------------------------------------------------------
// Basic Algorithm Scripting: Factorialize a Number
factorialize = num => {
  if(num == 0 ){return 1}else{
  let result = [];
  for (let i = 1; i <= num; i++){
    result.push(i);
  }
   return result.reduce((acc, value)=>{
    return acc *= value;
  },)
  }
}
factorialize(5);
//-------------------------------------------------------
// Basic Algorithm Scripting: Find the Longest Word in a String
// FOR LOOP SOLUTION
findLongestWordLength = str => {
  let result = str.split(' ');
  let longestW = 0;
  for (let i = 0; i<result.length; i++){
      (result[i].length > longestW) ? longestW = result[i].length : '';
     }
  return longestW;
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");
// SORT SOLUTION
findLongestW = str =>{
    let result = str.split(' ');
    result.sort((a,b) => {
        return b.length - a.length;
    })
    return result[0].length;
}
//REDUCE SOLUTION
function findLongestWord(str) {
  let result = str.split(' ');
  let longest = result.reduce((acc, value) => {
      return (value.length > acc.length) ? value : acc;
      },'')
  return longest.length;
}
findLongestWord("The quick brown fox jumped over the lazy dog");
//-------------------------------------------------------------------
// Basic Algorithm Scripting: Return Largest Numbers in Arrays
// FOR LOOP SOLUTION
function largestOfFour(arr) {
  // You can do this!
  let result = [];
  let maximizer = 0;
  for (let i = 0; i < arr.length; i++){
    maximizer = Math.max(...arr[i]);
    result.push(maximizer);
  }
  return result;
}
largestOfF([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
// REDUCE SOLUTION--------------
function largestOfF(mainArray) {
  return mainArray.map(function (subArray){
    return subArray.reduce(function (previous, current) {
      return (current > previous) ? current : previous;
    }, 0);
  });
}
largestOfF([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
// APPLY CALL SOLUTION-------------
function largestFour(mainArray) {
  return mainArray.map(function(subArray) {
    return Math.max.apply(null, subArray);
  });
}
largestFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
//---------------------------------------------------------------------
// Basic Algorithm Scripting: Confirm the Ending
confirmEnding = (str, target) => {
  return (str.endsWith(target)) ? true : false;
}
confirmEnding("Congratulation", "on");
//-----------------------------------------------------------------
// Basic Algorithm Scripting: Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {
  let result = '';
  if(num > 0){
    for (let i = 0; i < num; i++){
      result += str;
    }
  }
  return result;
}
repeatStringNumTimes("abc", 3);
//------------------------------------------------------------------
// Basic Algorithm Scripting: Truncate a String
function truncateString(str, num) {
  if (num < str.length){
    let result = str.slice(0,num);
    return `${result}...`
   }else{ return str; }
}
truncateString("Peter Piper picked a peck of pickled peppers", 11)
//------------------------------------------------------------------
// Basic Algorithm Scripting: Finders Keepers
// Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.
function findElement(arr, func) {
  let num = arr.filter(func);
  return num[0];
}
findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0);
//------------------------------------------------------------------
// Basic Algorithm Scripting: Boo who
// Check if a value is classified as a boolean primitive. Return true or false.
function booWho(bool) {
  return (typeof(bool) == 'boolean') ? true : false;
}
booWho(null);
//---------------------------------------------------------------
// Basic Algorithm Scripting: Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
function titleCase(str) {
  return str.toLowerCase().split(' ').map((word) => {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}
titleCase("I'm a little tea pot");
// ANOTHER WAY
// return word.replace(word[0], word[0].toUpperCase()); ON MAP
//--------------------------------------------------------------------
// Basic Algorithm Scripting: Slice and Splice
// You are given two arrays and an index, use the array methods slice and splice to copy each element of the first array into the second array, in order.
function frankenSplice(arr1, arr2, n) {
    let localArray = arr2.slice();
    for (let i = 0; i < arr1.length; i++) {
        localArray.splice(n, 0, arr1[i]);
        n++;
    }
  return localArray;
}
//----------------------------------------------------------------------
// Basic Algorithm Scripting: Where do I Belong
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
function getIndexToIns(arr, num) {
   arr.sort(function(a, b) {
    return a - b;
  });
  for (let a = 0; a < arr.length; a++) {
    if (arr[a] >= num)
      return a;
  }
  return arr.length;
}
getIndexToIns([40, 60], 50);
//--------------------------------------------------------------------
// Basic Algorithm Scripting: Mutations
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
function mutation(arr) {
  let result = arr[1].toLowerCase()
    .split('');
    return result.every((letter) => {
      return arr[0].toLowerCase()
        .indexOf(letter) != -1;
    });
}
mutation(["hello", "hey"]);
//----------------------------------------------------------------
// Basic Algorithm Scripting: Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
function chunkArrayInGroups(arr, size) {
  let result = [];
  while (arr.length){
    result.push(arr.splice(0, size));
  }
  return result;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);
//---------------------------------------------------------------
