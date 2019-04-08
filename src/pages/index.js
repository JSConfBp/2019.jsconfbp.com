import React from 'react'
import { graphql } from 'gatsby'

import Button from '../components/Button/index'
import MainLayout from '../components/MainLayout/index'
import SocialMeta from '../components/SocialMeta/index'
import UpdatesList from '../components/UpdatesList/index'
import SpeakersList from '../components/SpeakersList/index'
import styles from './index.module.scss'

const IndexPage = props => (
  <MainLayout>
    <SocialMeta image="social_card_earlybird.jpg" />
    <div>
      <div className={styles.home}>
        <div className={styles.homeContent}>
          <h1 className={styles.title}>JSConf Budapest 2019</h1>

          <span className={styles.date}>26-27th September</span>

          <p>
            Not sure what to expect next year? <br />
            Check out our past events in{' '}
            <a href="http://2017.jsconfbp.com">2017</a>,{' '}
            <a href="http://2016.jsconfbp.com">2016</a> or{' '}
            <a href="http://2015.jsconfbp.com">2015</a>!
          </p>

          <Button block={true} to="/call-for-speakers">
            Submit your Talk!
          </Button>

          <Button
            block={true}
            fill={true}
            href="https://ti.to/jsconf-bp/jsconf-budapest-2019"
          >
            Buy tickets
          </Button>
        </div>
      </div>

      <div className={styles.updates}>
        <div className={styles.updates_content}>
          <h1>Speakers</h1>
          // TODO : kozepre rendezett flexbox oszlopokba
          <SpeakersList data={props.data} />
        </div>
      </div>

      <div className={styles.updates}>
        <div className={styles.updates_content}>
          <h1>Updates</h1>
          // TODO : kozepre rendezett flexbox oszlopokba
          <UpdatesList data={props.data} />
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
            title
            date
            lead
          }
        }
      }
    }
  }
`
