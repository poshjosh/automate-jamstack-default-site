import React, { useEffect, useState } from "react"

import { getLanguageOptions } from "../utils/i18n"
import { useLanguageCode } from "../utils/react-hooks"

const LanguageOptions = () => {

  const VALUE_KEY = 'value'
  const LABEL_KEY = 'label'

  const options = getLanguageOptions(VALUE_KEY, LABEL_KEY)

  const inferredLang = useLanguageCode()
  const [selectedLang, setSelectedLang] = useState("")

  const handleLanguageChange = (event) => {
    event.preventDefault();
    window.location.href = `/?lang=${event.target.value}`
  }

  useEffect(() => {
    setSelectedLang(inferredLang)
  }, [inferredLang]);


  return (
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