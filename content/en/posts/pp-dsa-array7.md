---
title: "Cyclically rotate an array by one"
date: 2020-12-02T20:15:30+05:30
description: "Write a program to cyclically rotate an array by one in java"
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


`Ques-` Cyclically rotate an array by one.
  
_Example - 
Input:
N = 5 
A = {1 2 3 4 5}
Output:
{5 1 2 3 4}_

[Link](https://practice.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one/0)

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

      int temp=ar[len-1];
      if(len>1){ // Edge case - If i = 1 then infinite loop
        for(int i=len-2;i>=0;--i){
          ar[i+1]=ar[i];
        }
      }
      ar[0]=temp;

      //Printing
      for(int i=0;i<len;++i){
        System.out.print(ar[i]+" ");
      }
      System.out.println();
      test_cases-=1;
    } 
  }
}
  ```
  {{< /code >}}
{{< /codes >}}
