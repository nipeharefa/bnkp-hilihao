json.extract! congregation, :id, :name, :gender,
:place_of_birth, :date_of_birth, :created_at, :updated_at
json.url congregation_url(congregation.id, format: :json)