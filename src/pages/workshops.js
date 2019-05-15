import React from 'react'
import Layout from '../components/Layout/index'
import styles from './workshops.module.scss'
import SocialMeta from '../components/SocialMeta/index'

import WorkshopList from '../components/WorkshopList'

const Workshops = props => (
  <Layout>
    <SocialMeta image="social_card_workshops.jpg" />
    <div className={styles.workshops}>
      <h1 className={styles.typo}>Workshops</h1>

      <p className={styles.typo}>
        <strong>These workshops are FREE for every ticket holder of JSConf Budapest or a Combo ticket with CSSConf Budapest.</strong>
      </p>

      <p className={styles.typo}>
        The workshops have limited seats, so be sure to <a href="https://ti.to/jsconf-bp/jsconf-budapest-2019">get your ticket</a>
        before they fill up! We'll open them slowly, so everyone have a chance to pick a workshop they like.
      </p>

      <p className={styles.typo}>
        You will be able to register to a workshop using the ID on your ticket. If will be possible to switch the workshop
        you've picked later, if there is a free seat available on another workshop.
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

export default Workshops
