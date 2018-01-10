json.cache! ['v1', @congregation], expires_in: 1.minutes do
    json.partial! "api/congregation/congregation", congregation: @congregation
end