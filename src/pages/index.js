import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import MainLayout from '../components/MainLayout/index'
import styles from './index.module.scss'

const IndexPage = () => (
  <MainLayout>
    <div className={styles.home}>
      <div className={styles.homeContent}>
          <h1 className={styles.title}>JSConf Budapest 2019</h1>
          <span className={styles.date}>26-27th September</span>
          <span className={styles.venue}>Akvárium Klub</span>
          <Link className={styles.updates} to="/register">Get updates</Link>
      </div>
    </div>
  </MainLayout>
)

export default IndexPage
