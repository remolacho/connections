module Users
  class ChangePassword

    attr_accessor :data

    def initialize(data:)
      @data = data
    end

    def call
      validate_change

      user.clear_reset_password_key!(data[:password], data[:password_confirmation])

      { success: true, message: 'the password was changed'.freeze }
    end

    private

    def validate_change
      raise ArgumentError,'the password is required' unless data[:password_confirmation].present?
      raise ArgumentError, 'the password confirmation is required'unless data[:password].present?
    end

    def user
      @user ||= user_reset_token
    end

    def user_reset_token
      resource = AuthUser.where(reset_password_key: data[:recover_token])
                         .where('reset_password_key_expires_at > ?', Time.current).first

      return resource if resource.present?

      raise PolicyException, 'the token expired, you have that do new request'
    end
  end
end