import React from 'react'
import Button from '../Button'
import styles from './registerbutton.module.scss'

export default ({ id, disabled = false }) => (
  <Button
    block={true}
    fill={true}
    color={'red'}
    disabled
    href={'https://workshop-registration.herokuapp.com/'}
    className={styles.ticket_button}
  >
    {disabled ? 'Open Soon' : 'Register Now'}
  </Button>
)
