import React from 'react'
import Logo from '../Logo/'

import Navigation from '../Navigation/'
import styles from './header.module.scss'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = { menuOpen: false }
  }

  menuButtonClick(e) {
    const { menuOpen } = this.state
    this.setState({ menuOpen: !menuOpen })
  }

  render() {
    const { menuOpen } = this.state
    const { transparent } = this.props

    const className = [styles.header]
    const menuTriggerClassName = [styles.menu_button]

    if (transparent) {
      className.push(styles.header_transparent)
      menuTriggerClassName.push(styles.menu_button_transparent)
    }

    if (menuOpen) {
      className.push(styles.header__nav__open)
      menuTriggerClassName.push(styles.menu_button_open)
    }

    return (
      <header className={className.join(' ')}>
        <svg
          onClick={e => this.menuButtonClick(e)}
          className={menuTriggerClassName.join(' ')}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 283.426 283.426"
        >
          <path d="M0 40.84h283.426v47.735H0zM0 117.282h283.426v47.735H0zM0 194.851h283.426v47.735H0z" />
        </svg>
        <Logo />
        <span className={styles.date}>2019 September 26-27</span>
        <Navigation open={menuOpen} />
      </header>
    )
  }
}

export default Header
