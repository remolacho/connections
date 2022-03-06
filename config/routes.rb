Rails.application.routes.draw do
  
  # Swagger routes Here

  # Devise routes here
  
  root to: 'pages#index'

  # API routes here
  namespace :api do
    namespace :v1 do

    end
  end

  get "*path", to: "pages#index", constraints: ->(request) do
    request.format.html? && request.path.exclude?("rails/active_storage")
  end
end
