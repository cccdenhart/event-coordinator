import React from "react";
import ReactDOM from "react-dom";
import _ from "lodash";
import $ from "jquery";

export default function search_init(node, channel) {
  ReactDOM.render(<Search channel={channel} />, node);
}

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.channel = props.channel;

    this.state = {
      keyword: ""
    };

    this.channel
      .join()
      .receive("ok", this.receiveView.bind(this))
      .receive("error", resp => {
        console.log("Unable to join", resp);
      });

    this.channel.on("update", this.receiveView.bind(this));
  }

  receiveView(view) {
    this.setState({ events: view.events });
  }

  handleSubmit() {}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="form-control"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        <input
          className="btn btn-block btn-success "
          type="submit"
          placeholder="Submit"
        />
      </form>
    );
  }
}
