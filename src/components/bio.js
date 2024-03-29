/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 60, height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      twitter: file(absolutePath: { regex: "/twitter-icon.png/" }) {
        childImageSharp {
          fixed(width: 32, height: 32) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      facebook: file(absolutePath: { regex: "/facebook-icon.png/" }) {
        childImageSharp {
          fixed(width: 32, height: 32) {
            ...GatsbyImageSharpFixed
          }
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
        maxHeight: 62,
        paddingBottom: 0,
        background: `#eeddcc`,
      }}
    >
      <StaticImage
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          minWidth: 60,
          borderRadius: `100%`,
          paddingBottom: 0,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <div
        style={{
          paddingBottom: 0,
        }}
      >
        <span>
          <small className="nobreak nooverflow">Written by</small>
          &emsp;<strong className="nobreak nooverflow">{author.name}</strong>
          &emsp;<tt>{author.summary}</tt>&emsp;
        </span>
        <br/>
        <a
          href={`https://twitter.com/${social.twitter}`}
          target="_blank" rel="noopener noreferrer"
        >
          <StaticImage
            fixed={data.twitter.childImageSharp.fixed}
            alt="Follow me on twitter"
            style={{
              marginRight: rhythm(1 / 2),
              minWidth: 32,
              borderRadius: `100%`,
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
          <StaticImage
            fixed={data.facebook.childImageSharp.fixed}
            alt="Follow me on facebook"
            style={{
              marginRight: rhythm(1 / 2),
              minWidth: 32,
              borderRadius: `100%`,
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
