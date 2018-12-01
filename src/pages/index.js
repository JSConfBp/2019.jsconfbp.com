import React from 'react'
import { Link } from 'gatsby'
import Button from '../components/Button/index'
import MainLayout from '../components/MainLayout/index'
import styles from './index.module.scss'

const IndexPage = () => (
  <MainLayout>
    <div className={styles.home}>
      <div className={styles.homeContent}>
          <h1 className={styles.title}>JSConf Budapest 2019</h1>
          <span className={styles.date}>26-27th September</span>
          <span className={styles.venue}>Akvárium Klub</span>

          <Button className={styles.updates} to="/register">Get updates</Button>
      </div>
    </div>
  </MainLayout>
)

export default IndexPage
