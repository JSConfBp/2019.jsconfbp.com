import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import fetch from 'isomorphic-unfetch'
import RegisterButton from '../RegisterButton'
import styles from './workshoplist.module.scss'

const SEAT_API = 'https://workshop-registration.herokuapp.com/api/seats'
//const SEAT_API = 'http://0.0.0.0:8001/api/seats'

const filterWorkshops = ({ node }) =>
  node.parent.sourceInstanceName === 'workshops'
const sortWorkshops = (prev, next) => {
  console.log(prev.node.frontmatter.order)

  const prevOrder = +prev.node.frontmatter.order
  const nextOrder = +next.node.frontmatter.order

  if (prevOrder < nextOrder) return -1

  if (prevOrder > nextOrder) return 1

  return 0
}

const WorkshopList = props => {
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

  return (
    <ul className={styles.workshop_list}>
      {props.data.allMdx.edges
        .filter(filterWorkshops)
        .sort(sortWorkshops)
        .map(({ node }) => (
          <li key={node.id} className={styles.workshop_list_item}>
            <h3 className={styles.workshop_title}>
              <Link
                to={`/${node.parent.sourceInstanceName}/${node.parent.name}`}
              >
                {node.frontmatter.title} by {node.frontmatter.company}
              </Link>
            </h3>

            <span className={styles.workshop_date}>
              <span className={styles.workshop_date_day}>
                24<sup>th</sup>
              </span>
              <span className={styles.workshop_date_month}>Sep</span>
              {/*
            <span className={styles.workshop_date_time}>
              {node.frontmatter.start} - {node.frontmatter.end}
            </span>
            */}

              <span className={styles.seats}>
                Available Seats
                <span className={styles.seats_count}>
                  {countSeats(node.frontmatter.workshop_id)}
                </span>
              </span>
            </span>

            <p className={styles.workshop_lead}>
              {node.frontmatter.short_description}{' '}
            </p>

            <div className={styles.workshop_link}>
              <Link
                to={`/${node.parent.sourceInstanceName}/${node.parent.name}`}
              >
                Read more →
              </Link>
            </div>
            <div className={styles.workshop_register}>
              <RegisterButton
                id={node.frontmatter.workshop_id}
                disabled={node.frontmatter.disabled}
              />
            </div>
          </li>
        ))}
    </ul>
  )
}

export default WorkshopList
