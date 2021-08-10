import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import PostsList from "../components/PostsList"

const BlogList = props => {
  const postList = props.data.allMarkdownRemark.edges

  return (
    <Layout>
      <Seo
        title="Blog | nicolasz.dev"
        description="Nicolas Zwierzykowski - Frontend developer | Blog pessoal sobre desenvolvimento web, JS, React, CSS e outras tecnologias."
        image="/assets/img/cover.png"
      />
      <PostsList postList={postList} />
    </Layout>
  )
}

export const query = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip,
      filter: {frontmatter: {language: {eq: "pt-br"}}}
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            categoryBackground
            category
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
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