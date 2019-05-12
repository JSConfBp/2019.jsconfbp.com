import React from 'react'
import { graphql } from 'gatsby'
import classNames from 'classnames'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import Button from '../components/Button/index'
import Layout from '../components/Layout/index'
import SocialMeta from '../components/SocialMeta/index'
import SpeakerImage from '../components/SpeakerImage'

import styles from '../pages/simpletext.module.scss'
import speakerStyles from './speaker-styles.module.scss'

const TicketButton = () => (
  <Button
    block={true}
    fill={true}
    color={'red'}
    href={'https://ti.to/jsconf-bp/jsconf-budapest-2019'}
    className={styles.ticket_button}
  >
    Buy Your Ticket
  </Button>
)

const Link = props => {
  const { url, text } = props

  return (
    <a href={url} rel="noopener">
      {text}
    </a>
  )
}
function SpeakersContentTemplate({ data: { mdx } }) {
  const { title, company, company_url, short_description } = mdx.frontmatter
  return (
    <Layout>
      <SocialMeta
        title={mdx.frontmatter.title}
        description={mdx.frontmatter.short_description}
        image={mdx.frontmatter.socialCard || 'social-card.png'}
      />
      <div className={classNames(styles.simpleText)}>
        <div className={speakerStyles.speakerpage}>
          <div className={speakerStyles.title_column}>
            <h2>{title}</h2>
          </div>
          <div className={speakerStyles.talk_column}>
            <MDXRenderer>{mdx.code.body}</MDXRenderer>

            <hr />
          </div>
          <div className={speakerStyles.speaker_column}>
            <ul className={speakerStyles.links}>
              {company && (
                <li className={speakerStyles.link_company}>
                  <Link url={company_url} text={company} />
                </li>
              )}
            </ul>
            <TicketButton />
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
