/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            width: 48
            height: 48
          )
        }
      }
      twitter: file(absolutePath: { regex: "/twitter-icon.png/" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            width: 48
            height: 48
          )
        }
      }
      facebook: file(absolutePath: { regex: "/facebook-icon.png/" }) {
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
          social {
            twitter
            facebook
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(3 / 4),
        paddingBottom: 0,
        background: `#eeddcc`,
      }}
    >
      <GatsbyImage
        image={data.avatar.childImageSharp.gatsbyImageData}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          minWidth: 48,
          borderRadius: `100%`,
          paddingBottom: 0,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <div>
        <small className="nobreak nooverflow">Written by</small>
        &emsp;<strong className="nobreak nooverflow">{author.name}</strong>
        &emsp;<tt>{author.summary}</tt>&emsp;
      </div>
      <div
        style={{
          paddingBottom: 0,
        }}
      >
        <a
          href={`https://twitter.com/${social.twitter}`}
          target="_blank" rel="noopener noreferrer"
        >
          <GatsbyImage
            image={data.twitter.childImageSharp.gatsbyImageData}
            alt="Follow me on twitter"
            style={{
              marginRight: rhythm(1 / 2),
              minWidth: 48,
              borderRadius: `100%`,
              display: `inline-block`,
            }}
            imgStyle={{
              borderRadius: `50%`,
            }}
          />
        </a>
        <a
          href={`https://www.facebook.com/${social.facebook}`}
          target="_blank" rel="noopener noreferrer"
        >
          <GatsbyImage
            image={data.facebook.childImageSharp.gatsbyImageData}
            alt="Follow me on facebook"
            style={{
              marginRight: rhythm(1 / 2),
              minWidth: 48,
              borderRadius: `100%`,
              display: `inline-block`,
            }}
            imgStyle={{
              borderRadius: `50%`,
            }}
          />
        </a>
      </div>
    </div>
  )
}

export default Bio
