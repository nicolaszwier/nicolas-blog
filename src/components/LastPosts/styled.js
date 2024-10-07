import styled from "styled-components";
import media from "styled-media-query";
import { Link } from "gatsby";

export const SectionWrapper = styled.div`
  display: flex;
  background-image: linear-gradient(45deg, var(--highlightDarkerStart), var(--highlightDarkerEnd));
  align-items:center;
  width: 100%;
  transform: skewY(-7deg);
  min-height:5rem;
  margin: 2rem 0;
  border-radius: 16px;
`
export const SectionTitle = styled.h2`
  color: var(--secondaryTextColor);
  font-weight:500;
  font-size: 1.4rem;  
  margin: 0 3rem;

   ${media.lessThan("medium")`
      font-size: 1.2rem;  
      margin: 0 2rem;
    `}
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
  align-items: center;
  text-decoration: none;
  color: var(--textColorOnBackground);
  &:hover{
    color: var(--secondary);
  }

  svg {
    width: 24px;
    height: 24px;
    margin-top: 2px;
    margin-left: 2px;
  } 

  ${media.lessThan("medium")`
      margin: 0 1rem;
    `}
`