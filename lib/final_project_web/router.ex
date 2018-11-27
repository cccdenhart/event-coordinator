defmodule FinalProjectWeb.Router do
  use FinalProjectWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
    plug FinalProjectWeb.Plugs.FetchSession
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", FinalProjectWeb do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
    resources "/users", UserController
    resources "/sessions", SessionController, only: [:create, :delete], singleton: true
    resources "/events", EventController
    get "/add_event", EventController, :add_event
  end

  # Other scopes may use custom stacks.
  # scope "/api", FinalProjectWeb do
  #   pipe_through :api
  # end
end
