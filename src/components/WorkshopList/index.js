import React from 'react'
import { Link } from 'gatsby'

import RegisterButton from '../RegisterButton'
import styles from './workshoplist.module.scss'

const filterWorkshops = ({ node }) =>
  node.parent.sourceInstanceName === 'workshops'
const sortWorkshops = (prev, next) => {
  const prevDate = new Date(prev.node.frontmatter.date)
  const nextDate = new Date(next.node.frontmatter.date)

  if (prevDate > nextDate) return -1

  if (prevDate < nextDate) return 1

  return 0
}

const WorkshopList = props => (
  <ul className={styles.workshop_list}>
    {props.data.allMdx.edges
      .filter(filterWorkshops)
      .sort(sortWorkshops)
      .map(({ node }) => (
        <li key={node.id} className={styles.workshop_list_item}>
          {console.log(node.frontmatter)}

          <h3 className={styles.workshop_title}>
            <Link to={`/${node.parent.sourceInstanceName}/${node.parent.name}`}>
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
          </span>

          <p className={styles.workshop_lead}>
            {node.frontmatter.short_description}{' '}
          </p>

          <div className={styles.workshop_link}>
            <Link to={`/${node.parent.sourceInstanceName}/${node.parent.name}`}>
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

export default WorkshopList
