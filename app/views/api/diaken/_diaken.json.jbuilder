json.extract! diaken, :id
json.congregation diaken.congregation, partial: 'api/congregation/congregation', as: :congregation
json.url diaken_url(diaken.id, format: :json)