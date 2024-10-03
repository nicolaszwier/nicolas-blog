
import styled from "styled-components";
import media from "styled-media-query";
import { Link } from "gatsby"

export const HeaderWrapper = styled.div`
  /* background: var(--primary); */
  backdrop-filter: blur(4px);
  opacity: 0.95;
  min-height: 6rem;
  width: 100%;
  /* box-shadow: 0 1px 4px #00000036; */
  position: sticky;
  top:0;
  z-index: 1000;
  ${media.lessThan("medium")`
    min-height: 5.5rem;
  `}
`
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items:center;
  width: 100%;
  min-height: 6rem;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;

   ${media.lessThan("medium")`
    padding: 0 .8rem;
    min-height: 5.5rem;
  `}
`

export const BrandLink = styled(Link)`
  text-decoration: none;
  font-size: 1.7rem;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  ${media.lessThan("medium")`
    font-size: 1.4rem;
  `}
  background: -webkit-linear-gradient(45deg, #3d5afe, #ff7676);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
