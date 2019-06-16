import React from 'react'
import Layout from '../components/Layout/index'
import { Link } from 'gatsby'
import styles from './simpletext.module.scss'
import SocialMeta from '../components/SocialMeta/index'

const Schedule = () => (
  <Layout>
    <SocialMeta image="social_card.jpg" />
    <div className={styles.simpleText}>
      <h1>Schedule</h1>

      <p className={styles.last_item}>
        This will be the rough schedule for September, we'll get this more and
        more detailed with time.
      </p>

      <h3>Tuesday, 24th September, 2019</h3>

      <p>
        <strong>Workshop day</strong> -{' '}
        <Link to="/workshops">
          check out the workshops you can choose from!
        </Link>
      </p>

      <p  className={styles.last_item}>
        <strong>Meetup night</strong> - We will coordinate with a couple of
        meetups to have a meetup night just before the events. Stay tuned!
      </p>

      <h3>Wednesday, 25th September, 2019</h3>

      <p>
        <strong>
          <a href="http://cssconfbp.rocks/">CSSConf Budapest 2019</a>
        </strong>
      </p>

      <ul className={styles.last_item}>
        <li><Link to="/updates/vegan-menu#css-day">Breakfast</Link></li>
        <li>Event opening</li>
        <li>Coffee break</li>
        <li><Link to="/updates/vegan-menu#css-day">Lunch</Link></li>
        <li>Coffee break</li>
        <li>Event closing</li>
        <li><Link to="/updates/vegan-menu#css-day">Dinner</Link> & Afterparty</li>
      </ul>

      <h3>Thursday, 26th September, 2019</h3>

      <p>
        <strong>JSConf Budapest 2019 Day 1</strong>
      </p>

      <ul className={styles.last_item}>
        <li><Link to="/updates/vegan-menu#js-day-1">Breakfast</Link></li>
        <li>Event opening</li>
        <li>Coffee break</li>
        <li><Link to="/updates/vegan-menu#js-day-1">Lunch</Link></li>
        <li>Coffee break</li>
        <li><Link to="/updates/vegan-menu#js-day-1">Dinner</Link></li>
        <li>Party on Day one </li>
      </ul>

      <h3>Friday, 27th September, 2019</h3>

      <p>
        <strong>JSConf Budapest 2019 Day 2</strong>
      </p>

      <ul className={styles.last_item}>
        <li><Link to="/updates/vegan-menu#js-day-2">Breakfast</Link></li>
        <li>Coffee break</li>
        <li><Link to="/updates/vegan-menu#js-day-2">Lunch</Link></li>
        <li>Coffee break</li>
        <li>Event closing</li>
        <li>Afterparty</li>
      </ul>
    </div>
  </Layout>
)

export default Schedule
