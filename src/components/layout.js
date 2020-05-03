import React from "react"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"
import SearchForm from "../components/search-form"
import "./layout.css"

const Layout = ({ location, title, children, showSearchForm }) => {

//  console.log('Show search form: ' + showSearchForm)

  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1 className="heroText">
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
      <h3 className="heroText">
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
      <header
        className="heroImage"
        style={{
          height: rhythm(12.0),
          color: `white`,
        }}
      >{header}</header>
      <SearchForm show={showSearchForm}/>
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
