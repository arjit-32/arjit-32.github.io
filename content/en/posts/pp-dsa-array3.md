---
title: "Find the Kth smallest element of array in Java"
date: 2020-12-01T20:15:10+05:30
description: "Write a program to find  Kth smallest element of array in Java"
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


`Ques-` Given an array arr[] and a number K where K is smaller than size of array, the task is to find the Kth smallest element in the given array. It is given that all array elements are distinct.
   
_Example:	
Input:  
{7 10 4 3 20 15}
k = 3
Output:	
7
Explanation:
3rd smallest element in the given array is 7._

---


`Solution-`

{{< codes BruteForce MinHeap MaxHeap >}}
  {{< code >}}
  ```java
/* Brute Force(Sorting)
Time - O(nlogn), Space - O(1)
Algo 
  - Sort the array
  - Return ar[k-1]
*/
import java.util.*;
import java.lang.*;

class Main
{
    public static void main(String[] args){
    Scanner sc = new Scanner(System.in);
    int test_cases=sc.nextInt();
    while(test_cases>0){
      //Taking Inputs - len: length of array,ar = array itself
      int len=sc.nextInt();
      int ar[]=new int[len];
      for(int i=0;i<len;++i){
        ar[i]=sc.nextInt();
      }
      int k = sc.nextInt();

      Arrays.sort(ar);
      System.out.println(ar[k-1]);      

      test_cases--;
    }
  }
}
  ```
  {{< /code >}}
  {{< code >}}
  ```java
/* MinHeap Soln
Time - O(n + klogn), Space - O(n)
Algo - 
  - Add all element to minHeap
  - remove elements from 0 to k
  - Display peek of minHeap
      
*/
import java.util.*;
import java.lang.*;

class Main
{
    public static void main(String[] args){
    Scanner sc = new Scanner(System.in);
    int test_cases=sc.nextInt();
    while(test_cases>0){
      //Taking Inputs - len: length of array,ar = array itself
      int len=sc.nextInt();
      int ar[]=new int[len];
      for(int i=0;i<len;++i){
        ar[i]=sc.nextInt();
      }
      int k = sc.nextInt();

      PriorityQueue<Integer> pq = new PriorityQueue<Integer>(); 
      for(int i=0;i<len;++i){
        pq.add(ar[i]);
      }

      for(int i=0;i<k-1;++i)  pq.poll();  
      
      System.out.println(pq.peek());

      test_cases--;
    }
  }
}
  ```
  {{< /code >}}
  {{< code >}}
  ```java
/* MaxHeap Soln
Time - O(n+(n-k+1)log(n-k+1)), Space - O(n)
Algo -
  - For every element of array
  - Add to MaxHeap 
  - If i>=k Remove top element from heap
  - At last kth smallest will be left at root of maxHeap
*/
import java.util.*;
import java.lang.*;

class Main
{
    public static void main(String[] args){
    Scanner sc = new Scanner(System.in);
    int test_cases=sc.nextInt();
    while(test_cases>0){
      //Taking Inputs - len: length of array,ar = array itself
      int len=sc.nextInt();
      int ar[]=new int[len];
      for(int i=0;i<len;++i){
        ar[i]=sc.nextInt();
      }
      int k = sc.nextInt();

      PriorityQueue<Integer> pq = new PriorityQueue<Integer>(Comparator.reverseOrder());
      for(int i=0;i<len;++i){
        pq.add(ar[i]);
        if(i>=k){
          pq.poll();
        }
      }

      System.out.println(pq.peek());

      test_cases--;
    }
  }
}
  ```

  {{< /code >}}
{{< /codes >}}
