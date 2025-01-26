import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Image from "./image"
import {
  FOLLOW_ON_FACEBOOK, FOLLOW_ON_INSTAGRAM, FOLLOW_ON_LINKEDIN, FOLLOW_ON_REDDIT,
  FOLLOW_ON_TIKTOK, FOLLOW_ON_TWITTER, FOLLOW_ON_YOUTUBE
} from "../utils/i18n";

const SocialImages = () => {
  const data = useStaticQuery(graphql`
    query SocialImageQuery {
      facebook: file(absolutePath: { regex: "/facebook-icon.(jpg|jpeg|png|gif|webp)/" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            width: 48
            height: 48
          )
        }
      }
      instagram: file(absolutePath: { regex: "/instagram-icon.(jpg|jpeg|png|gif|webp)/" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            width: 48
            height: 48
          )
        }
      }
      linkedin: file(absolutePath: { regex: "/linkedin-icon.(jpg|jpeg|png|gif|webp)/" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            width: 48
            height: 48
          )
        }
      }
      reddit: file(absolutePath: { regex: "/reddit-icon.(jpg|jpeg|png|gif|webp)/" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            width: 48
            height: 48
          )
        }
      }
      tiktok: file(absolutePath: { regex: "/tiktok-icon.(jpg|jpeg|png|gif|webp)/" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            width: 48
            height: 48
          )
        }
      }
      twitter: file(absolutePath: { regex: "/twitter-icon.(jpg|jpeg|png|gif|webp)/" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            width: 48
            height: 48
          )
        }
      }
      youtube: file(absolutePath: { regex: "/youtube-icon.(jpg|jpeg|png|gif|webp)/" }) {
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
          social {
            facebook
            instagram
            linkedin
            reddit
            tiktok
            twitter
            youtube
          }
        }
      }
    }
  `)

  const config = {
    tiktok: {
      url: "https://www.tiktok.com",
      alt: FOLLOW_ON_TIKTOK
    },
    twitter: {
      url: "https://twitter.com",
      alt: FOLLOW_ON_TWITTER
    },
    youtube: {
      url: "https://www.youtube.com",
      alt: FOLLOW_ON_YOUTUBE
    },
    reddit: {
      url: "https://www.reddit.com/user",
      alt: FOLLOW_ON_REDDIT
    },
    instagram: {
      url: "https://www.instagram.com",
      alt: FOLLOW_ON_INSTAGRAM
    },
    facebook: {
      url: "https://www.facebook.com",
      alt: FOLLOW_ON_FACEBOOK
    },
    linkedin: {
      url: "https://www.linkedin.com/in",
      alt: FOLLOW_ON_LINKEDIN
    }
  }

  const { social } = data.site.siteMetadata

  const renderImage = key => {

    if (!data[key]) return null

    const url = config[key]?.url

    const href = url && social[key] ? `${url}/${social[key]}` : null

    if (!href) return null

    return (
      <Image href={href}
             image={data[key]?.childImageSharp?.gatsbyImageData}
             alt={config[key]?.alt}/>
    )
  }

  return (Object.keys(config).map(key => renderImage(key)))
}

export default SocialImages