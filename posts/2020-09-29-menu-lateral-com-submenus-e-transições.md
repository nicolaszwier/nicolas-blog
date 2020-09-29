---
title: "Menu lateral com submenus e transições "
description: Aprenda a desenvolver um menu lateral do zero usando HTML, CSS e
  Javascript e a animar as trocas entre menus com CSS.
date: 2020-09-28 09:35:14
image: /assets/img/animated-sidebar-cover.png
category: js
categoryBackground: "#ffea00"
---
### Introdução

Fala pessoal! Hoje venho aqui com um tutorial ensinando como criar uma sidebar muito massa com submenus e transições entre as trocas de menu principal e secundário.

Vou ensinar a criar esse componente do zero usando HTML, CSS e Javascript, esse é um tutorial de nível intermediário, porém vou explicar da forma mais simples possível, e independente do seu nível atual, com certeza conseguirá fazer. Vamos lá!

### Criando a estrutura HTML

O HTML será a parte mais simples, pois iremos criar os menus e os submenus dinamicamente pelo javascript, e as animações no CSS. Então crie a estrutura básica de um arquivo HTML, e então coloque a seguinte tag que será nossa sidebar:

```HTML
<aside id="sidebar" class="sidebar-wrapper">

</aside>
```

Apenas criei um elemento usando a tag `aside`, defini um id para ela e usei a classe `sidebar-wrapper`, que ainda vamos criar lá no CSS.

### Criando as classes de transições no CSS

Na sequência vou criar algumas classes que vamos usar para as transições dos menus:

```CSS
.menu-primary-enter {
    transform: translateX(-110%);
}

.menu-primary-enter-active {
    transform: translateX(0%);
    transition: all var(--speed) ease;
}

.menu-primary-exit {
    position: absolute;
    top: 0;
}

.menu-primary-exit-active {
    transform: translateX(-110%);
    transition: all var(--speed) ease;
}

.menu-secondary-enter {
    transform: translateX(110%);
}

.menu-secondary-enter-active {
    transform: translateX(0%);
    transition: all var(--speed) ease;
}

.menu-secondary-exit {
    position: absolute;
}

.menu-secondary-exit-active {
    transform: translateX(300px);
    transition: all var(--speed) ease;
}
```

Funciona da seguinte forma: ao fazer a troca do menu principal para o menu secundário, vamos manipular essas classes pelo javascript. O menu principal que está ativo vai receber a classe `.menu-primary-exit` e `.menu-primary-exit-active`, então o elemento recebe uma posição absoluta e é movido -110% no eixo X usando a propriedade `transform: translateX(-110%)`. 

E então no menu secundário que vai entrar na tela colocamos as seguintes classes: `.menu-secondary-enter`, que inicia o elemento em uma posição de 110% para a direita, e a classe `.menu-secondary-enter-active`, que move ele para a posição 0% usando o transform, também usamos a propriedade `transition`, para que o menu entre de forma suave na tela.

O que acabamos de vez, é quando vamos fazer a transição do menu principal para um menu secundário. Mas e para fazer ao contrário? Navegar do menu secundário para o principal? 

Fazemos a mesma coisa, porém usando as outras classes. Primeiro tiramos o menu secundário ativo colocando as classes `.menu-secondary-exit` e `.menu-secondary-exit-active`, e então ativamos novamente o menu principal com as duas classes que sobraram: `.menu-primary-enter` e `.menu-primary-enter-active`.

Pareceu confuso para você? A imagem a seguir deixa mais claro como é o fluxo para a troca do menu principal para o secundário:

![Diagrama explicando o fluxo de troca de menus da sidebar](/assets/img/menus.png "Diagrama 1")


E agora o fluxo de troca do menu secundário voltando para o menu principal:


![Diagrama explicando o fluxo de troca de menus da sidebar](/assets/img/menus2.png "Diagrama 2")

Agora ficou mais claro, certo? O próximo passo é criar o código que vai construir os menus e então as funções para navegar entre eles. Vamos lá!

### Construindo os menus dinamicamente usando Javascript

O primeiro passo é criar a lista com os menus e submenus, para isso criei um array no javascript com vários objetos dentro. Cada objeto é um item de menu que será criado e nele temos todas as informações do menu. Ficou assim:

```Javascript
const menu = [
    {
        menu: 'aliments', label: 'Aliments', icon: '🍕', click: goToChild, child: [
            { parent: 'aliments', menu: 'back', label: 'Back', icon: '<', click: backToParent },
            { parent: 'aliments', menu: 'pizza', label: 'Pizza', icon: '🍕' },
            { parent: 'aliments', menu: 'hamburguer', label: 'Hamburguer', icon: '🍔' },
            { parent: 'aliments', menu: 'bacon', label: 'Bacon', icon: '🥓' },
        ],
    },
    {
        menu: 'colors', label: 'Colors', icon: '🖌', click: goToChild, child: [
            { parent: 'colors', menu: 'back', label: 'Back', icon: '<', click: backToParent },
            { parent: 'colors', menu: 'blue', label: 'Blue', icon: '🔵' },
            { parent: 'colors', menu: 'yellow', label: 'Yellow', icon: '🟡' },
            { parent: 'colors', menu: 'red', label: 'Red', icon: '🔴' },
            { parent: 'colors', menu: 'green', label: 'Green', icon: '🟢' },
        ]
    }
]
```

Repare que o menu principal possui dois itens, e cada um deles possui uma propriedade child, que recebe mais um array com o itens do submenu.

Agora vamos desenvolver a função responsável por pegar esse array e criar os elementos HTML. 

```Javascript
const buildMenu = () => {
    // pega o elemento sidebar
    const sidebar = document.getElementById("sidebar")
    // cria um elemento ul que será o menu
    const mainMenu = document.createElement("ul");
    // define uma classe e um id para esse elemento
    mainMenu.className = 'menu'
    mainMenu.id = 'menu'
    // e então faz um map do nosso array
    menu.map(el => {
        // para cada elemento do array vai criar um novo elemento usando a tag li
        let li = document.createElement("li");
        // define a classe que esse item de menu recebe
        li.className = 'menu-item'
        // e dentro desse li criamos o seguinte trecho html
        li.innerHTML = `
            <div class="icon">${el.icon}</div>
            <span class="label">${el.label}</span>
            <div>></div>
        `
        li.onclick = el.click
        li.dataset.child = el.menu

        mainMenu.appendChild(li)
        createChildMenu(el.child)
    })
    sidebar.appendChild(mainMenu)

}
``` 

