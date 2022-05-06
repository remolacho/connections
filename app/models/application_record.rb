class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  def self.generate_unique_id
    SecureRandom.uuid.split('-').join
  end

  private

  def create_token
    self.token = SecureRandom.uuid
  end
end
