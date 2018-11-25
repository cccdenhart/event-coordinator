defmodule FinalProjectWeb.PageController do
  use FinalProjectWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end

  def sign_in(conn, _params) do
    render conn, "sign_in.html"
  end
end
