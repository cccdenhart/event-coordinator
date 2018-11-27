defmodule FinalProjectWeb.EventController do
  use FinalProjectWeb, :controller

  alias FinalProject.Events
  alias FinalProject.Events.Event
  alias FinalProject.Users
  alias FinalProject.Repo

  alias FinalProject.Api

  def index(conn, _params) do
    events = Events.list_events()
    render(conn, "index.html", events: events)
  end

  def add_event(conn, event) do
    IO.inspect("title:")
    IO.inspect(event[:title])
    Repo.insert(%Event{title: event[:title], lat: event[:lat], lng: event[:lng], rating: event[:rating], time: event[:time], user_id: event[:user]})# lng: lng, lat: lat, rating: rat, time: time, user_id: user})
    render(conn, "index.html")
  end

  def new(conn, _params) do
    cur_user = Users.get_user!(get_session(conn, :user_id))
    url = "https://api.yelp.com/v3/businesses/search"
    options = [params: [sort_by: "distance", longitude: -71.0892, latitude: 42.3398]]
    response = Api.get(url, options)
    changeset = Events.change_event(%Event{})
    render(conn, "new.html", changeset: changeset, cur_user: cur_user, view_events: Api.decode(response))
  end

  def create(conn, %{"event" => event_params}) do
    case Events.create_event(event_params) do
      {:ok, event} ->
        conn
        |> put_flash(:info, "Event created successfully.")
        |> redirect(to: Routes.event_path(conn, :show, event))

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "new.html", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    event = Events.get_event!(id)
    render(conn, "show.html", event: event)
  end

  def edit(conn, %{"id" => id}) do
    event = Events.get_event!(id)
    changeset = Events.change_event(event)
    render(conn, "edit.html", event: event, changeset: changeset)
  end

  def update(conn, %{"id" => id, "event" => event_params}) do
    event = Events.get_event!(id)

    case Events.update_event(event, event_params) do
      {:ok, event} ->
        conn
        |> put_flash(:info, "Event updated successfully.")
        |> redirect(to: Routes.event_path(conn, :show, event))

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "edit.html", event: event, changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    event = Events.get_event!(id)
    {:ok, _event} = Events.delete_event(event)

    conn
    |> put_flash(:info, "Event deleted successfully.")
    |> redirect(to: Routes.event_path(conn, :index))
  end
end
