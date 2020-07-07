import React from "react";

import PostCard from '../PostCard'
import * as S from './styled';

const PostsList = ({ postList }) => {

    return (
        <S.Section>
            <S.PostsListWrapper>
                {postList.map(
                    ({
                        node: {
                            frontmatter: { categoryBackground, category, date, title },
                            timeToRead,
                            fields: { slug },
                        },
                    }) => (
                            <PostCard
                                slug={slug}
                                title={title}
                                date={date}
                                category={category}
                                categoryBackground={categoryBackground}
                                timeToRead={timeToRead}
                            />
                        )
                )}
            </S.PostsListWrapper>
        </S.Section>
    )
}

export default PostsList