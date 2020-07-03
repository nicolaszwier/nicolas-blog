
import styled from "styled-components";
import { Link } from "gatsby";


export const SectionWrapper = styled.div`
  display: flex;
  background: #353535;
  align-items:center;
  width: 100%;
  transform: skewY(-7deg);
  min-height:5rem;
  margin: 2rem 0;
`
export const SectionTitle = styled.h1`
color: #3d5AFE;
font-weight:400;
font-size: 1.2rem;  
margin: 0 2rem;
`

export const Section = styled.section`
  display: flex;
  align-items:center;
  width: 100%;
  height: auto;
  transform: skewY(7deg);
  padding: 0 2rem;
  /* margin: 0 0 2rem; */
`

export const LastPostsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px,auto));
    max-height: 100%;
    min-height: 400px;
    width: 100%;
    height: auto;
    justify-content: center;
    gap: 20px;
`

export const SeeAllPostsWrapper = styled.div`
    margin: 0 2rem;
`

export const SeeAllPostsLink = styled(Link)`
  display: flex;
  justify-content: flex-end;
  text-decoration: none;
  color: #FFF;
   &:hover{
    color: #3D5AFE;
  }
`