---
title: How to implement infinite scroll using Javascript
description: Learn a very simple solution to implement infinit scroll using plain Javascript
date: 2020-11-03 07:52:45
image: /assets/img/infinitescroll.png
category: js
categoryBackground: "#ffea00"
language: en
---
### Introduction

Hey there! 👋 In this tutorial, I want to show you how to create a page with infinite scroll using Javascript. Infinite scrolling like Facebook's or Instagram's feed is an amazing feature that you could use to improve the user experience and make your application looks more modern.
It's a simple implementation, and you'll certainly understand how it works! 

![An image to represents data loading](/assets/img/loading-data.png)

First of all, I'll explain how the logic behind it will work, then we'll code the solution. Let's begin.

### How it works

Have you ever realized how the infinite scroll works? 

When you are scrolling the feed from a social media, the application fetches more data when the scrollbar became closer to the bottom.

That's exactly how we'll gonna solve this problem. We're going to detect the scroll bar position at our screen, and, when she is near the bottom, a function will be called. Now, let's code!

### Coding the infite scroll

First, I'm gonna make a piece of HTML and create a element to be our scrollable list. Check the result: 

```HTML
<section class="list" id="list">
    <!-- the list items goes here -->
</section>
```

Just that? Yeah, you're right, it's just a element with an id to be identified later on javascript and a CSS class to style the list. You can put this list wherever you want in your application.

Now, the Javascript:

```Javascript
window.onload = () => {
    (document.getElementById('list')).onscroll = (el) => handleInfiniteScroll(el)
    loadMoreItens();
}
```

What does this code do? Well, first I'm runing my functions when the window loads, in your case, you'll problably need to run this functions in another situations, like when the component is rendered, or when the page loads, etc. As I have a simple script file, I choose to run when the window loads. 

The first line, I'm getting my list element by his id, and then, registering a function to the onscroll event. Which means every time the element is scrolled, this function will be called. Also, I'm calling the `loadMoreItens` function to start the list with some items.

Next, let's create the `handleInfiniteScroll` function.

As this function is called when the list is scrolled, by default the list element is available as a parameter, so we can use this element to handle when the page needs to load more itens. 

The logic is the following: if the height of the list, plus the position of the scroll to the top is greater or equal to the scroll height (including content not visible on the screen due to overflow), then load more itens: 

```Javascript
const handleInfiniteScroll = (el) => {
    const element = el.srcElement;
    if ((element.offsetHeight + Math.ceil(element.scrollTop)) >= element.scrollHeight) {
        loadMoreItens()
    }
}
```

And at last, let's create the `loadMoreItens` function. 

As this is just a simple tutorial to show how to create an infinite scroll, I'll just make a `for` loop to create some elements on the list. In a real scenario, this function would be responsable for perform an API request, or fetch data in a database, whatever. Then, you could append this new data on the list. 

The function looks like this:

```Javascript
var currentItem = 1
const loadMoreItens = () => {
    const list = document.getElementById('list')
    for (let i = 0; i < 11; i++) {
        const item = document.createElement("article")
        item.className = 'list-item'
        item.innerHTML = `Item list ${currentItem++}`
        list.appendChild(item)
    }
}
```

### Final result

Check the working demo on this codepen

https://codepen.io/nicolaszwier/pen/LYZBbyM

This was a very simple example of how to implement infinite pagination with plain Javascript. You could easily get the idea and use with any framework.

If you found some mistake, or have any suggestion for me to improve this tutorial, please let me know. 

Thank's for reading! See you in the next post! Bye