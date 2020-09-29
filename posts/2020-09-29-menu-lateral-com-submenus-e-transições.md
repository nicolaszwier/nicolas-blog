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

Apenas criei um elemento usando a tag `aside`, defini um id para ela e usei a classe `sidebar-wrapper`, que posteriormente vamos criar lá no CSS.

### Criando as classes de transições no CSS

Na sequência vou criar algumas classes que vamos usar para as transições dos menus:

```CSS
:root {
    --speed: 400ms;
}

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

O que acabamos de ver, é quando vamos fazer a transição do menu principal para um menu secundário. Mas e para fazer ao contrário? Navegar do menu secundário para o principal? 

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
        parent: 'aliments',
        label: 'Aliments',
        icon: '🍕',
        click: goToChild,
        child: [
            { parent: 'aliments', label: 'Back', icon: '<', click: backToParent },
            { parent: 'aliments', label: 'Pizza', icon: '🍕' },
            { parent: 'aliments', label: 'Hamburguer', icon: '🍔' },
            { parent: 'aliments', label: 'Bacon', icon: '🥓' },
        ],
        rightIcon: '>',
    },
    {
        parent: 'colors',
        label: 'Colors',
        icon: '🖌',
        click: goToChild,
        child: [
            { parent: 'colors', label: 'Back', icon: '<', click: backToParent },
            { parent: 'colors', label: 'Blue', icon: '🔵' },
            { parent: 'colors', label: 'Yellow', icon: '🟡' },
            { parent: 'colors', label: 'Red', icon: '🔴' },
            { parent: 'colors', label: 'Green', icon: '🟢' },
        ],
        rightIcon: '>',
    }
]
```

Repare que o menu principal possui dois itens, e cada um deles possui uma propriedade child, que recebe mais um array com o itens do submenu.

Alguns elementos também possuem a propriedade 'click', essa propriedade recebe uma função (vamos criá-la mais tarde). No momento que formos montar o menu, o item de menu correspondente a esse objeto que possui essa propriedade vai receber essa função no evento ```onclick```. Se você quiser usar links ao inves de uma lista que recebe funções, você pode mudar essa propriedade para, por exemplo, ```path: 'https://nicolasz.dev'``` e passar esse valor para a propriedade href do link.

Agora vamos desenvolver a função responsável por pegar esse array e criar os elementos HTML. 

```Javascript
const buildMenu = () => {
    const sidebar = document.getElementById("sidebar")
    const mainMenu = document.createElement("ul");
    mainMenu.className = 'menu'
    mainMenu.id = 'menu'
    menu.map(el => {
        let li = createMenuItem(el)
        mainMenu.appendChild(li)
        createChildMenu(el.child)
    })
    sidebar.appendChild(mainMenu)
}
``` 

O que a função ```buildMenu``` faz? Vou explicar: primeiro pegamos o elemento sidebar que já existe no DOM, é dentro desse elemento que vamos injetar nosso menu. Então criamos um elemento 'ul' e definimos uma classe e um id para ele (essa classe ainda vamos criar no css). Em seguida é feito um map no array ```menu``` onde para cada elemento desse array chamamos uma função que cria o item do menu e chamamos outra função que cria o menu filho. Por último fazemos um ```appendChild``` desse menu dentro da sidebar.

Agora vamos criar a função ```createChildMenu```, que executamos dentro da função anterior.
Essa função é muito parecida com a outra, apenas alguns detalhes que mudam:

```Javascript
const createChildMenu = (items) => {
    const sidebar = document.getElementById("sidebar")
    const menu = document.createElement("ul");
    menu.className = 'menu menu-secondary-exit menu-secondary-exit-active'
    menu.id = items[0].parent
    items.map(el => {
        let li = createMenuItem(el)
        menu.appendChild(li)
    })
    sidebar.appendChild(menu)
}
```

Novamente pegamos a sidebar e criamos um novo elemento. A diferença agora é que além da classe 'menu' o elemento recebe também as classes de menu secundário: ```menu menu-secondary-exit menu-secondary-exit-active```. O id do elemento não será mais 'menu', mas sim o nome do menu pai dele, fazemos isso acessando o primeiro elemento do array ```items``` e usando a propriedade ```parent```.
E a outra diferença é que nessa função não usamos o array menu para fazer o map e criar os elementos, mas fazemos no array items que é recebido como argumento dessa função.

