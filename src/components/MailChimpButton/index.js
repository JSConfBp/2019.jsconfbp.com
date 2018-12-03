import React from 'react'
import Helmet from 'react-helmet'

import styles from './mailchimpbutton.module.scss'

const MailChimpButton = () => {
  const onClick = () => {
    window.dojoRequire(['mojo/signup-forms/Loader'], function(L) {
      L.start({
        baseUrl: 'mc.us10.list-manage.com',
        uuid: '8f14f3a872c2d300b17d57e89',
        lid: '0d1406ca77',
        uniqueMethods: true,
      })
    })
  }

  return (
    <>
      <Helmet>
        <script
          type="text/javascript"
          src="//downloads.mailchimp.com/js/signup-forms/popup/unique-methods/embed.js"
          data-dojo-config="usePlainJson: true, isDebug: false"
        />
      </Helmet>
      <a
        role="button"
        href="#register"
        onClick={e => onClick(e)}
        className={styles.mailchimp_button}
      >
        Get updates!
      </a>
    </>
  )
}

export default MailChimpButton
