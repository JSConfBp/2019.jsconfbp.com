import React from 'react'
import Layout from '../components/Layout/index'
import UpdatesList from '../components/UpdatesList/index'
import styles from './updates.module.scss'

const Updates = props => (
  <Layout>
    <div className={[styles.updates, styles.page_updates].join(' ')}>
      <UpdatesList data={props.data} />
    </div>
  </Layout>
)

export default Updates

export const query = graphql`
  query UpdatesPage {
    allMdx {
      edges {
        node {
          id
          parent {
            ... on File {
              name
              sourceInstanceName
            }
          }
          frontmatter {
            title
            date
            lead
          }
        }
      }
    }
  }
`
