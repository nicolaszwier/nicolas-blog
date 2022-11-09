import styled from "styled-components";
import { Link } from "gatsby"

export const MenuLinksWrapper = styled.nav``

export const MenuLinksList = styled.ul`
    font-size: 1.2rem;
    font-weight: 700;
    display: flex;
    align-items: center;
`

export const MenuLinksItem = styled.li`
  margin-right:1rem;
  &:last-child{
    margin-right:0;
  }
  
  .active {
    color: var(--secondary);
    font-weight: 700;
  }
`

export const MenuLinksLink = styled(Link)`
  text-decoration: none;
  color: var(--textColorOnBackground);
   &:hover{
    transform: translateY(-4px);
    color: var(--secondary);
  }
`

