---
title: Server Side Rendering (SSR), vs Client Side Rendering (CSR) vs Static Rendering
description: What is SSR, CSR and Static Rendering, and what's the difference between them.
date: 2020-11-18 08:30:45
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

The diagram below explains how it works:

![Server side rendering diagram](/assets/img/ssr-diagram.png "Server side rendering diagram")

The user opens the page, then the browser request to the server the content to show to the user. The server will fetch all the data on the API, process this data, and then generates the full HTML with all data, ready to show to the user. Also, this technique helps with the Javascript processing costs, as it avoids additional round-trips for data fetching and templating on the client.

#### Pros

* Great for SEO.
* Better performance.
* Avoids processing costs on the client-side, as all the data is generated on the server.

#### Cons

* Slower Time to First Byte (TTFB)
* Fully reloads the app on route changes.

### Client Side Rendering


![Client side rendering diagram](/assets/img/csr-diagram.png "Client side rendering diagram")


### Static Rendering


![Static rendering diagram](/assets/img/static-rendering-diagram.png "Static rendering diagram")
