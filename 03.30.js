// Implementing common array functions

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

  function myMap(array, myFancyFunction) {
    // returns A new array with each element being the result of the callback function.

    // return array.map(callback)
    var result = []

    for (let index = 0; index < array.length; index++) {
        console.log(array[index])
        //  apply the operation to each element

        const newValue =  myFancyFunction(array[index])
        console.log('new value', newValue)

        // store that new value in the result array
        // result.push(newValue)

        result[index] = newValue  // the same as result.push() for this example
    }

    return result
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
  const reducer = (accumulator, currentValue, index) => {
    console.log('current step is: ', index)
    console.log('acc', accumulator)
    console.log('currentValue', currentValue)
    const r  = accumulator + currentValue
    console.log('partial value is: ', r)
    console.log('-------')
    return r}
    ;

  // 1 + 2 + 3 + 4
  // console.log(array1.reduce(reducer, 0));
  // expected output: 10

  // 5 + 1 + 2 + 3 + 4
  // console.log(array1.reduce(reducer, 5));
  // expected output: 15

  function myReduce(array, callback, initialValue) {
    // callbacks receives 2 parameters:
    // - accumulator
    // - currentValue
    // returns The value that results from the reduction.

    let accumulator = initialValue;
    console.log('initialValue', initialValue)

    for (let index = 0; index < array.length; index++) {
      const element = array[index];

      //  how to apply the callback to each element
      // const result  = callback(accumulator, element)
      // accumulator = result
      accumulator = callback(accumulator, element)
      console.log('+ ', accumulator)
      
    }
    // what do we need to return?

    return accumulator;

  }

  const totalSum = myReduce(
    [1, 2, 3, 4, 5],
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  console.log("Total sum is: ", totalSum);
}

function playWithJson(){

  var myStorage = {
    "car": {
      "inside": {
        "glove box": { light: 'red'},
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      },
      doors: [{color: 'blue'}, {color: 'yellow', age: 10}]
    }
  };

  console.log(myStorage);

  console.log(myStorage['car'].inside['glove box'].light)

  console.log('show me the doors', myStorage.car.doors[0].color)

  console.log('show me the second door age', myStorage.car.doors[1].age)

  const newVariable = 23;

  // left expresion -> variable name
  // right expresion -> variable value

  myStorage.outside = {}    // here we are adding a property called 'outside'
  // if the property does not exist it is created
  // if the property exist the value changes

  myStorage.car.doors[1].color = 'black'  // changing the property of an existing object

  console.log('---------')

  console.log(myStorage)

  console.log(myStorage.car.doors[1].color)

  // We can use dot notation

  // We can brackets.

  // they are the same, except when the name contains spaces

  // YOu can access using the bracket notation, and a position/index for the element that you need
  // Starts with 0 as the first element
}

function main() {

  // playWithJson()

  // mapExample();

  reduceExample();
}

main();
