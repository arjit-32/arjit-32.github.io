---
title: "Arjit"
date: 2020-08-05T22:05:10+05:30
description: "mskdskmvdkmskd"
draft: true
author: Arjit Sharma
authorEmoji: 🤖
pinned: true
image: images/whoami/avatar.jpg
libraries:
- mathjax
tags:
- 
series:
- 
categories:
- 
---
{{< featuredImage >}}

# h1 (Dont use)
---

## h2
Content Can be present within this

### h3
This is subcontent


## Highighting 
Something wihtin this `Highlighted`

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.


## Code

### Tabbed Code
{{< codes java javascript >}}
  {{< code >}}
  ```java
  System.out.println('Hello World!');
  ```
  {{< /code >}}
  {{< code >}}
  ```javascript
  console.log('Hello World!');
  ```
  {{< /code >}}
{{< /codes >}}

### Highlight Code
{{< highlight html >}}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
{{< /highlight >}}


## Blockquote with attribution

> Don't communicate by sharing memory, share memory by communicating.</p>
> — <cite>Rob Pike[^1]</cite>
[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.

## Tables

Tables aren't part of the core Markdown spec, but Hugo supports supports them out-of-the-box.

   Name | Age
--------|------
    Bob | 27
  Alice | 23

## Subscript/Superscript/Keyboard
H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup>: Z<sup>n</sup>

Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.


## Shortcodes

### Button
{{< button href="https://..." >}}button{{< /button >}}


### Box
{{< boxmd >}}
Some markdown contents
{{< /boxmd >}}

### Expand
{{< expand "Expand me" >}}Some **Markdown** Contents{{< /expand >}}

### Tabs
{{< tabs Windows MacOS Ubuntu >}}
  {{< tab >}}
  ### Windows section

  ```javascript
  console.log('Hello World!');
  ```
  {{< /tab >}}

  {{< tab >}}
  ### MacOS section
  Hello world!
  {{< /tab >}}

  {{< tab >}}
  ### Ubuntu section
  Great!
  {{< /tab >}}
{{< /tabs >}}

### Image
{{< img src="/images/shortcodes/notice.png" title="Notice" caption="Zzo Notice shortcode" alt="image alt" width="500px" height="500px" position="center" >}}

### Alerts
warning, success, info, danger
{{< alert theme="warning" dir="ltr" >}}
**this** is a text
{{< /alert >}}

### Notice
success, info, warning, error
{{< notice success >}} 
success
{{< /notice >}}

### Instagram Simple Shortcode

{{< instagram_simple BGvuInzyFAe hidecaption >}}

<br>

### YouTube Privacy Enhanced Shortcode

{{< youtube ZJthWmvUzzc >}}

<br>

### Twitter Simple Shortcode

{{< twitter_simple 1085870671291310081 >}}

## Cool Diagrams

### Viz(TOC)

Set in metadata
libraries:
-viz


```viz-dot
  digraph G {

	subgraph cluster_0 {
		style=filled;
		color=lightgrey;
		node [style=filled,color=white];
		a0 -> a1 -> a2 -> a3;
		label = "process #1";
	}

	subgraph cluster_1 {
		node [style=filled];
		b0 -> b1 -> b2 -> b3;
		label = "process #2";
		color=blue
	}
	start -> a0;
	start -> b0;
	a1 -> b3;
	b2 -> a3;
	a3 -> a0;
	a3 -> end;
	b3 -> end;

	start [shape=Mdiamond];
	end [shape=Msquare];
}

```

### Wavedrom(DLD)
set in front matter
libraries:
-wavedrom

```wave
{ 
  "signal": [ {"name": "CLK", "wave": "p.....|..."},
            {"name":"DAT", "wave":"x.345x|=.x", "data":["A","B","C","D"]},
            {"name": "REQ", "wave": "0.1..0|1.0"},
            {},
            {"name": "ACK", "wave": "1.....|01."}
]}
```

### Chart
front matter
libraries:
-chart


```chart
{
    "type": "bar",
    "data": 
       {
        "labels": ["One", "Two", "Three", "Four", "Five", "Six"],
        "datasets": [{
            "label": "# of Votes",
            "data": [12, 19, 3, 5, 3, 8]
        }]
    }
}
```

```chart
    {
    "type": "line",
        "data": {
            "labels": ["One", "Two", "Three", "Four", "Five", "Six"],
            "datasets": [
            {
                "label": "# of Votes",
                "data": [12, 19, 3, 5, 2, 3],
                "backgroundColor":"transparent",
                "borderColor":"orange"
            },
            {
                "label": "Some other set",
                "data": [15, 8, 13, 5, 5, 9],
                "backgroundColor":"transparent",
                "borderColor":"#44ccff"
            }
            ]
        }
    }
```

### Sequence Diagram

libraries:
-msc


```msc
Alice->Bob: Hello Bob, how are you?
Note right of Bob: Bob thinks
Bob-->Alice: I am good thanks!
```

```msc
Title: Here is a title
A->B: Normal line
B-->C: Dashed line
C->>D: Open arrow
D-->>A: Dashed open arrow
```

### Mermaid

libraries:
-mermaid


```mermaid
graph TD;
  A-->B;
  A-->C;
  B-->D;
  C-->D;
```

```mermaid
sequenceDiagram
  participant Alice
  participant Bob
  Alice->John: Hello John, how are you?
  loop Healthcheck
      John->John: Fight against hypochondria
  end
  Note right of John: Rational thoughts <br/>prevail...
  John-->Alice: Great!
  John->Bob: How about you?
  Bob-->John: Jolly good!
```

```mermaid
graph TD
A[Hard] -->|Text| B(Round)
B --> C{Decision}
C -->|One| D[Result 1]
C -->|Two| E[Result 2]
```

```mermaid
gantt
section Section
Completed :done,    des1, 2014-01-06,2014-01-08
Active        :active,  des2, 2014-01-07, 3d
Parallel 1   :         des3, after des1, 1d
Parallel 2   :         des4, after des1, 1d
Parallel 3   :         des5, after des3, 1d
Parallel 4   :         des6, after des4, 1d
```

```mermaid
classDiagram
Class01 <|-- AveryLongClass : Cool
<<interface>> Class01
Class09 --> C2 : Where am i?
Class09 --* C3
Class09 --|> Class07
Class07 : equals()
Class07 : Object[] elementData
Class01 : size()
Class01 : int chimp
Class01 : int gorilla
class Class10 {
  <<service>>
  int id
  size()
}
```

```mermaid
stateDiagram
[*] --> Still
Still --> [*]
Still --> Moving
Moving --> Still
Moving --> Crash
Crash --> [*]
```

```mermaid
pie
"Dogs" : 386
"Cats" : 85
"Rats" : 15 
```

### Flowchart
libraries:
-flowchartjs


```flowchart
st=>start: Start|past:>http://www.google.com[blank]
e=>end: End|future:>http://www.google.com
op1=>operation: My Operation|past
op2=>operation: Stuff|current
sub1=>subroutine: My Subroutine|invalid
cond=>condition: Yes
or No?|approved:>http://www.google.com
c2=>condition: Good idea|rejected
io=>inputoutput: catch something...|future

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e
```



<br>
