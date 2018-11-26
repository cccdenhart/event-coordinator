defmodule FinalProject.Repo.Migrations.CreateEvents do
  use Ecto.Migration

  def change do
    create table(:events) do
      add :title, :string
      add :location, :string
      add :is_open, :boolean, default: false, null: false
      add :rating, :float

      timestamps()
    end

  end
end
