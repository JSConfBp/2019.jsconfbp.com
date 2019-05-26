import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import classNames from 'classnames'
import fetch from 'isomorphic-unfetch'

import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import Button from '../components/Button/index'
import Layout from '../components/Layout/index'
import SocialMeta from '../components/SocialMeta/index'
import SpeakerImage from '../components/SpeakerImage'

import styles from '../pages/simpletext.module.scss'
import workshopStyles from './workshop-styles.module.scss'
import RegisterButton from '../components/RegisterButton'

const SEAT_API = 'https://workshop-registration.herokuapp.com/api/seats'
//const SEAT_API = 'http://0.0.0.0:8001/api/seats'

const Link = props => {
  const { url, text } = props

  return (
    <a href={url} rel="noopener">
      {text}
    </a>
  )
}
function SpeakersContentTemplate({ data: { mdx } }) {
  const [seats, setSeats] = useState({})

  useEffect(() => {
    if (Object.keys(seats).length > 0) return

    fetch(SEAT_API)
      .then(resp => resp.json())
      .then(data => setSeats(data))
      .catch(e => console.error(e))
  })

  const { title, company, company_url, short_description } = mdx.frontmatter

  const countSeats = id => {
    return seats[id] ? seats[id].seats - seats[id].taken : 'N/A'
  }

  return (
    <Layout>
      <SocialMeta
        title={mdx.frontmatter.title}
        description={mdx.frontmatter.short_description}
        image={mdx.frontmatter.socialCard || 'social-card.png'}
      />
      <div className={classNames(styles.simpleText)}>
        <div className={workshopStyles.workshop_page}>
          <h2 className={workshopStyles.workshop_title}>{title}</h2>

          <div className={workshopStyles.main_content}>
            <MDXRenderer>{mdx.code.body}</MDXRenderer>
            <hr />
          </div>

          <div className={workshopStyles.workshop_meta}>
            <h4 className={workshopStyles.subtitle}>Workshop by</h4>
            <ul className={workshopStyles.links}>
              {company && (
                <li>
                  <Link url={company_url} text={company} />
                </li>
              )}
              <li>September 24th, 2019</li>
              <li>Location: TBA</li>
              <li>
                Available seats: {countSeats(mdx.frontmatter.workshop_id)}
              </li>
            </ul>

            <RegisterButton
              id={mdx.frontmatter.workshop_id}
              disabled={mdx.frontmatter.disabled}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SpeakersContentTemplate

export const pageQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      id
      code {
        body
      }
      frontmatter {
        name
        title
        image
        color
        bio
        from
        twitter
        github
        company
        company_url
        socialCard
        workshop_id
        disabled
      }
    }
  }
`
