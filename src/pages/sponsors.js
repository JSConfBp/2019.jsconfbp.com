import React from 'react'
import Layout from '../components/Layout/index'
import styles from './workshops.module.scss'
import SocialMeta from '../components/SocialMeta/index'
import SponsorList from '../components/SponsorList'
import WorkshopList from '../components/WorkshopList'

const Sponsors = props => (
  <Layout>
    <SocialMeta image="social_card_home.jpg" />
    <div className={styles.workshops}>
      <SponsorList />
    </div>
  </Layout>
)
export default Sponsors
