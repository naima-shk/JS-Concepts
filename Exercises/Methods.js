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
