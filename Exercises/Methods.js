// Use .toUpperCase() to log 'Codecademy' in all uppercase letters
console.log('Codecademy' .toUpperCase());

// Use a string method to log the following string without whitespace at the beginning and end of it.
console.log('    Remove whitespace   ' .trim());

{/*<!DOCTYPE html>
<html>
<body>

<h2>The JavaScript <i>this</i> Keyword</h2>

<p>In this example, <b>this</b> represents the <b>person</b> object.</p>
<p>Because the person object "owns" the fullName method.</p>

<p id="demo"></p>
<p id="vice"></p>
*/}

<script>
// Create an object:
let  person = {
  firstName: "John",
  lastName : "Doe",
  id     : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
 };
 let girl = {
  firstName: "Alizay",
  lastName : "smith",
  id     : 5567,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
 };

// Display data from the object:
document.getElementById("demo").innerHTML = person.fullName();
document.getElementById("vice").innerHTML = girl.fullName();
</script>

//</body>
//</html>

{/*
  JavaScript Object Accessors (Getters and Setters)
  This example uses a lang property to get the value of the language property
 */}
 // Create an object:
var person = {
    firstName: "John",
    lastName : "Doe",
    language : "en",
    get lang() {
      return this.language;
    }
  };
  
  // Display data from the object using a getter:
  document.getElementById("demo").innerHTML = person.lang;

  {/*
    This example uses a lang property to 'set' the value of the language property
 */}
 var person = {
    firstName: "John",
    lastName : "Doe",
    language : "",
    set lang(lang) {
      this.language = lang;
    }
  };
  
  // Set an object property using a setter:
  person.lang = "en";
  
  // Display data from the object:
  document.getElementById("demo").innerHTML = person.language;
 {/*
Object.define property 
The Object.defineProperty() method can also be used to add Getters and Setters:
*/}
// Define an object
let obj = {counter : 0};

// Define Setters and Getters
Object.defineProperty(obj, "reset", {
  get : function () {this.counter = 0;}
});
Object.defineProperty(obj, "increment", {
  get : function () {this.counter++;}
});
Object.defineProperty(obj, "decrement", {
  get : function () {this.counter--;}
});

Object.defineProperty(obj, "add", {
  set : function (value) {this.counter += value;}
});
Object.defineProperty(obj, "subtract", {
  set : function (value) {this.counter -= value;}
});

// Play with counter:
obj.reset;
obj.add = 5;
obj.subtract = 3;
obj.increment;
obj.decrement;
document.getElementById("demo").innerHTML = obj.counter;
  