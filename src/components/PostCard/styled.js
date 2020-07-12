
import styled from "styled-components";
import Img from 'gatsby-image'
import { Link } from "gatsby"


export const Card = styled(Link)`
  text-decoration: none;
  display: flex;
  overflow: hidden;
  background: var(--primary);
  flex-direction:column;
  justify-content: space-between;
  align-items:flex-start;
  box-shadow: 1px 1px 4px #00000021;
  border-radius: 8px;
  cursor: pointer;
  transition: transform .3s ease-in-out;
  width: 100%;
  min-height: 11rem;
  margin: 1rem 0;
  opacity: 0.95;
  &:hover{
      opacity: 1;
      transform: translateY(-4px);
      filter: brightness(95%);
      box-shadow: 1px 1px 4px #0000007d;
  }
`

export const ImageWrapper = styled(Img)`
  display: flex;
  width: 100%;
  min-height: 200px;
  max-height: 300px;
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