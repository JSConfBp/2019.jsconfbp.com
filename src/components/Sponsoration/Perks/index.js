import React from 'react'

import styles from './perks.module.scss'

const perk_list = [
    { name: "coffee", label: "Specialty Coffee",  price: "€4,000" },
    { name: "party1", label: "CSS Closing Party", price: "€5,000" },
    { name: "party2", label: "First Night Party", price: "€5,000" },
    { name: "dinner", label: "Dinner",            price: "€4,000" },
    { name: "party3", label: "JS Closing Party",  price: "€5,000" },
    { name: "wifi",   label: "Wifi Pass",         price: "€3,000" },
    { name: "lanyrd", label: "Lanyrd",            price: "€2,000" }
  ]


const PerkList = () => (<ul className={ styles.perk_list }>
  {perk_list.map(perk => (<li>
      <strong className={ styles.perk_label }>{ perk.label }</strong>
      <span className={ styles.perk_value } >{ perk.price }</span>
    </li>))}
</ul>)

const Perks = () => (
  <>
    <div className={styles.perks}>
      <div className={styles.block_inner}>

        <h3 className={ styles.title }>A’la Carte Sponsorships</h3>

        <p>
          Exclusive perks, brand tailored to your Company, each sold once. <br />
          These are dedicated enhancements for our attendees, like better catering, coffee, or a great party.<br />
          Example: <strong>Lunch by COMPANY.</strong>
        </p>

        <PerkList />

      </div>
    </div>
  </>
)

export default Perks
