---
title: "File Handling and Streams in PHP"
date: 2020-08-05T22:05:10+05:30
draft: false
description: "How we handle files in PHP | Streams in PHP"
draft: false
author: Arjit Sharma
authorEmoji: 🤖
pinned: false
image: images/whoami/avatar.jpg
tags:
- Web-Development
- PHP
series:
- 
categories:
- Web-Development
---

`Note` :
- ftell($file) : Tells where file pointer is
- When a file is too big ,u cant read entire file in memory in single go then u need to read it in chunks.

## Streams 
A stream is a resource object which exhibits streamable behavior. That is, it can be read from or written to in a linear fashion.
`We use Streams to provide data on demand.( Providing data in chunks )`

## Opening a file in PHP
{{<highlight php>}}
$file = fopen(__DIR__ . '/empList.txt','r+') or die("Unable to open");
        //r+ : read-write mode and others like,w,r,a
{{</highlight>}}

## Reading a file in PHP

### Reading 1 line
{{<highlight php>}}
$employee = fgets($file);
echo $employee;
{{</highlight>}}

### Read whole file
{{<highlight php>}}
//Reading in 1 call(won't work for big files)
$fileData = fread($file,filesize($file));

//Reading line by line
while(!feof($file)){
    echo fgets($file) . "<br>";
}
{{</highlight>}}

### Read file to string
Using <mark>file_get_contents()</mark>
{{<highlight php>}}
$text = file_get_contents("files/my_file.txt");
echo $text;
{{</highlight>}}


## Writing to a file
{{<highlight php>}}
$newFile = fopen("newFile.txt", "w") or die("Unable to open file");
$line = "Hello World, Add this line to file";
fwrite($newFile,$line);
{{</highlight>}}


## Deleting a file
{{<highlight php>}}
unlink("file.txt");
{{</highlight>}}

## Stream Wrappers
Tells the stream how to handle specific protocols. ex-https,ftp,zip

## Stream Context
Set of parameters or wrapper specific options
<mark>stream_context_create() </mark>: Creates and returns a stream context with any options supplied in options preset.

{{<highlight php>}}
<?php
$opts = array(
'http'=>array(
'method'=>"GET",
'header'=>"Accept-language: en\r\n" .
"Cookie: foo=bar\r\n"
)
);

$context = stream_context_create($opts); ?>
{{</highlight>}}

