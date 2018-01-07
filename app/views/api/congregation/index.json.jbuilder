json.current_page @congregation.current_page
json.next_page @congregation.next_page
json.entries @congregation, partial: 'api/congregation/congregation', as: :congregation