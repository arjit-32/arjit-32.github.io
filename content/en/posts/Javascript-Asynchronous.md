---
title: "Asynchronous Javascript"
date: 2020-09-01T17:50:12+05:30
draft: false
description: "What is Asynchronous Javascript | AJAX | Callbacks | Promises | Async/Await | Fetch API"
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

Synchronous code works in an order. `1st thing then 2nd` while in asynchronous , `while doing 1st thing do 2nd`. Most Async code comes from an API or library
Ways to work with async code
1. Callback
2. Promises
3. Async/Await

`AJAX` : asynchronous JS and XML
Set of web technologies used to send and recieve data from server asynchronously without reloading webpage
Client -- (JS call) -> AJAX Engine --(XmlHttpRequest)-> SERVER --(XML/JSON)-> AJAX Engine --(HTML Response)-> Client

## XHR Introduction
`XHR Object` - Within JS enviroment, its methods transfer data
Can be used with other protocols other than HTTP and Can work with data other than XML(JSON,plain Text)

{{< highlight javascript>}}
//readyState Values: Tell State of server
//0 : request not initialized
//1 : Server connection established
//2 : request recieved
//3 : processing request
//4 : request finished and response is ready
//loading data from data.txt file

function loadData(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','data.txt',true);//3rd parameter states call data asynchronously
    
    //Used for spinners or loaders
    //While data is being fetched do something
    xhr.onprogress = function(){
        console.log(xhr.readyState);
    }

    xhr.onload = function(){
        //console.log(xhr.readyState);//returns 4
        if(this.status === 200)
            console.log(this.responseText);
    }

    xhr.onerror = function(){
        console.log("Error Loading data");
    }

    xhr.send();

    //Earlier we used onreadystatechange
    // xhr.onreadystatechange = function(){
    //     if(this.status === 200 && this.readyState === 4){
    //         console.log(this.responseText);
    //     }
    // }    
}
{{< /highlight>}}

## Loading JSON data using XHR

{{< highlight javascript>}}
function loadData(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET','data.json',true);

    xhr.onload = function(){
        //console.log(xhr.readyState);//returns 4
        if(this.status == 200)
            const customers = JSON.parse(this.responseText);
            //Using JSON.parse so we can use it as an object

            customers.forEach(function(customer){
                console.log(customer.id);
                console.log(customer.name);
            });
    }

    xhr.send();

}
{{< /highlight>}}


## API Basics
`API` - Application Programming Interface
A structured request and response

`REST api` - Representational State transfer
Architectural style for designing networked appln and relies on stateless,client-server protocol(mostly HTTP)
Can be used by any prog language
Treats server objects as resources that can be created and destroyed

`API Endpoints` URL that we acces to do certain thing
//ENDPOINT-->GET https://someurl.com/api/users

<mark>HTTP Requests</mark>
`GET` : Retrieve data from specified resource.
`POST` : Submit data to be processed to a specified resource.
`PUT` : Update a specified resource
`DELETE` : Delete a specified resource

## Callbacks
The containing function is responsible for executing the callback function when the time comes

{{< highlight javascript>}}
function giveTest(callback){
    setTimout(function(){
        console.log("Test Given");
        callback();
    },2000);
}

function getMarks(){
    setTimout(function(){
        console.log("Got Marks");
    },1000);
}

//giveTest takes 2 sec , kgetMarks takes 1 sec
//If we would have used synchronous code then we would have got marks before giving test
//callback waits for giving test then executes callback func getMarks 

giveTest(getMarks);
//Output - 
//  Test Given
//  Got Marks
{{< /highlight>}}


## Promises
Object that may produce value in the future

{{< highlight javascript>}}
//To get response from promise we use .then()
function giveTest(){
    return new Promise(function(resolve,reject){
    setTimout(function(){
        console.log("Test Given");
        resolve();
    },2000);    
    });
}

function getMarks(){
    setTimout(function(){
        console.log("Got Marks");
    },1000);
}

giveTest().then(getMarks);
{{< /highlight>}}


## Error dealing in Promises

{{< highlight javascript>}}
function giveTest(){
    return new Promise(function(resolve,reject){
    setTimout(function(){
        console.log("Test Given");

        //lets suppose there is error
        const error = true;
        if(error){
            reject("Something Went Wrong");
        }else{
            resolve();
        }
    },2000);    
    });
}

function getMarks(){
    setTimout(function(){
        console.log("Got Marks");
    },1000);
}

giveTest().then(getMarks).catch(function(err){
    console.log(err);
});
{{< /highlight>}}

## Fetch API
<mark>fetch</mark> and <mark>xhr</mark> does data transfer without reloading pages

<mark>AJAX callback/promises</mark> are used to support asynchronous behaviour

`FETCH API` - Alternate to XHR. Used to transfer data from or to a URL endpoint . Built upon promises just how XHR on callbacks.
JavaScript can send network requests to the server and load new information whenever it’s needed.


## Getting text data using Fetch API

{{< highlight javascript>}}
//fetch returns promises

/*
function getText(){
    fetch('test.txt')
    .then(function(res){
        return res.text();
    })
    .then(function(data){
        console.log(dat );
    })
    .catch(function(err){
        console.log(err);
    })
}
*/

//fetch returns promise
function getText(){
    fetch('test.txt')
    .then(res => res.text())
    .then(data => console.log(data) 
    .catch(err => console.log(err));
}
{{< /highlight>}}


## Aync/Await

{{< highlight javascript>}}
async function myFunc(){

const promise = new Promise((resolve,reject)=>{
setTimout(() => resolve('Hello'), 1000);
});

const res = await promise;//Waits until promise is resolved
return res;

}

myFunc().then(res=>console.log(res))
{{< /highlight>}}


## Async/Await error handling

{{< highlight javascript>}}
async function myFunc(){
    
    const promise = new Promise((resolve,reject)=>{
        setTimout(() => resolve('Hello'), 1000);
    });

    const error = true;

    if(!error){
    const res = await promise;//Waits until promise is resolved
    return res;
    }else{
        await Promise.reject(new Error('Something went Wrong'));
    }


}

myFunc()
.then(res=>console.log(res))
.catch(err=>console.log(err));
{{< /highlight>}}


## Async/Await with Fetch API

{{< highlight javascript >}}
async function getUsers(){
    //await response of fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    //Only proceed once promise returned by fetch is resolved
    const data = await response.json();
    //Only Proceed when second promise is resolved
    return data;
}

getUsers().then(users => console.log(users));
{{< /highlight>}}