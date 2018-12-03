import React from 'react'
import MainLayout from '../components/MainLayout/index'
import styles from './simpletext.module.scss'
import Button from '../components/Button/index'

const CFP_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSeox5OTuhXmrLXhWtLAcj4AFfpKj9kiv0B17A1rhEU0Qy3xrQ/viewform'

const CFP_Button = () => (
  <Button
    block={true}
    fill={true}
    color={'red'}
    href={CFP_URL}
    className={styles.cfp__button}
  >
    Submit your talk
  </Button>
)

const CallForSpeakers = () => (
  <MainLayout>
    <div className={styles.simpleText}>
      <h1>
        JSConf Budapest 2019
        <br />
        Call for Speakers
      </h1>

      <h2>The application is open until February 28th, 2019</h2>

      <CFP_Button />

      <h3>
        The Perks
      </h3>
      <p>
        If you get selected as a speaker at JSConf Budapest, here’s what we provide:
        <br />
        <br />
        <em>Your travel to Budapest covered.</em>
        <br />
        <br />
        We literally buy your plane or train ticket, plus your airport transfer, and travel around the city. If you wish, you can arrange your travels, and invoice us later - we are happy to assist with booking your itinerary, but if you wish to book yourself then invoice us later, that's also possible within reasonable price ranges.
        <br />
        <br />
        <em>Your stay in Budapest covered + and extra weekend to explore our city</em>
        <br />
        <br />
        In a great hotel near the venue (including free WiFi) for the days of the conference, a day before, and the weekend after (i.e. Sept 28th-29th). If you want to stay longer, we can arrange things, just let us know, but you may have to cover extra nights, though.
        <br />
        <br />
        <em>Entrance to the conference + CSSConf Budapest.</em>
        <br />
        <br />
        We probably won’t be done with the speaker selections by the end of the ticket sales, so if you want to make sure you can attend, just drop a mail to us and we will reserve a ticket for you (just don't mention anything related your talk in that mail please). If you get selected to speak and if you need to, we can refund your ticket, or you can transfer it to anyone you like.
        <br />
        If your employer can cover your travel and hotel, we are happy to list them as an awesome company sponsor. The money we save will be used to make the conference more fabulous.
        <br />
        If you have any special requirements, non-return trips, just let us know, we can usually work these things out.
        <br />
        If you want to bring a significant other, or bring your kid(s) and need child-care to be sorted out for the time of the conference, please also get in touch. We are here to make this easy for you!
      </p>

      <h3>
        We can help
      </h3>

      <p>
        Not everybody is a natural talent on stage. Not everybody can produce kick-ass slide-decks. Not everybody is a live-demo-god. Not everybody knows they have something great to talk about.
        There are about a million reasons why you don’t consider yourself a speaker.
        <br />
        We are here to prove you wrong.
        <br />
        If all you have is a gut feeling that you should be on stage, we are here to reach out and help you to develop or hone the skills you think you lack to deliver a great presentation.
        <br />
        <br />
        We are happy to brainstorm your interests to see if a great topic is hiding.
        We are happy to connect you with experienced speakers to help prepare your submission
        We are happy to review and advise on how to produce a slide deck.
        <br />
        <br />
        If you need practice giving talks, get in touch, we can hook you up with local groups.
        Again, whatever else you might need, we’re here to help.
        <br />
        <br />
        Get in touch: <em>team@jsconfbp.com</em> (just please don’t use this address to submit a proposal).
      </p>

      <h3>
        Guidelines
      </h3>

      <p>
        Submit your proposal by <em>February 28th 2019, 23:59:59 CEST</em>.
        <br />
        <br />
        All talks are in English.
        <br />
        <br />
        Talks are usually 30 minutes long (for longer talks we’d get in touch with you directly). There will be no Q&A after the talks - we encourage attendees and speakers to talk to each in the breaks, after the sessions.
        <br />
        <br />
        Make sure you care, and make sure we see you care. Typos, sloppy formatting and all-lowercase submissions make our reading of your proposal tedious. These things will definitely count against your proposal.
        <br />
        <br />
        Don’t overdo it either. If you need more than two paragraphs to get to the point of your topic, we need to ask you to slim things down. With the amount of submissions we get, the quicker you can to make a good impression, the better.
        <br />
        <br />
        Original Topics. One of the things we like to do with JSConf Budapest is to push the community forward. We can’t do this if the same people keep talking about the same things all the time. Thus, we favor original content. If you want to discuss a topic that you have talked about elsewhere, try to add a twist, or new research, or development, something unique. Of course, if your talk is plain awesome as-is, go for that :)
        <br />
        <br />
        Simply assume this: the audience has infinite intelligence but zero knowledge.
      </p>

      <CFP_Button />
    </div>
  </MainLayout>
)

export default CallForSpeakers
