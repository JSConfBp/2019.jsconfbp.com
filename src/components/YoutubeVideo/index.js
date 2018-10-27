import React from 'react'
import styles from './styles.module.scss'

const YoutubeVideo = props => (
  <div className={styles.video}>
    <iframe
      src={props.src}
      frameBorder="0"
      allowFullScreen
      title={props.title}
    />
  </div>
)

export default YoutubeVideo
