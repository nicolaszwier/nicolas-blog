import React from "react";
import { useStaticQuery, graphql } from "gatsby"

import * as S from './styled';
import LastPostsPostCard from '../LastPostsPostCard'

const LastPosts = () => {

    const { allMarkdownRemark } = useStaticQuery(graphql`
         query LastPosts {
            allMarkdownRemark(limit: 3, sort: {order: DESC, fields: frontmatter___date}) {
                edges {
                    node {
                        fields {
                            slug
                        }
                        frontmatter {
                            categoryBackground
                            category
                            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
                            title
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
            <S.SectionTitle>Últimos posts do blog</S.SectionTitle>
            <S.SectionWrapper>
                <S.Section>
                    <S.LastPostsWrapper>
                        {lastPosts.map(
                            ({
                                node: {
                                    frontmatter: { categoryBackground, category, date, title },
                                    timeToRead,
                                    fields: { slug },
                                },
                            }) => (
                                    <LastPostsPostCard
                                        slug={slug}
                                        title={title}
                                        date={date}
                                        category={category}
                                        categoryBackground={categoryBackground}
                                        timeToRead={timeToRead}
                                    />
                                )
                        )}
                    </S.LastPostsWrapper>
                </S.Section>
            </S.SectionWrapper>
            <S.SeeAllPostsWrapper>
                <S.SeeAllPostsLink to={'/blog'}>Ver todos os posts...</S.SeeAllPostsLink>
            </S.SeeAllPostsWrapper>
        </>
    )
}

export default LastPosts