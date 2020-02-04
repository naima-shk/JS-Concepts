//constructor
function Book (title, author,year){
    this.title=title;
    this.author=author;
    this.year=year;
    this. getSummary = function(){
        return `${this.title} was written by  ${this.author} in ${this.year}`;
    }
};

//instatiate an object
const Book1= new Book (' book one ', 'John doe','2013');
const Book2= new Book (' book two ', 'John doe','2018');

console.log(Book2);