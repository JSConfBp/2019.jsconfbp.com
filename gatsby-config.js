module.exports = {
  siteMetadata: {
    title: 'JSConf Budapest 2019',
    description: 'JSConf Budapest returns! September 26-27. 2019, Budapest, Hungary',
    keywords: 'jsconf, javascript, jsconfbp, conference, budapest, jsconf budapest',
    twitter: '@jsconfbp'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'jsconf-budapest',
        short_name: 'jsconfbp',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-58489830-1",
        // Puts tracking script in the head instead of the body
        head: false,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "jsconfbp.com",
      },
    },
  ],
}
