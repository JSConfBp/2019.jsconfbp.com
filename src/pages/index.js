import React from 'react'

import Helmet from 'react-helmet'
import Layout from '../components/Layout/index'
import styles from './index.module.scss'

const IndexPage = () => (
  <Layout className={styles.home}>
    <Helmet meta={[{ name: 'foo', content: 'bar' }]} />
    <h1 className={styles.date}>
      2019 <span className={styles.month}>September</span>
    </h1>
  </Layout>
)

export default IndexPage
