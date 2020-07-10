import styled from "styled-components"
import { Link } from "gatsby"

export const RecommendedWrapper = styled.section`
  background: transparent;
  display: flex;
  max-width: 1280px;
  margin: 0 auto;
`

export const RecommendedLink = styled(Link)`
  align-items: center;
  background: var(--primary);
  color: var(--secondaryTextColor);
  opacity: .8;
  display: flex;
  padding: 3rem;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.2rem;
  transition: background 0.2s;
  width: 50%;
  border-radius: 8px;
  
  &:hover {
    /* background: var(--secondary); */
     filter: brightness(90%);
    /* color: var(--se) */
  }
  &.previous {
    margin-right: 0.5rem;
    /* border-top-right-radius: 6px; */
    /* border-bottom-right-radius: 6px; */
  }
  &.next {
    margin-left: 0.5rem;
    /* border-top-left-radius: 6px; */
    /* border-bottom-left-radius: 6px; */
    justify-content: flex-end;
  }
  &.previous:before {
    content: "\\2190";
    margin-right: 0.5rem;
  }
  &.next:after {
    content: "\\2192";
    margin-left: 0.5rem;
  }
`