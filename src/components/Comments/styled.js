import styled from "styled-components"
import media from "styled-media-query";

export const CommentsWrapper = styled.section`
display: flex;
justify-content: center;
flex-direction: column;
margin: auto;
width: 100%;
max-width: 70rem;
padding: 2rem 5rem;

${media.lessThan("medium")`
    width: auto;
    padding: 1rem;
    margin: 0 1rem;
`}

iframe[src*="ads-iframe"] {
    display: none;
}
#disqus_thread {
    a {
      color: var(--secondaryTextColor) !important;
    }
}
`

export const CommentsTitle = styled.h2`
  color: var(--secondaryTextColor);
  font-size: 2rem;
  font-weight: 700;
  padding-bottom: 2rem;

  ${media.lessThan("medium")`
     font-size: 1.5rem;
     padding-bottom: 1.5rem;
  `}
`