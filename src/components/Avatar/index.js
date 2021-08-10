import React from "react";
import { StaticImage } from 'gatsby-plugin-image'

import * as S from './styled'

const Avatar = () => {
    return (
        <S.AvatarWrapper>
            <StaticImage
                src="../../images/avatar.jpg"
                alt="Nicolas Zwierzykowski Avatar"
                placeholder="blurred"
                imgStyle={{ borderRadius: '50%' }}
            />
        </S.AvatarWrapper>
    )
}

export default Avatar