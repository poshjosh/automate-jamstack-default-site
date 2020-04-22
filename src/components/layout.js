import React from "react"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"
import "./layout.css"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1 class="heroText">
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3 class="heroText">
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
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
      <header class="heroImage"
        style={{
          height: rhythm(12.0),
          color: `white`,
        }}
      >{header}</header>
      <main>{children}</main>
      <footer>
        &copy; {new Date().getFullYear()}
        {` `}
        <a href="http://www.looseboxes.com/legal/licenses/software.html">looseBoxes.com</a>
      </footer>
    </div>
  )
}

export default Layout
