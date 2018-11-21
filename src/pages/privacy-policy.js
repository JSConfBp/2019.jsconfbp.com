import React from 'react'
import Helmet from 'react-helmet'
import MainLayout from '../components/MainLayout/index'
import styles from './simpletext.module.scss'

const PrivacyPolicy = () => (
  <MainLayout>
    <Helmet title={'Privacy Policy | JSConf Budapest'} />
    <div className={styles.simpleText}>
      <div
        dangerouslySetInnerHTML={{
          __html: require('../gdpr/privacy-policy.json').content,
        }}
      />
    </div>
  </MainLayout>
)

export default PrivacyPolicy
