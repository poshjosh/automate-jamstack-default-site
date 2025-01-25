import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { useTranslate } from "../utils/react-hooks"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={useTranslate('not_found_title')} />
      <h1>{useTranslate('not_found_title')}</h1>
      <p>{useTranslate('not_found_message')}</p>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
