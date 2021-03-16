require(`dotenv`).config({
  path: `.env`,
});

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  siteMetadata: {
    siteTitle: `Figureable`,
    siteTitleAlt: `Figureable Blog - Documentation of research and development`,
    siteHeadline: `Figureable Blog - Documentation of research and development`,
    siteUrl: `https://figureable.netlify.app/`,
    siteDescription: `A website and blog dedicated to the presentation of research findings and process documentation of Figureable. Figureable is an artistic research project that explores our relationships to and with bodies through embodiment in games.`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@JaePerris`,
    externalLinks: [
      {
        name: `GitHub`,
        url: `https://github.com/tmf-code`,
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
      resolve: `gatsby-plugin-goatcounter`,
      options: {
        // REQUIRED! https://[my_code].goatcounter.com
        code: !isProduction ? '095914' : 'figureablegame',
        head: true,
        allowLocal: !isProduction,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Figureable Blog - Documentation of research and development`,
        short_name: `Figureable Blog`,
        description: `A website and blog dedicated to the presentation of research findings and process documentation of Figureable. Figureable is an artistic research project that explores our relationships to and with bodies through embodiment in games.`,
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
    // `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
};
