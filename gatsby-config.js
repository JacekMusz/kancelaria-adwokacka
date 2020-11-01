require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Katarzyna Bartoszewicz`,
    description: `Kancelaria świadczy pomoc prawną podmiotom fizycznym,
    gospodarczym oraz instytucjom. Adwokat Katarzyna
    Bartoszewicz zdobywała swoje doświadczenie zawodowe
    współpracując z innymi kancelariami oraz instytucjami
    publicznymi.`,
    author: `Katarzyna Bartoszewicz`,
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
