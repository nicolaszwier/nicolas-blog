---
title: Theming with CSS variables
description: Learn how to create themes in your website using CSS variables and Javascript.
date: 2020-10-09 08:30:00
image: /assets/img/css_themes.png
category: css
categoryBackground: "#2979ff"
language: en
---
### Purpose

The purpose of this tutorial is to show how to create themes in your website using CSS and Javascript. It's quite simple and even begginers can apply in their projects, we're gonna start this tutorial creating the variables to set the colors of each theme. I'll only create a light and a dark theme, but you can use the same approach to create every theme you want.

See the final result of this tutorial and let's begin:

Light 🌞
![Image of a website with a light theme](/assets/img/light_theme.png)

Dark 🌚
![Image of a website with a dark theme](/assets/img/dark_theme.png)

### How to start

The first step of this tutorial is to create the HTML, CSS and Javascript files:

```
index.html
style.css
index.js
```

### Setting the CSS variables

Now let's create our CSS variables. I created two CSS classes, the first one to the dark theme, and the next for the light theme. Realize that I repeat the same variables in both classes, but setting different colors. 

```CSS
  .dark {
      --background: #212121;
      --primary: #353535;
      --secondary: #3D5AFE;
      --textColorOnBackground: rgba(255, 255, 255, 0.85);
      --secondaryTextColor: rgba(255,255,255,0.70);
    }
    .light {
      --background: #F2F2F2;
      --primary: #FFF;
      --secondary: #3D5AFE;
      --textColorOnBackground: rgba(0, 0, 0, 0.85);
      --secondaryTextColor: rgba(0,0,0,0.65);
    }
```

After create this two classes, choose one to be the default theme of your website, and put this class in the ```body``` of the HTML file. I'll start with the dark as my default theme.

```HTML
<body class="dark">
  <!-- Other elements goes here -->
</body>
```

### Using the CSS variables

After we created the variables, we can use them in the CSS classes. I've created some components as a navbar and some cards to show how the theme will work. Pay attention to the example bellow, we should use the variables declaring: `var(--nameOfTheVariable)`.

```CSS
  body {
    padding: 0;
    margin: 0;
    min-height: 100vh;
    background-color: var(--background);
    transition: all 0.1s ease-in-out;
    font-family: Arial, Helvetica, sans-serif;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.075);
    height: 60px;
    background-color: var(--primary);
    color: var(--textColorOnBackground);
    padding: 0 1rem;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: 600;
  }

  button {
    padding: 0.5rem 1rem;
    background-color: var(--secondary);
    color: white;
    border-radius: 4px;
    box-shadow: none;
    border: none;
    font-weight: 500;
  }

  main {
    display: flex;
    height: 100%;
    flex-wrap: wrap;
  }

  .card {
    min-width: 200px;
    height: 250px;
    background-color: var(--primary);
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.075);
    border-radius: 11px;
    margin: 1rem;
    flex: 1;
  }

  h1 {
    margin: 1rem;
    color: var(--secondary);
  }

  p {
    margin: 0.5rem 1rem;
    color: var(--secondaryTextColor);
  }
```

### Using Javascript function to toggle the theme

The last step is to create the script to toggle the theme every time the button was clicked. I've created an anounymous function that is called when the script loads, this function set the preffered theme and declares another function at the `window` scope. So this functions will be available to be called in any file of our project. To keep the current theme every time the page is reloaded, we're gonna use the `localStorage`. Check how it's works.

```Javascript
(function () {
    let preferredTheme;
    function setTheme(newTheme) {
        window.__theme = newTheme;
        preferredTheme = newTheme;
        document.body.className = newTheme;
    }
    preferredTheme = localStorage.getItem('theme');
    window.__setPreferredTheme = (newTheme) => {
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    }
    setTheme(preferredTheme || 'dark');
})();
```

Then in the page, I put a button who will call the change theme function when the user clicks on it.

```HTML
 <button id="themeToggle">Toggle theme</button>
```


Após isso, no Javascript adicionei um listener nesse botão, e sempre que clicado vai disparar uma função. Essa função vai definir o novo tema.

```Javascript
const buttonToggle = document.getElementById("themeToggle");
buttonToggle.addEventListener("click", toggleTheme)

function toggleTheme() {
    let isDarkMode = window.__theme === "dark"
    window.__setPreferredTheme(isDarkMode ? "light" : "dark")
}
```

E pronto! Já está funcionando a troca dos temas light/dark em nossa página. Confira como ficou todo o código e o resultado funcionando:

https://codepen.io/nicolaszwier/pen/LYGaopR

A dica de hoje foi bastante simples, porém pode ser útil em algum momento que você precise trabalhar com temas na sua página e queira gravar esse tema para manter sempre o último que o usuário usou.

Se você encontrou algum erro, ou tem alguma sugestão a acrescentar sobre isso, sinta-se a vontade para me avisar.

Obrigado! 

### Links úteis sobre o assunto

* [CSS variables.](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Using_CSS_custom_properties)
