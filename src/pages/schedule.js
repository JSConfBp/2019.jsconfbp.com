import React from 'react'
import classnames from 'classnames'
import Layout from '../components/Layout/index'
import { Link } from 'gatsby'
import styles from './simpletext.module.scss'
import SocialMeta from '../components/SocialMeta/index'
import schedule from './schedule.module.scss'

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

      <p className={styles.last_item}>
        <strong>Meetup night</strong> - We will coordinate with a couple of
        meetups to have a meetup night just before the events. Stay tuned!
      </p>

      <h3>Wednesday, 25th September, 2019</h3>

      <p>
        <strong>
          <a href="http://cssconfbp.rocks/">CSSConf Budapest 2019</a>
        </strong>
        <br />
      </p>

      <dl className={ classnames(styles.last_item, schedule.list) }>
        <dt>8:00</dt>
        <dd>
          <Link to="/updates/vegan-menu#css-day">Breakfast</Link> & Registration
        </dd>
        <dt>9:30</dt>
        <dd>Event opening</dd>
        <dt>11:15</dt>
        <dd>Coffee break</dd>
        <dt>13:00</dt>
        <dd>
          <Link to="/updates/vegan-menu#css-day">Lunch</Link>
        </dd>
        <dt>15:30</dt>
        <dd>Coffee break</dd>
        <dt>17:15</dt>
        <dd>Event closing & Family photo</dd>
        <dt>17:45</dt>
        <dd>
          <Link to="/updates/vegan-menu#css-day">Dinner</Link> & Afterparty
        </dd>
      </dl>

      <h3>Thursday, 26th September, 2019</h3>

      <p>
        <strong>JSConf Budapest 2019 Day 1</strong>
      </p>

      <ul className={ classnames(styles.last_item, schedule.list) }>
        <dt>8:00</dt>
        <dd>
          <Link to="/updates/vegan-menu#js-day-1">Breakfast</Link> &
          Registration
        </dd>
        <dt>9:30</dt>
        <dd>Event opening</dd>
        <dt>11:15</dt>
        <dd>Coffee break</dd>
        <dt>13:00</dt>
        <dd>
          <Link to="/updates/vegan-menu#js-day-1">Lunch</Link>
        </dd>
        <dt>15:30</dt>
        <dd>Coffee break</dd>
        <dt>17:45</dt>
        <dd>Closing First day</dd>
        <dt>18:00</dt>
        <dd>
          <Link to="/updates/vegan-menu#js-day-1">Dinner</Link> & party
        </dd>
      </ul>

      <h3>Friday, 27th September, 2019</h3>

      <p>
        <strong>JSConf Budapest 2019 Day 2</strong>
      </p>

      <ul className={ classnames(styles.last_item, schedule.list) }>
        <dt>9:00</dt>
        <dd>
          <Link to="/updates/vegan-menu#js-day-2">Breakfast</Link>
        </dd>
        <dt>11:30</dt>
        <dd>Coffee break</dd>
        <dt>13:15</dt>
        <dd>
          <Link to="/updates/vegan-menu#js-day-2">Lunch</Link>
        </dd>
        <dt>15:45</dt>
        <dd>Coffee break</dd>
        <dt>18:00</dt>
        <dd>Event closing & Family photo</dd>
        <dt>19:30</dt>
        <dd>Afterparty</dd>
      </ul>
    </div>
  </Layout>
)

export default Schedule
