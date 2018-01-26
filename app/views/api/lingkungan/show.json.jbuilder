json.cache! ['v1', @lingkungan], expires_in: 1.minutes do
    json.partial! "api/lingkungan/lingkungan", lingkungan: @lingkungan
end