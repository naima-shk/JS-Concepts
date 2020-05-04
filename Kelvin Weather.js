/*create a variable named kelvin, and set it equal to 293.
The value saved to kelvin will stay constant. Choose the variable type with this in mind. */
const kelvin = 293;

/* Let’s convert Kelvin to Celsius by subtracting 273 from the kelvin variable. Store the result in another variable, named celsius.*/
const Celsius = kelvin - 273;

/*Use this equation to calculate Fahrenheit, then store the answer in a variable named fahrenheit.

Fahrenheit = Celsius * (9/5) + 32 */
let fahrenheit = Celsius * (9 / 5) + 32;
/* 
When you convert from Celsius to Fahrenheit, you often get a decimal number.

Use the .floor() method from the built-in Math object to round down the Fahrenheit temperature. Save the result to the fahrenheit variable.*/
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`);

/*Extra practice
 Convert celsius to the Newton scale using the equation below
 */
//Convert to newton
let Newton = Celsius * (33 / 100);
//Round down
Newton = Math.floor(Newton);
//interpolation
console.log(`The temperature is ${Newton} degrees Newton`);
