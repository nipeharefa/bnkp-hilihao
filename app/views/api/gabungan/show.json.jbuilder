json.cache! ['v1', @gabungan], expires_in: 1.minutes do
    json.partial! "api/gabungan/gabungan", gabungan: @gabungan
end