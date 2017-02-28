Rails.application.routes.draw do
  root to: 'static#home'
  get 'static/home'

  devise_for :admins

  namespace :admin do
    root to: 'questions#index' # temporary root
      resources :questions do
        resources :answers
    end
  end

  resources :questions
end
