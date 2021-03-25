Rails.application.routes.draw do
  # json api
  namespace :api do
    namespace :v1 do
      # restaurant
      get 'restaurant/index'
      post 'restaurant/create'
      get 'restaurant/images/:id', to: 'restaurant#images'
      get 'restaurant/show/:id', to: 'restaurant#show'
      delete 'restaurant/destroy/:id', to: 'restaurant#destroy'

      get 'comment/show/:id', to: 'comment#show'
      post 'comment/create'
    end
  end

  root :to => 'homepage#index'
  get '/*path' => 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
