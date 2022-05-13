if Rails.env.test?
  require 'sidekiq/testing'
  Sidekiq::Testing.inline!
end

Sidekiq.configure_client do |config|
  config.redis = { url: ENV['REDIS_URL'], size: 8, network_timeout: 5 }
end

Sidekiq.configure_server do |config|
  config.redis = { url: ENV['REDIS_URL'], size: 8, network_timeout: 5 }
end