---
title: "Introduction to Algorithms(Asymptotic Analysis)-Part 1"
date: 2020-09-03T22:05:10+05:30
draft: false
description: "A way of sorting and organizing data in computer so that it can be used efficiently in order to solve certain problems."
author: Arjit Sharma
authorEmoji: 🤖
pinned: false
image: 
libraries:
- mathjax
tags:
- algo
series:
- Data Structures & Algorithms
categories:
- Core CS
---
{{< featuredImage >}}


## Inroduction  to Data Structures -

A programming language has data types → `int`,`float`,`double` etc which reduces the coding effort
Data Types are of 2 types : 
- <mark>Primitive Datatypes</mark> → System defined types ex- int,float,array etc
- <mark>User Defined Datatypes</mark> → User defined types. ex - structures in C,classes in java

### What are Data Structures ?

A way of sorting and organizing data in computer so that it can be used efficiently in order to solve certain problems.

### Abstract Data Types(ADT):

To simplify problem solving, data structures are usually combined with the operations that can be performed on them. This is called ADT. 
Ex - `Stack` data structure with operations like `push()` and `pop()`

Just like how primitive type int and operations on this type like addition(+),subtraction(-) etc can be done, ADTs are the same thing just user defined.

## What are Algorithms ?

> Step by step unambiguous instructions to solve a given problem.

An algorithm can be judged on:
- `Correctness` - Gives correct result in finite number of steps
- `Efficiency` - Time and Space efficient algorithms.

### What is Rate of Growth ?

Rate at which running time increases as function of input(as input increases, time to execute increases) is called rate of growth.

## Why to analyze Algorithms ?

Main Goal - "To compare algorithms in terms of running time and memory"
If we dont analyze algorithms, how will we know which among 2 algo is better for the problem at hand.

*Note  - Dont run after less time complexity, look for problem statment and requirement* 

## How to compare algorithms - 

In order to compare 2 algorithms ideally such that it is independent of machine and programming style -
We can express running time of given algorithm as  a function of input size n and compare different functions corresponding to running time.
**"_Expressing algorithm in form of expression_"**

Problem is same algorithm can be expressed using multiple expression.
Example - This is a search algorithm

```c
int search(int arr[], int n, int x) 
{ 
    int i; 
    for (i = 0; i < n; i++) 
        if (arr[i] == x) 
            return i; 
    return -1; 
}
```

The above algorithm can be expressed as 
- f(n)=n in case of worst case(element found at last)
- f(n)=1 in case of best case(element found first)

To solve this problem and analyze algorithms in a more standard way we need some sort of Syntax and here comes into play `"Asymptotic Analysis"`


## Asymptotic Notations

Simplifying analyis of runtime by getting rid of details, which may be affected by certain implementation details

> If f(n) if expression of algorithm where n is input size, asymptotic analysis means approximating f(n) at higher value of n.

### Big-O Notation : Worst case time complexity

`"We are trying to find another function g(n) which approximates f(n) at higher value of n(Input size)"`

$f(n)=Ω(g(n))$   if there exists positive constant ***c*** & ***n0*** such that ***c g(n) ≤ f(n)*** for **n≥n0**	

{{< img src="/images/DsAlgo/big-o.png" title="Big-O-Notation" caption="Big-O Notation" alt="Big-O Notation" position="center" >}}    
After certain input size ***n0, g(n)*** becomes upper bound of ***f(n)***

### Omega-Ω Notation : Best case time complexity

$f(n)=Ω(g(n))$   if there exists positive constant ***c*** & ***n0*** such that ***c g(n) ≤ f(n)*** for **n≥n0**

{{< img src="/images/DsAlgo/big-omega.png" title="Big-Omega-Notation" caption="Big-Omega Notation" alt="Big-Omega Notation" position="center" >}}

  
### Theta-θ Notation : Average case time complexity

$f(n)=Ω(g(n))$   if there exists positive constant ***c*** & ***n0*** such that ***c g(n) ≤ f(n)*** for **n≥n0**

{{< img src="/images/DsAlgo/big-theta.png" title="Big-Theta-Notation" caption="Big-Theta Notation" alt="Big-Theta Notation" position="center" >}}

---

Reached end? Why not read [Part 2](https://www.arjitsharma.com/posts/asymptoticanalysis-2)

---
_Referrences_ &rarr;

1. [Cornell article](https://www.cs.cornell.edu/courses/cs3110/2014sp/recitations/24/using-the-substitution-and-master-method.html)

2. [IIT notes](http://www.iiitdm.ac.in/old/Faculty_Teaching/Sadagopan/pdf/DAA/recurrence-relations-V3.pdf) .

3. [Narsimha Karumanchi book](https://www.docdroid.net/ZPfHmS5/data-structures-and-algorithms-narasimha-karumanchi-pdf)

---