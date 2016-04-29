require 'sinatra'
require 'net/http'

set :public_folder, "../dist"

KEY = ENV['KEY']
get "/baqi/" do
  uri = URI('https://api.breezometer.com/baqi/?' + request.query_string + "&key=#{KEY}")
  http = Net::HTTP.new(uri.host, uri.port)
  http.use_ssl = true
  http.verify_mode = OpenSSL::SSL::VERIFY_NONE
  response = http.request(Net::HTTP::Get.new(uri.request_uri))

  response.body
  # add error handling
  # control for bad data
    # set defaults for properties
end

get "/" do
  send_file "#{__dir__}/../dist/index.html"
end

# get "/index_bundle.js" do
#   send_file "#{__dir__}/../dist/index_bundle.js"
# end
