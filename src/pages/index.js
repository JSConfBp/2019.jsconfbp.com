import React from 'react'
import { Link } from 'gatsby'
import Button from '../components/Button/index'
import MainLayout from '../components/MainLayout/index'
import styles from './index.module.scss'
import SocialMeta from '../components/SocialMeta/index'

const IndexPage = () => (
  <MainLayout>
    <SocialMeta image="social_card_earlybird.jpg" />
    <div>
      <div className={styles.home}>
        <div className={styles.homeContent}>
          <h1 className={styles.title}>JSConf Budapest 2019</h1>

          <span className={styles.date}>26-27th September</span>

          <p>
            Not sure what to expect next year? <br />
            Check out our past events in{' '}
            <a href="http://2017.jsconfbp.com">2017</a>,{' '}
            <a href="http://2016.jsconfbp.com">2016</a> or{' '}
            <a href="http://2015.jsconfbp.com">2015</a>!
          </p>

          <Button block={true} to="/call-for-speakers">
            Submit your Talk!
          </Button>

          <Button
            block={true}
            fill={true}
            href="https://ti.to/jsconf-bp/jsconf-budapest-2019"
          >
            Buy tickets
          </Button>
        </div>
      </div>

      <div className={styles.updates}>
        <div className={styles.updates_content}>
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
                tincidunt. Sed leo risus, tincidunt a tempor facilisis, rhoncus
                vel velit. Sed facilisis felis non pellentesque ultricies. In
                massa eros, pellentesque ut malesuada id, ultricies a ligula.{' '}
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
                tincidunt. Sed leo risus, tincidunt a tempor facilisis, rhoncus
                vel velit. Sed facilisis felis non pellentesque ultricies. In
                massa eros, pellentesque ut malesuada id, ultricies a ligula.{' '}
                <Link to="#">Read more →</Link>
              </p>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </MainLayout>
)

export default IndexPage
