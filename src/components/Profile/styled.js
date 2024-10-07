
import styled from "styled-components";
import media from "styled-media-query";
import { Link } from "gatsby"

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items:center;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem 1.5rem 3rem;
  ${media.lessThan("medium")`
    padding: 1rem 1rem 2rem;
  `}
`

export const ProfileName = styled.h1`
color: var(--textColorOnBackground);
font-weight: 700;
font-size: 2rem;  
margin: 1rem 1rem 0.5rem;
 ${media.lessThan("medium")`
   font-size: 1.7rem; 
   margin: 1rem .5rem 0.5rem;
  `}
`
export const BriefDescription = styled.h2`
color: var(--textColorOnBackground);
font-weight: 400;
font-size: 1.5rem;  
margin: 0 1rem;
${media.lessThan("medium")`
   font-size: 1.25rem; 
  `}
`

export const Paragraph = styled.p`
height: 110px;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 4;
-webkit-box-orient: vertical;


text-align: center;
text-justify: distribute;
color: var(--secondaryTextColor);
font-weight: 200;
font-size: 1.2rem;
line-height: 1.4;  
margin: .5rem 2rem;
&:first-child {
margin-top: 1rem;
}
&:last-child {
margin-bottom: 1rem;
}

${media.lessThan("medium")`
  margin: .2rem .5rem; 
  `}

`

export const ChangeLanguageLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: var(--textColorOnBackground);
   &:hover{
    transform: translateY(-1px);
    color: var(--secondary);
  }
`

export const CustomLink = styled(Link)`
  padding: 0 2rem;
  margin: 0 2rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-decoration: none;
  color: var(--textColorOnBackground);
  &:hover{
    color: var(--secondary);
  }

  svg {
    width: 24px;
    height: 24px;
    margin-top: 2px;
    margin-left: 2px;
  } 

  ${media.lessThan("medium")`
      margin: 0 1rem;
      padding: 0 1rem;
    `}
`