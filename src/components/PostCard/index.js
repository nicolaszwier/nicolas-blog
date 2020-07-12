import React from "react";
import PropTypes from "prop-types"
import CategoryFlag from '../CategoryFlag'
import Cover from './cover'

import * as S from './styled'

const PostCard = ({ slug, title, date, category, categoryBackground, timeToRead }) => {

    const resolveSlug = slug.slice(5)
    const resolveCoverPath = resolveSlug.slice(0, -1)

    return (

        <S.Card to={resolveSlug}>
            <Cover filename={resolveCoverPath} alt={title} />
            <S.PostTitle>{title}</S.PostTitle>
            <S.PostInfo>
                <S.PostDate>{date} • {timeToRead} min de leitura</S.PostDate>
                <CategoryFlag category={category} categoryBackground={categoryBackground} />
            </S.PostInfo>
        </S.Card>

    )
}

PostCard.propTypes = {
    slug: PropTypes.string.isRequired,
    categoryBackground: PropTypes.string,
    category: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    timeToRead: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
}

export default PostCard