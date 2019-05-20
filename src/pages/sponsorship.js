import React from 'react'
import SocialMeta from '../components/SocialMeta'
import SponsorationLayout from '../components/Sponsoration/Layout/index'
import Header from '../components/Sponsoration/Header/index'
import PastSummary from '../components/Sponsoration/PastSummary/index'
import Attendees from '../components/Sponsoration/Attendees/index'
import Reach from '../components/Sponsoration/Reach/index'
import NextYear from '../components/Sponsoration/NextYear/index'
import Packages from '../components/Sponsoration/Packages/index'
import Perks from '../components/Sponsoration/Perks/index'
import Contact from '../components/Sponsoration/Contact/index'
import Impressum from '../components/Sponsoration/Impressum/index'

import styles from './sponsoration.module.scss'

const IndexPage = () => (
  <SponsorationLayout className={styles.sponsoration}>
    <SocialMeta image="social_card_sponsorship.jpg" />
    <Header />
    <PastSummary />
    <Attendees />
    <Reach />
    <NextYear />
    <Packages />
    <Perks />
    <Contact />
    <Impressum />
  </SponsorationLayout>
)

export default IndexPage
