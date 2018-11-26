defmodule FinalProjectWeb.SearchChannel do
  use FinalProjectWeb, :channel

  def join("search", payload, socket) do 
    {:ok, socket}
  end

  def handle_in("searchString", %{"search" => search}, socket) do

  end
end