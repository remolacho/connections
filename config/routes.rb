require 'sidekiq/web'

Rails.application.routes.draw do
  mount Sidekiq::Web => '/sidekiq'
  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'

  root to: 'pages#index'

  # API routes here
  namespace :api, path: '' do
    namespace :v1 do
      resources :test, only: [:index]

      namespace :users do
        resources :sign_in, path: 'signIn', only: [:create]
        resources :recover_password, path: 'recover-password', only: [:create]
        resources :change_password, path: 'change-password', only: [:create]
        resources :sign_up, path: 'signUp', only: [:create]
        resources :confirmation, only: [:create]
      end

      namespace :addresses do
        namespace :countries do
          resources :list, only: [:index]
        end
      end

      namespace :sms do
        resources :validations, only: [] do
          collection do
            get :balance
            get :outgoing
          end
        end

        resources :msg_templates, only: [:index]
        resources :send_individual, only: [:create]
        resources :send_bulk, only: [:create]
        resources :incoming, only: [:index, :show] do
          get :download_report, on: :collection
        end
      end

      namespace :accounts, path: '' do
        resources :numbers, only: [:index]
      end
    end
  end

  get "*path", to: "pages#index", constraints: ->(request) do
    request.format.html? && request.path.exclude?("rails/active_storage")
  end
end
