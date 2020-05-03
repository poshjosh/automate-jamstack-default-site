import React from "react"

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
//    console.log("SearchForm props.show: " + props.show);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    window.location.href = '/search?q=' + this.state.value
  }

  render() {
    return (this.props.show === true) && (
      <form
        onSubmit={this.handleSubmit}>
        <label>
          <input
            id="search-form_search-box"
            className="searchInput"
            type="text"
            value={this.state.value}
            placeholder="Type to search..."
            onChange={this.handleChange} />
        </label>
        <input
          type="submit"
          value="Search"
        />
      </form>
    );
  }
}

export default SearchForm
