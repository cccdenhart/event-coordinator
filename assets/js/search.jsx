import React from "react";
import ReactDOM from "react-dom";
import _ from "lodash";

export default function search_init(node, channel) {
  ReactDOM.render(<Search channel={channel} />, node);
}

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.channel = props.channel;
    this.state = {
      keyword: "", 
      time: ""
    };

    this.channel
      .join()
      .receive("ok", resp => {
        console.log("Joined channel", resp);
      })
      .receive("error", resp => {
        console.log("Unable to join", resp);
      });
  }

  handleKeywordChange(e) {
    this.setState({ keyword: e.target.value });
  }

  handleTimeChange(e) {
    this.setState({ time: e.target.value });
  }

  handleSubmit() {
    console.log(this.state.keyword);
    this.channel.push("searchString", { search: this.state.keyword, time: this.state.time });
  }

  render() {
    return (
      <form>
        <input
          className="form-control"
          type="text"
          placeholder="Search"
          aria-label="Search"
          onChange={this.handleKeywordChange.bind(this)}
        />

        <input
          className="form-control"
          type="text"
          placeholder="Time for event"
          aria-label="Time for event"
          onChange={this.handleTimeChange.bind(this)}
        />

        <a
          type="button"
          href="/events/new"
          className="btn btn-block btn-success"
          onClick={this.handleSubmit.bind(this)}
        >
          Search
        </a>
      </form>
    );
  }
}
