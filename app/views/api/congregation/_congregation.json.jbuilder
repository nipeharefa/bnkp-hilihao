json.extract! congregation, :id, :name, :gender,
:place_of_birth, :created_at, :updated_at
json.url congregation_url(congregation.id, format: :json)
json.date_of_birth congregation.date_of_birth.strftime("%d-%m-%Y")