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
          <span className={styles.date}>{node.frontmatter.date}</span>
          <Link
            className={styles.title}
            to={`/${node.parent.sourceInstanceName}/${node.parent.name}`}
          >
            <SpeakerImage
              className={styles.speaker_list_image}
              image={node.frontmatter.image}
              color={node.frontmatter.color}
            />
            {node.frontmatter.name}
          </Link>
        </li>
      ))}
  </ul>
)

export default SpeakersList
