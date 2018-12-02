import React from 'react'
import { Link } from 'gatsby'
import styles from './button.module.scss'

export default class Button extends React.Component {
  getButtonClass() {
    const { block = false, fill = false } = this.props

    const className = [styles.button]

    if (block) {
      className.push(styles.button__block)
    }

    if (fill) {
      className.push(styles.button__fill)
    }

    return className.join(' ')
  }

  render() {
    const { to, href, children } = this.props

    const useLink = !!to

    const className = this.getButtonClass()

    return useLink ? (
      <Link to={to} className={className}>
        {children}
      </Link>
    ) : (
      <a href={href} className={className}>
        {children}
      </a>
    )
  }
}
