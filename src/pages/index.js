import React from 'react'
import { Link } from 'gatsby'
import Button from '../components/Button/index'
import MainLayout from '../components/MainLayout/index'
import styles from './index.module.scss'
import MailChimpButton from '../components/MailChimpButton/index'

const IndexPage = () => (
  <MainLayout>
    <div className={styles.home}>
      <div className={styles.homeContent}>
        <h1 className={styles.title}>JSConf Budapest 2019</h1>
        <span className={styles.date}>26-27th September</span>
        <span className={styles.venue}>Akvárium Klub</span>

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
