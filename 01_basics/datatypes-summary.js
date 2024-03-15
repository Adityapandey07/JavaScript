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

let myFunction = function(){    //variable style declaration
    console.log("Hello World");
}

console.log(typeof Heroes);
console.log(typeof myDetails);
console.log(typeof myFunction);//obj function



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//Memroies 2 Types
//1. Stack(Primitives types(call by value))  2. Heap(Non primitive(call by reference))

//Stack Mem
let userName = "Aditya Pandey"
let userName2 = userName
console.log(userName2)
//now change the userName2 and see if it affects the userName
userName2 = "Only Aditya"
console.log(userName2);
//it got changed now letsee if it affects the first i.e userName variable
console.log(userName);//OP no affect


//Heap
let userOne = {
    email: "aditya@gmail.com",
    petName: "adi",
}

let anotherUser = userOne
console.log(anotherUser.email);//op: aditya@gmail.com

//now change the second var email to see if it affects the first one too
anotherUser.email = "adityapandey@gmail.com"

//second var op: adityapandey@gmail.com
console.log(anotherUser.email);
//first var op: adityapandey@gmail.com
console.log(userOne.email);
//it got changed at both var cz of pass by reference properiteis

