---
title: "Introduction to Algorithms(Asymptotic Analysis)-Part 2"
date: 2020-09-04T22:05:10+05:30
description: "Master Theorem,Extended Master theorem,Subsitution method and Recursive tree method can be used to find time complexity of Divide and Conquer algorithms"
draft: false
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
- 
---

# Time complexity of **Divide and Conquer Algorithms -**
These algorithm divide problem in subparts recursively & each subproblems takes additional work to compute the subproblem.
Ex- ***T(n) = 2T(n/2) + O(n),** here each problem is div in 2 parts of size n/2 each and it takes O(n) time for each subproblem.*
Such algorithms can be expressed in form of recursive equation as shown above and there exists a `"Master Theorem"` to simplify calculating worst case time complexity for such algorithms.
These problems complexity can be found with `subsitution method` or `recursive method` too. 

## Master Theorem 
For recurrence given in the following form $T(n) = a T(n/b) + f(n)$

`Case 1:` $f(n) = O(n^\left( log_ba-\epsilon\right))$ for $\epsilon>0$ 
$$T(n)=\Theta(n^\left( log_ba\right))$$

`Case 2:` $f(n) = θ(n^\left( log_ba\right))$
$$T(n)=\Theta(n^\left( log_ba\right)log n)$$

`Case 3:` $f(n) = Ω(n^\left( log_ba+\epsilon\right)) for \epsilon>0$
$$T(n)=\Theta(f(n))$$

---
*Example 1: $T(n)=3T(n/2) + n^2$*

$n^\left(log_23 \right)=>n^\left(1.58\right)$
$n^\left(1.58+\epsilon\right)= n^2$
Case 3 satisfies so
$T(n)=\theta(n^2)$

---

*Example 2 : $T(n)=4T(n/2) + n^2$*

$n^\left(log_24 \right)=>n^\left(2\right)$
$n^\left(2\right)= f(n)$
Case 2 satisfies so
$T(n)=\theta(n^2log n)$

---
## Extended Master Theorem :

We can use extended Master theorem when function is in form of &rarr; 
<mark>$T(n)=aT(n/b)+\theta\left(n^klog^pn\right)$ given that a≥1,b>1,k≥0,p is Real no.</mark> 

`Case 1:` $a>b^k$
&nbsp;&nbsp;&nbsp;&nbsp; $T(n)=\theta(n^\left(log_ba\right))$

`Case 2:` $a=b^k$
&nbsp;&nbsp;	`a)` p>-1 &nbsp;&nbsp; $T(n)=\theta(n^\left(log_ba\right)log^\left(p+1\right)n)$
&nbsp;&nbsp;	`b)` p=-1 &nbsp;&nbsp; $T(n)=\theta(n^\left(log_ba\right)loglog(n))$
&nbsp;&nbsp;	`c)` p< -1 &nbsp;&nbsp; $T(n)=\theta(n^\left(log_ba\right)$

`Case 3:` $a< b^k$
&nbsp;&nbsp;	`a)` p≥0 &nbsp;&nbsp; $T(n)=\theta(n^klogn)$
&nbsp;&nbsp;	`b)` p<0 &nbsp;&nbsp; $T(n)=\theta(f(n))$

---
*Example 1: $T(n)=2T(n/2) +n/logn$*

*a=2,b=2,k=1,p=-1*
$a=b^k satisfies$
*and p=-1 so Case 2.b satisfies*
$T(n)=\theta(n^\left(log_22\right)loglog(n))$
$T(n)=\theta(nloglog(n))$

---
*Example 2: $T(n)=16T(n/4)-n^2logn$*

*Master theorem doesnt apply as function is negative*

---

## Master Theorem for Subtract and Conquer Recurrences

For recurrences of the form 

>$T(n) = c$ if n≤1
>$T(n) = aT(n-b)+f(n)$ if n>1 
>if f(n) is $O(n^k)$,a>0,b>0 and k≥0

We can use:
`Case 1:` $a<1$ &nbsp;&nbsp; $O(n^k)$
`Case 2:` $a=1$ &nbsp;&nbsp; $O(n^\left(k+1\right))$
`Case 3:` $a>1$ &nbsp;&nbsp; $O(n^ka^\left(n/b\right))$

*Example :* 
$T(n)=3T(n-1)$ if n>0
$T(n)=1$ otherwise

Soln→ 
$T(n)=3T(n-1)+O(1) ⇒ T(n)=3T(n-1)+O(n^0)$
*a>1 so Case 3 satisfies*
$T(n)=O(n^03^\left(n/1\right))=O(3^n)$

---

## Subsitution Method

Condensed way of proving asymptotic bound on a recurrence by induction.
There are 2 steps to this method:
`Step 1` - Guess the solution
`Step 2` - Prove using induction

*Example : $T(n) = T(n-1) + n$*

*Guessed* $T(n) ≤ cn^2$
$T(n) = T(n-1) + n$
$T(n) ≤ c(n-1)^2 +n$
$T(n)=cn^2 + c - 2cn +n$
$T(n)≤ cn^2$ *if n is sufficiently large and* c>1/2

---

## Recursive Tree Method

Popular technique for solving unbalanced recurrence relations. Example - Modified merge sort which divides problem in 2 subproblems $n/3$ and $2n/3$ each.

*Example - $T(n) = 2T(n/2) + n$*

{{< img src="/images/DsAlgo/recursiveTree.png" title="Recursive Tree" caption="Input size reduction tree" alt="Recursive Tree" position="center" >}}
{{< img src="/images/DsAlgo/recursiveTree2.png" title="Recursive Tree" caption="Computation tree" alt="Recursive Tree" position="center" >}}

Complexity = height of tree * Cost at each level

Finding ht of tree :
Size of subproblem at level 0 is $n/2^0$
Size of subproblem at level 1 is $n/2^1$
Size of subproblem at last level will become 1
$n/2^x=1$
$x=logn$
height of tree is $logn$

Cost of each level is n

Complexity = $O(nlogn)$


---

Reached end? Why not read [Part 3](https://www.arjitsharma.com/posts/asymptoticanalysis-3)

---
_Referrences_ &rarr;

1. [Narsimha Karumanchi book](https://www.docdroid.net/ZPfHmS5/data-structures-and-algorithms-narasimha-karumanchi-pdf)

2. [Stanford lecture notes](https://web.stanford.edu/class/archive/cs/cs161/cs161.1168/lecture3.pdf)

3. [Gatevidyalay](https://www.gatevidyalay.com/recursion-tree-solving-recurrence-relations/)
---