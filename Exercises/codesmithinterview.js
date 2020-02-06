// Declare a variable 'number' and set it to the value 10.

let number = 10;

/* Create a function 'addNumbers' that takes a number as an argument. 'addNumbers' should add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10. */

function addNumbers(number){
  let sum = 0;
     
   for(let i=1; i<=number; i++){
     sum+=i;
   }
   return sum;
}

// Check that your 'addNumbers' function is working correctly by passing your variable 'number' to the 'addNumbers' function

// console.log(addNumbers(4));

/* Create a function "between50And500" that takes a number as an argument. "between50And500" should return a true if the number passed to it is between 50 and 500 exclusive. For example, if the input is 45 then your function should return false and if the input is 472 it should return true. */

function between50And500(number){
  if(number >=45 && number<=600){
    return true;
    } else 
      return false;
}
// console.log(between50And500(600));

/* Create a function "divBy100" that takes a number as an argument. "divBy100" should return a true if the number passed to it is divisible by 100. For example, if the input is 120 then your function should return false and if the input is 600 it should return true. */

function divBy100(number){
  if(number % 100===0){
     return true;
     } else 
       return false;
}
// console.log(divBy100(600));

/* Create a function "negativeOrEven" that takes a number as an argument. "negativeOrEven" should return a true if the number passed to it is a negative number OR it is an even number. For example, if the input is 7 then your function should return false and if the input is -3 it should return true. */

function negativeOrEven(number){
  if(number<0 || number%2==0){
    return true;
  } else
    return false;
}
console.log(negativeOrEven(7));





