Rails.application.routes.draw do
  # json api
  namespace :api do
    namespace :v1 do
      get 'restaurant/index'
      post 'restaurant/create'
      get 'restaurant/show/:id', to: 'restaurant#show'
      delete 'restaurant/destroy/:id', to: 'restaurant#destroy'
    end
  end

  root :to => 'homepage#index'
  get '/*path' => 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
