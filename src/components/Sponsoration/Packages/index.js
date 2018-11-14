import React from 'react'

import styles from './packages.module.scss'

const contents = [
  {
    field: 'branding',
    desc: 'Branding & logo on site, between sessions, on videos',
  },
  { field: 'tickets', desc: 'Discount on tickets for your employees' },
  { field: 'booth', desc: 'Booth at the exhibition area' },
  { field: 'slide', desc: 'Add a slide to the reel between sessions' },
  { field: 'hr', desc: 'HR package' },
]
const packages = [
  {
    name: 'Silver',
    price: '€3,000',
    content: {
      branding: true,
      tickets: true,
      screen: false,
      booth: false,
      slide: false,
      hr: false,
    },
  },
  {
    name: 'Gold',
    price: '€7,000',
    content: {
      branding: true,
      tickets: true,
      screen: true,
      booth: '3sqm',
      slide: false,
      hr: false,
    },
  },
  {
    name: 'Workshop',
    price: 'Contact us!',
    content: {
      branding: true,
      tickets: true,
      screen: true,
      booth: '3sqm',
      slide: true,
      hr: false,
    },
  },
  {
    name: 'Platinum',
    price: '€10,000',
    content: {
      branding: true,
      tickets: true,
      screen: true,
      booth: '12sqm',
      slide: true,
      hr: true,
    },
  },
]

const PackageTable = () => (
  <div className={styles.packages_table}>
    {packages.map(pkg => (
      <>
        <h4 className={styles[`package_${pkg.name.toLowerCase()}_name`]}>
          {pkg.name}
        </h4>
        <h5 className={styles[`package_${pkg.name.toLowerCase()}_price`]}>
          {pkg.price}
        </h5>
        {contents.map(cont => (
          <>
            <span
              className={
                styles[`package_${pkg.name.toLowerCase()}_${cont.field}_label`]
              }
            >
              {cont.desc}
            </span>
            <strong
              className={[
                styles[`package_${pkg.name.toLowerCase()}_${cont.field}_value`],
                pkg.content[cont.field]
                  ? styles[
                      `package_${pkg.name.toLowerCase()}_${cont.field}_included`
                    ]
                  : '',
              ].join(' ')}
            >
              {typeof pkg.content[cont.field] === 'string'
                ? pkg.content[cont.field]
                : pkg.content[cont.field]
                  ? 'yes'
                  : 'no'}
            </strong>
          </>
        ))}
      </>
    ))}
  </div>
)

const Packages = () => (
  <>
    <div className={styles.packages}>
      <div className={styles.block_inner}>
        <h2>Packages</h2>

        <h3>
          Help us make this event <br />a better experience for our attendees
        </h3>

        <PackageTable />

        <h4 className={styles.scholarship_title}>10 % to Scholarships</h4>

        <p className={styles.scholarship_text}>
          From every package we put 10% directly to our Scholarship Fund - this
          fund will be used to sponsor individuals or students from
          underrepresented groups in tech, to travel and attend the conference.
          <br />
          Your support can really make a difference!
        </p>
      </div>
    </div>
  </>
)

export default Packages
