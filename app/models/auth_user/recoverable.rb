class AuthUser
  module Recoverable
    extend ActiveSupport::Concern

    def generate_password_token!(expired)
      begin
        self.reset_password_key = SecureRandom.urlsafe_base64
      end while AuthUser.exists?(reset_password_key: reset_password_key)

      self.password = BCrypt::Password.create('P4ssW02d!') unless is_migrated
      self.reset_password_key_expires_at = expired
      save!
    end

    def clear_reset_password_key!(password, p_confirmation)
      self.password = password
      self.password_confirmation = p_confirmation
      self.reset_password_key = nil
      self.reset_password_key_expires_at = nil
      self.is_migrated = true
      save!
    end

  end
end
