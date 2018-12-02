import React from 'react'
import { Link } from 'gatsby'
import styles from './button.module.scss'

export default class Button extends React.Component {
  getButtonClass() {
    const {
      color = 'yellow',
      block = false,
      fill = false,
      className: propClasses = [],
    } = this.props

    const className = [styles.button]

    if (block) {
      className.push(styles.button__block)
    }

    if (fill) {
      if (color) {
        className.push(styles[`button__fill__color__${color}`])
      } else {
        className.push(styles.button__fill)
      }
    } else if (color) {
      className.push(styles[`button__color__${color}`])
    }

    return className.concat(propClasses).join(' ')
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
