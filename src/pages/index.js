import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { rhythm } from "../utils/typography"

import { useNodeFilter, useTranslate } from "../utils/react-hooks"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  const nodeFilter = useNodeFilter()

  return (
    <Layout location={location} title={siteTitle} showSearchForm={true}>
      <Seo title={useTranslate('all_posts')} />
      <Bio />
      <div id="indexContainer" className="container">

        <h1 style={{ marginTop: 0 }}>{useTranslate('index_title')}</h1>

        <div id="indexSection" className="containerCenter">
          {posts.map(({ node }) => {

            if (!nodeFilter(node)) {
              return null
            }

            const title = node.frontmatter.title || node.fields.slug
            return (
              <article key={node.fields.slug}>
                <header>
                  <h3
                    style={{
                      marginBottom: rhythm(1 / 4),
                    }}
                  >
                    <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                      {title}
                    </Link>
                  </h3>
                  <small>{node.frontmatter.date}</small>
                </header>
                <section>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </section>
              </article>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author {
          name
          summary
        }
        social {
          twitter
        }
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
`
