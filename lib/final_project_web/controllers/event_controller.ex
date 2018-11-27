defmodule FinalProjectWeb.EventController do
  use FinalProjectWeb, :controller

  alias FinalProject.Events
  alias FinalProject.Events.Event
  alias FinalProject.Users
  alias FinalProject.Repo
  import Ecto.Query
  alias FinalProject.Backup

  alias FinalProject.Api

  def index(conn, _params) do
    events = Repo.all(Event)
    render conn, "index.json", events: events
  end

  def new(conn, _params) do
    search = Backup.get_backup("search") || ""
    cur_user = :user_id
    url = "https://api.yelp.com/v3/businesses/search"
    options = [params: [sort_by: "distance", longitude: -71.0892, latitude: 42.3398, term: search]]
    response = Api.get(url, options)
    changeset = Events.change_event(%Event{})
    render(conn, "new.html", changeset: changeset, cur_user: cur_user, view_events: Api.decode(response))
  end

  def create(conn, %{"event" => event_params}) do
    cur_user = Users.get_user!(get_session(conn, :user_id))
    url = "https://api.yelp.com/v3/businesses/search"
    options = [params: [sort_by: "distance", longitude: -71.0892, latitude: 42.3398]]
    response = Api.get(url, options)
    case Events.create_event(event_params) do
      {:ok, event} ->
        conn
        |> put_flash(:info, "Event created successfully.")
        |> redirect(to: Routes.event_path(conn, :show, event))

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "new.html", changeset: changeset, cur_user: cur_user, view_events: Api.decode(response))
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
