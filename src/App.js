import React, { Component } from "react";
import Videos from "./components/videos";
import SearchBar from "./components/search_bar";

export const VIDEO_URL = "http://localhost:5000";

class App extends Component {
  state = {
    videos: [],
  };
  constructor() {
    super();
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }
  componentDidMount() {
    fetch(VIDEO_URL + "/videos")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ videos: data });
      })
      .catch(console.log);
  }

  onSearchHandler(e, title = "") {
    e.preventDefault();
    // this.onSearch(title);
    fetch(VIDEO_URL + "/videos/search?title=" + title)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ videos: data });
      })
      .catch(console.log);
  }

  render() {
    return (
      <div className="container">
        <SearchBar onSearchHandler={this.onSearchHandler} />
        <Videos videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
