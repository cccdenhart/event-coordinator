import React from "react";
import ReactDOM from "react-dom";
import _ from "lodash";
import $ from "jquery";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./header.jsx";
import mapboxgl from "mapbox-gl";

/*
 * NOTE: https://github.com/mapbox/mapbox-react-examples referenced for starter
 * Mapbox React code.
 */

mapboxgl.accessToken =
  "pk.eyJ1IjoiY2NjZGVuaGFydCIsImEiOiJjamtzdjNuNHAyMjB4M3B0ZHVoY3l2MndtIn0.jkJIFGPTN7oSkQlHi0xtow";

export default function root_init(node) {
  let prods = window.events;
  ReactDOM.render(<Root events={prods} />, node);
}

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      events: [],
      lng: 5,
      lat: 34,
      zoom: 1.5
    };
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v9",
      center: [lng, lat],
      zoom
    });

    map.on("move", () => {
      const { lng, lat } = map.getCenter();

      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <div>
              <div className="inline-block absolute top left mt12 ml12 bg-darken75 color-white z1 py6 px12 round-full txt-s txt-bold">
                <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>
              </div>
              <div
                ref={el => (this.mapContainer = el)}
                className="absolute top right left bottom"
              />
            </div>
            <Route
              path="/users"
              exact={true}
              render={() => <UserList users={this.state.users} />}
            />
          </div>
        </Router>
      </div>
    );
  }
}