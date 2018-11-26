defmodule FinalProject.Repo.Migrations.CreateEvents do
  use Ecto.Migration

  def change do
    create table(:events) do
      add :title, :string, null: false
      add :lng, :float, null: false
      add :lat, :float, null: false
      add :is_open, :boolean, default: false, null: false
      add :rating, :float
      add :email, :string, null: false
      add :user_id, references(:users, on_delete: :delete_all), null: false

      timestamps()
    end

  end
end
