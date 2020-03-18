// Implementing common array functions

/**
 * JS for statement
   https://devdocs.io/javascript/statements/for
 */
function forStatement() {
  console.log("For example");

  let str = "";

  // initialize a variable

  // define a condition to keep the for running, or stop

  // define to increment/decrement
  for (let i = 10; i > 0; i--) {
    str = str + i; // this is doing a string concat because you can use + to concat to strings
    // Js is casting the integer i to str

    console.log("run # ", i);
    // Body
  }

  // i == 1  -> i > 0  ...... true
  // i == 0 -> i > 0  ....... false

  console.log(str);
  // expected output: "012345678"
}

/**
 * Fill
  https://devdocs.io/javascript/global_objects/array/fill
 */
function fillExample() {
  console.log("Array fill example");

  const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
  // fill with 0 from position 2 until position 4
  // console.log(array1.fill(0, 2, 6));
  // expected output: [1, 2, 0, 0]

  // fill with 5 from position 1
  // console.log(array1.fill(5, 1));
  // expected output: [1, 5, 5, 5]

  function myFill(array, value, start, end) {
    // returns the modified array
    let myEnd = end;
    if (end > array.length) {
      myEnd = array.length;
    }

    for (let index = start; index <= myEnd; index++) {
      array[index] = value;
    }

    return array;
  }

  console.log(myFill(array1, 100, 2, 4));
}

/**
 * Filter
 * https://devdocs.io/javascript/global_objects/array/filter
 */
let filterExample = function() {
  console.log("Array filter example");

  const words = [
    "spray",
    "limit",
    "elite",
    "exuberant",
    "destruction",
    "present"
  ];

  // const result = words.filter(function(word) {
  //   return word.length > 6;
  // });

  function myName(parameter1, parameter2) {
    console.log("Im a function");
  }

  var anotherFunction = function(param1, param2, param3) {
    console.log(param1, param2, param3);
  };

  var number = 1;

  var str = "hello";

  myName(1, 2);

  anotherFunction(4, 5, 6);

  // // lambda function
  // var myFunction = (param1, param2) => {
  //   return param1 + param2;
  //   // this
  // };

  // return;

  const result = words.filter(word => word.length > 6);

  console.log(result);
  // expected output: Array ["exuberant", "destruction", "present"]

  function myFilter(array, callback) {
    // returns a new array
    // return array.filter(callback);

    const result = [];
    let resultIndex = 0;

    // apply the callback to each element
    // select those for which the result is true
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      if (callback(element)) {
        result[resultIndex] = element;
        resultIndex++;
        // result.push(element);
      }
    }

    return result;
  }

  console.log(
    myFilter(
      [1, 2, 43287, 11, 53, 7, 12, 421, 81432],
      number => number % 2 === 0
    )
  );
};

/**
 * Find
 * https://devdocs.io/javascript/global_objects/array/find
 */
function findExample() {
  console.log("Array find example");

  const array1 = [5, 12, 8, 130, 44];

  const found = array1.find(element => element > 400);

  console.log("Native find function found: ", found);
  // expected output: 12

  function myFind(array, callback) {
    // return array.find(predicate);
    // returns The value of the first element in the array
    // that satisfies the provided testing function;
    // otherwise, undefined is returned.

    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      console.log("my index now is: ", index);
      if (callback(element)) {
        return element;
      }
    }

    return undefined;
  }

  const result = myFind(
    [
      { age: 34, name: "John" },
      { age: 12, name: "Maria" },
      { age: 18, name: "Lena" },
      { age: 45, name: "Ana" },
      { age: 5, name: "Tom" }
    ],
    applicant => applicant.age <= 18
  );

  if (result) console.log(`${result.name} is the first under age applicant`);
  else console.log("No one found");
}

/**
 * Map
 * https://devdocs.io/javascript/global_objects/array/map
 */
function mapExample() {
  console.log("map example");
  const array1 = [1, 4, 9, 16];

  // pass a function to map
  const map1 = array1.map(x => x * 2);

  console.log(map1);
  // expected output: Array [2, 8, 18, 32]

  function myMap(array, callback) {
    // returns A new array with each element being the result of the callback function.
  }

  const importantInfo = myMap(
    ["a", "message", "in caps", "looks", "important"],
    str => str.toUpperCase()
  );

  console.log(importantInfo);
}

/**
 * Reduce
 * https://devdocs.io/javascript/global_objects/array/reduce
 */
function reduceExample() {
  console.log("Reduce example");
  const array1 = [1, 2, 3, 4];
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  // 1 + 2 + 3 + 4
  console.log(array1.reduce(reducer));
  // expected output: 10

  // 5 + 1 + 2 + 3 + 4
  console.log(array1.reduce(reducer, 5));
  // expected output: 15

  function myReduce(array, callback, initialValue) {
    // callbacks receives 2 parameters:
    // - accumulator
    // - currentValue
    // returns The value that results from the reduction.
  }

  const totalSum = myReduce(
    [1, 2, 3, 4, 5],
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  console.log("Total sum is: ", totalSum);
}

function main() {
  // forStatement();

  // fillExample();

  // filterExample();

  findExample();

  // mapExample();

  // reduceExample();
}

main();
