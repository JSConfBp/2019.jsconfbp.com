import React from 'react'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import Layout from '../components/Layout/index'
import SocialMeta from '../components/SocialMeta/index'
import styles from '../pages/simpletext.module.scss'

function UpdatesContentTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <SocialMeta
        title={mdx.frontmatter.title}
        description={mdx.frontmatter.lead}
        image={mdx.frontmatter.socialCard || 'social-card.png'}
      />
      <div className={styles.simpleText}>
        <MDXRenderer>{mdx.code.body}</MDXRenderer>
      </div>
    </Layout>
  )
}

export default UpdatesContentTemplate

export const pageQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      id
      code {
        body
      }
      frontmatter {
        title
        lead
        socialCard
      }
    }
  }
`
