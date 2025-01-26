import React, { useState } from "react"
import { graphql } from "gatsby"

import ArticleListings from "../components/article-listings"
import Page from "../components/page";
import { useTranslate } from "../utils/react-hooks"
import { SEARCH_ALL_POSTS, SEARCH_PROMPT } from "../utils/i18n"
import Seo from "../components/seo";

const BlogSearch = ({ data, location }) => {

  const posts = data.allMarkdownRemark.edges || []

  const emptyQuery = ""

  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
    doneQueryParam: false,
  })

  const handleQueryChange = query => {

    const filteredData = posts.filter(post => {
      const { rawMarkdownBody, frontmatter } = post.node
      const { description, title, tags } = frontmatter
      const q = query.toLowerCase()
      return (
        (description && description.toLowerCase().includes(q)) ||
        (title && title.toLowerCase().includes(q)) ||
        (tags && tags.join("").toLowerCase().includes(q)) ||
        (rawMarkdownBody && rawMarkdownBody.toLowerCase().includes(q))
      )
    })

    setState({
      query,
      filteredData,
    })
  }

  const handleInputChange = event => {
    handleQueryChange(event.target.value)
  }

  const handleQueryParam = () => {
    const { doneQueryParam } = state
    if( doneQueryParam === false) {
      setState({
        doneQueryParam: true,
      })
      const searchParams = new URLSearchParams(location.search)
      const queryParam = searchParams.get('q')
      if(queryParam) {
        handleQueryChange(queryParam)
      }
    }
    return null
  }

  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const foundPosts = hasSearchResults ? filteredData : posts

  const siteTitle = data.site.siteMetadata.title

  return (
    <Page location={location} showSearchForm={false} siteName={siteTitle}>

      {handleQueryParam()}

      <Seo title={useTranslate(SEARCH_ALL_POSTS)}/>
      <p className="search-box full-width">
        <input
          id="search_search-box"
          className="search-input full-width"
          type="text"
          aria-label="Search"
          placeholder={useTranslate(SEARCH_PROMPT)}
          onChange={handleInputChange}
        />
      </p>
      <p>Showing results for: <tt>{query}</tt></p>
      <ArticleListings posts={foundPosts}/>

    </Page>
  )
}

export default BlogSearch

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
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          rawMarkdownBody
          frontmatter {
            title
            description
            date(formatString: "MMMM DD, YYYY")

            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
`