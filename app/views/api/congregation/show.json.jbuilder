json.cache! ['v1', @congregation], expires_in: 1.minutes do
    json.partial! "api/congregation/congregation", congregation: @congregation
    json.baptism do
        if @congregation.baptism.present?
            json.partial! "api/baptism/baptism", baptism: @congregation.baptism
        else
            json.nil!
        end
    end
    json.lingkungan do
        if @congregation.lingkungan.present?
            json.cache! ['congregation_lingkungan', @congregation.lingkungan], expires_in: 1.minutes do
                json.partial! "api/lingkungan/lingkungan", lingkungan: @congregation.lingkungan
            end
        else
            json.nil!
        end
    end
end