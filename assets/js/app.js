// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
import css from "../css/app.scss";

// webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import dependencies
//
import "phoenix_html";
import jQuery from "jquery";
window.jQuery = window.$ = jQuery; // Bootstrap requires a global "$" object.
import "bootstrap";

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

// import socket and root_init from "./root"
import { Socket } from "phoenix";
import root_init from "./root";
import search_init from "./search";

$(() => {
  let node = $("#root")[0];
  let socket = new Socket("/socket", { params: { token: window.userToken } });
  socket.connect();
  let channel = socket.channel("games:" + window.gameName, {});
  root_init(node, channel);
});

$(() => {
  let node = $("#search")[0];
  search_init(node);
});
