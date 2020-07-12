import React from "react";
import PropTypes from "prop-types"
import CategoryFlag from '../CategoryFlag'
import Cover from './cover'

import * as S from './styled'

const LastPostsPostCard = ({ slug, title, date, category, categoryBackground, timeToRead }) => {

    let tempSlug = slug.slice(0, -1)
    const resolveCoverPath = tempSlug.slice(5)

    return (

        <S.Card to={slug}>
            <Cover filename={resolveCoverPath} alt={title} />
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