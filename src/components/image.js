import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { rhythm } from "../utils/typography"
import { useDir, useLanguageCode } from "../utils/react-hooks";

const Image = ({ href, image, alt }) => {

  const dir = useDir(useLanguageCode())

  if (!image) return null

  const style = dir === "ltr" ? { marginRight: rhythm(1 / 2) } : { marginLeft: rhythm(1 / 2) }

  const renderImage = () => {
    return <GatsbyImage
      image={image}
      alt={alt}
      style={{
        ...style,
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