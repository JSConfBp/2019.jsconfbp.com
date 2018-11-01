import React from 'react'

import Helmet from 'react-helmet'
import Layout from '../components/Layout/index'
import styles from './index.module.scss'

const IndexPage = () => (
  <Layout className={styles.home}>
    <h1 className={styles.date}>
      2019 <span className={styles.month}>September</span> <span className={styles.days}>26-27</span>
    </h1>
    <div className={styles.info}>
      Ticket sales & Call For Papers<br />
      start in December 2018
    </div>
  </Layout>
)

export default IndexPage
