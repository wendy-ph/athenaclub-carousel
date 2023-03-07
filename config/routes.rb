Rails.application.routes.draw do
  # root to: "pages#home"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")

  # resources :products, only: [ :index ]

  get 'index', to: 'products#index'

  root "products#index"
end
