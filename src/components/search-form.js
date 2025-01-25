import React, {useState} from "react"
import { useTranslate } from "../utils/react-hooks"
import "./search-form.css"

const SearchForm = ({ show }) => {

  const [value, setValue] = useState('')

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    window.location.href = '/search/?q=' + value;
  }

  const placeholder = useTranslate('search_prompt');
  const buttonValue = useTranslate('search');

  return (show === true) && (
    <form id="search-form" onSubmit={handleSubmit}>
      <input
        id="search-form_search-box"
        className="searchInput"
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
