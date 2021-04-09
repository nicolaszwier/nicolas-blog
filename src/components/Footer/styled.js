
import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  background: var(--primary);
  min-height: 50px;
  justify-content: space-between;
  align-items:center;
  width: 100%;
  padding: 0 1.5rem;
  margin-top: 6rem; 
`

export const FooterText = styled.span`
  font-size: 0.8rem;
  font-weight: normal;
  color: var(--secondaryTextColor);
  white-space: nowrap;
  overflow: hidden;
`
