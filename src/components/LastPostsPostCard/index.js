import React from "react";
import PropTypes from "prop-types"
import CategoryFlag from '../CategoryFlag'

import * as S from './styled'

const LastPostsPostCard = ({ slug, title, date, category, categoryBackground, timeToRead }) => {

    return (

        <S.Card to={slug}>
            <S.PostTitle>{title}</S.PostTitle>
            <S.PostInfo>
                <S.PostDate>{date}</S.PostDate>
                <CategoryFlag category={category} categoryBackground={categoryBackground} />
            </S.PostInfo>
        </S.Card>

    )
}

LastPostsPostCard.propTypes = {
    slug: PropTypes.string.isRequired,
    categoryBackground: PropTypes.string,
    category: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    timeToRead: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
}

export default LastPostsPostCard