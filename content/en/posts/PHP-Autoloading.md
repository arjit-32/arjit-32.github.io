---
title: "Autoloading in PHP"
date: 2020-09-01T22:05:10+05:30
draft: false
description: "Autoloader is a strategy for finding PHP class or interface and loading it at run time when a class is instantiated. Better than writing multiple require and include as they do not scale well and is a clutter"
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

Autoloader is a strategy for finding PHP class or interface and loading it at run time when a class is instantiated. Better than writing multiple require and include as they do not scale well and is a clutter.

Make 2 files ⇒ 
- `Greet.php`(This is the class file we want to load) 
- `mainFile.php`(It will consume/use Greet.php)
<mark> Note: Keep file name and class name same. </mark>

{{< codes Greet.php mainFile.php >}}
  {{< code >}}
  ```php
<?php
class Greet{
    public function sayHello(){
        echo "Hello World From autoload";
    }
}
?>
  ```
  {{< /code >}}
  {{< code >}}
  ```php
<?php
spl_autoload_register(function($class){
    require_once "{$class}.php";
});

$ob = new Greet();
$ob->sayHello();//Output : Hello World From autoload
?>

  ```
  {{< /code >}}
{{< /codes >}}