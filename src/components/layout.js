import React from "react"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"
import "./layout.css"

const Layout = ({ location, siteName, children }) => {

  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1 className="hero-text">
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {siteName}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3 className="hero-text">
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {siteName}
        </Link>
      </h3>
    )
  }

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        marginTop: 0,
      }}
    >
      <nav
        className="fixed-top"
        style={{
          height: rhythm(1.2), // sync with marginTop of hero-image below
        }}
      >
        {/** Use `a` not `Link` as nav.a has style in css file */}
        <a href="/">{siteName}</a>
      </nav>
      <header
        className="hero-image"
        style={{
          marginTop: rhythm(1.2), // sync with nav above. Prevents content overlap with nav above
          height: rhythm(12.0),
          color: `white`,
        }}
      >{header}</header>
      <main>{children}</main>
      <footer className="full-width"
        style={{
          textAlign: `center`,
        }}
      >
        &copy; {new Date().getFullYear()}
        {` `}
        <a href="http://chinomsoikwuagwu.com/">Chinomso Ikwuagwu</a>
      </footer>
    </div>
  )
}

export default Layout
