
import styled from "styled-components";
import media from "styled-media-query";

export const Overlay = styled.div`
  position: fixed;
  display: flex;
  backdrop-filter: blur(4px);
  background: #00000040;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 1100;
  padding: 1rem;
  overflow: auto;
  /* opacity: 0.95; */

`

export const Modal = styled.div `
  max-width: 800px;
  width: 100%;
  max-height: 100%;
  overflow-y: auto;
  border-radius: 16px;
  background-color: var(--background);
  position: relative;
  padding: 1rem;
`

export const Header = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
  
  button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    width: 40px;
    height: 40px;
    cursor: pointer;
    color: var(--textColorOnBackground);
    &:hover{
      color: var(--secondary);
    }
  }

`

export const IconWrapper = styled.div`
  background-color: var(--background);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.075);
  border-radius: 16px;
  padding: .8rem;
  margin: .8rem;
  height: 80px;
  width: 80px;
  color: #ff7676;
  ${media.lessThan("medium")`
    height: 60px;
    width: 60px;
  `}
`
export const Content = styled.div`
  flex:1;
  padding: .8rem;
  ${media.lessThan("medium")`
    flex-direction: column;
  `}
  line-height: 1.4; 
  color: var(--secondaryTextColor);

  h1 {
    color: var(--textColorOnBackground);
    font-weight: 700;
    font-size: 1.6rem;  
    text-align: center;
    margin: 0 0 1rem;
    ${media.lessThan("medium")`
      font-size: 1.3rem;  
      text-align: center
    `}
  }

  h2 {
    color: var(--secondaryTextColor);
    font-weight: 700;
    font-size: 1.4rem;  
    margin: 1rem 0 .6rem;
  }

  b {
    font-weight: 500;
  }

  p {
    font-weight: 200;
    font-size: 1.1rem;  
    margin: .6rem 0;
    ${media.lessThan("medium")`
      font-size: 1rem;  
      text-align: center
    `}
  }

  ul {
    list-style: circle;
    font-weight: 200;
    font-size: 1.1rem;  
    margin: .6rem 0;
    padding-inline-start: 1rem;
    margin-block-start: 1rem;
    margin-block-end: 1rem;
  }

`

export const Stack = styled.div`
  color: var(--tertiaryTextColor);
  /* width: 24px; */
  /* height: 24px; */
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  div {
    flex: 1;
    border-radius: 12px;
    background-color: var(--primary);
    padding: .5rem;
    /* min-width: 80px; */
    /* max-width: max-content; */
    /* height: 50px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    svg {
      width: 40px;
      height: 40px;
    }

    p {
      font-size: .8rem;
      color: var(--tertiaryTextColor)
    }
    
    &:hover{
      color: var(--secondary);
    }
  }

  ${media.lessThan("medium")`
    margin: 0.5rem 0 1.5rem;
  `}

`

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 2rem 0 0.5rem;

  ${media.lessThan("medium")`
    flex-direction: column;
  `}

  .actions {
    display: flex;
    gap: 1rem;
    align-items: center;

    ${media.lessThan("medium")`
      flex-direction: column;
      width: 100%;
    `}
    a {
      display: flex;
      align-items: center;
      gap: .6rem;
      background-color: none;
      border: none;
      text-decoration: none;
      color: white;
      background-color: var(--secondary);
      padding: .5rem 1.5rem;
      border-radius: 12px;
      font-weight: 400;
      font-size: 1rem;
      justify-content: center;

      &:hover{
        filter: contrast(2)
      }

      svg {
        width: 20px;
        height: 20px;
      }

      ${media.lessThan("medium")`
        width: 100%;
      `}
    }

    button {
      background: none;
      border: none;
      font-weight: bold;
      height: 2rem;
      cursor: pointer;
      &:hover{
          color: var(--secondary);
      }
      ${media.lessThan("medium")`
        width: 100%;
      `}
    }
  }
`