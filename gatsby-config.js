module.exports = {
  siteMetadata: {
    title: `nicolasz.dev`,
    description: `Nicolas Zwierzykowski's blog about web development, JS, React, CSS and other cool technologies`,
    author: `@nicolaszwier`,
    siteUrl: `https://nicolasz.dev`
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/assets/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images-v2",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: "@weknow/gatsby-remark-codepen",
            options: {
              theme: "dark",
              height: 400
            }
          },
          `gatsby-remark-lazy-load`,
          'gatsby-remark-prismjs',
          'gatsby-plugin-sitemap'
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'pt-br',
        useLangKeyLayout: false
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `nicolasz.dev | Nicolas Zwierzykowski`,
        short_name: `nicolasz.dev`,
        description: `Nicolas Zwierzykowski - Software engineer | Personal website and blog`,
        start_url: `/`,
        lang: `pt-br`,
        background_color: `#3d5afe`,
        theme_color: `#212121`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
        localize: [
          {
            start_url: `/en/`,
            lang: `en`,
            name: `nicolasz.dev | Nicolas Zwierzykowski`,
            short_name: `nicolasz.dev`,
            description: `Nicolas Zwierzykowski - Software engineer | Personal website and blog`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-172427936-1", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Defaults to https://www.googletagmanager.com
          origin: "nicolasz.dev",
        },
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {

                const completeUrl = `${site.siteMetadata.siteUrl}/${edge.node.frontmatter.language == 'en' ? 'en/' : ''}${edge.node.fields.slug}`

                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.description,
                  date: edge.node.frontmatter.date,
                  category: edge.node.frontmatter.category,
                  url: completeUrl,
                  link: completeUrl,
                  guid: completeUrl,
                  custom_elements: [{ 'content:encoded': edge.node.html }]
                })
              })
            },
            query: `
              {
                allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
                  edges {
                    node {
                      fields {
                        slug
                      }
                      frontmatter {
                        title
                        description
                        date
                        category
                        language
                      }
                      excerpt
                      html
                    }
                  }
                }
              }
            `,
            output: '/feed.xml',
            title: 'Nicolas Zwierzykowski Blog - RSS Feed'
          }
        ]
      }
    },
  ],
}
