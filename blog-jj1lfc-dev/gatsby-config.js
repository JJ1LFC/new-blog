module.exports = {
  siteMetadata: {
    title: `おるとのぺーじ`,
    description: `大学院生のブログとかポートフォリオとか`,
    twitterUsername: `@jj1lfc`,
    image: `/icons/icon-512x512.png`,
    siteUrl: `https://jj1lfc.dev`,
  },
  plugins: [
    {
      resolve: `@chakra-ui/gatsby-plugin`,
      options: {
        resetCSS: true,
        isUsingColorMode: true,
        isBaseProvider: false,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: this.siteMetadata.title,
        short_name: this.siteMetadata.title,
        start_url: `/`,
        background_color: `#151516`,
        theme_color: `#151516`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/portfolio/`],
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-purgecss`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/src/pages/`,
        fathash: true,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              backgroundColor: `none`,
              withWebp: true,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              showLineNumbers: true,
              prompt: {
                user: 'alt',
                host: 'srv.jj1lfc.dev',
                global: false,
              },
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
  ],
}
