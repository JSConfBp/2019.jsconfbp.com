import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import ProfileImage from '../ProfileImage'

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
            color={color}
            key={`speaker-image-${i}`}
          />
        ))
    }}
  />
)
export default SpeakerImage
