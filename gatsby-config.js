module.exports = {
  siteMetadata: {
    title: "Ian Te",
    description: "Ian Te page",
    author: "Ian Te",
    keywords: ["frontend"],
    siteUrl: "https://iante.xyz",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {icon: `src/images/Favicon.png`},
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    // {
    //   resolve: "gatsby-plugin-pdf",
    //   options: {
    //     paths: ["/cv"],
    //     outputPath: "/public/exports",
    //   },
    // },
  ],
};
