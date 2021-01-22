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
            resolve: "gatsby-remark-relative-images",
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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-172427936-1",
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify-cms`
  ],
}
