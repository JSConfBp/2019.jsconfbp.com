import React from 'react'

import styles from './reach.module.scss'
const Reach = () => (
  <>
    <div className={styles.reach}>
      <div className={styles.block_inner}>
        <h2>Reach</h2>

        <h3>100% relevance in the JavaScript community</h3>

        <div className={styles.numbers}>

          <div className={styles.twitter} title="Twitter">
            <h4>
              <span className={styles.followers}>1.5k</span>
              Followers
            </h4>
          </div>

          <div className={styles.youtube} title="Youtube">
            <h4>
              <span className={styles.subscribers}>106k</span>
              Subscribers
            </h4>
          </div>

          <div className={styles.facebook} title="Facebook">
            <h4>
              <span className={styles.reached}>20k</span>
              People Reached
            </h4>
          </div>

        </div>

        <p className={styles.notes}>
          Our videos were watched over <strong>242,000 times</strong> on YouTube. <br />
          Viewers spend more than <strong>1,742,000 minutes</strong> watching the talks online.
        </p>
      </div>
    </div>
  </>
)

export default Reach
