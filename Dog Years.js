/*
Create a variable named myAge, and set it equal to your age as a number.*/
let myAge = 22;
/*Since we already accounted for the first two years, take the myAge variable, and subtract 2 from it.
Set the result equal to a variable called laterYears. We’ll be changing this value later*/
let laterYears = myAge - 2;
console.log(laterYears);
/* Multiply the laterYears variable by 4 to calculate the number of dog years accounted for by your later years. Use the multiplication assignment operator to multiply and assign in one step.*/
laterYears *= 4;
/*
Create a variable named earlyYears and save the value 2 to it. Note, the value saved to this variable will change.
 */
let earlyYears = 2;
earlyYears *= 10.5;
console.log(earlyYears);
/* Add earlyYears and laterYears together, and store that in a variable named myAgeInDogYears.*/
let myAgeInDogYears = earlyYears + laterYears;

/*calling my name as string and use  built in method to return name in lower case */
let myName = "naima shaikh".toLowerCase();
console.log(
  `My name is ${myName}. I am ${myAge} years old in  human years which is ${myAgeInDogYears} years old in dog years.`
);
