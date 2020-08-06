---
title: "Object Oriented PHP"
date: 2020-08-05T22:05:10+05:30
draft: false
description: "Classes and Objects in PHP | Getters and Setters | Traits | Interfaces"
draft: false
author: Arjit Sharma
authorEmoji: 🤖
pinned: false
image: images/whoami/avatar.jpg
tags:
- Web-Development
- PHP
series:
- 
categories:
- Web-Development
---

## Class Creation
Below is given basic class implementation in PHP
`__CLASS__` constant returns name of class
Line 8: Constructor Defined with default values set to null
Line 16: Destructor is called at end of the script
Line 30: Object's properties can be accessed using -> keyword

{{<highlight php>}}
class Student {
//className = __CLASS__;
public $name;
public $roll;
public $class;

//Constructor
function __construct($name=null,$roll=null,$class=null){
    //default set to null so that no error occurs even if user doesn't set all values
    $this->name =$name;
    $this->roll =$roll;
    $this->class =$class;
}

//Destructor
function __destruct(){
echo "Called upon script ending";}

//Method
public function sayHello(){
    return "Hello World!!";
    }
}

//Instantiating Objects
$arjit=new Student("Arjit Sharma",14,"CSE-A");


//Getting & Setting Object's Properties
echo $arjit->roll; //Property does'nt start with $ sign
$arjit->roll="CSE-B";
echo $arjit->sayHello();
{{</highlight>}}

## Getters and Setters

{{<highlight php>}}
class User{
private $name;

public function__construct($name){
$this->name=name;
}

public function __get($property){
	if(property_exists($this,$property)){
	$this->property=$value;
	}
return $this;
}

public function __set($property, $value){
	if(property_exists($this,$property)){
	return $this->property;
	}
}

$user1 = new User('Arjit');
echo $user1->__get('name');
$user1->__set('name',"Arjit Sharma");
{{</highlight>}}


## Constants and Static

Though both are shared by all objects(are class variable)
A constant(`const`) cannot be changed while a static variable can.

{{<highlight php>}}
class Student {
const a="5";
static $b="5";
}
echo Student::a;//5
echo Student::$b;//5
Student::a=10;//Error
Student::$b=10;//Changed to 10	
{{</highlight>}}


## Inheritance

`extends` keyword is used.
Line 13:Child constructor used to call parent constructor.

{{<highlight php>}}
class Student{
public $name;

public function __construct($name){
    $this->name=$name;
    }
}
class CollegeStudent extends Student{
public $degree;

public function __construct($name,$degree){
    // $this->name=$name; --->this would have worked here
    Student::__construct($name);//Calling parent constructor
    $this->degree=$degree;
    }
}

$student1= new CollegeStudent("Arjit Sharma","B.Tech");
echo "Name : ".$student1->name." Course : ".$student1->degree;
{{</highlight>}}


## Traits

As inheritance only allows to inherit from 1 class, What if we wanted a particular function in all classes. Use trait.
Traits are used to declare methods that can be used in multiple classes.

{{<highlight php>}}
trait msg{
public function msg_function(){
    echo "Hello World!";
    }
}
class Welcome{
use msg;
}
$ob=new Welcome();
$ob->msg_function();
{{</highlight>}}


## Method Overriding

If we don't want a method to be overridden, prefix with `final` keyword. (Ex: final public function sayHello())

{{<highlight php>}}
class A{
public function sayHello(){ //Prefix with final keyword so that cant be overridden
    return "Hello from A";
    }
}

class B extends A{
public function sayHello(){
    return "Hello from B";
    }
} 
{{</highlight>}}


## Abstract Classes

`abstract` keyword is used. A class can only inherit from 1 class.
{{<highlight php>}}
abstract class human{

public function walk(){//Can have non-abstract mehods
    return "Human is walking";
    }
abstract public function sayHello();//Abstract method declare
}

class Indian extends human{

public function sayHello(){//Indian define there implementation of saying hello
    return "Namaste";
    }
}
{{</highlight>}}


## Interfaces in PHP
`implements` keyword is used. A class can implement multiple interfaces.

{{<highlight php>}}
interface A { 
function A_method();
}

interface B { 
function B_method();
}

class C implements A,B {

function A_method(){
    return "A's Method";
}

function B_method(){
    return "B's Method";
    } 
}
{{</highlight>}}