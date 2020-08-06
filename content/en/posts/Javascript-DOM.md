---
title: "Javascript DOM Manipulation"
date: 2020-08-06T22:05:10+05:30
draft: false
description: " What is Document Object Model in Javascript | How to manipulate content on the website "
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

## Introduction

{{<highlight javascript>}}
val = document;
val = document.all;
val = document.all[2];
val = document.all.length;//counts all elements in dom
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms;//Return all forms in a document
val = document.forms[0];//1st form 
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;//Returns all links
val = document.links[0];

val = document.images;

val = document.scripts;
{{</highlight>}}

## Selecting Elements on the page
<mark>getElementById</mark> ,  <mark>getElementByClassName</mark> , <mark>getElementByTag</mark> are used to select elements from the DOM.

{{<highlight javascript>}}
document.getElementById("task-title");
//Gives class Name of element with id = task-title
document.getElementById("task-title").className;
//Can also store in a variable
const tasktitle = document.getElementById("task-title");

const items = document.getElementsByClassName("collection-item");
items[0].style.color = "red";

const li = document.getElementsByTagName("li");
console.log(li[0]);
{{</highlight>}}


## Query Selector
It is a general function to select class, id or tag.

{{<highlight javascript>}}
document.querySelector("#task-title");//Gets id 
document.querySelector(".card-title");//Gets class
document.querySelector("h3");//Gets 1st h3 in doc
//Gets all list items in ul
document.querySelector("ul li").style.color = "blue";

//Get all ul with class name "collection-item"
const listItems = document.querySelector("ul").getElementsByClassName("collection-item");

//querySelectorAll
const item = document.querySelectorAll('ul.collection li.collection-item');
//ul with class of collection and li in ul with class of collection-item selected
{{</highlight>}}


## Converting HTML collection to Array

{{<highlight javascript>}}
let li = document.getElementByTagName("li");
li = Array.from(li);
li.reverse();//Works
li.forEach(function(li){
    console.log(li);
});
{{</highlight>}}


## Changing Styles

{{<highlight javascript>}}
document.getElementById("task-title").style.background = "#333";
document.getElementById("task-title").style.color = "#fff";
document.getElementById("task-title").style.dispaly = "none";
{{</highlight>}}


## Changing Content

{{<highlight javascript>}}
document.getElementById("task-title").textContent = "New text";
document.getElementById("task-title").innerText = "My Tasks";
document.getElementById("task-title").innerHTML = "<span>Hello";
{{</highlight>}}


## Classes and Attributes

{{<highlight javascript>}}
const firstLi = document.querySelector("li:first-child");
const link = firstLi.children[0];

let x;
x = link.className;//Classes in string format 

x = link.classList;//Array of classes
x = link.classList[0];

link.classList.add("test");
link.classList.remove("test");


x = link.hasAttribute("href");
x = link.getAttribute("href");
x = link.setAttribute("href","http://google.com");
link.removeAttribute("href");
{{</highlight>}}


## Traversing the DOM

{{<highlight javascript>}}
let x;
const list = document.querySelector("ul.collection");
const listItem = document.querySelector("li.collection-item:first-child");

//Getting Child Node

x = list.childNode;//Returns Node list .We get children of ul(Also include Text nodes)
x = list.children;//Returns Html collection .We get children of ul(without text nodes)

x = list.childNode[0].nodeName;
x = list.childNode[3].nodeType;

//Node Type : 
// 1 - Element
// 2 - Attribute
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

//Getting 1st child
x = list.firstChild;//All node types included
x = list.fistElementChild;//Only 1st html element returned

//Getting Last Child
x = list.lastChild;
x = list.lastElementChild;

//Counting total child elements
x = list.childElementCount;

//Getting children of children
x = list.children[3].children;//returns li in ul then returns a tag in that li
x = list.children[3].children[0].id="test-link";//Return a tag with id of test-link in li of ul

//Getting parent Node
x = listItem.parentNode;//All node type
x = listItem.parentElement;//Only html element

//Parent of parent
x = listItem.parentElement.parentElement;

//Get next Siblings
x = listItem.nextSibling;
x = listItem.nextElementSibling;
x = listItem.nextElementSibling.nextElementSibling;

