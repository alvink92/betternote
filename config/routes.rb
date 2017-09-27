Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:new, :show, :create] # dont need new

    resource :session, only: [:new, :create, :destroy]

    resources :notes, only: [:index, :create, :update, :show, :destroy]

    resources :notebooks, only: [:index, :create, :update, :show, :destroy] do
      resources :notes, only: [:index]
    end

    resources :tags, only: [:index, :create, :update, :show, :destroy] do
      resources :notes, only: [:index]
    end

    resources :taggings, only: [:create]
    delete 'taggings', :to => 'taggings#destroy'
  end
end
