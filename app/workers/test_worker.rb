class TestWorker < BaseWorker
  sidekiq_options retry: true, queue: :default

  def perform
    puts '################# se crea job de prueba'
  end
end
