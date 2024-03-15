const name = "Aditya"
const lastName = "Pandey"

//old way to concanitate
console.log(name + lastName + " Very good");

//new way
console.log(`${name}${lastName} Very good`);

//declaration of string using object
const againName = new String("Aditya")
console.log(againName);

//string has many properties/methods
console.log(name.toUpperCase());
console.log(name.length);
console.log(name.indexOf('t'));
console.log(name.charAt(4));

//slicing 
//this method cant handle the negative slicing
const newString = name.substring(0, 4)
console.log(newString);

//anthor method that handle negative slicing too
const againNewString = name.slice(0,4)
console.log(againNewString);

//negative slicing example
const negativeSlicing = name.slice(-4,5)
console.log(negativeSlicing);


