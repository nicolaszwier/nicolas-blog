
import styled from "styled-components";
import media from "styled-media-query";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  width: 100%;
  padding: 3rem 1.5rem;

  ${media.lessThan("medium")`
     padding: 1.5rem 1rem;
  `}
`
export const PostsListWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items:center;
  width: 100%;
  max-width: 1280px;
`