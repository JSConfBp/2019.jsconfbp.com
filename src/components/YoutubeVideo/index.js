import React from 'react'
import classnames from 'classnames'
import styles from './styles.module.scss'

const YoutubeVideo = props => (
  <div className={classnames(props.className, styles.video)}>
    <iframe
      src={props.src}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={props.title}
    />
  </div>
)

export default YoutubeVideo
