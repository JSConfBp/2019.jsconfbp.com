import React from 'react'
import classnames from 'classnames'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Triangle from '../Triangle'
import styles from './speakerimage.module.scss'


const randomTriangle = () => (Math.floor(Math.random() * 6) + 1)

const SpeakerImage = ({image, className = ''}) => (
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
    <div className={classnames(styles.speaker, className)}>
        <Triangle className={styles[`triangle_1_${randomTriangle()}`]} />
        <Triangle className={styles[`triangle_2_${randomTriangle()}`]} />

        {data.source.edges
        .filter(({ node }) => {
          const { src } = node.childImageSharp.fluid
          return src.includes(image)
        })
        .map(({ node }, i) => (
        	<Img className={styles.image} key={`speaker-image-${i}`} fluid={node.childImageSharp.fluid} />
        ))}
    </div>
    )}
  />
)
export default SpeakerImage