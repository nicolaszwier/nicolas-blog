---
title: Criando temas em seu site utilizando CSS variables
description: Como criar temas em seu site usando CSS variables e Javascript.
date: 2020-07-24 11:10:05
image: assets/img/css-word-lettering-typography-design-illustration-with-line-icons-ornaments-orange_9233-187.jpg
category: css
categoryBackground: "#2979ff"
---
### Objetivo

O objetivo desse tutorial é ensinar a criar temas em seu site usando CSS e Javascript. É um processo bem simples e para isso, vamos utilizar variáveis no CSS para definir as cores de cada tema. Vou criar nesse exemplo apenas os temas light e dark, porém o conceito é o mesmo para criar o tema que você desejar.

Veja abaixo o resultado:

![Coding](/assets/img/codinga.png)

### Como começar

Apenas crie um arquivo html com a estrutura do HTML 5. Se você estiver usando o VS code digite `html:5` e de um enter, automaticamente será criado a estrutura html necessária.

Para facilitar, eu vou criar o css e o javascript dentro desse mesmo arquivo html, porém você pode organizar em arquivos separados em seu projeto.

### Criando as variáveis CSS

Começamos criando as variáveis necessárias em nosso CSS. Criei duas classes, uma para o tema light e outra para o tema dark, resumindo, para cada tema você repete as mesmas variáveis, porém com as cores diferentes:

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

Leia mais sobre variáveis no CSS [aqui](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Using_CSS_custom_properties).

### Criando a estrutura do HTML e usando as variáveis para definir as cores

Após definirmos as variáveis podemos aplicar elas em nossos elementos. Eu customizei alguns componentes como uma navbar e alguns cards para servir de exemplo. Preste atenção no exemplo abaixo como usamos nossas variáveis declaradas anteriormente, devemos usar o ```var(--nomeDaVariavel)```. O CSS ficou assim:


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

### Criando função para definir o tema

O último passo é criar o script para para trocar o tema ao clicar no botão. Criei uma função anônima que sempre é executada ao carregar o script, essa função define o tema preferido e declara outra função na variável ```window``` que fica disponível para acessarmos de qualquer arquivo do nosso projeto. Para gravar o tema atual e mante-lo sempre que reiniciar a página vamos utilizar o localStorage. O resultado ficou assim:

```Javascript
(function () {
    function setTheme(newTheme) {
        window.__theme = newTheme;
        preferredTheme = newTheme;
        document.body.className = newTheme;
    }
    let preferredTheme;
    preferredTheme = localStorage.getItem('theme');
    window.__setPreferredTheme = (newTheme) => {
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    }
    setTheme(preferredTheme || 'dark');
})();

```

Após isso eu adicionei um listener em um botão que sempre que clicado vai disparar uma função. Essa função será responsável por definir o novo tema.

```Javascript
const buttonToggle = document.getElementById("themeToggle");
buttonToggle.addEventListener("click", toggleTheme)

function toggleTheme() {
    let isDarkMode = window.__theme === "dark"
    window.__setPreferredTheme(isDarkMode ? "light" : "dark")
}
```

E pronto! Já está funcionando a troca dos temas light/dark em nossa página. Confira como ficou todo o código e o resultado funcionando [nesse link](https://codepen.io/nicolaszwier/pen/LYGaopR).

