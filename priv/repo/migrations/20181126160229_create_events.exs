defmodule FinalProject.Repo.Migrations.CreateEvents do
  use Ecto.Migration

  def change do
    create table(:events) do
      add :title, :string, null: false
      add :lng, :float, null: false
      add :lat, :float, null: false
      add :time, :string
      add :rating, :float
      add :user_id, references(:users, on_delete: :delete_all), null: false

      timestamps()
    end

  end
end
