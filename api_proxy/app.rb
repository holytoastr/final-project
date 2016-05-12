require 'sinatra'
require 'net/http'
require 'json'

set :public_folder, "../dist"

KEY = ENV['KEY']
get "/baqi/" do
  uri = URI('https://api.breezometer.com/baqi/?' + request.query_string + "&key=#{KEY}")
  http = Net::HTTP.new(uri.host, uri.port)
  http.use_ssl = true
  http.verify_mode = OpenSSL::SSL::VERIFY_NONE
  response = http.request(Net::HTTP::Get.new(uri.request_uri))

  data = JSON.parse(response.body)

  if data["data_valid"]
    return response.body
  else
    default = {
      "country_name": "",
      "breezometer_aqi": 0,
      "breezometer_color": "#FFFFFF",
      "breezometer_description": "Air Quality Report Not Found",
      "country_aqi": 0,
      "country_aqi_prefix": "",
      "country_color": "#FFFFFF",
      "country_description": "Air Quality Report Not Found",
      "data_valid": true,
      "key_valid": true,
      "random_recommendations": {
        "children": "",
        "sport": "",
        "health": "",
        "inside": "",
        "outside": ""
      },
      "dominant_pollutant_canonical_name": "No Air Quality Reports Found",
      "dominant_pollutant_description": "",
      "dominant_pollutant_text": {
        "main": "",
        "effects": "",
        "causes": ""
      }
    }
    return JSON.generate(default)
  end

end

get "/" do
  send_file "#{__dir__}/../dist/index.html"
end

# get "/index_bundle.js" do
#   send_file "#{__dir__}/../dist/index_bundle.js"
# end
