require('dotenv').config();

module.exports = {
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
        acl: null,
        // protocol: 'https',
        // hostname: 'www.kidfiji.net',
      },
    },
  ],
};
