import React from 'react'
import { Link } from 'gatsby'
import SponsorImage from '../SponsorImage'
import data from './data'
import styles from './sponsorlist.module.scss'

const SponsorImageLink = ({ link, image, name }) => (
  <a href={link}>
    <SponsorImage className={styles.image} image={image} title={name} />
  </a>
)

const UpdatesList = props => (
  <>
    <h1 className={styles.sponsor_subtitle}>Sponsors</h1>

    <ul className={styles.sponsor_list}>
      {data.big.map(sponsor => (
        <li className={styles[`sponsor_${sponsor.level}`]} key={sponsor.name}>
          <SponsorImageLink {...sponsor} />
        </li>
      ))}
    </ul>
    <ul className={styles.sponsor_list}>
      {data.med.map(sponsor => (
        <li className={styles[`sponsor_${sponsor.level}`]} key={sponsor.name}>
          <SponsorImageLink {...sponsor} />
        </li>
      ))}
    </ul>
    <ul className={styles.sponsor_list}>
      {data.sm.map(sponsor => (
        <li className={styles[`sponsor_${sponsor.level}`]} key={sponsor.name}>
          <SponsorImageLink {...sponsor} />
        </li>
      ))}
    </ul>
    <h1 className={styles.sponsor_subtitle}>Scholarship Sponsors</h1>

    <ul className={styles.sponsor_list}>
      {data.scholarship.map(sponsor => (
        <li className={styles.sponsor_scholarship} key={sponsor.name}>
          <SponsorImageLink {...sponsor} />
        </li>
      ))}
    </ul>

    <h1 className={styles.sponsor_subtitle}>Partners</h1>

    <ul className={styles.sponsor_list}>
      {data.partners.map(sponsor => (
        <li className={styles.sponsor_partner} key={sponsor.name}>
          <SponsorImageLink {...sponsor} />
        </li>
      ))}
    </ul>
  </>
)

export default UpdatesList
