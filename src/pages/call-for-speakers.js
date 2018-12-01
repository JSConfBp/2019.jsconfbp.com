import React from 'react'
import MainLayout from '../components/MainLayout/index'
import styles from './simpletext.module.scss'

const CallForSpeakers = () => (
  <MainLayout>
    <div className={styles.simpleText}>
      <h1>JSConf Budapest 2019 Call for Speakers</h1>
      <p>
        All attendees, speakers, sponsors and volunteers at JSConf Budapest are
        required to agree with the following code of conduct. Organizers will
        enforce this code throughout the event. We are expecting coorporation
        from all participants to help ensuring a safe environment for everybody.
      </p>
    </div>
  </MainLayout>
)

export default CallForSpeakers
