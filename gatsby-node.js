const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
    allArticles {
        author
        paragraph
      }
    `).then(result => {
      console.log(result)
      //   result.data.allDatoCmsWork.edges.map(({ node: work }) => {
      //     createPage({
      //       path: `aktualnosci/${work.slug}`,
      //       component: path.resolve(`./src/components/Elements/article.js`),
      //       context: {
      //         slug: work.slug,
      //       },
      //     })
      //   })
      resolve()
    })
  })
}
