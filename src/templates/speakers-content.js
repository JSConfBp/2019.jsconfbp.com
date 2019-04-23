import React from 'react'
import { graphql } from 'gatsby'
import classNames from 'classnames'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import Layout from '../components/Layout/index'
import SocialMeta from '../components/SocialMeta/index'
import SpeakerImage from '../components/SpeakerImage'

import styles from '../pages/simpletext.module.scss'
import speakerStyles from './speaker-styles.module.scss'

const Link = props => {
  const { url, text } = props

  return (
    <a href={url} rel="noopener">
      {text}
    </a>
  )
}
function SpeakersContentTemplate({ data: { mdx } }) {
  const {
    title,
    name,
    bio,
    image,
    color,
    from,
    link,
    twitter,
    github,
    company,
    company_url,
  } = mdx.frontmatter
  return (
    <Layout>
      <SocialMeta
        title={mdx.frontmatter.title}
        description={mdx.frontmatter.lead}
        image={mdx.frontmatter.socialCard || 'social-card.png'}
      />
      <div className={classNames(styles.simpleText)}>
        <div className={speakerStyles.speakerpage}>
          <div className={speakerStyles.title_column}>
            <h3 className={speakerStyles.speaker_name}>{name}</h3>
            <h2>{title}</h2>
          </div>
          <div className={speakerStyles.speaker_column}>
            <SpeakerImage image={image} color={color} />

            <ul className={speakerStyles.links}>
              <li className={speakerStyles.link_from}>
                <Link
                  url={`https://www.google.com/maps/search/${from}`}
                  text={from}
                />
              </li>
              {link && (
                <li className={speakerStyles.link_blog}>
                  <Link url={link} text="Website" />
                </li>
              )}
              {twitter && (
                <li className={speakerStyles.link_twitter}>
                  <Link
                    url={`https://twitter.com/${twitter}`}
                    text={`@${twitter}`}
                  />
                </li>
              )}
              {github && (
                <li className={speakerStyles.link_github}>
                  <Link url={`https://github.com/${github}`} text={github} />
                </li>
              )}
              {company && (
                <li className={speakerStyles.link_company}>
                  <Link url={company_url} text={company} />
                </li>
              )}
            </ul>
          </div>
          <div className={speakerStyles.talk_column}>
            <MDXRenderer>{mdx.code.body}</MDXRenderer>

            <hr />

            {bio}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SpeakersContentTemplate

export const pageQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      id
      code {
        body
      }
      frontmatter {
        name
        title
        image
        color
        bio
        from
        twitter
        github
        company
        company_url
        socialCard
      }
    }
  }
`
