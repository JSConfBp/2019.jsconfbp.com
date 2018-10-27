import React from 'react'
import Layout from '../components/Layout/index'
import YoutubeVideo from '../components/YoutubeVideo/index'
import styles from './about.module.scss'

const About = () => (
  <Layout contentBg={true}>
    <h1>
      SZIA! ПРИВІТ! CZEŚĆ! SALUT! ЋАО! AHOJ! DOBRÝ DEN! ΓΕΙΆ ΣΟΥ! HOI! BUNĂ!
      ЗДРАВЕЙТЕ! ПРИВЕТ! HELLO!
    </h1>

    <p>
      We aim to be the JSConf of the region around Eastern-Middle Europe, an
      area so diverse in culture, people and views. A strictly nonprofit,
      open-sourced and community driven conference for the community of
      JavaScript, with the purpose to build and educate about new technologies,
      ideas and culture.
    </p>

    <YoutubeVideo
      src="https://www.youtube.com/embed/mJoS_pLbiWc?rel=0"
      title="JSConf Budapest 2016 Mood video"
    />

    <h2>JSConf Budapest so far</h2>

    <p>Check out our earlier events!</p>

    <h3>2017</h3>

    <p>
      <a href="http://2017.jsconfbp.com">Site & Speakers</a>,
      <a href="https://www.youtube.com/watch?v=aHVdJ0QT5rM&list=PL37ZVnwpeshH9ztZfHqvQhF1_Zm4VcCTD">
        Videos of 2017
      </a>
    </p>

    <h3>2016</h3>

    <p>
      <a href="http://2016.jsconfbp.com">Site & Speakers</a>,
      <a href="https://www.youtube.com/watch?v=CL8_nlqTcw0&list=PL37ZVnwpeshE6PbF5GB4hvtU3A4HqMfxf">
        Videos of 2016
      </a>
    </p>

    <h3>2015</h3>

    <p>
      <a href="http://2015.jsconfbp.com">Site & Speakers</a>,
      <a href="https://www.youtube.com/watch?v=1zj7M1LnJV4&list=PLFZ5NyC0xHDaaTy6tY9p0C0jd_rRRl5Zm">
        Videos of 2015
      </a>
    </p>

    <h2>The Team</h2>

    <ul className={styles.team_grid}>
      <li>
        <a href="https://twitter.com/_nec">
          <span>
            <img alt="Szabolcs" src="https://nec.is/assets/nec-square.png" />
          </span>
          Szabolcs
          <br /> Szabolcsi-Tóth
        </a>
      </li>
      <li>
        <a href="https://twitter.com/hubudibu">
          <span>
            <img
              alt="Aniko"
              src="https://pbs.twimg.com/profile_images/663056435790614530/2-DbMaxT_400x400.png"
            />
          </span>
          Aniko Fejes
        </a>
      </li>
      <li>
        <a href="https://twitter.com/matenadasdi">
          <span>
            <img
              alt="Mate"
              src="https://pbs.twimg.com/profile_images/958732112982675457/i8lskEp7_400x400.jpg"
            />
          </span>
          Máté Nádasdi
        </a>
      </li>
      <li>
        <a href="https://twitter.com/TPuski">
          <span>
            <img
              alt="Tamas"
              src="https://pbs.twimg.com/profile_images/775696303980474370/cncvvwch_400x400.jpg"
            />
          </span>
          Tamas Puski
        </a>
      </li>
      <li>
        <a href="https://twitter.com/brigittaforrai">
          <span>
            <img
              alt="Brigi"
              src="https://pbs.twimg.com/profile_images/378800000730875107/fa6a5625b64349f551adddf3ea75f6c3_400x400.jpeg"
            />
          </span>
          Brigitta Forrai
        </a>
      </li>
      <li>
        <a href="https://twitter.com/BenedekGagyi">
          <span>
            <img
              alt="Bence"
              src="https://pbs.twimg.com/profile_images/1039213863923855360/3skKEfX0_400x400.jpg"
            />
          </span>
          Benedek Gagyi
        </a>
      </li>
      <li>
        <a href="https://twitter.com/cat_a_flame">
          <span>
            <img
              alt="Stefi"
              src="https://pbs.twimg.com/profile_images/1049395515375439873/RsnfGuSC_400x400.jpg"
            />
          </span>
          Stefania Peter
        </a>
      </li>
      <li>
        <a href="https://twitter.com/freevo">
          <span>
            <img
              alt="Peter"
              src="https://pbs.twimg.com/profile_images/897112677037867008/V2NmMOl-_400x400.jpg"
            />
          </span>
          Peter Frivalszky
        </a>
      </li>
      <li>
        <a href="https://twitter.com/pentzzsolt">
          <span>
            <img
              alt="Zsolt"
              src="https://pbs.twimg.com/profile_images/705173503784390656/RXyWsHLA_400x400.jpg"
            />
          </span>
          Zsolt Pentz
        </a>
      </li>
      <li>
        <a href="https://github.com/blepati">
          <span>
            <img
              alt="Pati"
              src="https://avatars0.githubusercontent.com/u/15064767?s=460&v=4"
            />
          </span>
          Patricia Blesa
        </a>
      </li>
      <li>
        <a href="https://twitter.com/daniliptak">
          <span>
            <img
              alt="Dani"
              src="https://pbs.twimg.com/profile_images/867028857441931265/HJdtCgrz_400x400.jpg"
            />
          </span>
          Daniel Liptak
        </a>
      </li>
    </ul>
  </Layout>
)

export default About
