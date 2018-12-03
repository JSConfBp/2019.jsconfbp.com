import React from 'react'
import { Link } from 'gatsby'
import Button from '../components/Button/index'
import MainLayout from '../components/MainLayout/index'
import styles from './index.module.scss'
import MailChimpButton from '../components/MailChimpButton/index'

const NotFoundPage = () => (
  <MainLayout>
    <div className={styles.home}>
      <div className={styles.homeContent}>
        <h1 className={styles.title}>404 Not Found</h1>
        <span className={styles.date}>Something's missing here...</span>
      </div>
    </div>
  </MainLayout>
)

export default NotFoundPage
