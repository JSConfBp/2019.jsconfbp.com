import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'

const SocialMeta = props => (
  <StaticQuery
    query={graphql`
      query SiteSocialMetaQuery {
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
          { name: 'og:url', content: 'https://jsconfbp.com/' },
          {
            name: 'og:image',
            content: `https://jsconfbp.com/social-cards/${props.image}`,
          },

          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:site', content: data.site.siteMetadata.twitter },
          { name: 'twitter:creator', content: data.site.siteMetadata.twitter },
          { name: 'twitter:title', content: data.site.siteMetadata.title },
          {
            name: 'twitter:description',
            content: data.site.siteMetadata.description,
          },
          { name: 'twitter:url', content: 'https://jsconfbp.com/' },
          {
            name: 'twitter:image',
            content: `https://jsconfbp.com/social-cards/${props.image}`,
          },
        ]}
      />
    )}
  />
)

export default SocialMeta
