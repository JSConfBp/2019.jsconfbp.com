import React from 'react'

import styles from './attendees.module.scss'

const PastSummary = () => (
  <>
    <div className={styles.attendees}>
      <div className={styles.block_inner}>
        <h3>Our attendees</h3>

        <div className={styles.stats}>
          <div className={styles.stats__age}>
            <h4>Age</h4>
            <dl className={styles.graphs}>
              <dt>18-24</dt>
              <dd>
                <span style={{ width: '6%' }} />6 %
              </dd>
              <dt>25-34</dt>
              <dd className={styles.graphs__top}>
                <span style={{ width: '73%' }} />
                73 %
              </dd>
              <dt>35-44</dt>
              <dd>
                <span style={{ width: '16%' }} />
                16 %
              </dd>
              <dt>44+</dt>
              <dd>
                <span style={{ width: '4%' }} />4 %
              </dd>
            </dl>
          </div>

          <div className={styles.stats__position}>
            <h4>Position</h4>
            <dl className={styles.graphs}>
              <dt>Junior developer</dt>
              <dd>6 %</dd>
              <dt>Developer</dt>
              <dd>73 %</dd>
              <dt>Senior developer</dt>
              <dd>16 %</dd>
              <dt>Team leader</dt>
              <dd>4 %</dd>
              <dt>C-level executive</dt>
              <dd>4 %</dd>
            </dl>
          </div>

          <div className={styles.stats__position}>
            <h4>Knowledge & Practice</h4>
            <dl className={styles.graphs}>
              <dt>Beginner</dt>
              <dd>6 %</dd>
              <dt>Intermediate</dt>
              <dd>73 %</dd>
              <dt>Advanced</dt>
              <dd>16 %</dd>
              <dt>Expert</dt>
              <dd>4 %</dd>
            </dl>
          </div>
        </div>

        <div className={styles.countries}>
          <h4>Top Countries</h4>
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
