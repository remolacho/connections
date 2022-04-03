module Users
  class RecoverPassword

    attr_accessor :data

    def initialize(data:)
      @data = data
    end

    def call
      validate_recover

      user.generate_password_token!(1.day.from_now)
      UsersMailer.recover_password(user: user).deliver_now!

      { success: true, message: I18n.t('services.users.recover_password.success') }
    end

    private

    def validate_recover
      raise ArgumentError, I18n.t('services.users.recover_password.not_found.email') unless data[:email].present?
      raise ActiveRecord::RecordNotFound, I18n.t('services.users.recover_password.not_found.user') unless user.present?
    end

    def user
      @user ||= AuthUser.find_by(email: data[:email])
    end
  end
end