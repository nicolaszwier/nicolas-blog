
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
  display: grid;
	grid-template-rows: auto auto auto;
  grid-template-columns: auto;
	justify-content: stretch;
  gap: 0 2rem;
  max-width: 1280px;

  ${media.lessThan("medium")`
    display: flex;
    flex-direction: column;
  `}
`

export const ListItemWrapper = styled.div`
  grid-row: span 2;
  &:first-child {
    grid-row: span 1;
    grid-column: span 2;
  }
`