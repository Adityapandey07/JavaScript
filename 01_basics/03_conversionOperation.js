let score = 33
console.log(typeof score);
console.log(typeof (score));

//example 2
let againScore = "33"
console.log(typeof(againScore));
//converting
let valueInNumber = Number (againScore)//conversion done in first letter caps of that datatype

console.log(typeof valueInNumber);//successfull converstion i.e 33 as number

//example 3
let score_2 = "33abc"
console.log(typeof(score_2));
let scoreInNumber = Number(score_2)
console.log(typeof(scoreInNumber))//incorrect way of conversion false cz op is NaN (not a number)
console.log(scoreInNumber);
// "33" => 33
// "33abc" => NaN, Type will remain as number
// true => 1; false =>


//example 4
let x = 1
let boolX = Boolean(x)
console.log(typeof(boolX))

let y = ""
let booly = Boolean(y)
console.log(typeof(booly))