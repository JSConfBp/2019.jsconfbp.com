import React from 'react'
import Layout from '../components/Layout/index'
import styles from './workshops.module.scss'
import SocialMeta from '../components/SocialMeta/index'

import WorkshopList from '../components/WorkshopList'

const Schedule = props => (
  <Layout>
    <SocialMeta image="social_card_workshops.jpg" />
    <div className={styles.workshops}>
      <h1 className={styles.typo}>Workshops</h1>

      <p className={styles.typo}>
        This will be the rough schedule for September, we'll get this more and
        more detailed with time.
      </p>

      <WorkshopList data={props.data} />
    </div>
  </Layout>
)

export const query = graphql`
  query WorkshopsPage {
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
            disabled
            title
            company
            short_description
            path
            workshop_id
            start
            end
            mentors
          }
        }
      }
    }
  }
`

export default Schedule
