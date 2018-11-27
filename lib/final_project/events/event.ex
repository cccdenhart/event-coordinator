defmodule FinalProject.Events.Event do
  use Ecto.Schema
  import Ecto.Changeset


  schema "events" do
    field :lng, :float
    field :lat, :float
    field :rating, :float
    field :title, :string
    field :time, :string
    belongs_to :user, FinalProject.Users.User

    timestamps()
  end

  @doc false
  def changeset(event, attrs) do
    event
    |> cast(attrs, [:title, :lng, :lat, :time, :rating, :user_id])
    |> validate_required([:title, :lng, :lat, :time, :user_id])
  end
end
