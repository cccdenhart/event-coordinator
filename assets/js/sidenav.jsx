import React from "react";
import ReactDOM from "react-dom";
import _ from "lodash";
import $ from "jquery";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

// NOTE: used sidebar start code from https://coreui.io/docs/components/sidebar/

export default function Sidenav(props) {
  let { root } = props;
  return (
    <div className="sidenav">
      <div className="core">
        <h1>
          <a href="/">Event Coordinator</a>
        </h1>
        <a href="#">Add Event</a>
        <a href="#">Add Itinerary</a>
        <a href="#">View Events</a>
      </div>
    </div>
  );
}
