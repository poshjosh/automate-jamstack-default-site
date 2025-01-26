import React from "react"
import { graphql } from "gatsby"

import ArticleListings from "../components/article-listings"
import Page from "../components/page"
import Seo from "../components/seo"
import { useTranslate } from "../utils/react-hooks"
import { ALL_POSTS, INDEX_TITLE } from "../utils/i18n"

const BlogIndex = ({ data, location }) => {
  const { title } = data.site.siteMetadata
  const posts = data.allMarkdownRemark.edges || []

  return (
    <Page location={location} showBio={true} showSearchForm={true} siteName={title}>
      <Seo title={useTranslate(ALL_POSTS)}/>
      <h1 style={{marginTop: 0}}>{useTranslate(INDEX_TITLE)}</h1>
      <div>
        <ArticleListings posts={posts}/>
      </div>
    </Page>
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