Agora vamos criar a função ```createMenuItem```, que chamamos nas duas funções anteriores. Essa função é responsável por criar nossos itens de menu. Veja na sequência:

```Javascript
const createMenuItem = (item) => {
    let li = document.createElement("li");
    li.className = 'menu-item'
    li.innerHTML = `    
            <div class="icon">${item.icon}</div>
            <span class="label">${item.label}</span>
            <div>${item.rightIcon || ''}</div>
        `
    li.dataset.id = item.parent
    li.onclick = item.click

    return li
}
```

Essa função recebe um elemento do array como parâmetro, e a responsabilidade dela é nos devolver um elemento ```li``` pronto para injetar dentro do menu.

Caso você queira usar links ao invés de funções para os itens de menu, você pode aqui criar uma tag ```a``` dentro do ```li``` e definir o href como ```a.href = item.path```.

Se você executar a função ```buildMenu``` agora, poderá ver que o menu já está montado na view, porém a navegação entre os menus ainda não funciona, então é isso que vamos fazer agora.

### Criando funções de navegação entre os menus

Em seguinda vamos criar as duas funções que já estão sendo usadas la no nosso array de menus, ```goToChild``` e ```backToParent```, uma para navegar do menu principal para o menu secundário, e outra do menu secundário para o principal. Essas funções manipulam as classes CSS que criamos anteriormente, confira:

```Javascript
function goToChild(event) {
    
    const { id } = event.currentTarget.dataset

    let moveIn = document.getElementById(id);
    let moveOut = document.getElementById("menu");

    moveIn.className = 'menu menu-secondary-enter menu-secondary-enter-active'
    moveOut.className = 'menu menu-primary-exit menu-primary-exit-active'

}

function backToParent(event) {

    const { id } = event.currentTarget.dataset

    let moveIn = document.getElementById("menu");
    let moveOut = document.getElementById(id);

    moveIn.className = 'menu menu-primary-enter menu-primary-enter-active'
    moveOut.className = 'menu menu-secondary-exit menu-secondary-exit-active'

}
```

Nas duas funções recuperamos o id que definimos dentro do dataset do elemento lá na função que criava os menus.

Na primeira função, o menu que vai sair da tela é o menu principal, chamei ele de ```moveOut```, e o menu que vem para a tela chamei de ```moveIn```. 

Na segunda função, o menu que vai sair da tela é o menu secundário, e o que vem para a tela é o menu principal. Agora é bem simples, basta definir as classes corretas dos menus que estão entrando e saindo da tela e a navegação já vai estar funcionando.

Por último, vamos estilizar nosso menu usando CSS.


### Estilizando o menu usando CSS

Durante o desenvolvimento do menu, você pode ter percebido que definimos algumas classes para os elementos. Agora é hora de criá-las.

```CSS
body {
    padding: 0;
    margin: 0;
    min-height: 100vh;
    width: 100vw;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.sidebar-wrapper {
    padding: 0 0;
    overflow: hidden;
    border-right: 1px solid rgba(0, 0, 0, 0.089);
    width: 300px;
    min-height: 100vh;
    position: relative;
    will-change: width;
}

.menu {
    overflow: hidden;
    transition: all linear 0.4s;
    padding: 10px;
}

.menu-item {
    width: 280px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 250ms;
    padding: 0.4rem 1rem;
    font-weight: 600;
    font-size: 1.1rem;
    margin-bottom: 0.1rem;
    border-radius: 11px;
}

.menu-item:hover {
    background-color: rgba(0, 0, 0, 0.055);
    color: #3d5afe;
    cursor: pointer;
}

.menu-item > .icon {
    background-color: rgba(0, 0, 0, 0.055);
    border-radius: 50%;
    height: 40px;
    margin-right: 1rem;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.menu-item > .label {
    flex: 1;
}
```

Se você atualizar a página após adicionar o CSS vai perceber que o visual do menu mudou completamente. Agora sinta-se a vontade para estilizar seu menu da maneira que preferir. 😉
Você também pode usar essa mesma ideia para outros componentes de sua aplicação, como um menu dropdown.

### Resultado final 

Confira como ficou todo o código e a demo:

https://codepen.io/nicolaszwier/pen/vYGPxyd

Por hoje é isso. Caso ficou com alguma dúvida fique a vontade para deixar um comentário ou me mandar uma mensagem. Obrigado e até a próxima! 😀   

