
import styled from "styled-components";
import { Link } from "gatsby"

export const ChangeThemeWrapper = styled.li`
  margin-right:1rem;
  &:last-child{
    margin-right:0;
  }
  
  .active {
    color: yellow;
  }
`
export const ChangeThemeToggle = styled(Link)`
  text-decoration: none;
  color: var(--textColorOnBackground);
  cursor: pointer;
   &:hover{
    transform: translateY(-4px);
    color: var(--secondary);
  }
`
export const IconWrapper = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  &.dark {
    svg {
      /* fill: var(--secondary) */
      /* fill: var(--textColorOnBackground); */
    }
  }
`

