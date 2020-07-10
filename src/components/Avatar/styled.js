
import styled from "styled-components";
import media from "styled-media-query";
import Img from "gatsby-image";

export const AvatarWrapper = styled(Img)`
    border-radius: 50%;
    border: 5px solid var(--secondary);
    width: 10rem;
    height: 10rem;
    margin: 1rem;
   
    ${media.lessThan("medium")`
        width: 8rem;
        height: 8rem;
    `}
`

