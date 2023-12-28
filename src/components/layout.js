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
      <nav
        className="fixedtop"
        style={{
          height: rhythm(1.2), // sync with marginTop of heroImage below
        }}
      >
        {/** Use `a` not `Link` as nav.a has style in css file */}
        <a href="/">{title}</a>
        <SearchForm id="layout_search-form-container" show={showSearchForm}/>
      </nav>
      <header
        className="heroImage"
        style={{
          marginTop: rhythm(1.2), // sync with nav above. Prevents content overlap with nav above
          height: rhythm(12.0),
          color: `white`,
        }}
      >{header}</header>
      <main>{children}</main>
      <footer className="fullWidth"
        style={{
          textAlign: `center`,
        }}
      >
        &copy; {new Date().getFullYear()}
        {` `}
        <a href="http://www.looseboxes.com/legal/licenses/software.html">looseBoxes.com</a>
      </footer>
    </div>
  )
}

export default Layout
