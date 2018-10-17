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
//---------------------------------------CHALLENGE 3--------------------------
// JavaScript Algorithms and Data Structures Projects: Caesars Cipher
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
function rot13(str) {
   const rotCharArray = []; //real meaning translated (+13)
   const regEx = /[A-Z]/ ;
   str = str.split("");
   for (let x in str) {                                               //A - Z
     if (regEx.test(str[x])) {                    //RANGE 65-90    ABCtotal
       rotCharArray.push((str[x].charCodeAt() - 65 + 13) % 26 + 65);
     } else {
       rotCharArray.push(str[x].charCodeAt()); //if regEx is not meet , leave character as it was
     }
   }                                //translation applied
   str = String.fromCharCode.apply(String, rotCharArray);
   return str;
 }
console.log(rot13("SERR PBQR PNZC"));
//---------------------------------------------------------------------
// Return true if the passed string looks like a valid US phone number.
// The user may fill out the form field any way they choose as long as it has the format of a valid US number.
function telephoneCheck(str) {
  const regEx = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regEx.test(str);
}
console.log(telephoneCheck("1 555-555-5555"));
//------------------------------------------CHALLENGE 4---------------------------
// JavaScript Algorithms and Data Structures Projects: Cash Register
// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
// cid is a 2D array listing available currency.
// The checkCashRegister() function should always return an object with a status key and a change key.
// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
var denom = [
  { name: 'ONE HUNDRED', val: 100.00},
  { name: 'TWENTY', val: 20.00},
  { name: 'TEN', val: 10.00},
  { name: 'FIVE', val: 5.00},
  { name: 'ONE', val: 1.00},
  { name: 'QUARTER', val: 0.25},
  { name: 'DIME', val: 0.10},
  { name: 'NICKEL', val: 0.05},
  { name: 'PENNY', val: 0.01}
];

function checkCashRegister(price, cash, cid) {
  var output = { status: null, change: [] };
  var change = cash - price;

  var register = cid.reduce(function(acc, curr) {
    acc.total += curr[1];
    acc[curr[0]] = curr[1];
    return acc;
  }, { total: 0 });
  if (register.total === change) {
    output.status = 'CLOSED';
    output.change = cid;
    return output;
  }
  if (register.total < change) {
    output.status = 'INSUFFICIENT_FUNDS';
    return output;
  }
  // Loop through the denomination array
  var change_arr = denom.reduce(function(acc, curr) {
    var value = 0;
    // While there is still money
    while (register[curr.name] > 0 && change >= curr.val) {
      change -= curr.val;
      register[curr.name] -= curr.val;
      value += curr.val;

      // Round change to the nearest hundreth deals with precision errors
      change = Math.round(change * 100) / 100;
    }
    if (value > 0) {
        acc.push([ curr.name, value ]);
    }
    return acc; // Return the current change_arr
  }, []); // Initial value of empty array for reduce
// the string "Insufficient Funds"
  if (change_arr.length < 1 || change > 0) {
    output.status = 'INSUFFICIENT_FUNDS';
    return output;
  }
  output.status = 'OPEN';
  output.change = change_arr;
  return output;
}
//-----------------------------------------------------------------
