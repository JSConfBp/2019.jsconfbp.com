import React from 'react'
import { Link } from 'gatsby'
import SpeakerImage from '../SpeakerImage'
import styles from './speakerslist.module.scss'

const SpeakersList = props => (
  <ul className={styles.speaker_list}>
    {props.data.allMdx.edges
      .filter(({ node }) => node.parent.sourceInstanceName === 'speakers')
      .map(({ node }) => (
        <li key={node.id} className={styles.updates_list_item}>
          <span className={styles.date}>{node.frontmatter.date}</span>
          <Link
            className={styles.title}
            to={`/${node.parent.sourceInstanceName}/${node.parent.name}`}
          >
            <SpeakerImage
              className={styles.speaker_list_image}
              image={node.frontmatter.image}
            />
            {node.frontmatter.name}
          </Link>
        </li>
      ))}
  </ul>
)

export default SpeakersList
