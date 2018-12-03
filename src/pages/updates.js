import React from 'react'
import MainLayout from '../components/MainLayout/index'
import { Link } from 'gatsby'
import styles from './updates.module.scss'

const Updates = () => (
  <MainLayout>
    <div className={styles.updates}>
      <h1>Updates</h1>
      <ul className={styles.updates_list}>
        <li className={styles.updates_list_item}>
          <span className={styles.date}>2018 November 21.</span>
          <Link className={styles.title} to="#">
            Ticket sales & Call For Papers start in December 2018
          </Link>
          <p className={styles.lead}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            convallis viverra posuere. Mauris ut mauris ac purus malesuada
            tincidunt. Sed leo risus, tincidunt a tempor facilisis, rhoncus vel
            velit. Sed facilisis felis non pellentesque ultricies. In massa
            eros, pellentesque ut malesuada id, ultricies a ligula.{' '}
            <Link to="#">Read more →</Link>
          </p>
        </li>
        <li className={styles.updates_list_item}>
          <span className={styles.date}>2018 November 21.</span>
          <Link className={styles.title} to="#">
            Ticket sales & Call For Papers start in December 2018
          </Link>
          <p className={styles.lead}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            convallis viverra posuere. Mauris ut mauris ac purus malesuada
            tincidunt. Sed leo risus, tincidunt a tempor facilisis, rhoncus vel
            velit. Sed facilisis felis non pellentesque ultricies. In massa
            eros, pellentesque ut malesuada id, ultricies a ligula.{' '}
            <Link to="#">Read more →</Link>
          </p>
        </li>
      </ul>
    </div>
  </MainLayout>
)

export default Updates
