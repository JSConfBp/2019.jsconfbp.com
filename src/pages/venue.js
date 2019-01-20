import React from 'react'
import { Link } from 'gatsby'
import VenueMap from '../components/VenueMap/index'
import MainLayout from '../components/MainLayout/index'
import styles from './venue.module.scss'
import SocialMeta from '../components/SocialMeta/index'

const VenuePage = () => (
  <MainLayout headerClassNames={[styles.venue_header]} mainClassNames={[styles.venue_main]}>
    <SocialMeta image="social_card_venue.jpg" />
    <div className={styles.venue}>
      <div className={styles.venueContent}>
        <h1 className={styles.title}>Akvárium Klub</h1>

        <span className={styles.address}>
          In 2019 we return to the center of the city!
        </span>

        <p>
          Literally under a pool of water, this great club was our venue in
          2016. <br />
          For our next event, we've decided to return!
        </p>

        <div className={styles.venue_map}>
          <VenueMap />
        </div>

        <blockquote>
          Akvárium Klub is more than a simple bar: it is a culture center with a
          wide musical repertoire from mainstream to underground. There is
          always a good concert and a smashing exhibition, performance, or other
          event happening here, in a friendly scene, situated right in the city
          center.
        </blockquote>
        <cite>
          –{' '}
          <a href="http://welovebudapest.com/clubs.and.nightlife.1/clubs.2/akvarium.klub">
            welovebudapest.com
          </a>
        </cite>

        <div className={styles.venue_google_map}>
          <iframe
            style={{ pointerEvents: 'none' }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.565701968758!2d19.052097751378795!3d47.49837330333867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc402a04eee3%3A0x6869564cd433693c!2sAkv%C3%A1rium+Klub!5e0!3m2!1sen!2sus!4v1448264513121"
            width="100%"
            height="340"
            frameborder="0"
            allowfullscreen=""
          />
        </div>
      </div>
    </div>
  </MainLayout>
)

export default VenuePage
