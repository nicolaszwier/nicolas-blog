import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  img {
    display: block;
  	width: 100%;
  	height: auto;
  }

  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');
  
  body {
    &.dark {
      --background: #212121;
      --primary: #353535;
      --secondary: #3D5AFE;
      --textColorOnBackground: rgba(255, 255, 255, 0.85);
      --secondaryTextColor: rgba(255,255,255,0.70);
      --highlight: #353535;
      --highlightDarker: #2e2e2e;
    }
    &.light {
      --background: #F2F2F2;
      --primary: #FFF;
      --secondary: #3D5AFE;
      --textColorOnBackground: rgba(0, 0, 0, 0.85);
      --secondaryTextColor: rgba(0,0,0,0.65);
      --highlightDarker: #3D5AFE;
    }
    
    background: var(--background);
    line-height: 1;
    font-size: 100%;
    font-family: 'Lato', sans-serif;
    overflow-x: hidden;

  }

  /* width */

::-webkit-scrollbar {
  width: 8px;
  height: 6px;

}

::-webkit-scrollbar-track {
  background: var(--secondary);
  border-radius: 0px;
  width: 8px;
  /* border-left: 1px solid var(--primary) */
}

::-webkit-scrollbar-thumb {
  background: var(--primary);
  border-radius: 0px;
  transition: all .2s ease;
}

::-webkit-scrollbar-thumb:hover {
  background: rgb(173, 173, 173);
}

`
export default GlobalStyles