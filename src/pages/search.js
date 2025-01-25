import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

import { useNodeFilter } from "../utils/react-hooks";

const BlogSearch = props => {

  const { data } = props
  const allPosts = data.allMarkdownRemark.edges

  const emptyQuery = ""

  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
    doneQueryParam: false,
  })

  const handleQueryChange = query => {

    const { data } = props

    const posts = data.allMarkdownRemark.edges || []

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
      const searchParams = new URLSearchParams(props.location.search)
      const queryParam = searchParams.get('q')
      if(queryParam) {
        handleQueryChange(queryParam)
      }
    }
  }

  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const posts = hasSearchResults ? filteredData : allPosts

  const siteTitle = data.site.siteMetadata.title
  const { location } = props

  const nodeFilter = useNodeFilter()

  return (
    <Layout showSearchForm={false} location={location} title={siteTitle}>

      {handleQueryParam()}

      <div id="indexContainer" className="container">
        <Seo title="All posts" />
        <div id="indexSection" className="containerCenter">
          <div className="searchBox fullWidth">
            <input
              id="search_search-box"
              className="searchInput fullWidth"
              type="text"
              aria-label="Search"
              placeholder="Type to search..."
              onChange={handleInputChange}
            />
          </div>
          <br/>
          <p>Showing results for: <tt>{query}</tt></p>
          {posts.map(({ node }) => {

            if (!nodeFilter(node)) {
              return null
            }

            const { excerpt } = node

            const { slug } = node.fields
            const { title, date, description } = node.frontmatter
            return (
              <article key={slug}>
                <header>
                  <div>
                    <Link to={slug}>{title}</Link>
                  </div>
                  <small>{date}</small>
                </header>
                <section>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: description || excerpt,
                    }}
                  />
                </section>
                <br/>
              </article>
            )
          })}
        </div>

      </div>
    </Layout>
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