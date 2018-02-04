Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # resources :admin
  get '/admin/(*id)', to: 'admin#index'

  scope '/api', module: 'api', format: :json do
    resources :congregation, :education, :diaken, :baptism, :lingkungan, :gabungan
  end
end