import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import { useNodeFilter } from "../utils/react-hooks"

const SideSection = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              description
            }
          }
        }
      }
    }
  `)

  const nodeFilter = useNodeFilter()

  const posts = data.allMarkdownRemark.edges
  return (
    <div>
      {posts.map(({ node }) => {

        if (!nodeFilter(node)) {
          return null
        }

        const title = node.frontmatter.title || node.fields.slug
        return (
          <p key={node.fields.slug}>
            <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
              {title}
            </Link>
          </p>
        )
      })}
    </div>
  )
}

export default SideSection
