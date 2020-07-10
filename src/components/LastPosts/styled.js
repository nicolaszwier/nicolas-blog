import styled from "styled-components";
import media from "styled-media-query";
import { Link } from "gatsby";

export const SectionWrapper = styled.div`
  display: flex;
  background: var(--highlightDarker);
  align-items:center;
  width: 100%;
  transform: skewY(-7deg);
  min-height:5rem;
  margin: 2rem 0;
  
`
export const SectionTitle = styled.h1`
  color: var(--secondary);
  font-weight:400;
  font-size: 1.2rem;  
  margin: 0 2rem;

   ${media.lessThan("medium")`
      font-size: 1rem;  
      margin: 0 1rem;
    `}
`

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1280px;
`

export const Section = styled.section`
  display: flex;
  align-items:center;
  width: 100%;
  height: auto;
  transform: skewY(7deg);
  padding: 0 2rem;
  max-width: 1280px;
  margin: 0 auto;

  ${media.lessThan("medium")`
      padding: 0 1rem;;
    `}
`

export const LastPostsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px,auto ));
  grid-auto-rows: minmax(200px, auto);
  width: 100%;
  gap: 20px;
`

export const SeeAllPostsWrapper = styled.div`  
  width: 100%;
  margin: 0 auto;
  max-width: 1280px;
`

export const SeeAllPostsLink = styled(Link)`
  margin: 0 2rem;
  display: flex;
  justify-content: flex-end;
  text-decoration: none;
  color: var(--textColorOnBackground);
  &:hover{
    color: var(--secondary);
  }

  ${media.lessThan("medium")`
      margin: 0 1rem;
    `}
`