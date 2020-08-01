---
title: Modal responsivo com animação e listener para fechar o modal quando
  clicar fora dele
description: Como criar um modal responsivo usando HTML, CSS e Javascript usando
  animações e criando uma função para fechar o modal quando clicar fora dele.
date: 2020-08-01 11:37:11
image: /assets/img/css_themes.png
category: js
categoryBackground: "#ffea00"
---
### Introdução

Olá! Hoje vamos aprender a criar um modal usando Javascript, HTML e CSS. Vamos implementar uma animação ao abrir e também uma função que fica "observando" os cliques quando o modal está aberto para fechá-lo quando detectar um clique fora dele. 

Vai funcionar da seguinte forma: 

1. Os elementos do modal inicializam com `display: none;`.
2. Ao clicar em um botão será chamado uma função altera o display do modal para `display: flex;` e cria um listener que fica observando os cliques.
3. Quando for detectado um click fora da area do modal ele será fechado e o listener removido.

Ah, e esse conceito do listener para fechar o elemento ao clicar fora dele que você vai aprender aqui pode ser usado em outras situações também, como menus dropdown, sidebars, dialogs e assim por diante.

Vamos lá!

### Criando os elementos HTML do modal

Nossa estrutura do modal é bastante simples. Criei um elemento com a classe `modal-overlay` que ocupa a tela inteira e que será nosso background quando o modal estiver aberto.

E então e modal com as sessões `header`, `content` e `footer`.

E por último um botão para abrir o modal. Ficou assim:

```HTML
<div class="modal-overlay" id="overlay">
   <div class="modal" id="modal">
      <div class="modal-header">
         Modal title
      </div>
      <div class="modal-content">
         content
      </div>
      <div class="modal-footer">
         footer
      </div>
   </div>
</div>

<button onclick="openModal()">Open modal</button>
```

### Criando o CSS

Primeiro a classe `modal-overlay` que será o background. 

```CSS
.modal-overlay {
    background-color: rgba(0, 0, 0, 0.342);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    display: none;
    align-items: center;
    justify-content: center;
    overflow-y: auto;
}

```

E então a estrutura do modal. Fique a vontade para customizá-lo da forma que preferir.

```CSS
.modal {
    margin: 1rem;
    width: 100%;
    max-width: 600px;
    height: auto;
    min-height: 500px;
    background-color: white;
    border-radius: 11px;
    display: none;
    flex-direction: column;
    overflow: hidden;
}

.modal-header {
    background-color: rgba(0, 0, 0, 0.041);
    padding: 1rem;
}
.modal-content {
    padding: 0.5rem 1rem;
    flex: 1;
}
.modal-footer {
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.041);
}
```

### Criando as funções para abrir e fechar o modal

Agora vamos criar as funções responsáveis por abrir e fechar o modal ao clicar fora dele:

```Javascript
// função que o listener vai executar ao clicar quando o modal está aberto
const handleClickOutside = () => {}

// abre o modal e cria o listener
const openModal = () => {}
``` 

Então, vamos criar o código da função `openModal`

```Javascript
const openModal = () => {
    let overlay = document.getElementById("overlay");
    let modal = document.getElementById("modal");
    overlay.style.display = 'flex'
    modal.style.display = 'flex'
    setTimeout(() => { document.addEventListener('click', handleClickOutside, false) }, 200);
}
```
Essa função tem duas variáveis que recebe os elementos `#overlay` e `#modal`. 
O primeiro passo é mostrar os elementos na tela, então eu defino o display deles como `flex`. (Flexbox é usado para posicionamento dos elementos na tela, no final desse tutorial deixei um link caso queira ler mais sobre esse assunto).

Continuando, adicionei um click listener no document, que ao executar vai chamar nossa função `handleClickOutside`. Agora vamos definir o que essá função vai fazer:

```Javascript
const handleClickOutside = (event) => {
    let overlay = document.getElementById("overlay");
    let modal = document.getElementById("modal");

    if (!modal.contains(event.target)) {
        modal.style.display = 'none';
        overlay.style.display = 'none';
        document.removeEventListener('click', handleClickOutside, false);
    }
}
```

Essa função recebe como argumento a variável `event`, vamos usar ela para controlar se devemos fechar o modal nesse click ou não. 

Novamente tenho as duas variáveis com os dois elementos que serão fechados. Então crio uma condicional que verifica se o target do evento de clique está fora do modal. Caso esteja fora, o modal e o overlay vão receber o `display: none` e em seguida vou remover o EventListener criado anteriormente.

Feito isso nosso modal já está funcionando. Então agora falta apenas criar a animação ao abrir o modal. 

### Criando animação ao abrir o modal

Para animar a abertura do nosso modal, vou usar as animações e keyframes do CSS,
