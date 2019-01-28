import React from 'react'
import Layout from '../components/Layout/index'
import styles from './simpletext.module.scss'
import Button from '../components/Button/index'
import SocialMeta from '../components/SocialMeta/index'

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
  <Layout>
    <SocialMeta image="social_card_cfp.jpg" />
    <div className={styles.simpleText}>
      <h1>
        JSConf Budapest 2019
        <br />
        Call for Speakers
      </h1>

      <p>
        We are inviting the JavaScript community to submit talks for the
        upcoming JSConf Budapest (September 26-27, 2019, Budapest, Hungary).
      </p>
      <p>
        This Call for Speakers closes on{' '}
        <strikethrough>February 28th, 2019</strikethrough>{' '}
        <strong>March 10th, 2019</strong>!
      </p>
      <p>
        <strong>
          We extend the CFP closing date to March 10, so participants in the{' '}
          <a href="https://www.globaldiversitycfpday.com/">
            Global Diversity CFP Day
          </a>{' '}
          have time to submit their first CFP
        </strong>
        !
      </p>
      <CFP_Button />

      <h2>Topics</h2>

      <p>We like to see anything that fits into the topics like:</p>

      <ul>
        <li>
          Cutting-edge technological advances in the world of JavaScript or
          computer science in general, if somehow applicable to JavaScript.
        </li>
        <li>Machine Learning around JS</li>
        <li>Crazy Ideas &amp; Crazy Hacks.</li>
        <li>Developer Culture, improving JavaScript developers’ lives.</li>
        <li>Mobile & JS</li>
        <li>Hardware & JS</li>
        <li>Modern re-visit of JavaScript Fundamentals</li>
        <li>
          And finally: Anything you want, that you feel passionate about and
          relates to the Web or JavaScript
        </li>
      </ul>

      <h2>Perks</h2>

      <p>
        If you get selected as a speaker at JSConf Budapest, here’s what we
        provide:
      </p>
      <ul>
        <li>
          <strong>Your travel to Budapest covered.</strong>
          <br />
          <br />
          We literally buy your plane or train ticket, plus your airport
          transfer, and travel around the city. If you wish, you can arrange
          your travels, and invoice us later - we are happy to assist with
          booking your itinerary, but if you wish to book yourself then invoice
          us later, that's also possible within reasonable price ranges.
        </li>
        <li>
          <strong>
            Your stay in Budapest covered + and extra weekend to explore our
            city
          </strong>
          <br />
          <br />
          In a great hotel near the venue (including free WiFi) for the days of
          the conference, a day before, and the weekend after (i.e. Sept
          28th-29th). If you want to stay longer, we can arrange things, just
          let us know, but you may have to cover extra nights, though.
        </li>
        <li>
          <strong>Entrance to the conference + CSSConf Budapest.</strong>
          <br />
          <br />
          We probably won’t be done with the speaker selections by the end of
          the ticket sales, so if you want to make sure you can attend, just
          drop a mail to us and we will reserve a ticket for you (just don't
          mention anything related your talk in that mail please). If you get
          selected to speak and if you need to, we can refund your ticket, or
          you can transfer it to anyone you like.
        </li>
        <li>
          <strong>You can bring your family</strong>
          <br />
          <br />
          You can bring your significant other, bring your kid(s), they'll stay
          with you at the hotel. If you need child-care to be sorted out for the
          time of the conference, please also get in touch. We are here to make
          this as easy for you as possible!
        </li>
      </ul>

      <p>
        If your employer can cover your travel and hotel, we are happy to list
        them as an awesome company sponsor. The money we save will be used to
        make the conference more fabulous.
      </p>

      <p>
        If you have any special requirements, non-return trips, just let us
        know, we can usually work these things out.
      </p>

      <h2>Guidelines</h2>
      <p>
        Submit your proposal by <strong>March 10th 2019, 23:59:59 CEST</strong>.
      </p>
      <p>All talks are in English.</p>
      <p>
        Talks are usually 30 minutes long (for longer talks we’d get in touch
        with you directly). There will be no Q&A after the talks - we encourage
        attendees and speakers to talk to each in the breaks, after the
        sessions.
      </p>
      <p>
        Make sure you care, and make sure we see you care. Typos, sloppy
        formatting and all-lowercase submissions make our reading of your
        proposal tedious. These things will definitely count against your
        proposal.
      </p>
      <p>
        Don’t overdo it either. If you need more than two paragraphs to get to
        the point of your topic, we need to ask you to slim things down. With
        the amount of submissions we get, the quicker you can to make a good
        impression, the better.
      </p>
      <p>
        Original Topics. One of the things we like to do with JSConf Budapest is
        to push the community forward. We can’t do this if the same people keep
        talking about the same things all the time. Thus, we favor original
        content. If you want to discuss a topic that you have talked about
        elsewhere, try to add a twist, or new research, or development,
        something unique. Of course, if your talk is plain awesome as-is, go for
        that :)
      </p>
      <p>
        Simply assume this: the audience has infinite intelligence but zero
        knowledge.
      </p>

      <h2>Selection Process</h2>

      <p>Here’s how we pick our talks:</p>

      <ul>
        <li>
          We anonymize submissions, so we don’t bias against anything related to
          the submitter. No peeking!
        </li>
        <li>
          The first round of voting rates each talk on a scale from 1 to 10.
        </li>
        <li>The top-N (~50) submissions are rated again on a 3-point scale.</li>
        <li>
          Then we de-anonymize the top so we can bias against speaker details
          (eg. based on our budget, we might opt for a local or at least
          closer-by speaker).
        </li>
      </ul>

      <p>
        We follow the{' '}
        <a href="https://blog.cssconf.eu/2015/08/15/a-talk-selection-process-explained/">
          selection process laid out by our mentors at JSConf & CSSconf EU
        </a>{' '}
        and value:
      </p>

      <ul>
        <li>relevance of the topic for the JS community,</li>
        <li>coherence and clarity of the proposal,</li>
        <li>and novelty/originality of the topic</li>
      </ul>

      <p>in a submission.</p>

      <h2>We are here to help!</h2>

      <p>
        Not everybody is a natural talent on stage. Not everybody can produce
        kick-ass slide-decks. Not everybody is a live-demo-god. Not everybody
        knows they have something great to talk about. There are about a million
        reasons why you don’t consider yourself a speaker.
        <br />
        We are here to prove you wrong.
        <br />
        If all you have is a gut feeling that you should be on stage, we are
        here to reach out and help you to develop or hone the skills you think
        you lack to deliver a great presentation.
      </p>
      <p>
        We are happy to brainstorm your interests to see if a great topic is
        hiding.
        <br />
        We are happy to connect you with experienced speakers to help prepare
        your submission
        <br />
        We are happy to review and advise on how to produce a slide deck.
      </p>

      <p>
        If you need practice giving talks, get in touch, we can hook you up with
        local groups.
        <br />
        Again, whatever else you might need, we’re here to help.
      </p>
      <p>
        Get in touch: <strong>team@jsconfbp.com</strong> (just please don’t use
        this address to submit a proposal).
      </p>

      <CFP_Button />
    </div>
  </Layout>
)

export default CallForSpeakers
