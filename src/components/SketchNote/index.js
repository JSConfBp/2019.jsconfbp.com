import React from 'react'
import classnames from 'classnames'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styles from './sketchnote.module.scss'

const SpeakerImage = ({ image, className = '' }) => (
  <StaticQuery
    query={graphql`
      query sketchnoteQuery {
        source: allFile(
          filter: { absolutePath: { regex: "/speakers/sketchnotes/" } }
        ) {
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
      return data.source.edges
        .filter(({ node }) => {
          const { src } = node.childImageSharp.fluid
          return src.includes(image)
        })
        .map(({ node }, i) => (
          <div className={ classnames(styles.sketchnote, className) } key={`sketchnote-${i}`}>
            <a href={node.childImageSharp.fluid.src}>
            <Img
              fluid={node.childImageSharp.fluid}
            />
            </a>
            <span className={ styles.credit }>
              Sketchnotes by <a href="https://malweene.com/">Malweene</a>,
            </span>
          </div>
        ))
    }}
  />
)
export default SpeakerImage
