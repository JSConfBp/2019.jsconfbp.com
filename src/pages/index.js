import React from 'react'
import { Link } from 'gatsby'
import Button from '../components/Button/index'
import MainLayout from '../components/MainLayout/index'
import styles from './index.module.scss'
import SocialMeta from '../components/SocialMeta/index'

const IndexPage = () => (
  <MainLayout>
    <SocialMeta image="social_card_earlybird.jpg" />
    <div className={styles.home}>
      <div className={styles.homeContent}>

        <h1 className={styles.title}>JSConf Budapest 2019</h1>

        <span className={styles.date}>26-27th September</span>

        <p>
          Not sure what to expect next year? <br />Check out our past events in <a href="http://2017.jsconfbp.com">2017</a>, <a href="http://2016.jsconfbp.com">2016</a> or <a href="http://2015.jsconfbp.com">2015</a>!
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
  </MainLayout>
)

export default IndexPage
