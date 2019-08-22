import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styles from './postimage.module.scss'

const PostImage = ({ image, style = '', alt = '' }) => (
  <StaticQuery
    query={graphql`
      query postImgQuery {
        source: allFile(filter: { absolutePath: { regex: "/static/posts/" } }) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `}
    render={data => {

      const imageStyle = Object.assign({}, style, {
        //transform: style.transform + ' translateX(-50%)',
        //position: 'absolute'
      })

      return data.source.edges
        .filter(({ node }) => {
          const { src } = node.childImageSharp.fluid
          return src.includes(image)
        })
        .map(({ node }, i) => (
          <div className={styles.postImage_container}>
            <div className={styles.postImage_inner}>
              <Img
                style={imageStyle}
                className={styles.postImage_image}
                fluid={node.childImageSharp.fluid}
                key={image}
                alt={alt}
              />
            </div>
          </div>
        ))
    }}
  />
)
export default PostImage
