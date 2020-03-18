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

function main() {
  forStatement();

  // fillExample();

  // filterExample();
}

main();
