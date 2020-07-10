
import styled from "styled-components";
import media from "styled-media-query";

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
 &:hover{
    filter: brightness(70%);
    transform: translateY(-2px);
  }
`

export const SocialLinksLink = styled.a`
  text-decoration: none;
  color: var(--secondary);
`

export const IconWrapper = styled.div`
  width: 30px;
  height: 30px;
   ${media.lessThan("medium")`
        width: 25px;
        height: 25px;
    `}
`

