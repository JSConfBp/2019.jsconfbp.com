import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import styles from './layout.module.scss'

const SponsorationLayout = ({ className, contentBg = false, children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery3 {
        site {
          siteMetadata {
            title
            keywords
            description
          }
        }
      }
    `}
    render={data => (
      <main className={className}>
        <Helmet
          title={`Sponsorship | ${data.site.siteMetadata.title}`}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
            { name: 'keywords', content: data.site.siteMetadata.keywords },
          ]}
        >
          <html lang="en" />
        </Helmet>

        <section
          className={[styles.inner, contentBg ? styles.content : ''].join(' ')}
        >
          {children}
        </section>
      </main>
    )}
  />
)

SponsorationLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SponsorationLayout
