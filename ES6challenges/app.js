//                                        COMPARING OBJECTS
//Write a JavaScript program to compare two objects to determine 
//if the first one contains equivalent property values to the second one.
const comparer = (obj1, obj2) => Object.keys(obj1).length === Object.keys(obj2).length;


console.log(comparer({ age: 25, hair: 'long' }, { hair: 'long', beard: true }));


//----------------------------------------CONVERT NUMBERS INTO AN ARRAY OF VALUES

//Write a JavaScript program to converts a specified number to an array of digits.
const digitize = n => [...
    `${n}`
].map(i => parseInt(i));

console.log(digitize(123));


//----------------------------------------FILTER VALUES FROM ARRAY

//Write a JavaScript program to filter out the specified values from an specified array. 
//Return the original array without the filtered values.
const filtering = (arr, [...items]) => {
    return arr.filter(current => {
        return !items.includes(current);
    });
};

console.log(filtering([1, 2, 3, 4, 5, 6, 7, 8], [1, 5]));


//---------------------------------------EXTRACT FROM AN ARR THROUGH GIVEN INDEXES

//Extract out the values at the specified indexes from an specified array
const extractor = (arr, [...indexes]) => {
    return indexes.map(index => arr[index]);
}
console.log(extractor([1, 2, 3, 4, 5, 6, 7, 8], [1, 5]));


//----------------------------------------LENGTH CONVERTER INTO BYTES

const byte_Size = str => new Blob([str]).size; //byte measure

console.log(byte_Size('123456'));


//---------------------------------------TRUE if provided fn(all elements)

//Write a JavaScript function that returns true if the provided predicate function returns true 
//for all elements in a collection, false otherwise.
const tru = (arr, fn = Boolean) => arr.every(fn);

console.log(tru([4, 2, 3], x => x > 1));


//---------------------------------------- REMOVE FROM ARR (left)

//JavaScript program to remove specified elements from the left of a given array of elements.
const leftR = (arr, index = 1) => arr.slice(index);

console.log(leftR([1, 2, 3], 2));


//----------------------------------------- REMOVE FROM ARR (right)

//Remove specified elements from the right of a given array of elements
const rightR = (arr, index = -1) => arr.slice(`${- index}`);

console.log(rightR([1, 2, 3], 2));


//----------------------------------------- EXTEND A 3-digit Color Code

const digitExtend = code => {
    return code.slice(code.startsWith('#') ? 1 : 0).split('').map(x => x + x).join('');
}

console.log(digitExtend('#03f'));
console.log(digitExtend('03f'));

//----------------------------------------- FILTER NON-UNIQUE values in an ARRAY

const unique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));

console.log(unique([1, 2, 2, 3, 4, 4, 5]));

//---------------------------------------- DECAPITALIZE 1st letter of a string

const decapitalize = ([first, ...rest]) => first.toLowerCase() + rest.join('');

console.log(decapitalize('W3resource'));

//---------------------------------------- CREATE an ARRAY with all possible combinations  
//
const mixArr = (a, b) => a.reduce((acc, val) => acc.concat(b.map(y => [val, y])), []);

console.log(mixArr([1, 2], ['a', 'b']));

//--------------------------------------- TRUE o FALSE return

const truCheck = (str, def = false) =>
    /^(y|yes)$/i.test(str) ? true : /^(n|no)$/i.test(str) ? false : def;


console.log(truCheck('yes'));

//-------------------------------------- RETURN SAFE INTEGER

const int = num => Math.round(Math.max(Math.min(num, Number.MAX_SAFE_INTEGER), Number.MIN_SAFE_INTEGER));

console.log(int(4, 7));

//------------------------------------- FILTER OUT ELEMENTS of a given Array

const filtra = (arr, ...args) => arr.filter(curr => !args.includes(curr));

console.log(filtra([2, 1, 2, 3], 1, 2));

//------------------------------------- RANDOM NUMBER in SPECIFIED RANGE

const random = (min, max) => Math.floor(Math.random() * (max - min) + min);

console.log(random(4,6));

//------------------------------------
//34