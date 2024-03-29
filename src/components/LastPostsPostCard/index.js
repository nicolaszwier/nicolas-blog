import React from "react";
import PropTypes from "prop-types"
import CategoryFlag from '../CategoryFlag'
import Cover from './cover'

import * as S from './styled'

const LastPostsPostCard = ({ slug, title, date, category, categoryBackground, image, timeToRead, language = 'pt-br' }) => {
    const resolveCoverPath = image.slice(12)
    return (
        <S.Card to={slug}>
            <Cover filename={resolveCoverPath} alt={title} />
            <S.PostTitle>{title}</S.PostTitle>
            <S.PostInfo>
                <S.PostDate>{date} • {timeToRead} min {language === 'pt-br' ? 'de leitura' : 'read'}</S.PostDate>
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