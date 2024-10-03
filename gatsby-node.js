const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require("path")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // Ensures we are processing only markdown files
  if (node.internal.type === "MarkdownRemark") {
    // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
    const slug = createFilePath({
      node,
      getNode,
      basePath: "pages",
    })
    // Creates new query able field with name of 'slug'
    createNodeField({
      node,
      name: "slug",
      value: `blog/${slug.slice(12)}`,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
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
              title
              language 
              image
            }
            timeToRead
          }
          next {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
          previous {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `).then(result => {
    const posts = result.data.allMarkdownRemark.edges.filter(post => post.node.frontmatter.language === 'pt-br')
    const postsEnglish = result.data.allMarkdownRemark.edges.filter(post => post.node.frontmatter.language === 'en')

    posts.forEach(({ node, next, previous }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          slug: node.fields.slug,
          previousPost: previous,
          nextPost: next,
        },
      })
    })

    postsEnglish.forEach(({ node, next, previous }) => {
      createPage({
        path: `en/${node.fields.slug}`,
        component: path.resolve(`./src/templates/blog-post.en.js`),
        context: {
          slug: node.fields.slug,
          previousPost: previous,
          nextPost: next,
        },
      })
    })

    const postsPerPage = 15
    const numPages = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: numPages }).forEach((_, index) => {
      createPage({
        path: index === 0 ? `/blog` : `/blog/page/${index + 1}`,
        component: path.resolve(`./src/templates/blog-list.js`),
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          numPages,
          currentPage: index + 1,
        },
      })
    })

    const numPagesEnglish = Math.ceil(postsEnglish.length / postsPerPage)
    Array.from({ length: numPagesEnglish }).forEach((_, index) => {
      createPage({
        path: index === 0 ? `/en/blog` : `/en/blog/page/${index + 1}`,
        component: path.resolve(`./src/templates/blog-list.en.js`),
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          numPagesEnglish,
          currentPage: index + 1,
        },
      })
    })
  })
}

