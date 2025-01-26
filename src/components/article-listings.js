import React from "react"
import ArticleListing from "./article-listing"
import { useNodeFilter } from "../utils/react-hooks"

const ArticleListings = ({ posts }) => {
  const nodeFilter = useNodeFilter()
  return (
    posts.map((post, index) => {
      return nodeFilter(post.node) ? <ArticleListing key={index} node={post.node}/> : null
    })
  )
}

export default ArticleListings