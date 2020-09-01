---
title: "Javascript Basics"
date: 2020-09-01T22:05:10+05:30
draft: false
description: " What is Javscript | Practical implementation of Javascript "
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

## Logging to Console
{{<highlight javascript>}}
console.log("Hello World");
console.error("Yellow");
console.warn("Warning Mssg");
//Gives time taken between execution
console.time("note time");
    console.log("heck yea");
    console.log("heck yea");
    console.log("heck yea");
    console.log("heck yea");
    console.log("heck yea");
console.timeEnd("note time");
{{</highlight>}}


## Variables and Constants
`var` and `let`(newer way) keyword are used to initialize varibales.
`const` keyword is used to assign constant. Constants cant be changed.
{{<highlight javascript>}}
//Initializing variables
var name = "arjit";
let age = 18;

//Constants
const a = 10;
a = 20; //Cannot do ,Error

//Cannot change object, but can change property of objects
const person = {
    name: "John",
    age: 20
}
person.name = "Arjit"; //Possible

//Not Possbile reassigning const object
person = {
    name: "XYZ",
    age:45
}
{{</highlight>}}


## Data Types
JS is a dynamically typed language.
`typeof` keyword is used to know data type of variable.

### Primitive Data Types
{{<highlight javascript>}}
String : const name = "John Doe";
Number : const age = 18;
Boolean : const isValid = true;
Null : const a = null;
//typeof null gives object,a bug in language
Undefined : let test;
Symbols : const sym = Symbol();    
{{</highlight>}}

### Referrence Data Types
{{<highlight javascript>}}
Arrays : const names = ['Arjit','Adam']
Object Literals : const person = { name:"Arjit", age:19}
Functions : function myFunc(){}
Dates : const today = new Date(); 
{{</highlight>}}

## Type Conversion
{{<highlight javascript>}}
let a;
//Number to String:
a = String(89);
a = (90).toString();

//Date to String
a = String(new Date());

//String to Number
a = Number('5');
a = Number("Hello");//NaN = Not a Number
a = parseInt('100.30');//100
a = parseFloat('100.30');
//toFixed specifies decimal places
console.log(a.toFixed(2));//100.30 
{{</highlight>}}

## Functions
<mark>function</mark> Keyword is used to create a function.
`Function Exprn(Line 6):` We can deal with function as a value. Assign it to variables.
`Callback Funtion(Line 11):` We can pass function as argument and can call back later if needed.

{{<highlight javascript>}}
function name(p1, p2, p3) {
    //Code
}

//Function Expression
let yo = function(){
    //Code
};

//Callback Functions
function yes(){ alert("Yes"); }
function no(){ alert("No"); }

function ask(question,yes,no){
    //func yes() and no() will be passed in parameter
    if(confirm(ques))
        yes();
    else
        no();
}

ask("Do you agree Sire?",yes,no);
{{</highlight>}}

## Strings
{{<highlight javascript>}}
let a = "10";//double quotes 
let b = '10';//single quotes
let name = new String("Arjit Sharma");//Strings can be objects 

//Finding Length
let len = name.length;

//Finding position of substring in a String 
let pos1 = name.indexOf("Sharma");//1st occurence
let posLast = name.lastIndexOf("a");//last occurence of 'a' 

//Slicing
let str = "Arjit Sharma is my name.";
let name = str.slice(0,5);//1st parameter inclusive,2nd exclusive

//Replacing
let name = str.replace("Arjit","Astitva");

//To uppercase 
let text1 = "Hello World!";     
let text2 = text1.toUpperCase();

//Accessing characthers in a string
str.charAt(0);
str.cahrCodeAt(0);//returns unicode charachter at specified position
str[0];

//Converting String to Arrays
str.split(" ");//Splits string on basis of whitespace
let text = "HELLO";
text.split("");// Splits in Charachters
{{</highlight>}}


## Arrays

{{<highlight javascript>}}
let names = [
  "Arjit",
  "Ananay",
  "Samay"
];

let names = new Array("Arjit", "Ananay", "Samay");

//Length of Array            
let x = names.length; 

//Sorting Array
let y = names.sort();

//Looping Array using forEach method
names.forEach(function (val,index){
    console.log(index,val);
});

//Adding and Removing Element
names.push("Monty");//Adds to last position
names.pop();//Removes last element

names.shift();//Removes 1st element
names.unshift("NewItem");//Adds to 1st position and shifts rest

//Arrays to Strings
names.toString();//Arjit,Anany,Samay,Monty
names.join(" # ");//Arjit#Ananay#Samay#Monty
{{</highlight>}}
