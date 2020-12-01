---
title: "Sort an array of 0s, 1s and 2s in java"
date: 2020-12-01T20:20:30+05:30
description: "Write a program to sort an array of 0s, 1s and 2s in java"
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


`Ques-` Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.
  
_Example:
Input: 
N = 5
arr[]= {0 2 1 2 0}
Output: 
0 0 1 2 2_

---


`Solution-`

{{< codes Frequency 2_Pointer >}}
  {{< code >}}
  ```java
/* Count Frequency of Each
Time - O(n), Space - O(1)
*/
import java.util.*;
import java.lang.*;

class Main{
  static int[] swap(int []ar,int var1,int var2){
        int t = ar[var2];
        ar[var2]=ar[var1];
        ar[var1]=t;
        return ar;
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

      int count_0,count_1,count_2;
      count_0=count_1=count_2=0;
      for(int i=0;i<len;++i){
        if(ar[i]==0) count_0+=1;
        else if(ar[i]==1) count_1+=1;
        else count_2+=1;
      }
      for(int i=0;i<len;++i){
        if(count_0>0){  
          ar[i]=0; 
          count_0-=1;
        }
        else if(count_1>0){ 
          ar[i]=1;
          count_1-=1;
        }
        else  ar[i]=2;          
      }

      for(int i=0;i<len;++i){
        System.out.print(ar[i]+" ");
      }

    test_cases-=1;
    }
  }
}
  ```
  {{< /code >}}
  {{< code >}}
  ```java
/* 2_pointer Soln
  Time - O(n), Space - O(1) 
Algo
  - 2 pointers, low=0,high=len-1
  - All elements before low are 0, between low and mid are 1, after high are 2
  - Iterate mid from low to high
    - If 0, swap(ar[low],ar[mid]) and increment low,mid
    - If 2, swap(ar[high],ar[mid]) and decrement high
    - If 1, increment mid
*/
import java.util.*;
import java.lang.*;

class Main{
  static int[] swap(int []ar,int var1,int var2){
        int t = ar[var2];
        ar[var2]=ar[var1];
        ar[var1]=t;
        return ar;
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

      int low=0;
      int mid=0;
      int high=len-1;
      
      while(mid<=high){
        if(ar[mid]==0){
          ar = swap(ar,low,mid);
          low++;
          mid++;
        }
        else if (ar[mid]==2){
          ar  = swap(ar,mid,high);
          high--;
        }
        else mid++;
      }

      for(int i=0;i<len;++i){
        System.out.print(ar[i]+" ");
      }

    test_cases-=1;
    }
  }
}
  ```
  {{< /code >}}
{{< /codes >}}
