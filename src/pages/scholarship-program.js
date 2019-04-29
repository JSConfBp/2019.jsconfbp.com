import React from 'react'
import Layout from '../components/Layout/index'
import styles from './simpletext.module.scss'
import Button from '../components/Button/index'
import SocialMeta from '../components/SocialMeta/index'

const SCHOLARSHIP_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSd7lCs4n2M05ccHJw63VbSP3bFjfTDfnfaZC894BuvbHW0Lpg/formResponse'

const Scholarship_Button = () => (
  <Button
    block={true}
    fill={true}
    color={'red'}
    href={SCHOLARSHIP_URL}
    className={styles.cfp__button}
  >
    Apply for Scholarship
  </Button>
)

const Scholarship = () => (
  <Layout>
    <SocialMeta image="social_card_scholarship.jpg" />
    <div className={styles.simpleText}>
      <h1>Scholarship Program</h1>

      <p>
        2019 will be the 4th time, when we're running our Scholarship Program!
        As every year so far, we'll provide a limited number of free,
        Scholarship tickets to help underrepresented groups in tech to attend
        the conference.
      </p>

      <h2>Who can apply for a scholarship?</h2>

      <p>
        Anyone from an underrepresented group in tech is invited to apply for a
        scholarship.
      </p>
      <p>
        This includes but isn’t limited to: women, people of color, LGBTQIA+
        people, disabled people and people facing economic or social hardships.
        We would like to give them a chance.
      </p>

      <Scholarship_Button />

      <h2>Why is this good?</h2>

      <p>
        Scholarship Support is not money for a party, nor for fancy catering, or
        a nice booth.
      </p>
      <p>It is a chance for someone.</p>

      <p>
        We try to reach as much people as possible, in the community around the
        region, and we are working hard, to make this event available for
        everyone who is interested. But we know there are many in the region who
        would, but cannot attend such a conference, for various reasons. They
        can get a ticket to the conference, through application.
      </p>

      <p>
        This is a chance for them, to meet people they can learn from, see talks
        they can benefit from, a chance to step forward
      </p>

      <p>
        A chance for you to help someone in a great way for a reasonable price.
      </p>

      <p>
        The the past years, after we started this program, we've{' '}
        <a href="https://medium.com/@_nec/how-can-a-conference-help-someone-5a4fff2623af#.gw1ni84hj">
          actually changed someone's life for good
        </a>
        ! Imagine what is possible by helping with even more people!
      </p>

      <h2>How does the scholarship awarding works?</h2>

      <p>
        All applicants for the Scholarship Program has to go through an
        application procedure. Along with personal details for the tickets
        itself, we ask applicants a few questions about what they do in tech, or
        what they wish to learn on the event. These answers are helpful for the
        jury, who will evaluate the applications and award the tickets.
      </p>

      <p>
        We, the organizers, do not take part in the jury process. Last years we
        asked Green Fox Academy in Budapest to help us evaluate the applications
        and select the awardees. To manage the scholarship fund, we turned to
        the Asimov Foundation in Budapest, who helped the selected people with
        travel arrangements if necessary. This year, we plan to cooperate with
        these organisations again.
      </p>
{/*
      <h3>Green Fox Academy</h3>

      <p>
        Green Fox Academy is a school of technology in Budapest where students
        are provided with marketable knowledge. Their philosophy is reflected in
        education principles they apply during the courses. They truly believe
        in mentoring based education and the integration of hard tech knowledge
        and soft skills development. For the Green Fox team teaching is about
        inspiring people to focus on self-improvement and problem-solving.
        Education is their passion.
        <br />
        <br />
        More information:{' '}
        <a href="http://www.greenfoxacademy.com/">
          http://www.greenfoxacademy.com/
        </a>
      </p>

      <h3>The Asimov Foundation</h3>

      <p>
        The goals of Asimov Foundation in Budapest are to broaden the
        professional horizon in IT, to give inspiration and to connect the
        members of the community with each other. To facilitate genuine dialogue
        and sharing of information and knowledge among technologists through our
        events. To encourage innovative activities and effective professional
        cooperation among IT developer groups.
        <br />
        <br />
        More information:{' '}
        <a href="http://asimov-foundation.org/english/">
          http://asimov-foundation.org/english/
        </a>
      </p>
*/}
      <h2>Where is the Scholarship Budget coming from?</h2>

      <p>
        The budget is filled by generous donors, both from the Attendees and our
        Sponsors.
      </p>

      <p>
        Attendees can sponsor the program with buying Supported tickets. Both
        Early Bird and Regular tickets are available in a Scholarship Supporting
        variant. This means, that the ticket price includes a percent of a
        supported ticket, that will be given to someone in need.
      </p>

      <p>Let's see this ticket for example:</p>

      <p>
        <strong>Regular JS Ticket + 50% Scholarship Support = €466</strong>
        <br />
        235 EUR + 117 EUR + VAT + Fees
      </p>

      <p>
        This means, if you buy this ticket, you'll sponsor half of someone's
        ticket, who otherwise could not afford it.
      </p>

      <p>We've set several levels of sponsorship: 25%, 50% and 75%.</p>

      <p>
        10% of every Sponsor package goes directly into the Scholarship Budget.
        So all of our sponsors become donors to the Program. If your company is
        interested in participating, check out our{' '}
        <a href="/sponsoration/">Sponsorship opportunities</a>.
      </p>
    </div>
  </Layout>
)

export default Scholarship
