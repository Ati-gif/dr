  
Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  root "doctors#index"

  resources :doctors do
    resources :patients 
  end

  resources :patients do
    resources :appointments
  end

  get '/all', to:'doctors#all'

  get '/tacos', to:'doctors#tacos'
end
