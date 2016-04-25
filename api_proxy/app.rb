require 'sinatra'
require 'net/http'

KEY = ENV['KEY']
get "/baqi/" do
  p request.query_string
  uri = URI('https://api.breezometer.com/baqi/?' + request.query_string + "&key=#{KEY}")
  p uri
  http = Net::HTTP.new(uri.host, uri.port)
  http.use_ssl = true
  http.verify_mode = OpenSSL::SSL::VERIFY_NONE
  response = http.request(Net::HTTP::Get.new(uri.request_uri))

  response.body


end
