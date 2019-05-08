import React from 'react'

import styles from './contact.module.scss'

const Contact = () => (
  <div className={styles.contact}>
    <div className={styles.block_inner}>
      <h2>Let's talk</h2>

      <h3>
        As non-profit conferences, we are always looking for sponsors to make
        our events awesome.
      </h3>

      <div className={styles.contacts}>
        <div className={styles.team_member}>
          <div className={styles.photo}>
            <img src="https://nec.is/assets/nec-square.png" alt="Szabolcs" />
          </div>
          Szabolcs Szabolcsi-Toth
        </div>

        <div className={styles.team_member}>
          <div className={styles.photo}>
            <img
              src="https://pbs.twimg.com/profile_images/867028857441931265/HJdtCgrz_400x400.jpg"
              alt="Daniel"
            />
          </div>
          Daniel Liptak
        </div>
      </div>

      <a
        href="mailto:team@jsconfbp.com?subject=Sponsorship"
        className={styles.button}
      >
        Contact Us
      </a>
    </div>
  </div>
)

export default Contact
