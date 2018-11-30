import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import styles from './mainlayout.module.scss'
import Footer from '../Footer/'
import Logo from '../Logo/'
import TicketButton from '../TicketButton/'
import Navigation from '../Navigation/'

const MainLayout = props => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery2 {
        site {
          siteMetadata {
            title
            keywords
            description
          }
        }
      }
    `}
    render={data => (
      <div className={styles.grid2}>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
            { name: 'keywords', content: data.site.siteMetadata.keywords },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <header className={styles.header}>
            <svg className={styles.menu_button} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.426 283.426"><path d="M0 40.84h283.426v47.735H0zM0 117.282h283.426v47.735H0zM0 194.851h283.426v47.735H0z"/></svg>
            <Logo/>
            <span className={styles.date}>2019 September 26-27</span>
            <Navigation/>
            <TicketButton/>
        </header>
        <main className={styles.main}>
          {props.children}
        </main>
        <footer className={styles.footer}>
            <Footer/>
        </footer>
      </div>
    )}
  />
)

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
