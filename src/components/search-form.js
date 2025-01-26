import React, { useState } from "react"
import { useLanguageCode, useTranslate } from "../utils/react-hooks"
import { SEARCH, SEARCH_PROMPT } from "../utils/i18n"
import "./search-form.css"

const SearchForm = ({ show }) => {

  const lang = useLanguageCode()

  const [value, setValue] = useState('')

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    window.location.href = `/search/?lang=${lang}&q=${value}`;
  }

  const placeholder = useTranslate(SEARCH_PROMPT);
  const buttonValue = useTranslate(SEARCH);

  return (show === true) && (
    <form id="search-form" onSubmit={handleSubmit}>
      <input
        id="search-form_search-box"
        className="search-input"
        type="text"
        value={value}
        aria-label="Search"
        placeholder={placeholder}
        onChange={handleChange}/>
      <input className="emphasis-button" type="submit" value={buttonValue}/>
    </form>
  );
}

export default SearchForm
