import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout/index'
import styles from './simpletext.module.scss'

const PrivacyPolicy = () => (
  <Layout>
    <Helmet title={'Privacy Policy | JSConf Budapest'} />
    <div className={styles.simpleText}>
      <div
        dangerouslySetInnerHTML={{
          __html: require('../gdpr/privacy-policy.json').content,
        }}
      />
    </div>
  </Layout>
)

export default PrivacyPolicy
