import React from 'react'
import MainLayout from '../components/MainLayout/index'
import styles from './simpletext.module.scss'
import Button from '../components/Button/index'

const CFP_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSeox5OTuhXmrLXhWtLAcj4AFfpKj9kiv0B17A1rhEU0Qy3xrQ/viewform'

const CFP_Button = () => (
  <Button
    block={true}
    fill={true}
    color={'red'}
    href={CFP_URL}
    className={styles.cfp__button}
  >
    Submit your talk
  </Button>
)

const CallForSpeakers = () => (
  <MainLayout>
    <div className={styles.simpleText}>
      <h1>
        JSConf Budapest 2019
        <br />
        Call for Speakers
      </h1>

      <CFP_Button />

      <p>
        All attendees, speakers, sponsors and volunteers at JSConf Budapest are
        required to agree with the following code of conduct. Organizers will
        enforce this code throughout the event. We are expecting coorporation
        from all participants to help ensuring a safe environment for everybody.
      </p>

      <CFP_Button />
    </div>
  </MainLayout>
)

export default CallForSpeakers
