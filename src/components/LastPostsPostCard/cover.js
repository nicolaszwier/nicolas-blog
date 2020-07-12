import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import * as S from './styled'

const Cover = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile(
          filter: { absolutePath: { regex: "/static/assets/img/" } }
        ) {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                sizes(maxWidth: 620) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        console.log(props.filename)
        return n.node.relativePath.includes(props.filename)
      })
      if (!image) {
        return null
      }

      const imageSizes = image.node.childImageSharp.sizes
      return <S.ImageWrapper alt={props.alt} sizes={imageSizes} />
    }}
  />
)

export default Cover