AuthJwtGo.configure do |config|
  config.secret_key_jwt = ENV['JWT_PASSWORD']
  config.class_name_model = 'AuthUser'
end
