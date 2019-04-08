import React from 'react'
import { Link } from 'gatsby'
import styles from './speakerslist.module.scss'

const SpeakersList = props => (
  <ul className={styles.updates_list}>
    {props.data.allMdx.edges
      .filter(({ node }) => node.parent.sourceInstanceName === 'speakers')
      .map(({ node }) => (
        <li key={node.id} className={styles.updates_list_item}>
          <span className={styles.date}>{node.frontmatter.date}</span>
          <Link
            className={styles.title}
            to={`/${node.parent.sourceInstanceName}/${node.parent.name}`}
          >
            {node.frontmatter.title}
          </Link>
          <p className={styles.lead}>{node.frontmatter.lead} </p>
          <Link to={`/${node.parent.sourceInstanceName}/${node.parent.name}`}>
            Read more →
          </Link>
        </li>
      ))}
  </ul>
)

export default SpeakersList
