
import styled from "styled-components";
import { Link } from "gatsby"
import media from "styled-media-query";

export const Card = styled(Link)`
  text-decoration: none;
  display: flex;
  overflow: hidden;
  background: var(--primary);
  flex-direction:column;
  justify-content: space-between;
  align-items:flex-start;
  border: 1px solid var(--background);
  border-radius: 16px;
  cursor: pointer;
  transition: transform .3s ease-in-out;
  width: 100%;
  height: 100%;
  min-height: 11rem;
  padding: 6px;
  opacity: 0.95;
  &:hover{
    transform: translateY(-1px);
  }
`

export const ImageWrapper = styled.div`
width: 100%;
  .gatsby-image-wrapper {
    border-radius: 10px;
    display: flex;
    width: 100%;
    min-height: 300px;
    max-height: 300px;
    
    ${media.lessThan("medium")`
      min-height: 200px;
      max-height: 200px;
  `}
  }
`

export const PostTitle = styled.h1`
color: var(--textColorOnBackground);
font-weight: 700;
font-size: 1.6rem;  
line-height: 1.2;  
margin: 1rem 1rem 0.5rem;
`

export const PostInfo = styled.section`
display: flex;
width: 100%;
flex-direction:column;
justify-content: flex-start;
`

export const PostDate = styled.h3`
color: var(--secondaryTextColor);
font-weight: 400;
font-size: .8rem;  
line-height: 1.2;  
margin: 1rem 1rem 0.5rem;
`