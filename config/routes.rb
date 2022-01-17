Rails.application.routes.draw do
  root to: 'pages#index'

  get "*path", to: "pages#index", constraints: ->(request) do
    request.format.html? && request.path.exclude?("rails/active_storage")
  end
end