//Get previous Sibling
x = listItem.previousSibling;
x = listItem.previousElementSibling.previousElementSibling;
{{</highlight>}}


## Creating and Adding Elements
Creating - <mark>createElement</mark>
Adding Element to DOM -
<mark>appendChild</mark> : li.appendChild(const)
<mark>insertBefore</mark> : card.insertBefore(newdiv,card.firstChild)

{{<highlight javascript>}}
<li class="collection-item">Hello World <a><i class = "fa fa-remove"></a></li>

//Creating li tag
const li = document.createELement("li");
li.className = "collection-item";//Added class name to li
li.id = "new-item"//Added id
li.setAttribute("title","New Item")//Added title attribute to li

//Adding a tag in li --> <li> <a></a> </li>
const link = document.createElement("a");
link.className = "delete-item secondary-content";
link.innerHTML = '<i class = "fa fa-remove"></i>';
li.appendChild(link);

//Adding text node to li
li.appendChild(document.createTextNode("hello World"));//Inserting Text node inside li

//Appending this li tag in ul with class collection
document.querySelector("ul.collection").appendChild(li);
{{</highlight>}}


## Removing/Replacing Elements

{{<highlight javascript>}}
const newHeading = document.createElement("h2");
newHeading.id="task-title";
newHeading.appendChild(document.createTextNode("Task list"));

const oldHeading = document.getElementById("task-title");
const cardAction = document.querySelector(".card-action");

cardAction.replaceChild(newHeading, oldHeading);

//Remove Element
const lis = document.querySelectorAll("li");
const list = document.querySelector("ul");

lis[0].remove(); 

list.removeChild(lis[3]);
{{</highlight>}}


## Event Listeners

{{<highlight javascript>}}
document.querySelector('.clear-task').addEventListener('click',
function(e){
    console.log("button clicked");
    //e.preventDefault();
});

document.querySelector('.clear-task').addEventListener('click',onClick);

function onClick(e){
    console.log("button clicked");
}

document.querySelector('.clear-task').addEventListener('click',onClick);

function onClick(e){

    //Event Target Element
    val = e.target;
    val = e.target.id;
    val = e.target.classList;

    //Change Text in button on click
    e.target.innerText("Hello");

    //Getting Timestamp on clicking
    val = e.timeStamp;

    //Getting Event Type
    val = e.type;

    //Coords event relative to window
    val = e.clientY;
    val = e.clientX;

    //Coords event relative to element
    val = e.offsetY;
    val = e.offsetX;

    console.log("button clicked");
}
{{</highlight>}}


## Different Mouse Events

{{<highlight javascript>}}
/*dblclick
mousedown
mouseup
mouseenter
mouseleave
mouseover
mouseout 
mousemove
*/
btn = document.querySelector('.btn');

btn.addEventListener('click',runEvent);
function runEvent(e){
    console.log(`Event Type : ${e.type}`);
}
{{</highlight>}}


## Different Keyboard Events

{{<highlight javascript>}}
/* keyup
keypress - General keypress
focus - Focus on input field
blur - focus outside input field
cut - Anything is cut from input field
paste - Anything pasted to input field
input - general input field...anything we do with input fires this event
*/

const form = document.querySelector('form');

const taskinput = document.getElementById('task');

form.addEventListener("submit", formEvent);

function formEvent(e){
    console.log(`EVENT TYPE: ${e.type}`);
    
    //log value entered in input field of form
    console.log(taskInput.value);


    //e.preventDefault();
}

taskInput.addEventListener("keydown", inputEvent);

function inputEvent(e){
    console.log(e.target.value);//Every letter we type output to console
}
{{</highlight>}}


## Local and Session Storage

{{<highlight javascript>}}
//Set Local Storage 
localStorage.setItem('name','John');

//Set Session Storage
sessionStorage.setItem('name','Beth');

//Deleting
localStorage.removeItem('name');
localStorage.clear()

//Getting from Storage
const name = localStorage.getItem('name');

//Example From TaskList app:
function storeTaskInLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else { //Parse into JSON from string.
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);
    
    //Convert from JSON to string as local storage only stores Strings 
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
{{</highlight>}}
