
import styled from "styled-components";

export const FlagWrapper = styled.div`
  display: flex;
  background: ${props => props.categoryBackground ? props.categoryBackground : '#ffff39d4'};
  justify-content: center;
  align-items:center;
  padding: .2rem 1rem;
  border-radius: 8px;
  max-width: 100px;
  margin: 0 1rem 1rem;
`

export const FlagName = styled.span`
color: rgba(0, 0, 0, 0.83);
font-weight: 400;
font-size: .7rem;  
`