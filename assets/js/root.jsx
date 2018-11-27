import React from "react";
import ReactDOM from "react-dom";
import _ from "lodash";
import $ from "jquery";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import Sidenav from "./sidenav";
import mapboxgl from "mapbox-gl";

/*
 * NOTE: https://github.com/mapbox/mapbox-react-examples referenced for starter
 * Mapbox React code.
 */

mapboxgl.accessToken =
  "pk.eyJ1IjoiY2NjZGVuaGFydCIsImEiOiJjamtzdjNuNHAyMjB4M3B0ZHVoY3l2MndtIn0.jkJIFGPTN7oSkQlHi0xtow";

export default function root_init(node) {
  ReactDOM.render(<Root />, node);
}

class Root extends React.Component {
  constructor(props) {
    super(props);

    // this.channel = props.channel;

    this.state = {
      events: [],
      lng: -71.073329,
      lat: 42.352738,
      zoom: 12
    };

    // this.channel
    //   .join()
    //   .receive("ok", this.receiveView.bind(this))
    //   .receive("error", resp => {
    //     console.log("Unable to join", resp);
    //   });

    //this.channel.on("update", this.receiveView.bind(this));
  }

  // receiveView(view) {
  //   this.setState({ events: view.events });
  // }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v9",
      center: [lng, lat],
      zoom
    });

    map.on("load", () => {
      var marker = new mapboxgl.Marker()
        .setLngLat([-71.073329, 42.352738])
        .addTo(map);
      for (e in this.state.events) {
        var marker = new mapboxgl.Marker().setLngLat([e.lng, e.lat]).addTo(map);
      }
    });

    map.on("click", () => {
      var popup = new mapboxgl.Popup({ offset: [0, -15] })
        .setLngLat([-71.073329, 42.352738])
        .setHTML("<h3>Event1</h3><p>Starting at 5pm!</p>")
        .setLngLat([-71.073329, 42.352738])
        .addTo(map);
      for (e in this.state.events) {
        var popup = new mapboxgl.Popup({ offset: [0, -15] })
          .setLngLat([e.lng, e.lat])
          .setHTML("<h3>" + e.title + "</h3>")
          .addTo(map);
      }
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
    const { lng, lat, zoom } = this.state;

    return (
      <div>
        <div>
          <div className="inline-block absolute top right mt12 ml12 bg-darken75 color-white z1 py6 px12 round-full txt-s txt-bold">
            <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>
          </div>
          <div
            ref={el => (this.mapContainer = el)}
            className="absolute top right left bottom"
          />
        </div>
        <Sidenav root={this} />
      </div>
    );
  }
}
