import React from 'react'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import Layout from '../components/Layout/index'
import SocialMeta from '../components/SocialMeta/index'
import styles from '../pages/simpletext.module.scss'

function PostPageTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <SocialMeta image="social_card_cfp.jpg" />
      <div className={styles.simpleText}>
        <MDXRenderer>{mdx.code.body}</MDXRenderer>
      </div>
    </Layout>
  )
}

export default PostPageTemplate

export const pageQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      id
      code {
        body
      }
    }
  }
`
