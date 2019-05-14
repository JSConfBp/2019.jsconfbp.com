import React from 'react'
import { graphql } from 'gatsby'
import classNames from 'classnames'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import Button from '../components/Button/index'
import Layout from '../components/Layout/index'
import SocialMeta from '../components/SocialMeta/index'
import SpeakerImage from '../components/SpeakerImage'

import styles from '../pages/simpletext.module.scss'
import workshopStyles from './workshop-styles.module.scss'
import RegisterButton from '../components/RegisterButton'


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
        <div className={workshopStyles.workshop_page}>
          <h2 className={workshopStyles.workshop_title}>
            {title}
          </h2>

          <div className={workshopStyles.main_content}>
            <MDXRenderer>{mdx.code.body}</MDXRenderer>
            <hr />
          </div>

          <div className={workshopStyles.workshop_meta}>
            <h4 className={workshopStyles.subtitle}>Workshop by</h4>
            <ul className={workshopStyles.links}>
              {company && (
                <li>
                  <Link url={company_url} text={company} />
                </li>
              )}
              <li>
                September 24th, 2019
              </li>
              <li>
                Location: TBA
              </li>
            </ul>

            <RegisterButton />
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
