
import styled from "styled-components";
import media from "styled-media-query";

export const Card = styled.div`
  text-decoration: none;
  display: flex;
  overflow: hidden;
  background: var(--primary);
  justify-content: space-between;
  align-items:flex-start;
  border: 1px solid var(--background);
  border-radius: 16px;
  transition: transform .3s ease-in-out;
  width: 100%;
  height: 100%;
  min-height: 11rem;
  padding: 6px;
  opacity: 0.95;
  &:hover{
   
  }
`

export const IconWrapper = styled.div`
  background-color: var(--background);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.075);
  border-radius: 16px;
  padding: .8rem;
  margin: .8rem;
  height: 100px;
  width: 100px;
  color: #ff7676;
  ${media.lessThan("medium")`
    height: 80px;
    width: 80px;
  `}
`
export const Content = styled.div`
  flex:1;
  padding: .8rem;
  /* ${media.lessThan("medium")`

  `} */

  h1 {
    color: var(--textColorOnBackground);
    font-weight: 700;
    font-size: 1.6rem;  
    line-height: 1.2;  
    ${media.lessThan("medium")`
      font-size: 1.3rem;  
    `}
  }
  p {
    color: var(--tertiaryTextColor);
    font-weight: 200;
    font-size: 1rem;  
    line-height: 1.2;  
    margin: .4rem 0;
    ${media.lessThan("medium")`
      font-size: .9rem;  
    `}
  }
`

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .stack-wrapper {
    display: flex;
    gap: .4rem;
  }
`