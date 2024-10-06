
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

   ${media.lessThan("medium")`
      flex-direction: column;
      align-items: center;
  `}
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
    height: 60px;
    width: 60px;
  `}
`
export const Content = styled.div`
  flex:1;
  padding: 1rem;
  ${media.lessThan("medium")`
    flex-direction: column;
  `}

  h1 {
    color: var(--textColorOnBackground);
    font-weight: 700;
    font-size: 1.6rem;  
    line-height: 1.2;  
    ${media.lessThan("medium")`
      font-size: 1.3rem;  
      text-align: center
    `}
  }
  p {
    color: var(--tertiaryTextColor);
    font-weight: 200;
    font-size: 1rem;  
    line-height: 1.4;  
    margin: .4rem 0;
    ${media.lessThan("medium")`
      font-size: .9rem;  
      text-align: center
    `}
  }
`

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 1.4rem 0 0.5rem;

  ${media.lessThan("medium")`
    flex-direction: column;
  `}

  .stack-wrapper {
    color: var(--tertiaryTextColor);
    /* width: 24px; */
    /* height: 24px; */
    display: flex;
    gap: 1rem;

    span {
      width: 20px;
      height: 20px;
      
      &:hover{
        color: var(--secondary);
      }
    }

    ${media.lessThan("medium")`
      margin: 0.5rem 0 1.5rem;
    `}

  }

  .actions {
    display: flex;
    gap: 1rem;
    align-items: center;

    ${media.lessThan("medium")`
      flex-direction: column;
      width: 100%;
    `}

    a {
      display: flex;
      align-items: center;
      gap: .6rem;
      background-color: none;
      border: none;
      text-decoration: none;
      color: white;
      background-color: var(--secondary);
      padding: .5rem 1.5rem;
      border-radius: 12px;
      font-weight: 400;
      font-size: 1rem;
      justify-content: center;

      &:hover{
        filter: contrast(2)
      }

      svg {
        width: 20px;
        height: 20px;
      }

      ${media.lessThan("medium")`
        width: 100%;
      `}
    }

    button {
      background: none;
      border: none;
      font-weight: bold;
      height: 2rem;
      font-size: 1.1rem;
      color: var(--textColorOnBackground);
      cursor: pointer;
      &:hover{
          color: var(--secondary);
      }
      ${media.lessThan("medium")`
        width: 100%;
      `}
    }
  }
`