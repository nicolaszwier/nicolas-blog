import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostsList from "../components/PostsList"

const BlogList = props => {
  const postList = props.data.allMarkdownRemark.edges

  return (
    <Layout lang="en">
      <SEO title="Blog" />
      <PostsList postList={postList} />
    </Layout>
  )
}

export const query = graphql`
  query PostListEn($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip,
      filter: {frontmatter: {language: {eq: "en"}}}
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            categoryBackground
            category
            date(locale: "en", formatString: "MMMM DD[,] YYYY")
            description
            title, 
            image,
            language
          }
          timeToRead
        }
      }
    }
  }
`

export default BlogList