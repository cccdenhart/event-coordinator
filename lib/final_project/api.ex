defmodule FinalProject.Api do

  def get(url, options) do
    # options = [params: [sort_by: "distance", longitude: -75.145101, latitude: 39.54364]]
    # url = "https://api.yelp.com/v3/businesses/search"
    token = "fXCZKf7gYoC_dZmRgvfYqGAxIXBme1wLaXDVYVq_M3TsV83_ZKnsvrSIvFZzEjePQ2gdD7I_wcAjw6sw0TYtJipW23yH_7WWFd-bRzU0mPDcx4X-R9vTz-o1knT7W3Yx"
    headers = ["Authorization": "Bearer #{token}", "Accept": "Application/json; Charset=utf-8"]
    HTTPoison.get(url, headers, options)
  end

  def decode(response) do
    {_, json_data} = response
    {_, result} = Poison.decode(json_data.body, keys: :atoms)
    result
  end
end