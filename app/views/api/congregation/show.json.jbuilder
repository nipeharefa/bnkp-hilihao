json.cache! ['v1', @congregation], expires_in: 1.minutes do
    json.partial! "api/congregation/congregation", congregation: @congregation
    # json.baptism partial: "api/baptism/baptism", baptism: @congregation.baptism
    json.baptism @congregation.baptism, partial: 'api/baptism/baptism', as: :baptism
end