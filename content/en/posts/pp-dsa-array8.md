---
title: "Kadane's Algorithm"
date: 2020-12-02T20:20:30+05:30
description: "Write a program to find the contiguous sub-array with maximum sum in java"
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
- Placement-Prepration
categories:
- 
---

[Go to index page for this complete series](https://www.arjitsharma.com/posts/pp-index)
[Refer the list for followed syllabus](https://github.com/ArjitS1/Coding/blob/main/FINAL450.xlsx)


`Ques-` Given an array arr of N integers. Find the contiguous sub-array with maximum sum.
  
_Example - 
Input:
N = 5 
A = {1 2 3 -2 5}
Output:
9
Explanation:
Max subarray sum is 9 of elements (1, 2, 3, -2, 5) which is a contiguous subarray._

[Link](https://practice.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1)

---


`Solution-`

{{< codes Soln >}}
  {{< code >}}
  ```java
import java.util.*;
import java.lang.*;

class Main{
	public static void main (String[] args) {
	Scanner sc = new Scanner(System.in);
	int test_cases=sc.nextInt();
	while(test_cases>0){

		//Taking Inputs 
		int len=sc.nextInt();
		int ar[]=new int[len];
		for(int i=0;i<len;++i){
			ar[i]=sc.nextInt();
		}

		int global_max,temp_sum;  //global_max stores max among all subarray
		global_max=temp_sum=0; //temp_sum keeps tracks of contiguous subarray sum, If reaches below 0 reset

		for(int i=0;i<len;++i){
			temp_sum+=ar[i];
			if(temp_sum<0) temp_sum=0;
			if(global_max<temp_sum) global_max=temp_sum;
		}
		//Printing
		System.out.print(global_max);
		
		test_cases-=1;
		}	
	}
}
  ```
  {{< /code >}}
{{< /codes >}}
