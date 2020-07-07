
import styled from "styled-components";

export const HeaderWrapper = styled.div`
  background: #353535;
  opacity: 0.95;
  min-height: 100px;
  width: 100%;
  box-shadow: 0 1px 4px #00000036;
  position: sticky;
  top:0;
  z-index: 1000;
`
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items:center;
  width: 100%;
  min-height: 100px;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
`

export const Brand = styled.h1`
  font-size: 1.7rem;
  font-weight: bold;
  color: #3d5AFE;
  white-space: nowrap;
  overflow: hidden;
`
