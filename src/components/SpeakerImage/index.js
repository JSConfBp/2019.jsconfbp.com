import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Triangle from '../Triangle'
import styles from './speakerimage.module.scss'

const SpeakerImage = (props) => (
  <StaticQuery
    query={graphql`
      query allimgQuery {
        source: allFile(filter: { absolutePath: { regex: "/images/speakers/" } }) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
    <div className={styles.speaker}>
        <Triangle className={styles.triangle_1} />
        <Triangle className={styles.triangle_2} />
        <Triangle className={styles.triangle_3} />
        <Triangle className={styles.triangle_4} />
        {data.source.edges
        .filter(({ node }) => {
          const { src } = node.childImageSharp.fluid
          return src.includes(props.src)
        })
        .map(({ node }, i) => (
        	<Img className={styles.image} key={`speaker-image-${i}`} fluid={node.childImageSharp.fluid} />
        ))}
    </div>
    )}
  />
)
export default SpeakerImage