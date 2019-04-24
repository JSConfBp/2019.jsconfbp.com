import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'

const SocialMeta = props => (
  <StaticQuery
    query={graphql`
      query SiteSocialMetaQuery {
        site {
          siteMetadata {
            siteUrl
            title
            description
            twitter
          }
        }
      }
    `}
    render={data => {
      const {
        title,
        twitter,
        siteUrl,
        description
      } = data.site.siteMetadata;

      return (
        <Helmet
          meta={[
            { name: 'og:type', content: 'website' },
            {
              name: 'og:title',
              content: props.title || title,
            },
            {
              name: 'og:description',
              content: props.description || description,
            },
            { name: 'og:site_name', content: title },
            { name: 'og:url', content: siteUrl },
            {
              name: 'og:image',
              content: `${siteUrl}/social-cards/${props.image}`,
            },

            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:site', content: twitter },
            { name: 'twitter:creator', content: twitter },
            {
              name: 'twitter:title',
              content: props.title || title,
            },
            {
              name: 'twitter:description',
              content: props.description || description,
            },
            {
              name: 'twitter:url',
              content: siteUrl
            },
            {
              name: 'twitter:image',
              content: `${siteUrl}/social-cards/${props.image}`,
            },
          ]}
        />
      )}
    }
  />
)

export default SocialMeta
