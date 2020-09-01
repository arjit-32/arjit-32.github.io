---
title: "DOMDocument Class in PHP"
date: 2020-09-01T22:05:10+05:30
draft: false
description: "We can use DOMDOcument class in PHP to create and get HTML content dynamically"
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

Represents an entire HTML or XML document. It serves as the root of the document tree. Helps in parsing and creating xml,html

## Loading HTML
`file_get_contents(URL) `: Converts html content in URL to String.
`loadHTML(file_get_contents(URL)) `: Loading HTML string with DomDocument object.

{{<highlight php>}}
doc=new DomDocument();
//convert html of a URL to string using file_get_contents
//loading HTML string
$doc->loadHTML(file_get_contents(URL));
{{</highlight>}}


## Functions to get HTML contents

{{<highlight php>}}
$doc->getElementsById("idName");

//Gets all anchor tags inside Document
$doc->getElementsByTagName("a");

//Gets all src attributes in img in whole doc
$doc->getElementsByTagName("img")->getAttribute('src');
{{</highlight>}}


## Creating and Adding elements in HTML Doc

{{<highlight php>}}
$div = doc->createElement('div');//create a div
$div_clone = $div->cloneNode();//Cloning div to div_clone
$doc->appendChild($div);//Appending div to Document
$doc->saveHTML();//Saves document
{{</highlight>}}


## Traversing all entries of a element
`item() `: Gets node at certain index within DOMNodeList object.
`nodeValue `: Gets value at that node.

{{<highlight php>}}
<?php

$doc = new DOMDocument;
$doc->load('arjit.html');

$items = $doc->getElementsByTagName('a');

for ($i = 0; $i < $items->length; $i++) {
    echo $items->item($i)->nodeValue . "\n";
}
/*
foreach ($items as $item) {
    echo $item->nodeValue . "\n";
}
*/

?>
{{</highlight>}}

