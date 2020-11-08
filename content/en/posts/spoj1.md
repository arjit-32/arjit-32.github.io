---
title: "Life,the Universe and Everything | SPOJ - 1"
date: 2020-10-07T22:05:10+05:30
description: "Solution of Life,the Universe and Everything, SPOJ problem in Java"
draft: false
author: Arjit Sharma
authorEmoji: 🤖
pinned: false
image: 
libraries:
- 
tags:
- 
series:
- 
categories:
- 
---


`Ques-` Your program is to use the brute-force approach in order to find the Answer to Life, the Universe, and Everything.
   More precisely... rewrite small numbers from input to output. Stop processing input after reading in the number 42.
   All numbers at input are integers of one or two digits.
   
   Example:	
   		Input:	1 2 88 42 99
   		Output:	1 2 88

---

`Solution-`

```java
import java.util.*;
import java.lang.*;

class Main
{
	public static void main (String[] args) 
	{
		Scanner sc = new Scanner(System.in);
		int n=0;
		while(true){
			n=sc.nextInt();
			if(n==42) break;
			else System.out.println(n);
		}	
	}
}
```
