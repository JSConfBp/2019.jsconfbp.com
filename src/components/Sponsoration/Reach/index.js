import React from 'react'

import TwitterLogo from '../../../images/sponsoration/twitter.svg'
import YoutubeLogo from '../../../images/sponsoration/youtube.svg'
import FacebookLogo from '../../../images/sponsoration/facebook.svg'

import styles from './reach.module.scss'
const Reach = () => (
  <>
    <div className={styles.reach}>
      <div className={styles.block_inner}>

        <h2>Reach</h2>

        <h3>100% relevance in the JavaScript community</h3>

        <div className={ styles.numbers }>
          <div className={ styles.twitter }>
            <TwitterLogo />
            <h4>
              <span className={ styles.followers }>1.5k</span>
              Followers
            </h4>
          </div>
          <div className={ styles.youtube }>
            <YoutubeLogo />
            <h4>
              <span className={ styles.subscribers }>106k</span>
              Subscribers
            </h4>
          </div>
          <div className={ styles.facebook }>
            <FacebookLogo />
            <h4>
              <span className={ styles.reached }>20k</span>
              People Reached
            </h4>
          </div>
        </div>

        <p className={ styles.notes }>
          Last year’s videos were watched over <strong>8,000 times</strong> on YouTube. <br />
          Viewers spend <strong>40,000 minutes</strong> watching the videos.
        </p>

      </div>
    </div>
  </>
)

export default Reach
