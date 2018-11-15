import React from 'react'

import styles from './attendees.module.scss'

const PastSummary = () => (
  <>
    <div className={styles.attendees}>
      <div className={styles.block_inner}>
        <h3>Our attendees</h3>

        <div className={styles.stats}>
          <div className={styles.stats__age}>
            <h4 className={styles.stats_title}>Age</h4>
            <dl className={styles.graphs}>
              <dt>18-24</dt>
              <dd>
                <span style={{ width: '8%' }} />8 %
              </dd>
              <dt>25-34</dt>
              <dd className={styles.graphs__top}>
                <span style={{ width: '63%' }} />
                63 %
              </dd>
              <dt>35-44</dt>
              <dd>
                <span style={{ width: '13%' }} />
                13 %
              </dd>
              <dt>44+</dt>
              <dd>
                <span style={{ width: '2%' }} />2 %
              </dd>
            </dl>
          </div>

          <div className={styles.stats__position}>
            <h4 className={styles.stats_title}>Position</h4>
            <dl className={styles.graphs}>
              <dt>Junior developer</dt>
              <dd>
                <span style={{ width: '6%' }} />
                6 %
              </dd>
              <dt>Developer</dt>
              <dd className={styles.graphs__top}>
                <span style={{ width: '38%' }} />
                38 %
              </dd>
              <dt>Senior developer</dt>
              <dd>
                <span style={{ width: '27%' }} />
                27 %
              </dd>
              <dt>Team leader</dt>
              <dd>
                <span style={{ width: '10%' }} />
                10 %
              </dd>
              <dt>C-level executive</dt>
              <dd>
                <span style={{ width: '1%' }} />1 %
              </dd>
            </dl>
          </div>

          <div className={styles.stats__position}>
            <h4 className={styles.stats_title}>Knowledge & Practice</h4>
            <dl className={styles.graphs}>
              <dt>Beginner</dt>
              <dd>
                <span style={{ width: '5%' }} />
                5%
              </dd>
              <dt>Intermediate</dt>
              <dd>
                <span style={{ width: '30%' }} />
                30%
              </dd>
              <dt>Advanced</dt>
              <dd className={styles.graphs__top}>
                <span style={{ width: '35%' }} />
                35%
              </dd>
              <dt>Expert</dt>
              <dd>
                <span style={{ width: '10%' }} />
                10 %
              </dd>
            </dl>
          </div>
        </div>

        <div className={styles.countries}>
          <h4 className={styles.stats_title}>Top Countries</h4>
          <p>
            Netherlands, Germany, Hungary, United States, United Kingdom,
            Portugal, Slovakia, Romania, Poland, Serbia
          </p>
        </div>
      </div>
    </div>
  </>
)

export default PastSummary
