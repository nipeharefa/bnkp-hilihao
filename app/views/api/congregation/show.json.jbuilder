json.cache! ['v1', @congregation], expires_in: 1.minutes do
    json.partial! "api/congregation/congregation", congregation: @congregation
    json.baptism do
        if @congregation.baptism.present?
            json.partial! "api/baptism/baptism", baptism: @congregation.baptism
        else
            json.nil!
        end
    end
end