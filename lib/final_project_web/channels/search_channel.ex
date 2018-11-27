defmodule FinalProjectWeb.SearchChannel do
  use FinalProjectWeb, :channel

  alias FinalProject.Backup

  def join("search", _payload, socket) do 
    {:ok, socket}
  end

  def handle_in("searchString", %{"search" => search, "time" => time}, socket) do
    socket = assign(socket, :search, search)
    socket = assign(socket, :time, time)
    Backup.backup_state("search", socket.assigns[:search])
    Backup.backup_state("time", socket.assigns[:time])

    # {:reply, {:ok, %{ "search" => search}}, socket}
    {:noreply, socket}
  end
end