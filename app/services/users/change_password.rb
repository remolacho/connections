module Users
  class ChangePassword

    attr_accessor :data

    def initialize(data:)
      @data = data
    end

    def call
      validate_change

      user.clear_reset_password_key!(data[:password], data[:password_confirmation])

      { success: true, message: I18n.t('services.users.change_password.success') }
    end

    private

    def validate_change
      raise ArgumentError, I18n.t('services.users.change_password.password_empty') unless data[:password].present?
      raise ArgumentError, I18n.t('services.users.change_password.password_confirmation_empty') unless data[:password_confirmation].present?
    end

    def user
      @user ||= user_reset_token
    end

    def user_reset_token
      resource = AuthUser.where(reset_password_key: data[:recover_token])
                         .where('reset_password_key_expires_at > ?', Time.current).first

      return resource if resource.present?

      raise PolicyException, I18n.t('services.users.change_password.token_expired')
    end
  end
end