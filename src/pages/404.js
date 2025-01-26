import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { useTranslate } from "../utils/react-hooks"
import { NOT_FOUND_MESSAGE, NOT_FOUND_TITLE } from "../utils/i18n"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} siteName={siteTitle}>
      <Seo title={useTranslate(NOT_FOUND_TITLE)} />
      <h1>{useTranslate(NOT_FOUND_TITLE)}</h1>
      <p>{useTranslate(NOT_FOUND_MESSAGE)}</p>
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
