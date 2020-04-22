module.exports = {
  siteMetadata: {
    title: `${SITE_TITLE}`,
    author: {
      name: `${SITE_AUTHOR}`,
      summary: `${SITE_AUTHOR_SUMMARY}`,
    },
    description: `${SITE_DESCRIPTION}`,
    siteUrl: `${SITE_URL}`,
    social: {
      twitter: `${SITE_TWITTER_HANDLE}`,
      facebook: `${SITE_FACEBOOK_HANDLE}`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}${SITE_PAGES_DIR}`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}${SITE_ASSETS_DIR}`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `${SITE_NAME}`,
        short_name: `${SITE_SHORT_NAME}`,
        start_url: `${SITE_START_URL}`,
        background_color: `${SITE_BACKGROUND_COLOR}`,
        theme_color: `${SITE_THEME_COLOR}`,
        display: `minimal-ui`,
        icon: `${SITE_ICON_LOCATION}`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
