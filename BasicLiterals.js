import { object } from "prop-types";

const s= 'Hello';
console.log(s.toUpperCase());
{/* i can take 's' as a string and used 'to uppercase' javascript method 
's.toUpperCase'  seems like a object with a method .  
*/}

const s1='Hello';
console.log(typeof s1);
//It will return string

const s2= new string ('hi');
console.log(typeof s2);
//it will return object 

//object Literals
const Book1={
    title:'My book',
    author:'John doe',
    year: '2013',
    getSummary: function(){
        return `${this.title} was written by  ${this.author} in ${this.year}`;
    }
};
const Book2={
    title:'My book',
    author:'John doe',
    year: '2016',
    getSummary: function(){
        return `${this.title} was written by  ${this.author} in ${this.year}`;
    }
};

console.log(Book2.getSummary());
console.log(object.values(Book2));
console.log(object.keys(Book2));

