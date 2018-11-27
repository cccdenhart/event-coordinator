defmodule FinalProjectWeb.EventView do
  use FinalProjectWeb, :view

  def render("index.json", %{events: events}) do
    %{
      events: Enum.map(events, &events_json/1)
    }
  end
  
  def events_json(event) do
    %{
       title: event.title,
       lat: event.lat,
       lng: event.lng,
       time: event.time,
       rating: event.rating,
       user: event.user_id
    }
  end
end
