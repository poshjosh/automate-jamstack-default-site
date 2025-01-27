import React from "react"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"

const ArticleListing = ({ node }) => (
  <article key={node.fields.slug} style={{ marginBottom: rhythm(6 / 4) }}>
    <header>
      <div style={{ marginBottom: rhythm(1 / 4) }}>
        <Link style={{boxShadow: `none`}} to={node.fields.slug}>
          {node.frontmatter.title || node.fields.slug}
        </Link>
      </div>
      <small>
        {node.frontmatter.date} | {node.frontmatter.description || node.excerpt}...
      </small>
    </header>
  </article>
)

export default ArticleListing