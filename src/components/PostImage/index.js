import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styles from './postimage.module.scss'
const PostImage = ({ image, style = '' }) => (
  <StaticQuery
    query={graphql`
      query postImgQuery {
        source: allFile(filter: { absolutePath: { regex: "/static/posts/" } }) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      return data.source.edges
        .filter(({ node }) => {
          const { src } = node.childImageSharp.fluid
          return src.includes(image)
        })
        .map(({ node }, i) => (
          <div className={styles.postImage_container}>
            <Img style={style} fluid={node.childImageSharp.fluid} key={image} />
          </div>
        ))
    }}
  />
)
export default PostImage
