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
                            frontmatter: { categoryBackground, category, date, image, title, language },
                            timeToRead,
                            fields: { slug },
                        },
                    }) => (
                        <S.ListItemWrapper>
                            <PostCard
                                slug={slug}
                                title={title}
                                date={date}
                                category={category}
                                categoryBackground={categoryBackground}
                                timeToRead={timeToRead}
                                image={image}
                                language={language}
                            />
                        </S.ListItemWrapper>
                    )
                )}
            </S.PostsListWrapper>
        </S.Section>
    )
}

export default PostsList