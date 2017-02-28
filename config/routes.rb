Rails.application.routes.draw do
  devise_for :admins

  namespace :admin do
    root to: 'questions#index' # temporary root
      resources :questions do
        resources :answers
    end
  end
end
