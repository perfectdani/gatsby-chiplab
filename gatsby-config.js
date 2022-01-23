/* eslint-disable no-undef */
module.exports = {
  siteMetadata: {
    title: `Chiplab`,
    siteUrl: `https://www.chiplab.vercel.app`,
    description: `Create Custom Poker Chips and more`,
  },
  plugins: [
    'gatsby-plugin-root-import',
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
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
  ],
};
