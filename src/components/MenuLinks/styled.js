
import styled from "styled-components";
import { Link } from "gatsby"

export const MenuLinksWrapper = styled.nav`
    
`

export const MenuLinksList = styled.ul`
    font-size: 1.2rem;
    font-weight:500;
    display: flex;
`

export const MenuLinksItem = styled.li`
  margin-right:1rem;
  &:last-child{
    margin-right:0;
  }
  
  .active {
    color: yellow;
  }
`

export const MenuLinksLink = styled(Link)`
  text-decoration: none;
  color: #FFF;
   &:hover{
    transform: translateY(-4px);
    color: #3D5AFE;
  }
`

