const mdxFeed = require("gatsby-mdx/feed");

module.exports = {
  siteMetadata: {
    siteUrl: 'https://2019.jsconfbp.com',
    title: 'JSConf Budapest 2019',
    description: 'JSConf Budapest 2019, September 26-27, Budapest, Hungary. Tickets from €311, including free workshops, inclusive catering and barista coffee!',
    keywords: 'jsconf, javascript, jsconfbp, conference, budapest, jsconf budapest, diversity, inclusivity, community',
    twitter: '@jsconfbp'
  },
  plugins: [
    `gatsby-mdx`,
    {
      resolve:`gatsby-source-filesystem`,
      options:{
        name:`speaker-images`,
        path: `${__dirname}/speakers/images`,
        ignore: [ `**/\.*` ], // ignore files starting with a dot
      }
    },
    {
      resolve:`gatsby-source-filesystem`,
      options:{
        name:`sketchnotes`,
        path: `${__dirname}/speakers/sketchnotes`,
        ignore: [ `**/\.*` ], // ignore files starting with a dot
      }
    },
    {
      resolve:`gatsby-source-filesystem`,
      options:{
        name:`sponsor-images`,
        path: `${__dirname}/static/posts`,
        ignore: [ `**/\.*` ], // ignore files starting with a dot
      }
    },
    {
      resolve:`gatsby-source-filesystem`,
      options:{
        name:`sponsor-images`,
        path: `${__dirname}/static/sponsors`,
        ignore: [ `**/\.*` ], // ignore files starting with a dot
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "workshops",
        path: `${__dirname}/workshops`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "speakers",
        path: `${__dirname}/speakers`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "updates",
        path: `${__dirname}/updates`
      }
    },
    'gatsby-plugin-force-trailing-slashes',
    'gatsby-plugin-react-helmet',
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "team",
        path: `${__dirname}/src/images/team`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      }
    },
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
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
          rule: {
            include: `${__dirname}/src/images`,
          }
      }
    },
  ],
}
