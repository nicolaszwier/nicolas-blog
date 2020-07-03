import React from "react";

import * as S from './styled'

const CategoryFlag = ({ category, categoryBackground }) => {

    return (

        <S.FlagWrapper categoryBackground={categoryBackground}>
            <S.FlagName>{category}</S.FlagName>
        </S.FlagWrapper>

    )
}

export default CategoryFlag