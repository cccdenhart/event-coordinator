defmodule FinalProjectWeb.SearchChannel do
  use FinalProjectWeb, :channel

  def join("search", _payload, socket) do 
    {:ok, socket}
  end

  def handle_in("searchString", %{"search" => search}, socket) do
    socket = assign(socket, :search, search)
    IO.puts(inspect(socket.assigns[:search]))
    {:noreply, socket}
  end
end