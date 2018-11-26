defmodule FinalProject.Events.Event do
  use Ecto.Schema
  import Ecto.Changeset


  schema "events" do
    field :is_open, :boolean, default: false
    field :location, :string
    field :rating, :float
    field :title, :string

    timestamps()
  end

  @doc false
  def changeset(event, attrs) do
    event
    |> cast(attrs, [:title, :location, :is_open, :rating])
    |> validate_required([:title, :location, :is_open, :rating])
  end
end
