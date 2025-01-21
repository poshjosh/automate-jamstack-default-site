const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const { getNodeFilterByPath } = require(`./src/utils/functions-non-es6`)

exports.createPages = async ({ graphql, actions }, _, cb) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  function findNextNode(posts, nodeFilter, index) {
    for (let i = index; i < posts.length; i++) {
      const post = posts[i]
      if (nodeFilter(post.node)) {
        return post.node
      }
    }
    return null
  }

  function findPreviousNode(posts, nodeFilter, index) {
    for (let i = index; i >= 0; i--) {
      const post = posts[i]
      if (nodeFilter(post.node)) {
        return post.node
      }
    }
    return null
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {

    const nodeFilter = getNodeFilterByPath(post.node.fields.slug)

    const previous = findNextNode(posts, nodeFilter, index + 1)
    const next = findPreviousNode(posts, nodeFilter, index - 1)

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })

  cb()
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
