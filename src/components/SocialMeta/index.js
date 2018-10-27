import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'

const SocialMeta = () => (
  <StaticQuery
    query={graphql`
      query SiteSocialQuery {
        site {
          siteMetadata {
            title
            description
            twitter
          }
        }
      }
    `}
    render={data => (
      <Helmet
        meta={[
          { name: 'og:type', content: 'website' },
          { name: 'og:title', content: data.site.siteMetadata.title },
          {
            name: 'og:description',
            content: data.site.siteMetadata.description,
          },
          { name: 'og:site_name', content: data.site.siteMetadata.title },
          { name: 'og:url', content: 'http://jsconfbp.com/index.html' },
          {
            name: 'og:image',
            content: 'http://jsconfbp.com/img/social-card.png',
          },

          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:site', content: data.site.siteMetadata.twitter },
          { name: 'twitter:creator', content: data.site.siteMetadata.twitter },
          { name: 'twitter:title', content: data.site.siteMetadata.title },
          {
            name: 'twitter:description',
            content: data.site.siteMetadata.description,
          },
          { name: 'twitter:url', content: 'http://jsconfbp.com/index.html' },
          {
            name: 'twitter:image',
            content: 'http://jsconfbp.com/img/social-card.png',
          },
        ]}
      />
    )}
  />
)

export default SocialMeta
