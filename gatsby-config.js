require('dotenv').config()

const queries = require('./src/utils/algolia_queries')

module.exports = {
  siteMetadata: {
    title: `William Pereira`,
    position: `Desenvolvedor FrontEnd`,
    description: `A blog about frontend development and other cool stuff`,
    author: `@William Pereira`,
    siteUrl: `https://brouwilliam.netlify.app`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-transition-link`,
    // needs to be the first to work with gatsby-remark-image
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/assets/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images-v2",
            options:{
              name: "uploads"
            }
          },
          {
            resolve: "gatsby-remark-images",
            options:{
              maxWidth: 960,
              linkImagesToOriginal: false,
            },
          },
          `gatsby-remark-lazy-load`,
          `gatsby-remark-prismjs`,

        ],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-algolia-search`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000,
        enablePartialUpdates: true,
        // If not update in Algolia, change for 'false' in enablePartialUpdates
        
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `William Pereira`,
        short_name: `William Pereira`,
        start_url: `/`,
        background_color: `#16202c`,
        theme_color: `#16202c`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
     `gatsby-plugin-offline`,
     `gatsby-plugin-netlify-cms`,
  ],
}

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})