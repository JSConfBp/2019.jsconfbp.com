import React from 'react'
import { graphql } from 'gatsby'

import Button from '../components/Button'
import MainLayout from '../components/MainLayout'
import SocialMeta from '../components/SocialMeta'
import UpdatesList from '../components/UpdatesList'
import SpeakersList from '../components/SpeakersList'
import SponsorList from '../components/SponsorList'
import TeamProfileImage from '../components/TeamProfileImage'
import styles from './index.module.scss'

const IndexPage = props => (
  <MainLayout>
    <SocialMeta image="social_card_home2.jpg" />
    <div>
      <div className={styles.home}>
        <div className={styles.homeContent}>
          <h1 className={styles.title}>JSConf Budapest 2019</h1>

          <span className={styles.date}>26-27th September</span>

          {/*<p>
            Not sure what to expect next year? <br />
            Check out our past events in{' '}
            <a href="http://2017.jsconfbp.com">2017</a>,{' '}
            <a href="http://2016.jsconfbp.com">2016</a> or{' '}
            <a href="http://2015.jsconfbp.com">2015</a>!
          </p>*/}

        </div>
      </div>
      <div className={styles.updates}>
        <div className={styles.updates_content}>
          <h1 className={styles.home_heading}>Speakers</h1>

          <SpeakersList data={props.data} />

          {/*<h1 className={styles.home_heading}>Master of Ceremony</h1>

          <div className={styles.mc_container}>
            <div className={styles.mc_profile}>
              <TeamProfileImage image={'paul_vm'} className={styles.mc_image} />
              <a href="https://twitter.com/paul_v_m">Paul Verbeek-Mast</a>
            </div>
          </div>
          */}
        </div>
      </div>

      <div className={styles.updates}>
        <div className={styles.updates_content}>
          <h1 className={styles.home_heading}>Updates</h1>

          <UpdatesList data={props.data} />
        </div>
      </div>

      <div className={styles.updates}>
        <div className={styles.updates_content}>
          <SponsorList />
        </div>
      </div>
    </div>
  </MainLayout>
)

export default IndexPage

export const query = graphql`
  query IndexUpdates {
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
            name
            order
            image
            color
            title
            date
            lead
            title
          }
        }
      }
    }
  }
`
