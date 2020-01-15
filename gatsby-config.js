require(`dotenv`).config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    siteTitle: `Figureable Game`,
    siteTitleAlt: `Figureable Game Blog - Documentation of research and development`,
    siteHeadline: `Figureable Game Blog - Documentation of research and development`,
    siteUrl: `https://figureable.netlify.com/`,
    siteDescription: `A website/blog dedicated to the presentation of research findings and process documentation of the Figureable Game`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@JaePerris`,
    externalLinks: [
      {
        name: `Twitter`,
        url: `#`,
      },
      {
        name: `Instagram`,
        url: `#`,
      },
    ],
    navigation: [
      {
        title: `Blog`,
        slug: `/blog`,
      },
      {
        title: `About`,
        slug: `/about`,
      },
    ],
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Figureable Game Blog - Documentation of research and development`,
        short_name: `Figureable Game Blog`,
        description: `A website/blog dedicated to the presentation of research findings and process documentation of the Figureable Game.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
};
