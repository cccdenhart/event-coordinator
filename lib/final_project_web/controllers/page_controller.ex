defmodule FinalProjectWeb.PageController do
  use FinalProjectWeb, :controller

  alias FinalProject.Api

  def index(conn, _params) do
    render conn, "index.html"
  end

  def sign_in(conn, _params) do
    render conn, "sign_in.html"
  end

  def events(conn, _params) do
    url = "https://api.yelp.com/v3/businesses/search"
    options = [params: [sort_by: "distance", longitude: -71.0892, latitude: 42.3398]]
    response = Api.get(url, options)
    render(conn, "events.html", events: Api.decode(response))
  end
end
