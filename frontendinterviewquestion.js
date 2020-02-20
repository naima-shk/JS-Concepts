{
  /*Basic and tricky questions 
1) What are the differences between null and undefined?
Answer : Null means an empty or non-existent value. Null is assigned, and explicitly means nothing.
 */
}
//Null
var test1 = null;
console.log(test1);

//null is also an object. Interestingly, this was actually an error in the original JavaScript implementation:
console.log(typeof test1);
// object

{
  /* 
UNdefined means a variable has been declared, but the value of that variable has not yet been defined.
*/
}
var test2;
console.log(test2);
// undefined
{
  /* Summary 
   Here are the quick facts:
    null is an assigned value. It means nothing.
    undefined means a variable has been declared but not defined yet.
    null is an object. undefined is of type undefined.
    null !== undefined but null == undefined.
*/
}

//END  OF QUESTION 1//

//QUESTION #2

{
  /* 
 2) What are the differences between == and ===?
 Answer: == is used for comparison between two variables irrespective of the datatype of variable.
=== is used for comparision between two variables but this will check strict type, which means it will check datatype and compare two values.
*/
}

//QUESTION #3

{
  /* 
 3) How would you compare two objects in JavaScript?
ANSWER: Works when you have simple JSON-style objects without methods and DOM nodes inside:
 JSON.stringify(obj1) === JSON.stringify(obj2)
 


*/
}
