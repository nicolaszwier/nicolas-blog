import React from "react";
import { useStaticQuery, graphql } from "gatsby"

import * as S from './styled';
import LastPostsPostCard from '../LastPostsPostCard'
import Icons from "../Icons";

const LastPosts = () => {

    const { allMarkdownRemark } = useStaticQuery(graphql`
         query LastPosts {
             allMarkdownRemark(limit: 3, sort: {order: DESC, fields: frontmatter___date}, filter: {frontmatter: {language: {eq: "pt-br"}}}) {
                edges {
                    node {
                        fields {
                            slug
                        }
                        frontmatter {
                            categoryBackground
                            category
                            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
                            title,
                            image
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
                                    frontmatter: { categoryBackground, category, date, title, image },
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
                                />
                            )
                        )}
                    </S.LastPostsWrapper>
                </S.Section>
            </S.SectionWrapper>
            <S.SeeAllPostsLink to={'/blog'}>Ver todos os posts <Icons.ArrowSmRight /></S.SeeAllPostsLink>
        </>
    )
}

export default LastPosts