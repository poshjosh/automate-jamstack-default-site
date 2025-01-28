import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

import { getLanguageOptions } from "../utils/i18n"
import { useLanguageCode } from "../utils/react-hooks"

const LanguageOptions = () => {
  const data = useStaticQuery(graphql`
    query LanguageOptionsQuery {
      site {
        siteMetadata {
          supportedLanguageCodes
        }
      }
    }
  `)

  const { supportedLanguageCodes } = data.site.siteMetadata

  const VALUE_KEY = 'value'
  const LABEL_KEY = 'label'

  const options = getLanguageOptions(
    supportedLanguageCodes ? supportedLanguageCodes.split(',') : [],
    VALUE_KEY, LABEL_KEY)

  const inferredLang = useLanguageCode()
  const [selectedLang, setSelectedLang] = useState("")

  const handleLanguageChange = (event) => {
    event.preventDefault();
    window.location.href = `/?lang=${event.target.value}`
  }

  useEffect(() => {
    if (inferredLang !== selectedLang) {
      setSelectedLang(inferredLang)
    }
  }, [inferredLang, selectedLang]);


  return ((!options || options.length < 2) ? null :
    <select value={selectedLang} onChange={handleLanguageChange}>
      <option value="" disabled={true}>Choose language</option>
      {options.map(option => {
        return (
          <option key={option[VALUE_KEY]} value={option[VALUE_KEY]}>{option[LABEL_KEY]}</option>
        )
      })}
    </select>
  )
}

export default LanguageOptions