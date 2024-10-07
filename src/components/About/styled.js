
import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.section`
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

export const Title = styled.h1`
color: var(--textColorOnBackground);
font-weight: 700;
font-size: 2rem;  
margin: 1rem 1rem 1rem;
 ${media.lessThan("medium")`
   font-size: 1.7rem; 
   margin: 1rem .5rem 0.5rem;
  `}
`

export const Content = styled.div`
  line-height: 1.4; 
  color: var(--secondaryTextColor);

  h2 {
    color: var(--secondaryTextColor);
    font-weight: 700;
    font-size: 1.4rem;  
    margin: 1rem 0 .6rem;
  }

  h3 {
    color: var(--secondaryTextColor);
    font-weight: 400;
    font-size: 1.2rem;  
    margin: 1rem 0 .6rem;
  }

  b {
    font-weight: 500;
  }

  p {
    font-weight: 200;
    font-size: 1.1rem;  
    margin: .6rem 0;
    ${media.lessThan("medium")`
      font-size: 1rem;  
      text-align: center
    `}

    strong {
      font-weight: 400;
    }
  }

  .actions {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    padding: 1.5rem 0;

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
export const Footnote = styled.span`
  color: var(--tertiaryTextColor);
  font-size: .9rem;
  font-weight: 200;
`

export const Stack = styled.div`
  color: var(--tertiaryTextColor);
  /* width: 24px; */
  /* height: 24px; */
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: .5rem;

  div {
    flex: 1;
    border-radius: 12px;
    background-color: var(--primary);
    padding: .5rem;
    max-width: 100px;
    min-width: 80px;
    /* height: 50px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    svg {
      width: 40px;
      height: 40px;
    }

    p {
      font-size: .8rem;
      color: var(--tertiaryTextColor)
    }
    
    &:hover{
      color: var(--secondary);
    }
  }

  ${media.lessThan("medium")`
    margin: 0.5rem 0 1.5rem;
  `}

`