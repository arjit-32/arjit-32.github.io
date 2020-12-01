---
title: "Write a program to reverse an array in java"
date: 2020-12-01T20:05:10+05:30
description: "Write a program to reverse an array in java"
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


`Ques-` Write a program to reverse an array.
   
_Example:_	
_Input:	1 2 3 4 5 6_
_Output:	6 5 4 3 2 1_

---


`Solution-`

{{< codes Iterative Recursive >}}
  {{< code >}}
  ```java
/* Iterative Soln
Time - O(n), Space - O(1)
Algo 
  - Traverse till half of array
  - Swap(i,(len-1)-i)
*/
import java.util.*;
import java.lang.*;

class Main{
  public static void main (String[] args) {
    Scanner sc = new Scanner(System.in);
    int test_cases=sc.nextInt();
    while(test_cases>0){

      //Taking Inputs - len: length of array,ar = array itself
      int len=sc.nextInt();
      int ar[]=new int[len];

      for(int i=0;i<len;++i){
        ar[i]=sc.nextInt();
      }

      int t=0;
      for(int i=0;i<len/2;++i){
        t=ar[i];
        ar[i]=ar[len-1-i];
        ar[len-1-i]=t;
      }

      //Printing
      for(int i=0;i<len;++i){
        System.out.println(ar[i]);
      }

      test_cases-=1;
    } 
  }
}
  ```
  {{< /code >}}
  {{< code >}}
  ```java
/* Recursive Soln
  Time - O(n), Space - O(1) 
Algo
  - 2 pointers, start=0,end=len-1
  - Base case: if start>end
  - Recursive case: swap(ar[start],ar[end])
                    recur(ar,++start,--end);
*/
import java.util.*;
import java.lang.*;

class Main{
  public static void reverse(int ar[],int start,int end){
    if(start>end) return;
    int t = ar[start];
    ar[start]=ar[end];
    ar[end]=t;

    ++start;
    --end;
    reverse(ar,start,end);
  }

  public static void main (String[] args) {
    Scanner sc = new Scanner(System.in);
    int test_cases=sc.nextInt();
    while(test_cases>0){

      //Taking Inputs - len: length of array,ar = array itself
      int len=sc.nextInt();
      int ar[]=new int[len];

      for(int i=0;i<len;++i){
        ar[i]=sc.nextInt();
      }

      reverse(ar,0,len-1);
     
      //Printing
      for(int i=0;i<len;++i){
        System.out.println(ar[i]);
      }

      test_cases-=1;
    } 
  }
}
  ```
  {{< /code >}}
{{< /codes >}}
