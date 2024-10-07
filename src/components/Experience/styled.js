
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
  width: 100%;

  h2 {
    color: var(--secondaryTextColor);
    font-weight: 700;
    font-size: 1.4rem;  
    margin: 1rem 0 .6rem;
  }

  h3 {
    color: var(--secondaryTextColor);
    font-weight: 500;
    font-size: 1.2rem;  
    margin: .4rem 0 .4rem 2rem;

    ${media.lessThan("medium")`
        margin-left: 1rem;
    `}
  }

  h4 {
    color: var(--tertiaryTextColor);
    font-size: 1rem;
    font-weight: 200;
  }

  b {
    font-weight: 500;
  }

  p {
    font-weight: 200;
    font-size: 1rem;  
    margin: .6rem 0;
    ${media.lessThan("medium")`
      font-size: 1rem;  
      /* text-align: center */
    `}

    strong {
      font-weight: 400;
    }
  }

  ul {
    list-style: circle;
    font-weight: 200;
    font-size: 1rem;  
    margin: .6rem 0;
    padding-inline-start: 1rem;
    margin-block-start: 1rem;
    margin-block-end: 1rem;

    li {
      margin-bottom:.4rem
    }
  }

  .actions {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    padding: 2.5rem 0;

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

export const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  .item {
    /* display: flex;
    flex-direction: column; */
    .title {
      /* min-height: 100px; */
      display: flex;
      align-items: center;
      margin: .5rem 0;
      .circle {
        min-width: 40px;
        min-height: 40px;
        border-radius: 50%;
        background-color: var(--secondary);
      }

    }
    
    .content {
      display: flex;
      .line-wrapper {
        display: flex;
        justify-content: center;
        flex: 1;
        min-width: 40px;
        max-width: 40px;
        .line {
          min-width: 6px;
          min-height: 100px;
          background-color: var(--secondary);
          border-radius: 4px;
        }
      }
      .description {
        margin-left: 2rem;
        ${media.lessThan("medium")`
          margin-left: 1rem;
        `}
      }
      
    }
  } 



`


export const Footnote = styled.span`
  color: var(--tertiaryTextColor);
  font-size: .9rem;
  font-weight: 200;
`