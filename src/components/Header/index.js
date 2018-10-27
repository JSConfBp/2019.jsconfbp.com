import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import SocialMeta from '../SocialMeta/index'
import styles from './header.module.scss'

const Logo = props => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 150) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        className={styles.header_logo}
        title="JSConf Budapest"
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    )}
  />
)

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <SocialMeta />
    <div className={styles.header_inner}>
      <Link to="/">
        <Logo />
      </Link>
    </div>
  </header>
)

export default Header
