//declaration of num
const score = 400
console.log(score);

//declare num as obj
const balance = new Number(100)
console.log(balance);   //op as obj

//converting to string
console.log(balance.toString().length);

//precision value 
console.log(balance.toFixed(2));//1=>100.0,  2=> 100.00

const roundingNumber = 123.8989
//roundup
console.log(roundingNumber.toPrecision(2));
//for rounding it focus only as respected give number
//4 => 123.9 it focus only on starting 4 nums
//3 => 124  it focus only on starting 3 nums
//2 => 1.2e+2


//toLocalString (visualzation of zeros)
const hundred = 100000 //we cant count the zeros sepcifically 
console.log(hundred.toLocaleString());//by default U.S standards
console.log(hundred.toLocaleString('en-IN'));// indian standards



//++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++//


console.log(Math);  //by default obj

console.log(Math.abs(-4));//absoulte value neg -> pos
console.log(Math.round(4.4));//rouding
console.log(Math.ceil(4.2)); //round up i.e 5
console.log(Math.floor(4.9)); //round down i.e 4 only
console.log(Math.min(4,5,2,19));//min value
console.log(Math.max(4,3,5,19));//max value


//RANDOM
console.log(Math.random());// 0 or 1 
console.log(Math.random()*10);//shifted the decimal to get 1-9 
console.log((Math.random()*10)+1);// to prevent this case i.e 0.04, 0.05 it increases the getting 0 possibilies more +1 prevent this
console.log(Math.floor((Math.random()*10)+1));//round fig


//to get the random number from specific range 
const min = 10
const max = 20

// V. imp
console.log(Math.floor((Math.random()*(max-min+1))+min));