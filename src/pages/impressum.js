import React from 'react'
import Layout from '../components/Layout/index'
import styles from './simpletext.module.scss'

const Impressum = () => (
  <Layout>
    <div className={styles.simpleText}>
      <h1>Impressum</h1>

      <p>
        <strong>JSSC Rendezvényszervező Kft</strong>
        <br />
        Budapest 1365 Pf. 717
      </p>

      <p>
        Sales Tax Identification Number:
        <br />
        HU25966330
      </p>

      <p>
        Company registry No.:
        <br />
        01-09-299007
      </p>

      <p>
        Management:
        <br />
        Szabolcs Szabolcsi-Tóth
        <br />
        Medea Baccifava
        <br />
        Agnes Hegedus
      </p>
    </div>
  </Layout>
)

export default Impressum
