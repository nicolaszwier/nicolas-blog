---
title: Modal com animação e listener para fechar quando clicar fora
description: Como criar um modal responsivo usando HTML, CSS e Javascript usando
  animações e criando uma função para fechar o modal quando clicar fora dele.
date: 2020-08-01 03:17:02
image: /assets/img/responsive-modal.jpg
category: js
categoryBackground: "#ffea00"
language: pt-br
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

Feito isso nosso modal já está funcionando. Então agora falta apenas criar a animação ao abrir o modal e deixá-lo responsivo. 

### Criando animação ao abrir o modal

Para animar a abertura do nosso modal, vou usar as animações e keyframes do CSS.

Os keyframes do CSS permitem que você determine uma sequência de animações para seu elemento. Na animação que eu escolhi fazer, vamos usar a propriedade `transform`:

```CSS
@keyframes scale-in {
  0% {
    -webkit-transform: scale(0);
            transform: scale(0);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
```

Eu começo definindo o nome dessa animação de `scale-in`, porém você por qualquer nome que vai funcionar da mesma forma. Como essa é uma animação bem simples, eu defini apenas dois passos para a animação: 0% até 100%. Ou seja, no inicio da animação nosso elemento terá a propriedade `transform: scale(0)` e quando a animação chegar ao fim ele será `transform: scale(1)`, onde 1 é o tamanho real do elemento.

Simples, não? Agora basta usarmos essa animação na classe modal. Fica assim:

```CSS
.modal {
	-webkit-animation: scale-in 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940);
	        animation: scale-in 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940);
			
}
```

O primeiro parâmetro da propriedade animation é o nome da animação, o segundo o tempo de duração da animação e o terceiro é o timing da animação, ou seja, como que a animação vai se comportar do inicio ao fim, existem diversas propriedades que você pode usar, como linear, ease, ease-in, etc (vou deixar um link da documentação no final do tutorial caso você queira se informar mais sobre o assunto).

# Deixando responsivo

Na última parte, vamos fazer nosso modal se adaptar ao tamanho da tela para funcionar no mobile também, para isso vou usar media queries:

```CSS
@media only screen and (max-width: 600px) {
  .modal {
    min-height: 100vh;
    width: 100vw;
    margin: 0;
    border-radius: 0;
  }
}
```

E é isso! Quando a largura da tela for menor que 600px essas configurações vão ser aplicadas a classe modal, defini a altura a largura para ocupar a tela intera, removi o border-radius e as margens.


### Resultado final 

Confira como ficou todo o código e a demo:

https://codepen.io/nicolaszwier/pen/ExPqpjY

Por hoje é isso. Obrigado se leu até aqui e até a próxima! 

### Links úteis sobre o assunto

* [Key frames](https://developer.mozilla.org/pt-BR/docs/Web/CSS/@keyframes)

* [Events Javascript](https://developer.mozilla.org/pt-BR/docs/Web/Events)

* [Flexbox](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Flexible_Box_Layout/Conceitos_Basicos_do_Flexbox)

* [CSS animations](https://developer.mozilla.org/pt-BR/docs/Web/CSS/animation)



