---
title: "Dependency Injection in PHP"
date: 2020-08-05T22:05:10+05:30
draft: false
description: "When our class needs object of other class it is called dependency injection"
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

When our class need object of other class.

Suppose we have classes : `logger`(displays a message)        `UserProfile`(Needs to use logger's log function)
- Line-11 : We make variable $logger in UserProfile point to object of logger class.
- Line-15,19,27 : We use $logger to access log function.

3 steps : Initializing Dependency(Line 23),Injecting Dependency(Line 24) and Using Dependency(Line 27).

{{<highlight php>}}
class logger{
public function log($msg){
    echo "Log : $msg";
  }
}

class UserProfile{
  public $logger;//This variable will store object of logger
  
  public function __construct($logger){
    $this->logger=$logger;//logger variable points to object of logger 
  }  

  public function createUser(){
    $this->logger->log("User Created");//using variable to acces method of logger
  }

  public function deleteUser(){
    $this->logger->log("User Deleted");
  }
}

$logger=new logger();//Initialize dependecy
$profile=new UserProfile($logger);//Inject Dependecy via constructor
$profile->createUser();
$profile->deleteUser();
$profile->logger->log("Hello");//using dependecy
{{</highlight>}}