
import styled from "styled-components";

export const SocialLinksWrapper = styled.nav`
    margin: 1.5rem auto;
    width: 100%;
`

export const SocialLinksList = styled.ul`
   list-style: none;
   align-items: center;
   display:flex;
   justify-content: center;
`

export const SocialLinksItem = styled.li`
margin: 0 .7rem;
`

export const SocialLinksLink = styled.a`
  text-decoration: none;
  color: #3d5AFE;

  &:hover{
    filter: opacity(50%)
  }
`

export const IconWrapper = styled.div`
  /* fill: #3d5AFE; */
  width: 30px;
  height: 30px;
`

