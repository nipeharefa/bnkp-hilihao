json.extract! baptism, :id, :baptism_number, :pastor, :church_name, :baptism_at
json.url baptism_url(baptism.id, format: :json)