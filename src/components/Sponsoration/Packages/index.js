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
    price: '2000',
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
    price: '4000',
    content: {
      branding: true,
      tickets: true,
      screen: true,
      booth: true,
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
      booth: true,
      slide: true,
      hr: false,
    },
  },
  {
    name: 'Platinum',
    price: '10000',
    content: {
      branding: true,
      tickets: true,
      screen: true,
      booth: true,
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
              {pkg.content[cont.field] ? 'yes' : 'no'}
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
      </div>
    </div>
  </>
)

export default Packages
