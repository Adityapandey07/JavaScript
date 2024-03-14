//primitives

// All are call by value (when called copy of data will be given not their reference value)
//7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt 

//Non-primitivies (call by reference)
//Array, Object, Functions

const score = 100;//number
const scoreValue = 100.3//number

const isLoggedin = false //boolean
const outsideTemp = null//null
let uderEmail;//undefined

const id = Symbol('123') //despite of having same number for both i.e 123 their op will different to maintain the uniquness, return val will differ
const anotherId = Symbol('123')

console.log(id == anotherId);
console.log(id);
console.log(anotherId);

const bigNumber = 3456543576654356754n // here n means BigInt

//Non-primitivies (call by reference)
//Array, Object, Functions

console.log("Non primitives below");

const Heroes = ["Shaktimaan", "Doga", "Naagraj"];

let myDetails = {
    myname : "Aditya",
    Age : 21,
}

let myFunction = function(){
    console.log("Hello World");
}

console.log(typeof Heroes);
console.log(typeof myDetails);
console.log(typeof myFunction);//obj function

