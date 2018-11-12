import React from 'react'

import styles from './past_summary.module.scss'
import IconMike from '../../../images/sponsoration/icon-microphone.svg'
import IconAudience from '../../../images/sponsoration/icon-audience.svg'
import IconFlags from '../../../images/sponsoration/icon-flags.svg'

const PastSummary = () => (
  <>
    <div className={styles.past_summary}>
      <div className={styles.block_inner}>
        <h2>Past years were awesome!</h2>
        <h3>Here’s what happened so far:</h3>

        <div className={styles.big_summary}>
          <div className={styles.col}>
            <IconMike />
            <span className={styles.stat_number}>19</span>
            <h4 className={styles.label}>Speakers</h4>
          </div>
          <div className={styles.col}>
            <IconAudience />
            <span className={styles.stat_number}>550</span>
            <h4 className={styles.label}>Attendees</h4>
          </div>
          <div className={styles.col}>
            <IconFlags />
            <span className={styles.stat_number}>28</span>
            <h4 className={styles.label}>Countries</h4>
          </div>
        </div>

        <iframe
          className="mood-video"
          width="100%"
          height="518"
          src="https://www.youtube.com/embed/mJoS_pLbiWc"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>
  </>
)

export default PastSummary
