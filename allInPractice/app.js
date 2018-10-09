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
