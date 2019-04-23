import React from 'react'
import classnames from 'classnames'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Triangle from '../Triangle'
import ProfileImage from '../ProfileImage'

const randomTriangle = () => Math.floor(Math.random() * 6) + 1

const SpeakerImage = ({ image, color, className = '' }) => (
  <StaticQuery
    query={graphql`
      query speakerImgQuery {
        source: allFile(
          filter: { absolutePath: { regex: "/speakers/images/" } }
        ) {
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
    render={data => {
      return data.source.edges
        .filter(({ node }) => {
          const { src } = node.childImageSharp.fluid
          return src.includes(image)
        })
        .map(({ node }, i) => (
          <ProfileImage
            imageData={node.childImageSharp.fluid}
            className={className}
            key={`speaker-image-${i}`}
          />
        ))
    }}
  />
)
export default SpeakerImage
