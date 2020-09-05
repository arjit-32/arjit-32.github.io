---
title: "Introduction to Algorithms(Asymptotic Analysis)-Part 3"
date: 2020-09-05T22:05:10+05:30
draft: false
description: "Practise problems on Asymptotic Analysis"
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
# Practise problems on Asymptotic Analysis

## Finding complexity of code

1. `Statements` : Statements have constant complexity.
	    
	    if(n>0){ # c1
	    printf("Something"); # c2
	    }else{ # c3
	    printf("Something else"); # c4
	    }

    $T(n)=c1+c2+c3+c4=O(c)=O(1)$

2. `Loops` : Check number of times the loop is running

	    for(i=1;i≤n;++i){
	    //Statment; # c1
	    }

    $T(n)=c1*n = O(n) $

3. `Nested Loops` : Look at how many times each loop execute and multiply them.

	    for(i=0;i≤m;++i){ # Runs m times
	    	for(j=0;j≤n;++j){ # Runs n times
	    		//Statment; # c1
	    	}
	    }

    $T(n)=O(m*n)$

4. `Log Complexity` :

	    for(i=1;i≤n;i*=2){
	    Statement;
	    }

    i=2,4,8,16...k
    $2^k=n$
    Taking log both side
    $log 2^k = log n$ ⇒ $k=log n$

    $T(n)=O(log n)$

5. `Recursive functions` :

	    int fibo(int n){
	    if(n==0)
	    	return 0;
	    
	    else if(n==1)
	    	return 1;

	    else
			return fibo(n-1)+fibo(n-2)
	    }

    $T(n)=T(n-1)+T(n-2)+c$
    for larger value of n
    T(n) = 2T(n-1) + O(1)
    Using Master Theorem for Subtract and Conquer ⇒ Case 3 satisfies

    $T(n) = O(n^02^n)=O(2^n)$

## Practise problems on Code complexity

Master Theorem questions can be done directly. Following are the question that use some sort of trick.

### Ques 1 :

	    void func(int n){
	    int i=1,s=1;
	    while(s≤n){
		    i++;
		    s+=i;
		    printf("Hello World");
		    }
	    }

Soln →

$s_i=s_\left( i-1\right) + i$ where i increments 1,2,3...k
it takes k iteration to get out of loop
1+2+3....+k > n
$\left(k(k+1) \right)/2 > n$

$T(n)=O(\sqrt{n})$

### Ques 2 :

	    void func(int n){
	    int i,count=0;
	    for(i=1;i*i≤n;++i){
	    	count++;
	    	}
	    }

Soln →

Loop exits if $i^2>n$ ⇒ $T(n)=O(\sqrt{n})$

### Ques 3 :

	    func(int n){
		if(n==1) return;
	    for(i=1;i≤n;++i) // n times
	    	for(j=1;j≤n;++j) // n times
	    		printf("Hello World");

	    func(n-3); // Subtract and conquer ?
	    }

Soln →

We can see in the problem that there is `recursive call` so there is a possibility it can be solved by Master Theorem.
We make recursive eqn by following 2 steps :
`step 1:` Time taken by each recursive call ⇒ $n^2$
`step 2:` How much Input size was reduced ⇒ T(n) to T(n-3)

Recursive Eqn = $T(n)=T(n-3)+cn^2$

Now using Master theorem Subtract and Conquer Case 2
$T(n) = O(n^3)$ 

### Ques 4:

	    for (i=1;i≤n;++i){ // n times
	    	for(j=1;j≤n;kj+=i){ // n/i times
				//Statment
	    	}
	    }

Soln→

$n(\sum n/i) = O(nlogn)$

### Ques 5:

	    func(n){
	    if(n≤1) return; // c1 
		for(i=1;i≤3;++i){ // Divided into 3 subproblems
	    	func(n/3);  //problem Input size reduced by n/3
	    	}
	    }

Soln→

T(n)=3T(n/3) + O(1)
Master Theorem Case 1 satisfies
$T(n)=O(n^\left( log_33 \right)))=O(n)$

### Ques 6:

	    func(n){
	    if(n≤1) return;
	    for(i=1;i≤3;++i){ // Divided into 3 subproblems
	    	func(n-1); // Input size reduced by 1
	    	}
		}

Soln→

T(n)=3T(n-1)+O(1)

Master Theroem Subtract and Conquer Case 3 satisfies

$O(n^03^n)=O(3^n)$

### Ques 7:

   Find complexity of $T(n)=2T(\sqrt{n})+logn$ .

Soln →

It is not in form of Master Theorem
These type of problems uses iteratively subsituting a value to reach complexity
Assume $n=2^m$

Taking log both sides we get ⇒ log n = m log2 ⇒ m=log n
$T(n) = 2T(2\left( m/2 \right)) + logn$

To simplify let a function $S(m)=T(2^m)$
Then $S(m/2)=T(m/2)$
$S(m) = S(m/2)+ m$

Using Master Theroem ⇒ $S(m) = O(mlogm)$

We know m=log n
$T(n)=O(log n log logn)$

Summary of what we did →

`step 1:` Transform n in form of m (because in form of n it was not solvable with Master Theorem)
`step 2:` Take a func S(m) and relate to T(m)
`step 3:` Find complexity of function S(m)
`step 4:` Subsitute value of m with n

### Ques 8:

  Find complexity of $T(n)=T(\sqrt{n})+1$ .

Soln →

It is not in form of Master Theorem
These type of problems uses iteratively subsituting a value to reach complexity
Assume $n=2^m$

Taking log both sides we get ⇒ log n = m log2 ⇒ m=log n
$T(n) = T(2\left( m/2 \right)) + 1$

To simplify let a function $S(m)=T(2^m)$
Then $S(m/2)=T(m/2)$
$S(m) = S(m/2)+ 1$

Using Master Theroem ⇒
$S(m) = O(mlog_21logm)$ ⇒ $S(m) = O(m^0logm)$ ⇒ $S(m) = O(logm)$

We know m=log n
$T(n)=O(log logn)$


---
_Referrences_ &rarr;

1. [Narsimha Karumanchi book](https://www.docdroid.net/ZPfHmS5/data-structures-and-algorithms-narasimha-karumanchi-pdf)

---