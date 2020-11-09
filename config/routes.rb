Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/eagues', to: "homes#index"
  get '/leagues/:id', to: "homes#index"


  namespace :api do
    namespace :v1 do
      resources :leagues, only: [:index, :show]
    end
  end
end
