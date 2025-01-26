import React from "react"
import Bio from "./bio"
import Layout from "./layout"
import SearchForm from "./search-form"
import SideSection from "./side-section"
import "./layout.css"

const Page = ({ location, siteName, showBio, showSearchForm, showSideSection, children }) => {

  return (
    <Layout location={location} siteName={siteName}>
      {showBio ? <Bio/> : null}
      <div id="page-container" className="container">
        <div className="side-section"></div>
        <div id="page-container-center" className="container-center">
          {showSearchForm
            ? <><SearchForm id="layout_search-form-container" show={showSearchForm}/><br/></>
            : null
          }
          <main>{children}</main>
        </div>
        <div className="side-section">
          {showSideSection ? <SideSection/> : null}
        </div>
      </div>
    </Layout>
  )
}

export default Page
