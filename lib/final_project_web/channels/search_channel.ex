defmodule FinalProjectWeb.SearchChannel do
  use FinalProjectWeb, :channel

  alias FinalProject.Backup

  def join("search", _payload, socket) do 
    {:ok, socket}
  end

  def handle_in("searchString", %{"search" => search}, socket) do
    socket = assign(socket, :search, search)
    Backup.backup_state("search", socket.assigns[:search])

    # {:reply, {:ok, %{ "search" => search}}, socket}
    {:noreply, socket}
  end
end