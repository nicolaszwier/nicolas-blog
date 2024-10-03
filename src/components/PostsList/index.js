import React from "react";

import PostCard from '../PostCard'
import * as S from './styled';

const PostsList = ({ postList }) => {

    return (
        <S.Section>
            <S.PageTitle>Blog posts</S.PageTitle>
            <S.PostsListWrapper>
                {postList.map(
                    ({
                        node: {
                            frontmatter: { categoryBackground, category, date, image, title, language },
                            timeToRead,
                            fields: { slug },
                        },
                    }, index) => (
                        <S.ListItemWrapper key={index}>
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