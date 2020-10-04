import React from "react"
import PropTypes from "prop-types"
import ReactDisqusComments from "react-disqus-comments"

import * as S from "./styled"

const Comments = ({ url, title, lang = 'pt-br' }) => {
    const completeURL = `https://nicolasz.dev/${url}`

    return (
        <S.CommentsWrapper>
            <S.CommentsTitle>{lang === 'pt-br' ? 'Comentários' : 'Comments'}</S.CommentsTitle>
            <ReactDisqusComments
                shortname="nicolaszdev"
                identifier={completeURL}
                title={title}
                url={completeURL}
            />
        </S.CommentsWrapper>
    )
}

Comments.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default Comments