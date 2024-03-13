//Example 1
console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2<=1);
console.log(2==1);
console.log(2!=1);

//Example 2
console.log("2">1);//comparison operator autmatically converts "2" into number data type
console.log(2<"1");//same

//Example 3
console.log(null > 0);//comparison operator autmatically converts "null" into 0 data type
console.log(null == 0);//no comparison operator then no conversion
console.log(null >= 0);


//w.r.t undefined op will alway false
console. log(undefined == 0);
console. log(undefined > 0);
console. log(undefined < 0);


//===
console.log("2" == 2);//op True cz it convert the "2" into num
console.log("2" === 2); //op False check the data type too


