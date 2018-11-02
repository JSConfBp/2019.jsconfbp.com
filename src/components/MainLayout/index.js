import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styles from './mainlayout.module.scss'
import Banner from '../Banner/'
import Footer from '../Footer/'

const MainLayout = children => (
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
      <div className={styles.grid}>
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
            <nav>
                <ul>
                    <li>
                        <a href="#!">Home</a>
                    </li>
                    <li>
                        <a href="#!">Away</a>
                    </li>
                    <li>
                        <a href="#!">Aggregate</a>
                    </li>
                </ul>
            </nav>
            <Banner/>
        </header>
        <main className={styles.main}>
            MAIN CONTENT 
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
