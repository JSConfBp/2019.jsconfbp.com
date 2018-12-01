import React from 'react'
import Logo from '../Logo/'
import TicketButton from '../TicketButton/'
import Navigation from '../Navigation/'
import styles from './header.module.scss'


class Header extends React.Component {

  constructor(props) {
    super(props);

    this.state = { menuOpen: false };
  }

  menuButtonClick (e) {
    console.log(e);

    const { menuOpen } = this.state

    this.setState({ menuOpen: !menuOpen })
  }

  render () {
    const { menuOpen } = this.state

    return (
      <header className={styles.header}>
        <svg onClick={ e => this.menuButtonClick(e) } className={styles.menu_button} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.426 283.426"><path d="M0 40.84h283.426v47.735H0zM0 117.282h283.426v47.735H0zM0 194.851h283.426v47.735H0z"/></svg>
        <Logo />
        <span className={styles.date}>2019 September 26-27</span>
        <Navigation/>
        <TicketButton/>
      </header>
    )
  }

}


export default Header
