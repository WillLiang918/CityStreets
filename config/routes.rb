Rails.application.routes.draw do

  root "static_pages#root"
  get "/result" => "static_pages#result", as: :result

  namespace :api, defaults: {format: :json} do
    resources :properties, only: [:create, :destroy, :index, :update]
    resources :photos, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy, :show]
  end

  namespace :api do
    resources :properties, only: :show
  end

  resources :users, only: [:create, :new, :show]
  resource :session, only: [:create, :new, :destroy]
end
