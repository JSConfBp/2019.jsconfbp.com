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

  const countSeats = id => {
    return seats[id] ? seats[id].seats - seats[id].taken : 'N/A'
  }

  console.log(mdx.frontmatter)

  const {
    workshop_id,
    title,
    short_description,
    socialCard = 'social-card.png',
    location = 'TBA',
    start,
    end,
    company,
    company_url,
    disabled,
    mentors
  } = mdx.frontmatter

  return (
    <Layout>
      <SocialMeta
        title={title}
        description={short_description}
        image={socialCard}
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
              <li>Available seats: {countSeats(workshop_id)}</li>
              <li>Mentors:
                <ul className={workshopStyles.mentor_list}>
                  { mentors.map( mentor => (<li>
                    { mentor.twitter ? (
                      <Link url={`https://twitter.com/${mentor.twitter}`} text={mentor.name} />
                    ) : mentor.name
                    }

                  </li>)) }
                </ul>
              </li>
              <li>
                September 24th, 2019, {start} - {end}
              </li>
              <li>
                Location: <br />
                <strong>{location}</strong>
              </li>
            </ul>

            <RegisterButton id={workshop_id} disabled={disabled} />
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
        location
        start
        end
        mentors {
          name
          twitter
        }
      }
    }
  }
`
