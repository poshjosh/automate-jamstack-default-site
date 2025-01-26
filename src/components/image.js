import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { rhythm } from "../utils/typography"

const Image = ({ href, image, alt }) => {

  if (!image) return null

  const renderImage = () => {
    return <GatsbyImage
      image={image}
      alt={alt}
      style={{
        marginRight: rhythm(1 / 2),
        minWidth: 48,
        borderRadius: `100%`,
        display: `inline-block`,
      }}
      imgStyle={{ borderRadius: `50%` }}
    />
  }

  return (href
      ? <a href={href} target="_blank" rel="noopener noreferrer">{renderImage()}</a>
      : renderImage()
  )
}

export default Image