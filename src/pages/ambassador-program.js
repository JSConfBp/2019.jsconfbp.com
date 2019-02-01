import React from 'react'
import Layout from '../components/Layout/index'
import styles from './simpletext.module.scss'
import AmbassadorForm from '../components/AmbassadorForm/index'
import SocialMeta from '../components/SocialMeta/index'

const CallForSpeakers = () => (
  <Layout>
    <SocialMeta image="social_card_ambassador.jpg" />
    <div className={styles.simpleText}>
      <h1>Ambassador Program</h1>

      <p>
        To help developer communities, we start our Ambassador Program! We
        provide a <strong>10% discount coupon code</strong> for every community,
        who applies for the program.
      </p>

      <p>
        For every <strong>5 ticket sold</strong> with this coupon code, we
        provide <strong>a free ticket</strong> for the community who applied for
        the coupon, this free ticket then can be awarded to a
        community/meetup/usergroup member, or make it as a prize in a contest,
        it’s up to the awarded group.
      </p>

      <p>You can apply right now using the form below</p>

      <AmbassadorForm />

      <p>
        Discounts are valid on Regular Tickets or Regular Combo tickets only.
        Discount coupons cannot be used on Early Bird or partially Early Bird
        tickets.
      </p>
    </div>
  </Layout>
)

export default CallForSpeakers
