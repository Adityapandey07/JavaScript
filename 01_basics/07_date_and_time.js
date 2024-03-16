//RN time
const myDate = new Date()

console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(myDate.toString());

//Fixed Time by user
const definedTime = new Date(2023, 0, 23)//0 => Jan, 1 => Feb...
console.log(definedTime.toDateString());

const againDefinedTime = new Date(2023, 0, 23, 5,34)//5 hr, 34 mint
console.log(againDefinedTime.toString());

//specific formate
//YYYY/MM/DD
const formatedTime = new Date('2024-01-22') // 1 => Jan, 2 => Feb...
console.log(formatedTime.toDateString());

//MM/DD/YYYY
const againFormatedTime = new Date('06-11-2003')// 1 => Jan, 2 => Feb...
console.log(againFormatedTime.toDateString());

//timestamp
let timestamp = Date.now()
console.log(timestamp);//op is in millisecond

//to get the time from date
console.log(againFormatedTime.getTime());

//to get in second
console.log(Date.now()/1000);

//removing the decimal part use floor
console.log(Math.floor(Date.now()/1000));


//other methods
const newDate = new Date()
console.log(newDate.getMonth()+1);//starts from 0 so always + 1
console.log(newDate.getDay());
console.log(newDate.getDate());

//more customaized op
console.log(newDate.toLocaleString('default',{
    weekday:"long"
}));//first param is standards 

