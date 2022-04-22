Rails.application.routes.draw do
  # authenticate_or_request_with_http_basic do |user, password|
  #  user == ENV["USER_DOC"] && password == ENV["PASS_DOC"]

    mount Rswag::Ui::Engine => '/api-docs'
    mount Rswag::Api::Engine => '/api-docs'
  # end

  # Swagger routes Here

  # Devise routes here
  
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
          end
        end

        resources :msg_templates, only: [:index]
      end

    end
  end

  get "*path", to: "pages#index", constraints: ->(request) do
    request.format.html? && request.path.exclude?("rails/active_storage")
  end
end
