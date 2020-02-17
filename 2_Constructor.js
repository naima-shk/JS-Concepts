//constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.getSummary = function() {
    return `${this.title} was written by  ${this.author} in ${this.year}`;
  };
}

//instatiate an object
const Book1 = new Book(" book one ", "John doe", "2013");
const Book2 = new Book(" book two ", "John doe", "2018");

//console.log(Book2);
//console.log(Book2.getSummary());

{
  /* 
    JS object Constructor
  */
}
// Constructor function for Person objects
function girl(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

// Create a Person object
let mysister = new girl("John", "Doe", 45, "brown");

// Display age
document.getElementById("demo").innerHTML =
  "My sister  is " + mysister.age + "Her eyes are" + mysister.eyeColor + ".";
