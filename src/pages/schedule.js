import React from 'react'
import Layout from '../components/Layout/index'
import styles from './simpletext.module.scss'
import SocialMeta from '../components/SocialMeta/index'

const Schedule = () => (
  <Layout>
    <SocialMeta image="social_card.jpg" />
    <div className={styles.simpleText}>
      <h1>Schedule</h1>

      <p>
        This will be the rough schedule for September, we'll get this more and
        more detailed with time.
      </p>

      <h3>Tuesday, 24th September, 2019</h3>

      <p>
        <strong>Workshop day</strong> - we'll annouce any details as soon as
        possible!
      </p>

      <p>
        <strong>Meetup night</strong> - We will coordinate with a couple of
        meetups to have a meetup night just before the
      </p>

      <h3>Wednesday, 25th September, 2019</h3>

      <p>
        <strong>
          <a href="http://cssconfbp.rocks/">CSSConf Budapest 2019</a>
        </strong>
      </p>

      <ul>
        <li>Breakfast</li>
        <li>Event opening</li>
        <li>Coffee break</li>
        <li>Lunch</li>
        <li>Coffee break</li>
        <li>Event closing</li>
        <li>Dinner & Afterparty</li>
      </ul>

      <h3>Thursday, 26th September, 2019</h3>

      <p>
        <strong>JSConf Budapest 2019 Day 1</strong>
      </p>

      <ul>
        <li>Breakfast</li>
        <li>Event opening</li>
        <li>Coffee break</li>
        <li>Lunch</li>
        <li>Coffee break</li>
        <li>Dinner</li>
        <li>Party on Day one </li>
      </ul>

      <h3>Friday, 27th September, 2019</h3>

      <p>
        <strong>JSConf Budapest 2019 Day 2</strong>
      </p>

      <ul>
        <li>Breakfast</li>
        <li>Coffee break</li>
        <li>Lunch</li>
        <li>Coffee break</li>
        <li>Event closing</li>
        <li>Afterparty</li>
      </ul>
    </div>
  </Layout>
)

export default Schedule
