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

      { success: true, message: 'the recover token was sent to you email'.freeze }
    end

    private

    def validate_recover
      raise ArgumentError,'the email is required' unless data[:email].present?
      raise ActiveRecord::RecordNotFound, 'the email not found' unless user.present?
    end

    def user
      @user ||= AuthUser.find_by(email: data[:email])
    end
  end
end