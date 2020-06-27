
import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items:center;
  width: 100%;
  padding: 2rem 1.5rem;
`

export const ProfileName = styled.h1`
color: rgba(255, 255, 255, 0.83);
font-weight: 700;
font-size: 2rem;  
margin: 1rem 1rem 0.5rem;
`
export const BriefDescription = styled.h2`
color: rgba(255, 255, 255, 0.83);
font-weight: 400;
font-size: 1.5rem;  
margin: 0 1rem;
`

export const Paragraph = styled.p`
text-align: center;
text-justify: distribute;
color: rgba(255, 255, 255, 0.83);
font-weight: 400;
font-size: 1.3rem;
line-height: 1.3;  
margin: .5rem 2rem;
&:first-child {
margin-top: 1rem;
}
&:last-child {
margin-bottom: 1rem;

}

`