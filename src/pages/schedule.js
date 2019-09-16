import React from 'react'
import classnames from 'classnames'
import Layout from '../components/Layout/index'
import { Link } from 'gatsby'
import styles from './simpletext.module.scss'
import SocialMeta from '../components/SocialMeta/index'
import schedule from './schedule.module.scss'

const Schedule = () => (
  <Layout>
    <SocialMeta image="social_card_schedule.jpg" />
    <div className={styles.simpleText}>
      <h1>Schedule</h1>

      <p className={styles.last_item}>
        This will be the schedule for September, we'll get this more and more
        detailed with time.
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

      <dl className={classnames(styles.last_item, schedule.list)}>
        <dt>8:00</dt>
        <dd>
          <Link to="/updates/vegan-menu#css-day">Breakfast</Link> & Registration
        </dd>
        <dt>9:30</dt>
        <dd>Event opening</dd>
        <dt>11:15</dt>
        <dd>Coffee break by Tresorit</dd>
        <dt>13:00</dt>
        <dd>
          <Link to="/updates/vegan-menu#css-day">Lunch by Vacuumlabs</Link>
        </dd>
        <dt>15:30</dt>
        <dd>Coffee break by Tresorit</dd>
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

      <dl className={classnames(styles.last_item, schedule.list)}>
        <dt className={schedule.break}>8:00</dt>
        <dd className={schedule.break}>
          <Link to="/updates/vegan-menu#js-day-1">Breakfast</Link> &
          Registration
        </dd>
        <dt>9:30</dt>
        <dd>Event opening</dd>

        <dt>09:45</dt>
        <dd>
          {' '}
          <strong>
            Accessibility vs latest Web APIs. Can’t we just get along?
          </strong>{' '}
          <br /> by Mauricio Palma
        </dd>
        <dt>10:15</dt>
        <dd>
          {' '}
          <strong>
            API Modernization: Building Bridges As You Cross Them
          </strong>{' '}
          <br /> by Shelley Vohr
        </dd>
        <dt>10:45</dt>
        <dd>
          {' '}
          <strong>
            Testing in production: Ideas, experiences, limits, roadblocks
          </strong>{' '}
          <br /> by Jorge Marin
        </dd>

        <dt className={schedule.break}>11:15</dt>
        <dd className={schedule.break}>Coffee break by Tresorit</dd>

        <dt>12:00</dt>
        <dd>
          <strong>
            Weaving the web - Programming textile-based interactions in
            JavaScript
          </strong>
          <br /> by Charlie Gerard
        </dd>
        <dt>12:30</dt>
        <dd>
          <strong>
            Javascript Performance in Extreme Conditions: Building WebApps for
            the Refugee Aid Movement
          </strong>
          <br /> by Taylor Fairbank
        </dd>

        <dt className={schedule.break}>13:00</dt>
        <dd className={schedule.break}>
          <Link to="/updates/vegan-menu#js-day-1">Lunch by Vacuumlabs</Link>
        </dd>

        <dt>14:30</dt>
        <dd>
          <strong>Composing music with composed functions</strong>
          <br /> by Adam Giese{' '}
        </dd>
        <dt>15:00</dt>
        <dd>
          <strong>
            Essential JavaScript debugging tools for the modern detective
          </strong>
          <br /> by Rebecca Hill{' '}
        </dd>

        <dt className={schedule.break}>15:30</dt>
        <dd className={schedule.break}>Coffee break by Tresorit</dd>

        <dt>16:15</dt>
        <dd>
          <strong>
            How not to read the room: Creating socially awkward wearables with
            machine learning & javascript
          </strong>
          <br /> by Stephanie Nemeth{' '}
        </dd>
        <dt>16:45</dt>
        <dd>
          <strong>
            Taming “Git”osaurus Using Mystical Trees: Understanding complex git
            trees in the developer fairyland
          </strong>
          <br /> by Damini Satya Kammakomati Taming “Git”osaurus Using Mystical
          Trees: Understanding complex git trees in the developer fairyland
        </dd>
        <dt>17:15</dt>
        <dd>
          <strong>Making things fast in world of build tools</strong>
          <br /> by Jake Archibald & Surma{' '}
        </dd>

        <dt>17:45</dt>
        <dd>Closing First day</dd>
        <dt className={schedule.break}>18:00</dt>
        <dd className={schedule.break}>
          <Link to="/updates/vegan-menu#js-day-1">Dinner</Link> & party
        </dd>
      </dl>

      <h3>Friday, 27th September, 2019</h3>

      <p>
        <strong>JSConf Budapest 2019 Day 2</strong>
      </p>

      <dl className={classnames(styles.last_item, schedule.list)}>
        <dt className={schedule.break}>9:00</dt>
        <dd className={schedule.break}>
          <Link to="/updates/vegan-menu#js-day-2">Breakfast</Link>
        </dd>
        <dt>10:00</dt>{' '}
        <dd>
          <strong>
            Web Norms of the World: An exploration of the internet beyond the
            West
          </strong>
          <br />
          by Kat Kitay{' '}
        </dd>
        <dt>10:30</dt>{' '}
        <dd>
          <strong>Legendary Lambdas</strong>
          <br />
          by Tejas Kumar{' '}
        </dd>
        <dt>11:00</dt>{' '}
        <dd>
          <strong>Mastering UIs with Finite State Machines</strong>
          <br />
          by Rubén Sospedra{' '}
        </dd>
        <dt className={schedule.break}>11:30</dt>
        <dd className={schedule.break}>Coffee break by Tresorit</dd>
        <dt>12:15</dt>{' '}
        <dd>
          <strong>Deciphering Brainwaves with the Web Audio API</strong>
          <br />
          by Braden Moore{' '}
        </dd>
        <dt>12:45</dt>{' '}
        <dd>
          <strong>A privacy first period tracker? Is it even possible?</strong>
          <br />
          by Benedicte Raae{' '}
        </dd>
        <dt className={schedule.break}>13:15</dt>
        <dd className={schedule.break}>
          <Link to="/updates/vegan-menu#js-day-2">Lunch by Vacuumlabs</Link>
        </dd>
        <dt>14:45</dt>{' '}
        <dd>
          <strong>Take on me, web browsers!</strong>
          <br />
          by Eva Ferreira{' '}
        </dd>
        <dt>15:15</dt>{' '}
        <dd>
          <strong>
            StrangerDanger: Finding Security Vulnerabilities Before They Find
            You!
          </strong>
          <br />
          by Liran Tal{' '}
        </dd>
        <dt className={schedule.break}>15:45</dt>
        <dd className={schedule.break}>Coffee break by Tresorit</dd>
        <dt>16:30</dt>{' '}
        <dd>
          <strong>Testing presentation components visually</strong>
          <br />
          by Balázs Korossy-Khayll
        </dd>
        <dt>17:00</dt>{' '}
        <dd>
          <strong>Algorithms and Their Habitat</strong>
          <br />
          by Vitalii Bobrov{' '}
        </dd>
        <dt>17:30</dt>{' '}
        <dd>
          <strong>
            Looking under the rug: the art of learning from failure
          </strong>
          <br />
          by Isa Silveira{' '}
        </dd>
        <dt>18:00</dt>
        <dd>Event closing & Family photo</dd>
        <dt className={schedule.break}>19:30</dt>
        <dd className={schedule.break}>Afterparty by Tresorit</dd>
      </dl>
    </div>
  </Layout>
)

export default Schedule
