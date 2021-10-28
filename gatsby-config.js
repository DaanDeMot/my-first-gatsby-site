module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    description : "Taak voor school",
    title: "De Mot Agency",
  },
   plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: "gatsby-source-wordpress",
      options: {
        /*
         * De volledige URL van je Headless WordPress site's GraphQL API.
         * Voorbeeld : "https://www.example-site.com/graphql"
         */
        url: "http://de-mot-agency.local/graphql",
      },
    },
  ],
};
