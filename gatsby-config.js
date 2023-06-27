require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "Gatsby Blog Demo",
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: process.env.DATO_API_TOKEN,
        environment: process.env.DATO_ENVIRONMENT,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `datocms-plugin-web-previews`,
      options: {
        webhookUrl: `https://new-theory-gatsby-blog-demo.admin.datocms.com/api/previews`
      }
    }
  ],
};
