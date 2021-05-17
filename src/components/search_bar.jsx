import React from "react";

class SearchBar extends React.Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }

  state = {
    title: "",
  };
  onChange(value) {
    this.setState({
      title: value.target.value,
    });
  }
  render() {
    const { onSearchHandler } = this.props;
    return (
      <form
        id="search_form"
        className="form-inline"
        onSubmit={(e) => onSearchHandler(e, this.state.title)}
      >
        <input
          className="form-control"
          type="search"
          id="search_value"
          placeholder="Search"
          onChange={this.onChange}
        />
        <button
          className="btn btn-outline-success"
          id="search_button"
          type="submit"
        >
          Search
        </button>
      </form>
    );
  }
}

export default SearchBar;
