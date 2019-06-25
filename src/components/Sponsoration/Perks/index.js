import React from 'react'
import { MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
import InfoIcon from '@material-ui/icons/Info'
import { withStyles } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
import styles from './perks.module.scss'

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
})

const customStyles = {
  root: {
    color: theme.palette.primary,
  },
  popper: {
    fontSize: '2rem'
  }
}

const perk_list = [
  {
    name: 'coffee',
    label: 'Specialty Coffee',
    info: 'High quality coffee by Espresso Embassy Budapest, branded with your company',
    price: '€4,000'
  },
  {
    name: 'party1',
    label: 'CSS Closing Party',
    info: 'Vast chance to present company during the event and form party face for serving your purposes. Attendees will have better experience with a sposorated party, filled with activities not just drinking and talking',
    price: '€5,000'
  },
  {
    name: 'party2',
    label: 'First Night Party',
    info: 'Vast chance to present company during the event and form party face for serving your purposes. Attendees will have better experience with a sposorated party, filled with activities not just drinking and talking',
    price: '€5,000'
  },
  {
    name: 'dinner',
    label: 'Dinner',
    info: 'Presence of company everywhere which is connected to meals and good branding opportunity with healthy vegan food plus vegetarian & meat opt-in.',
    price: '€4,000'
  },
  {
    name: 'party3',
    label: 'JS Closing Party',
    info: 'Vast chance to present company during the event and form party face for serving your purposes. Attendees will have better experience with a sposorated party, filled with activities not just drinking and talking',
    price: '€5,000'
  },
  {
    name: 'wifi',
    label: 'Wifi Pass',
    info: 'Your brand or keyword is the wifi pass, attendees, who need internet, has to type it in at least once',
    price: '€3,000'
  },
  {
    name: 'guitarhero',
    label: 'Guitar Hero',
    info: 'The Venue has a wall with a huge LED screen formed as a guitar, you can create a video that will run on that screen in a loop, if it catchy enough, attendees can use it as a selfie wall',
    price: '€2,000'
  },
  {
    name: 'sketchnotes',
    label: 'Sketch Notes',
    info: 'These drawings could be shared on social media with your hashtag or twitter handle attached - the drawing itself can be branded with your logo in a corner, or top center',
    price: '€2,000'
  },
  {
    name: 'lanyrd',
    label: 'Lanyrd',
    info: 'Your logo next to the JSConf Budapest / CSSConf Budapest logo on lanyards',
    price: '€2,000'
  },
]

const PerkList = () => (
  <ul className={styles.perk_list}>
    {perk_list.map(perk => (
      <li key={`perk_${perk.label}`}>
        <strong className={styles.perk_label}>
          {perk.label}
          <Tooltip title={perk.info} placement="right" classes={{ popper: styles.popper }}>
            <InfoIcon color="primary" className={ styles.perk_icon } />
          </Tooltip>
        </strong>
        <span className={styles.perk_value}>{perk.price}</span>
      </li>
    ))}
  </ul>
)

const Perks = () => (
  <>
    <MuiThemeProvider theme={theme}>
      <div className={styles.perks}>
        <div className={styles.block_inner}>
          <a name="perks" />
          <h2 className={styles.title}>A’la Carte Sponsorship</h2>

          <p>
            Exclusive perks, brand tailored to your Company, each sold once.{' '}
            <br />
            These are dedicated enhancements for our attendees, like better
            catering, coffee, or a great party.
            <br />
            Example: <strong>Lunch by COMPANY.</strong>
          </p>

          <PerkList />
        </div>
      </div>
    </MuiThemeProvider>
  </>
)

export default withStyles(customStyles)(Perks)
