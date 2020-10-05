---
title: "Javascript-ES6"
date: 2020-09-01T22:05:10+05:30
draft: false
description: "Classes in Javacript | Object Oriented JS | ES6 | Inheritance | Arrow Function"
draft: false
author: Arjit Sharma
authorEmoji: 🤖
pinned: false
image: images/whoami/avatar.jpg
tags:
- Web-Development
- Javascript
series:
- 
categories:
- 
---

## Making a Class in ES6

{{ <highlight javascript>}}
class Person{
constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

greeting(){
    return `Hello there ${this.firstName} ${this.lastName}`;
}

//Using Static methods
static walk(){
    return 'Person is Walking';
	}    
}

const arjit = new Person('Arjit','Sharma');

console.log(Person.walk());
{{ </highlight> }}


## Inheritance in ES6

{{ <highlight javascript>}}
class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
}

class Customer extends Person{
    constructor(firstName, lastName, phone, membership){
        super(firstName,lastName);
        this.phone = phone;
        this.membership = membership;
    }
}

const John = new Customer('John','Doe','970259022','Premium');

console.log(john.greeting());
{{ </highlight> }}


## Arrow Functions

{{ <highlight javascript>}}
// const sayHello = function(){
//     console.log('Hello');
// }

const sayHello = () => console.log('Hello');

//To return a string no need to use return keyword.One Line Returns
const sayHello =() => 'Hello';
console.log(sayHello());

//To return object literal wrap object in parenthesis,so that it doesnt consider it as function body
const sayHello = () => ({msg: 'Hello'});
console.log(sayHello());

//Single parameters passed in function dont need parenthesis
const sayHello = (name) => console.log(`Hello ${name}`);
const sayHello = name => console.log(`Hello ${name}`);

//1 or more parenthesis
const sayHello = (Fname,Lname) => console.log(`Hello ${Fname} ${Lname}`);


//Finding length of names in array using arrow func
const users = ['Nathan','John','Williams'];
//const nameLen = users.map(function(name){
//    return name.length;
//})
const nameLen = users.map(name =>name.length);
{{ </highlight> }}


## Object.Create
`Object.create()` methord is used to create a new object with the specified prototype object and properties



{{<highlight javascript>}}
const personPrototype = {
    greeting: function(){
        return `Hello ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function(newLastName){
        this.lastName = newLastName;
    }
}

const mary = Object.create(personPrototype);
mary.firstName ='Mary';
mary.lastName = 'Poppins';
mary.age = 26;

mary.getsMarried('Marzzi');
console.log(mary.greeting);

const arjit = Object.create(personPrototype,{
    firstName: {value: 'Arjit'},
    lastName : {value: 'Sharma'},
    age: {value: 19}
});

console.log(arjit.greeting);
{{</highlight>}}