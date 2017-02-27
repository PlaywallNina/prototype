Rails.application.routes.draw do
  devise_for :admins

  namespace :admin do
    resources :surveys do
      resources :questions do
        resources :answers
      end
    end
  end
end
