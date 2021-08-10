
import styled from "styled-components";
import media from "styled-media-query";

export const AvatarWrapper = styled.div`
    border-radius: 50%;
    overflow: hidden;
    .gatsby-image-wrapper {
        overflow: hidden;
        border-radius: 50%;
        border: 5px solid var(--secondary);
        width: 10rem;
        height: 10rem;
        margin: 1rem;
        ${media.lessThan("medium")`
        width: 8rem;
        height: 8rem;
        overflow: hidden;
        border-radius: 50%;
        border: 5px solid var(--secondary);
        margin: 1rem;
        `}
    }
`

