defmodule FinalProject.Events.Event do
  use Ecto.Schema
  import Ecto.Changeset


  schema "events" do
    field :is_open, :boolean, default: false
    field :lng, :float
    field :lat, :float
    field :rating, :float
    field :title, :string
    field :email, :string
    belongs_to :user, FinalProject.Users.User

    timestamps()
  end

  @doc false
  def changeset(event, attrs) do
    event
    |> cast(attrs, [:title, :lng, :lat, :is_open, :rating, :user_id, :email])
    |> validate_required([:title, :lng, :lat, :is_open, :user_id, :email])
  end
end
