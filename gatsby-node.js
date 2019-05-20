/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

  createRedirect({
    fromPath: `/sponsoration/`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/sponsorship/`,
  })

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMdx {
              edges {
                node {
                  id
                  parent {
                    ... on File {
                      name
                      sourceInstanceName
                    }
                  }
                  code {
                    scope
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }
        // Create blog posts pages.
        result.data.allMdx.edges.forEach(({ node }) => {
          const { sourceInstanceName } = node.parent

          createPage({
            path: `/${sourceInstanceName}/${node.parent.name}`,
            component: path.resolve(`./src/templates/${sourceInstanceName}-content.js`),
            context: { id: node.id }
          });
        });
      })
    );
  });
};