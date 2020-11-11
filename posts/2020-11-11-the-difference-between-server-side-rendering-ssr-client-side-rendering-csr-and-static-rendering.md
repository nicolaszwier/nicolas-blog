---
title: The difference between Server Side Rendering (SSR), Client Side Rendering
  (CSR) and Static Rendering
description: What is SSR, CSR and Static Rendering, and what's the difference between them.
date: 2020-11-11 07:57:17
image: /assets/img/ssrxcsrxstatic.png
category: dev
categoryBackground: "#637a91"
language: en
---
### Introduction

At some point in your job, or your studies, you'll start a new project, then you'll be faced with decisions to decide the architecture and the technologies of the application. 

One of the core decisions is to decide how to implement the rendering of the app, since there are different ways to build a website. 

I'll start talking about Server Side Rendering (SSR), then Client Side Rendering (CSR), and then Static Rendering. 


![Image with the following text: SSR X CSR X Static Rendering](/assets/img/ssrxcsrxstatic.png "Image with the following text: SSR X CSR X Static Rendering")

### Server Side Rendering

SSR is the practice to load all data in the server, and then send to the client, I mean, when you open the website, the server will generate the full HTML, with all the necessary information. Running the logic on the server avoids sending lots of Javascript to the client, which results in a faster page load.

