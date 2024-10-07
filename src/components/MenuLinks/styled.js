import styled from "styled-components";
import media from "styled-media-query";
import { Link } from "gatsby"

export const MenuLinksWrapper = styled.nav``

export const MenuLinksList = styled.ul`
  font-size: 1.2rem;
  font-weight: 700;
  display: flex;
  align-items: center;

  ${media.lessThan("medium")`
    display: none;
  `}
`

export const MenuLinksItem = styled.li`
  display: flex;
  align-items: center;
  color: var(--textColorOnBackground);
  margin-right:1rem;
  &:last-child{
    margin-right:0;
  }

  ${media.lessThan("medium")`
    margin-right:0;
  `}
  
  .active {
    color: var(--secondary);
    font-weight: 700;
  }
`

export const MenuLinksLink = styled(Link)`
  text-decoration: none;
  color: var(--textColorOnBackground);
   &:hover{
    /* transform: translateY(-4px); */
    color: var(--secondary);
  }
`

export const MobileToggleButton = styled.button`
  display: none;
  background: none;
  border: none;
  text-decoration: none;
  color: var(--textColorOnBackground);
  cursor: pointer;
  
  ${media.lessThan("medium")`
    display: block;
  `}

  &:hover{
    color: var(--secondary);
  }

  svg {
    width: 28px;
    height: 28px;
  }
`

export const MobileMenuOverlay = styled.div`
  display: none;
  position: fixed;
  display: flex;
  /* backdrop-filter: blur(6px); */
  background: #00000040;
  /* justify-content: center; */
  /* align-items: center; */
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 1002;
  padding: 1rem;
  overflow: auto;
  /* opacity: 0.95; */
  ${media.lessThan("medium")`
    display: flex;
  `}

`

export const MobileMenu = styled.div `
  max-width: 500px;
  width: 90%;
  border-radius: 16px;
  background-color: var(--background);
  position: absolute;
  padding: 1rem;
  top: 88px;
  right: 24px;
  padding: 1rem;
  border: 2px solid var(--highlightDarkerEnd);

  ul {
    font-size: 1.2rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
  
  }
`