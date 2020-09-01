---
title: "What are Static Site Generators"
date: 2020-09-01T17:50:12+05:30
draft: true
description: "Static site generator (SSG) bridges the gap between static HTML sites and CMS based sites(like wordpress). It provides better performance of static sites and we do not have to write HTML for content of our site."
draft: true
author: Arjit Sharma
authorEmoji: 🤖
pinned: false
image: 
tags:
- Web-Development
series:
- Static Site Generator
categories:
- Web-Development
---

## Introduction

Websites can be of 2 types :

- `Static` - When user requests a file, server sends the file and user can see it. Every page is hand coded in html.
- `Dynamic` - When user requests, content is generated and server builds the page then sends it to the user. Generally managed by CMS like wordpress,joomla etc

Static site generator (SSG) bridges the gap between static HTML sites and CMS based sites(like wordpress). It provides better performance of static sites and we do not have to write HTML for content of our site .

> Think of a static site generator as a script which takes in data, content and templates, processes them, and outputs a folder full of all the resultant pages and assets. 
> -Phil Hawksworth

In short SSGs bring good of both worlds together.

## Why to use SSG ?

### Security

Static websites do not have a database and all our server does is returns the file asked by user.

Our server becomes dumb(doesnt use logic to construct page) so no security issue to exploit.

### Performance

Static websites perform better and load faster because page is'nt constructed at run time.

### Version Control

Our website can live in a Version controlled enviroment, meaning if you make a mistake you can go back to previous version in one command.

### Scaling

When number of users on a dynamic website increase it would mean to efficiently scale the website to ensure every users page is served as quickly as possible while for static sites thats not a issue because our work is pre-done. Our website pages are already made and we just have to provide them.

### Price

Static websites are obviously cheaper because we dont have to buy expensive server space as in the case of dynamic websites. We can even host our website on services like github or netlify.

### Caching

Caching  is easier with static sites as any URL will return same HTML content until and unless that file is updated by site owner. But with dynamic sites content changes all the time so chaching becomes difficult.


## Features in SSGs

1. Templating : Avoiding repeatation of code. Ex - Header and Footer templates can be created and included in every page.
2. Markdown Support : We can write our content in Markdown which is pretty basic and then we can focus just on the content.
3. Metadata - Content on the website can be broken into logical pieces like Tags,Categories etc.
4. Building the Site - Most SSGs allow to build complete site in 1 command. Ex- Jekyll uses `jekyll build` which creates _site folder containing the whole website, while Hugo uses `hugo` command to build whole project in public folder.


## Popular SSGs to choose from

According to [Staticgen](https://www.staticgen.com/)

1. [Gatsby](https://www.gatsbyjs.org/) - Free and open source framework based on React that helps developers build blazing fast websites and webapps
2. [Jekyll](https://jekyllrb.com/) - Written in Ruby it is most popular framework, and helps to create websites 
3. [Hugo](https://gohugo.io/) - Based on Go language. It boasts on being fastest framework for building sites.
4. [Next.js](https://nextjs.org/) - Based on React it helps us make highly customized sites and supports server side rendering
5. [Nuxt.js](https://nuxtjs.org/) - Based on VueJS it also supports server side rendering.


## JAMStack

> "A modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup"
> -<cite>Mathias Biilmann (CEO & Co-founder of Netlify)</cite>

The above mentionsed frameworks are based on JAMstack. Now what is [JAMstack](https://jamstack.org/)?

JAM stands for Javascript, API and Markup.
Now this is not just static sites, they have server side capabilities too with the help of APIs and Javascript.Ex- Having a comment section in a blog or having a shopping cart etc.


## Why SSGs are taking off now ??

Concept of SSG is'nt new so why is it taking off now.

Only possible reason is with advancement of browsers and their ability to deal with APIs and Javascript made it possible to go serverless. Things that required us to go dynamic in early 2000s can now be done using APIs. Example-

Adding comments to site can be done using Disqus.

Search can be done using Swifttype.

Focus on performance has increased and we cannot simply wait for 5sec for a website to load. With the requirement of faster sites  developers had to move to SSGs.

---
_Referrences_ &rarr;

1. [Phil Hawksworth article](https://www.netlify.com/blog/2020/04/14/what-is-a-static-site-generator-and-3-ways-to-find-the-best-one/)

2. [Netguru - What are static site generators](https://www.netguru.com/blog/what-are-static-site-generators#:~:text=A%20static%20site%20generator%20is,easy%20to%20consume%2C%20such%20as%20) .

3. [SmashingMagazine - Modern static generator is next big thing](https://www.smashingmagazine.com/2015/11/modern-static-website-generators-next-big-thing/)

---