Rails.application.routes.draw do
  root to: 'static#home'
  get 'static/home'

  devise_for :admins

  namespace :admin do
    root to: 'surveys#index' # temporary root
        resources :questions do
          resources :answers do
            resources :given_answers
          end
        end
    resources :surveys
  end

  resources :questions
  resources :given_answers
end
