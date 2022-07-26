Rails.application.routes.draw do
  get 'home/index'
  resources :sharks do
    resources :posts
  end
  # Defines the root path route ("/")
  root 'home#index'
end
