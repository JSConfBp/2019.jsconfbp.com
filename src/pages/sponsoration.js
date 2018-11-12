import React from 'react'
import SponsorationLayout from '../components/Sponsoration/Layout/index'
import PastSummary from '../components/Sponsoration/PastSummary/index'
import Attendees from '../components/Sponsoration/Attendees/index'
import Reach from '../components/Sponsoration/Reach/index'
import NextYear from '../components/Sponsoration/NextYear/index'
import Packages from '../components/Sponsoration/Packages/index'
import Perks from '../components/Sponsoration/Perks/index'

import styles from './sponsoration.module.scss'

const IndexPage = () => (
  <SponsorationLayout className={styles.sponsoration}>
    <h1 className={styles.title}>
      JSConf Budapest 2019 & CSSConf Budapest 2019 Sponsoration
    </h1>

    <PastSummary />
    <Attendees />
    <Reach />
    <NextYear />
    <Packages />
    <Perks />
  </SponsorationLayout>
)

export default IndexPage
