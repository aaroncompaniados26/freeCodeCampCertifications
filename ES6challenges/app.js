//                                        COMPARING OBJECTS
//Write a JavaScript program to compare two objects to determine 
//if the first one contains equivalent property values to the second one.
const comparer = (obj1, obj2) =>  Object.keys(obj1).length === Object.keys(obj2).length;


console.log(comparer({age: 25, hair: 'long'}, 
         {hair: 'long', beard: true}));


//----------------------------------------CONVERT NUMBERS INTO AN ARRAY OF VALUES

//Write a JavaScript program to converts a specified number to an array of digits.
const digitize = n => [...`${n}`].map(i => parseInt(i));

console.log(digitize(123));


//----------------------------------------FILTER VALUES FROM ARRAY

//Write a JavaScript program to filter out the specified values from an specified array. 
//Return the original array without the filtered values.
const filtering = (arr, [...items]) => { 
      return arr.filter( current => { 
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

const byte_Size = str => new Blob([str]).size;  //byte measure

console.log(byte_Size('123456'));


//---------------------------------------TRUE if provided fn(all elements)
//Write a JavaScript function that returns true if the provided predicate function returns true 
//for all elements in a collection, false otherwise.
const tru = (arr, fn = Boolean) => arr.every(fn);

console.log( tru([4, 2, 3], x => x > 1) );


//----------------------------------------
//17





//-----------------------------------------