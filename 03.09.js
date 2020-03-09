var myName = 1;          // Nowadays is not used that much, but still valid syntax

// const ... vs let

const message = "Hello world";

let ok = 'Change me';

// message = 'another' // Error here.... We can not re-assign a variable declared with const

ok = 'new message' // This is ok, because we use let

const anObject = { hello: 'world'};

console.log(anObject.hello)

// The variable anObject can not be re-assigned, because it was declared using const
// but we can change the its properties.
// Using const in an Object does NOT affects the object properties. They can be changed

anObject.hello = 'holaaaa' // This is valid

// Uncomment below to see error
// anObject = { someKey: 'someValue'}  // This is NOT valid. It'll get a TypeError from JS

console.log(anObject.hello)


function hello() {
     var myVariable = 1;
     console.log('inside hello', myVariable)
    // myVariable is only accesible from within the function hello
     return myVariable;

    // We can get the value stored in myVariable, outside the function, if we return it
 }

 const result = hello()

console.log('result is: ', result)

// We don't to always return from a function
// If we don't  encounter a return statement then the return value of the function is `undefined`



function sayHi(name) {

    console.log('hello ' + name)
    
    if (name.length % 2 == 0)
    {
        // won't be executed if 'name' === 'peter'
        return name + name;
    }
    
}

const greet = sayHi('Pete')

const greetAgain = sayHi('Peter')


console.log({ greet, greetAgain} )


const obj = {greet: greet, greetAgain: greetAgain} 
// equivalent to 
const obj1 = { greet, greetAgain }


// Declaring an variable called info, which is an object with 1 key/property
// name is the field/property/key
const info = { name: greet, lastName: 'always the same' }

console.log('From my info, my name is: ', info.name)

console.log('also acccess the value of a key using another syntax', info['name'], info.lastName)




// List vs Array. 
// In JS we have arrays, but they are called List in many cases. 
// For the majority of situations we can use the 2 terms interchangeably

const list = []

const another = [1, 2, "hello", {}]

console.log('element :', list[0])


console.log('element :', another[1])

// Access the last element of the array
 console.log(another[another.length - 1 ])



another.push(' new string')

console.log(another)




