import React from 'react'
import { Link } from 'gatsby'
import styles from './button.module.scss'

export default class Button extends React.Component {

	render () {
		const { to, href, children } = this.props

		const useLink = !!to


		return (useLink ? (
			<Link to={ to } className={ styles.button }>
				{ children }
			</Link>
		) : (
			<a href={ href } className={ styles.button }>
				{ children }
			</a>
		));
	}

}