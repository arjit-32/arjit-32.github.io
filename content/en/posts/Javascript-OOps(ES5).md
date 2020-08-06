---
title: "Object Oriented JS(in ES5)"
date: 2020-08-06T22:05:10+05:30
draft: false
description: "Object Oriented Javacript | ES5 | Prototypes "
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
- Web-Development
---

## Making a Class

{{<highlight javascript>}}
function Person(name, age){
this.name = name;
this.age = age;

this.canVote = function(){
if (age>18) 
return true 
else
return false; 
}
}

const arjit = new Person ('Arjit',12);
{{/highlight}}


## Prototypes

{{<highlight javascript>}}
//Object.prototype
//Person.prototype


function Person(name, age){
    this.name = name;
    this.age = age;
}
//Because canVote is Common , move it to protoype
Person.prototype.canVote = function(){
        if (age>18) 
            return true 
        else
            return false; 
    }
//Protoype function to change age
Person.prototype.changeAge = function(age){
        this.age = age; 
    }



const john = new Person('John',10);
console.log(john.canVote());//returns false

john.changeAge(19);
console.log(john.canVote());//returns true

//Using Object Property
console.log(john.hasOwnProperty('name'));//true
console.log(john.hasOwnProperty('canVote'));//false
{{/highlight}}


## Inheritance in ES5

{{<highlight javascript>}}
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.greeting = function(){
    return `Hello ${this.firstName} ${this.lastName}`;
}


//Customer Constructor
function Customer(firstName, lastName, phone , membership){
    Person.call(this,firstName,lastName);

    this.phone = phone;
    this.membership = membership;
}

//Inherit Person protoype methods
Customer.protoype = Object.create(Person.prototype);
Customer.protoype.constructor = Customer;



const customer1 = new Customer('Tanmay','Bisht','9056202014','Premium');

//Overriding greeting prototype method of Person
Customer.prototype.greeting = function(){
    return `Hello customer ${firstName} ${lastName} Welcome to company `
}
{{/highlight}}



## Object.Create
Object.create() methord is used to create a new object with the specified prototype object and properties

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
{{/highlight}}
