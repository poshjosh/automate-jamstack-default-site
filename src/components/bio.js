/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

import Image from "./image"
import SocialImages from "./social-images"
import { AUTHOR } from "../utils/i18n"
import { useTranslate } from "../utils/react-hooks"
import { rhythm } from "../utils/typography"
import "./bio.css"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.(jpg|jpeg|png|gif|webp)/" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            width: 48
            height: 48
          )
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  const { medium } = useBreakpoint()
  return (
    <>
      <div
        style={{
          display: `flex`,
          marginBottom: rhythm(3 / 4),
          paddingBottom: 0,
          background: `#eeddcc`,
        }}
      >
        <Image image={data?.avatar?.childImageSharp?.gatsbyImageData} alt={author.name}/>
        <div>
          <small className="nobreak nooverflow">{useTranslate(AUTHOR)}:</small>
          &emsp;<strong className="nobreak nooverflow">{author.name}</strong>
          {medium ? <>&emsp;</> : <br/>}
          <tt>{author.summary}</tt>&emsp;
        </div>
        {medium && <SocialImages/>}
      </div>
      {!medium && <SocialImages/>}
    </>
  )
}

export default Bio
