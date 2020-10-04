require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Katarzyna Bartoszewicz`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: [
            "Droid Sans",
            "Droid Serif",
            "Montserrat",
            "Fondamento",
            "Merriweather",
            "Cinzel",
          ],
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kancelaria Adwokacka Adwokat Katarzyna Pałuba`,
        short_name: `Adwokat Katarzyna Pałuba`,
        description: ` `,
        lang: `pl`,
        //icon: ``,
        start_url: `/`,
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.API_DATO_CMS,
        url: "https://graphql.datocms.com/preview",
      },
    },
  ],
}
