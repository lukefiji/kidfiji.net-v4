require('dotenv').config();
const SITE_ADDRESS = new URL('https://kidifji.net');

module.exports = {
  flags: {
    DEV_SSR: false,
  },
  siteMetadata: {
    title: 'Luke Fiji',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
      },
    },
    'gatsby-plugin-react-helmet',
    // 'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/luke-fiji-logo.png',
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: SITE_ADDRESS.href.slice(0, -1),
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: process.env.S3_BUCKET_NAME,
        protocol: SITE_ADDRESS.protocol.slice(0, -1),
        hostname: SITE_ADDRESS.hostname,
      },
    },
  ],
};
