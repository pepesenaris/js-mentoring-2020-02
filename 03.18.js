// Implementing common array functions

/**
 * JS for statement
   https://devdocs.io/javascript/statements/for
 */
function forStatement() {
  console.log("For example");

  let str = "";

  for (let i = 0; i < 9; i++) {
    str = str + i;
  }

  console.log(str);
  // expected output: "012345678"
}

/**
 * Fill
  https://devdocs.io/javascript/global_objects/array/fill
 */
function fillExample() {
  console.log("Array fill example");

  const array1 = [1, 2, 3, 4];
  // fill with 0 from position 2 until position 4
  console.log(array1.fill(0, 2, 4));
  // expected output: [1, 2, 0, 0]

  // fill with 5 from position 1
  console.log(array1.fill(5, 1));
  // expected output: [1, 5, 5, 5]

  function myFill(array, value, start, end) {
    // returns the modified array
  }

  // console.log(myFill(array1, 100, 1));
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

  const result = words.filter(word => word.length > 6);

  console.log(result);
  // expected output: Array ["exuberant", "destruction", "present"]

  function myFilter(array, predicate) {
    // returns a new array
  }

  // console.log(
  //   myFilter(
  //     [1, 2, 43287, 11, 53, 7, 12, 421, 81432],
  //     number => number % 2 === 0
  //   )
  // );
};

/**
 * Find
 * https://devdocs.io/javascript/global_objects/array/find
 */
function findExample() {
  console.log("Array find example");

  const array1 = [5, 12, 8, 130, 44];

  const found = array1.find(element => element > 10);

  console.log("Native find function found: ", found);
  // expected output: 12

  function myFind(array, predicate) {
    // return array.find(predicate);
    // returns The value of the first element in the array
    // that satisfies the provided testing function;
    // otherwise, undefined is returned.
  }

  const result = myFind(
    [
      { age: 12, name: "Maria" },
      { age: 34, name: "John" },
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
  forStatement();

  // fillExample();

  // filterExample();

  // findExample();

  // mapExample();

  // reduceExample();
}

main();
