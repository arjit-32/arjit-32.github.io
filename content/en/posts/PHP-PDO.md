---
title: "PDO in PHP"
date: 2020-09-01T22:05:10+05:30
draft: false
description: "PDO stands for PHP Data Objects. It is PHP extension to access database."
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
- 
---

PDO stands for PHP Data Objects (Object Oriented). It is a PHP Extension to access database.Unlike mysqli it works with multiple databases. There are 3 main Classes are :
⇒ `PDO` - Connection between PHP and DB
⇒ `PDOStatement` - Prepared Statement
⇒ `PDOException` - Represent error raised by PDO

## PDO Basics
We create PDO Object,execute a query and fetch result,either in associated array format(FETCH_ASSOC) or object format(FETCH_OBJ )
`Line 11 `: - Creating PDO Object ( $pdo )
`Line 14 `: - Executing Query using $pdo→query( sql )
`Line 17 `: - Fetching result using <mark>fetch()</mark> method
`Line 18 `: - As <mark>FETCH_ASSOC</mark> class is used so we get the query result in associated array format and that is why column 'title' is accessed using array referrencing.

{{<highlight php>}}
<?php
$host = "localhost";
$user = "root";
$password = "";
$dbname = "test";

//Set DSN = Data Source Name,describes connection to database
$dsn = "mysql:hosts=".$host.";dbname=".$dbname;

//Creating PDO Instance
$pdo = new PDO($dsn, $user, $password);

//PDO Query
$stmt = $pdo->query("SELECT * FROM posts");

//Fetching Rows in Associated array format
while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
    echo $row['title'] . "";
}
?>
{{</highlight>}}


## Fetching rows in Object Format
<mark>PDO::FETCH_OBJ</mark> can be used to get query result in form of objects then in order to access columns we will use → symbol

{{<highlight php>}}
while($row = $stmt->fetch(PDO::FETCH_OBJ)){
    echo $row->title . "";
}
{{</highlight>}}


## Set FETCH_OBJ as default
After specifying the default format of result we wont need to provide argument in fetch method.

{{<highlight php>}}
$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE,PDO::FETCH_OBJ)
while($row = $stmt->fetch())//Now this will work
{--}
{{</highlight>}}


## Prepared Statements
Why to use ?
- Helps write parametric queries,i.e same query can be used again and again.
- Faster
- Prevents SQL injections

### Using indexed parameters
{{<highlight php>}}
$author = "Arjit";
$sql = "SELECT * FROM posts WHERE author = ?";
$stmt = $pdo->prepare($sql);

//array of variables is sent in execute
$stmt->execute([$author]);

//fetchall fetches all result, while fetch gives 1
$posts = $stmt->fetchAll(PDO::FETCH_OBJ);

foreach($posts as $post){
    echo $post->title. "";
}
{{</highlight>}}

### Using named parameters

{{<highlight php>}}
$author = "Arjit";
$is_published = true;

$sql = "SELECT * FROM posts WHERE author = :author and is_published = :is_published";
$stmt = $pdo->prepare($sql);

$stmt->execute(['author' => $author,"is_published"=>$is_published]);

$posts = $stmt->fetchAll(PDO::FETCH_OBJ);

foreach($posts as $post){
    echo $post->title. "";
}
{{</highlight>}}

---

## Basic Operations in PDO

### Counting no. of rows

{{<highlight php>}}
$author = "Arjit";
$stmt = $pdo->prepare("SELECT * FROM posts WHERE author = ?");
$stmt->execute([$author]);
$count = $stmt->rowCount();
echo $count;
{{</highlight>}}


### Inserting in database

{{<highlight php>}}
$title = "Post 4";
$body = "This is a post 4";
$author = "Singham";

$sql = "INSERT INTO posts(title,body,author) VALUES(?,?,?)";
$stmt = $pdo->prepare($sql);
$stmt->execute([$title,$body,$author]);
echo "Post Added";
{{</highlight>}}


### Updating in database

{{<highlight php>}}
$title = "Post 4 : Updated";
$id = "4";

$sql = "UPDATE posts SET title = ? WHERE id = ?";
$stmt = $pdo->prepare($sql);
$stmt->execute([$title,$id]);
echo "Post Updated";
{{</highlight>}}


### Deleting in database

{{<highlight php>}}
$id = "4";

$sql = "DELETE FROM posts WHERE id = ?";
$stmt = $pdo->prepare($sql);
$stmt->execute([$id]);
echo "Post Deleted";
{{</highlight>}}


### Searching in database

{{<highlight php>}}
$search = "%title%";
$sql = "SELECT * FROM posts WHERE title LIKE ?";
$stmt = $pdo->prepare($sql);
$stmt->execute([$search]);
$posts = $stmt->fetchAll(PDO::FETCH_OBJ);

foreach($posts as $post){
    echo $post->title. "";
}
{{</highlight>}}
