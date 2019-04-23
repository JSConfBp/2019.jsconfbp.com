import React from 'react'
import classnames from 'classnames'
import Img from 'gatsby-image'
import Triangle from '../Triangle'
import styles from './profileimage.module.scss'

const randomTriangle = () => Math.floor(Math.random() * 6) + 1

const ProfileImage = ({ imageData, color = 'white', className = '' }) => (
  <div className={classnames(styles.profile, className)}>
    <Triangle className={styles[`triangle_1_${randomTriangle()}`]} />
    <Triangle
      className={classnames(
        styles[`triangle_2_${randomTriangle()}`],
        styles[`triangle_${color}`]
      )}
    />
    <Img className={styles.image} fluid={imageData} />
  </div>
)
export default ProfileImage
