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

//trim
const trimString = "    Aditya.     "
console.log(trimString.trim());//removes extra spaces from front and back

//replace
const url = "https://aditya%20pandey.com"//%20 means space
console.log(url.replace("%20","_"));

//include(in)
console.log(url.includes("aditya"));//true its there in the url
console.log(url.includes("hero"));//false its not there in the url

//spilt
const spiltVar = "Aditya-Pandey-From-Mumbai"
console.log(spiltVar.split("-"));//split the string into array on "-" based
// OP: [ 'Aditya', 'Pandey', 'From', 'Mumbai' ]