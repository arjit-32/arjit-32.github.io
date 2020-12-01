---
title: "Max and min of an array (using min no of comparisons)"
date: 2020-12-01T20:10:10+05:30
description: "Write a program to find maximum and minimum of an array using minimum number of comparisons"
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


`Ques-` Write a program to find maximum and minimum of an array using minimum number of comparisons

---

`Theory-`

Tournament Method - MEthod of finding specific element in some set(eg: Largest of a set of numbers)
Innvolves pairing elements to compare them to find which one goes to next stage.

{{< expand "Returning 2 values from a function" >}}
```java
public class Main{
  static class xyz{
    int a,b;
    
    static xyz return2values(){
      xyz obj = new xyz();
      obj.a = 1;
      obj.b = 2;
      return obj;
      }
  }//xyz class finished
  public static void main(String s[]){
  xyz obj = return2values();
  System.out.println(obj.a + " " + obj.b);
  }
}
```
{{< /expand >}}


`Solution-`

{{< codes Linear Tournament >}}
  {{< code >}}
  ```java
/* Linear Method
Time - O(n), Comparisons - 2n
Algo -    
    - Traverse each element of array to find min and max
*/
*/
import java.util.*;
import java.lang.*;

class Main{
  static class ArrayUtility{  
    int min,max;
    static ArrayUtility MinMaxInArray(int ar[]){
      ArrayUtility ob = new ArrayUtility();
      ob.min=ob.max=ar[0];
      for(int i=0;i<ar.length;++i){
        if(ar[i]>ob.max)  ob.max=ar[i];
        if(ar[i]<ob.min)  ob.min=ar[i];
      }
      return ob;
    }
  }// ArrayUtility class closed

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

      //Calling static method MinMaxInArray() of ArrayUtility class
      ArrayUtility ob = ArrayUtility.MinMaxInArray(ar,0,len-1);
      System.out.println("Min = "+ob.min);
      System.out.println("Max = "+ob.max);
      
      
    test_cases-=1;
    } 
  }
}
  ```
  {{< /code >}}
  {{< code >}}
  ```java
/* Tournament Method(Divide and Conquer)
Time - O(n), Comparisons - T(n)= 2T(n/2) + 2
Algo
  - Divide array into 2 parts (from low to mid & mid to high)
  - Conquer: Get min & max by comparing min,max of 2 halves
  -
*/
import java.util.*;
import java.lang.*;

class Main{
  static class ArrayUtility{  
    int min,max;
    static ArrayUtility MinMaxInArray(int ar[],int low,int high){
      ArrayUtility ob = new ArrayUtility();
      ArrayUtility obLeft = new ArrayUtility();
      ArrayUtility obRight = new ArrayUtility();

      ob.min=ob.max=ar[low];  
      if(low==high) return ob;

      else if(low==high-1){
        if(ar[low]>ar[high]){
          ob.max=ar[low];
          ob.min=ar[high];
        }else{
          ob.max=ar[high];
          ob.min=ar[low];
        }
        return ob;
      }
      int mid = (low+high)/2;
      obLeft = MinMaxInArray(ar,low,mid);
      obRight = MinMaxInArray(ar,mid+1,high);

      ob.max=obLeft.max>obRight.max?obLeft.max:obRight.max;
      ob.min=obLeft.min<obRight.min?obLeft.min:obRight.min;
      
      return ob;      
    }
  }// ArrayUtility class closed

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

      //Calling static method MinMaxInArray() of ArrayUtility class
      ArrayUtility ob = ArrayUtility.MinMaxInArray(ar,0,len-1);
      System.out.println("Min = "+ob.min);
      System.out.println("Max = "+ob.max);
      
      
    test_cases-=1;
    } 
  }
}
  ```
  {{< /code >}}
{{< /codes >}}
