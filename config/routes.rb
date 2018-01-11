Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :admin

  scope '/api', module: 'api', format: :json do
    resources :congregation, :education, :diaken, :baptism
  end
end