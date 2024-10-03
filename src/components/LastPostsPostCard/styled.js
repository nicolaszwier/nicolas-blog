
import styled from "styled-components";
import { Link } from "gatsby"

export const Card = styled(Link)`
  overflow: hidden;
  text-decoration: none;
  display: flex;
  background: var(--primary);
  flex-direction:column;
  justify-content: space-between;
  align-items:flex-start;
  /* box-shadow: 1px 1px 4px #00000021; */
  border: 2px solid var(--background);
  border-radius: 16px;
  cursor: pointer;
  transition: all .3s ease-in-out;
  width: 100%;
  min-height: 11rem;
  /* opacity: 0.95; */
  padding: 6px;
  &:hover{
      /* opacity: 1; */
      transform: translateY(-4px);
      /* filter: brightness(95%); */
      /* box-shadow: 1px 1px 4px #0000007d; */
  }

`

export const ImageWrapper = styled.div`
  width: 100%;
  .gatsby-image-wrapper {
    border-radius: 10px;
    display: flex;
    width: 100%;
    min-height: 180px;
    max-height: 180px;
  }
`

export const PostTitle = styled.h1`
color: var(--textColorOnBackground);
font-weight: 600;
font-size: 1.6rem;  
line-height: 1.2;  
margin: 1rem 1rem 0.5rem;
transition: all .4s ease-in-out;
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