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
 Objects are reference types so you can’t just use === or == to compare 2 objects. One quick way to compare if 2 objects have the same key value, is using JSON.stringify. Another way is using Lodash isEqual function
 https://www.samanthaming.com/tidbits/33-how-to-compare-2-objects/ 
 I have found the proper answer of my question through this link . 
*/
}

//QUESTION 4
{
  /*
  4) As [] is true, [] == true should also be true. right?
   You are right about first part, [], empty array is an object and object is always truthy. Hence, if you use if([]){console.log('its true')} you will see the log.
However, special case about == (double equal) is that it will do some implicit coercion.
Since left and right side of the equality are two different types, JavaScript can't compare them directly . Hence, under the hood, JavaScript will convert them to compare. first right side of the equality will be cooereced to a number and number of true would be 1.
After that, JavaScript implementation will try to convert [] by usingtoPrimitive (of JavaScript implementation). since [].valueOf is not primitive will use toString and will get ""
Now you are comparing "" == 1 and still left and right is not same type. Hence left side will be converted again to a number and empty string will be 0.
Finally, they are of same type, you are comparing 0 === 1 which will be false.
 */
}

//QUESTION 5
{
  /*
 5) How could you write a method on instance of a date which will give you next day?
      var myDate = new Date('Febrauary 20, 2020 07:30:00');
     myDate.nextDay = function(){
  var day = this.getDate();
  return day + 1;
};
myDate.nextDayName = function (){
  var day = this.getDay();
  day++;
  
  switch (day){
    case 0:
      return 'Sunday';
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';
  }
};
 */
}

//QUESTION 6
{
  /*
  6)  If you want to use an arbitrary object as value of this, how will you do that?
 

 http://adripofjavascript.com/blog/drips/arbitrary-parameters-with-the-arguments-object.html
  http://www.thatjsdude.com/interview/js2.html#bindthis
  THis link provides complete detail of the given query.
*/
}

//QUESTION 7
{
  /*
  7)Write a simple function to tell whether 2 is passed as parameter or not?
  */
  function myFunction(x) {
    if (x == 2) {
      return x;
    }
  }
  document.getElementById("demo").innerHTML = myFunction(2);
}

//QUESTION 8
{
  /*
 8) How could you use Math.max to find the max value in an array?
 */
  let array = [100, 0, 50];
  array.max();
}

//QUESTION 9
{
  /*
  9)What the heck is this in JavaScript?
  https://medium.com/@ma7moudfelfel/what-the-heck-is-this-understanding-this-in-javascript-b9021a2f11c
 */
}

//QUESTION 10
{
  /* 
10)21 quick questions that will trick you.
*/
}

//QUESTION 11
{
  /* 11)How could you set a prefix before everything you log? for example, if you log('my message') it will log: "(app) my message"
   */
  function log() {
    var args = Array.prototype.slice.call(arguments);
    args.unshift("(app)");
    console.log.apply(console, args);
  }

  log("my message"); //(app) my message
  log("my message", "your message"); //(app) my message your message
  //Just get the arguments, convert it to an array and unshift whatever prefix you want to set. Finally, use apply to pass all the arguments to console.
}

//QUESTION 12
{
  /*
  12)What will you see in the console for the following example
 */
  var a = 1;
  function b() {
    a = 10;
    return;
    function a() {}
  }
  b();
  console.log(a);
  {
    /*Explanation:
function declaration function a(){} is hoisted first and it behaves like var a = function () {};. Hence in local scope variable a is created.
If you have two variables with same name (one in global another in local), local variable always get precedence over global variable.
When you set a = 10;, you are setting the local variable a , not the global one. Hence, the value of global variable remain same and you get, 1 in the log. ref: js hoisting/scope
Extra: If you didnt have a function named as "a", you will see 10 in the log. */
  }
}
