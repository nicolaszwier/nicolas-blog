
import styled from "styled-components";
import { Link } from "gatsby"

export const Card = styled(Link)`
  text-decoration: none;
  display: flex;
  background: #353535;
  flex-direction:column;
  justify-content: space-between;
  align-items:flex-start;
  box-shadow: 1px 1px 4px #0000007d;
  border-radius: 8px;
  cursor: pointer;
  transition: transform .3s ease-in-out;
  width: 100%;
  min-height: 11rem;
  margin: 1rem 0;
  &:hover{
      transform: translateY(-4px);
      filter: brightness(85%)
  }
`

export const PostTitle = styled.h1`
color: rgba(255, 255, 255, 0.83);
font-weight: 400;
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
color: rgba(255, 255, 255, 0.70);
font-weight: 400;
font-size: .8rem;  
line-height: 1.2;  
margin: 1rem 1rem 0.5rem;
`