
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
export const Subtitle = styled.h2`
color: var(--secondaryTextColor);
/* font-weight: 400; */
font-size: 1.2rem;  
margin: 0 1rem;
line-height: 1.4;
${media.lessThan("medium")`
   font-size: 1rem; 
  `}
`
export const ListWrapper = styled.article`
  display: grid;
	grid-template-rows: auto auto auto;
  grid-template-columns: auto;
	justify-content: stretch;
  gap: 2rem;
  max-width: 1280px;
  padding: 2rem 16px 0;
  width: 100%;

  ${media.lessThan("medium")`
    display: flex;
    flex-direction: column;
  `}
`


export const ListItemWrapper = styled.div`
  grid-row: span 2;
  /* &:first-child {
    grid-row: span 1;
    grid-column: span 2;
  } */
`