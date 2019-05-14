import React from 'react'
import { Link } from 'gatsby'
import SpeakerImage from '../SpeakerImage'
import styles from './speakerslist.module.scss'

const SpeakersList = props => (
  <ul className={styles.speaker_list}>
    {props.data.allMdx.edges
      .filter(({ node }) => node.parent.sourceInstanceName === 'speakers')
      .sort((prev, next) => {
        const a = prev.node.frontmatter.order
        const b = next.node.frontmatter.order

        if (!a) return 1
        if (!b) return -1

        return a - b
      })
      .map(({ node }) => (
        <li key={node.id} className={styles.updates_list_item}>

          <Link
            className={styles.speaker_link}
            to={`/${node.parent.sourceInstanceName}/${node.parent.name}`}
          >
            <SpeakerImage
              className={styles.speaker_list_image}
              image={node.frontmatter.image}
              color={node.frontmatter.color}
            />
            <span className={styles.name}>{node.frontmatter.name}</span>
            <span className={styles.title}>{node.frontmatter.title}</span>
          </Link>
        </li>
      ))}

      <li key="the-mc" className={styles.updates_list_item}>
          <a
            className={styles.speaker_link}
            href={`https://twitter.com/paul_v_m`}
          >
            <SpeakerImage
              className={styles.speaker_list_image}
              image={'paul_vm'}
              color={'blue'}
            />
            <span className={styles.name}>{'Paul Verbeek-Mast'}</span>
            <span className={styles.title}>{'Master of Ceremony'}</span>
          </a>
        </li>
  </ul>
)

export default SpeakersList
