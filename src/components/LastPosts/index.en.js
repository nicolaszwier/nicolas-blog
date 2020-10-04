import React from "react";
import { useStaticQuery, graphql } from "gatsby"

import * as S from './styled';
import LastPostsPostCard from '../LastPostsPostCard'

const LastPosts = () => {

    const { allMarkdownRemark } = useStaticQuery(graphql`
         query LastPostsEn {
            allMarkdownRemark(limit: 3, sort: {order: DESC, fields: frontmatter___date}, filter: {frontmatter: {language: {eq: "en"}}}) {
                edges {
                    node {
                        fields {
                            slug
                        }
                        frontmatter {
                            categoryBackground
                            category
                            date(locale: "en", formatString: "MMMM DD[,] YYYY")
                            title,
                            image, 
                            language
                        }
                        timeToRead
                    }
                }
            }
        }
    `)

    const lastPosts = allMarkdownRemark.edges

    return (
        <>
            <S.Wrapper>
                <S.SectionTitle>Recent blog posts</S.SectionTitle>
            </S.Wrapper>
            <S.SectionWrapper>
                <S.Section>
                    <S.LastPostsWrapper>
                        {lastPosts.map(
                            ({
                                node: {
                                    frontmatter: { categoryBackground, category, date, title, image, language },
                                    timeToRead,
                                    fields: { slug },
                                },
                            }) => (
                                    <LastPostsPostCard
                                        key={title}
                                        slug={slug}
                                        title={title}
                                        date={date}
                                        category={category}
                                        categoryBackground={categoryBackground}
                                        timeToRead={timeToRead}
                                        image={image}
                                        language={language}
                                    />
                                )
                        )}
                    </S.LastPostsWrapper>
                </S.Section>
            </S.SectionWrapper>
            <S.SeeAllPostsWrapper>
                <S.SeeAllPostsLink to={'/en/blog'}>See all posts...</S.SeeAllPostsLink>
            </S.SeeAllPostsWrapper>
        </>
    )
}

export default LastPosts