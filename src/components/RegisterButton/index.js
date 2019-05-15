import React from 'react'
import Button from '../Button'
import styles from './registerbutton.module.scss'

export default ({ id, disabled = false }) => (
  <Button
    block={true}
    fill={true}
    color={'red'}
    disabled
    href={'https://ti.to/jsconf-bp/jsconf-budapest-2019'}
    className={styles.ticket_button}
  >
    {disabled ? 'Open Soon' : 'Register Now'}
  </Button>
)
