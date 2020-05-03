import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogSearch = props => {

//  console.log('Props: ' + props)

  const { data } = props
  const allPosts = data.allMarkdownRemark.edges

  const emptyQuery = ""

  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
    doneQueryParam: false,
  })

  const handleQueryChange = query => {

//    console.log('Query: ' + query)

    const { data } = props

    const posts = data.allMarkdownRemark.edges || []

    const filteredData = posts.filter(post => {
      const { description, title, tags } = post.node.frontmatter
      return (
        description.toLowerCase().includes(query.toLowerCase()) ||
        title.toLowerCase().includes(query.toLowerCase()) ||
        (tags &&
          tags
            .join("")
            .toLowerCase()
            .includes(query.toLowerCase()))
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
//      console.log('Query param: ' + queryParam)
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

  return (
    <Layout showSearchForm={false} location={location} title={siteTitle}>

      {handleQueryParam()}

      <div id="indexContainer">
        <SEO title="All posts" />
        <br/>
        <h1
          style={{
            marginTop: 0,
            textAlign: `center`,
          }}
        >Search</h1>

        <div id="indexSection">
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
