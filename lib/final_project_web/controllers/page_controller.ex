defmodule FinalProjectWeb.PageController do
  use FinalProjectWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
