defmodule FinalProject.Repo do
  use Ecto.Repo,
    otp_app: :final_project,
    adapter: Ecto.Adapters.Postgres
end
