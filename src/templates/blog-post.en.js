import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
// import RecommendedPosts from "../components/RecommendedPosts"
import Comments from "../components/Comments"

import * as S from "../components/Post/styled"

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark
  // const next = pageContext.nextPost
  // const previous = pageContext.previousPost

  return (
    <Layout lang="en">
      <SEO title={post.frontmatter.title} />
      <S.PostHeader>
        <S.PostDate>
          {post.frontmatter.date} • {post.timeToRead} min read
        </S.PostDate>
        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
        <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
      </S.PostHeader>
      <S.MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </S.MainContent>
      <Comments url={post.fields.slug} title={post.frontmatter.title} lang="en" />
      {/* <RecommendedPosts next={next} previous={previous} /> */}
    </Layout>
  )
}

export const query = graphql`
  query PostEn($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        date(locale: "en", formatString: "MMMM DD[,] YYYY")
      }
      html
      timeToRead
    }
  }
`

export default BlogPost