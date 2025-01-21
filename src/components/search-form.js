import React from "react"

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    var query;
    if(this.state.value) {
      query = this.state.value;
    }else{
      query = document.getElementById('search-form_search-box').value;
    }
    window.location.href = '/search/?q=' + query;
  }

  render() {
    return (this.props.show === true) && (
      <form
        style={{
          float: `right`,
          display: `inline-block`,
          margin: `0`,
          border: `0`,
          padding: `0`,
        }}
        onSubmit={this.handleSubmit}>
        <input
          id="search-form_search-box"
          className="searchInput"
          type="text"
          value={this.state.value}
          placeholder="Type to search..."
          onChange={this.handleChange}/>
        <input className="emphasis-button"
               type="submit"
               value="Search"
        />
      </form>
    );
  }
}

export default SearchForm
