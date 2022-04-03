module Users
  class SignIn

    attr_accessor :credentials

    def initialize(credentials:)
      @credentials = credentials
    end

    def call
      validate_sign_in
      last_login
      auth_jwt
    end

    private

    def validate_sign_in
      raise ArgumentError, I18n.t('services.users.sign_in.not_found.email') unless credentials[:email].present?
      raise ArgumentError, I18n.t('services.users.sign_in.not_found.password') unless credentials[:password].present?
      raise PolicyException, I18n.t('services.users.sign_in.not_found.user') unless user.present?
      raise PolicyException, I18n.t('services.users.sign_in.inactive') if user.registration_key.present?
      raise PolicyException,I18n.t('services.users.sign_in.authenticate') unless user.authenticate(credentials[:password])
      raise PolicyException manage_message(auth_jwt) unless auth_jwt[:success]
    end

    def auth_jwt
      @auth_jwt ||= AuthJwt::Build.new(user: user).call
    end

    def user
      @user ||= AuthUser.find_by(email: credentials[:email])
    end

    def last_login
      user.update!(last_login: Time.now)
    end

    def manage_message(response)
      return  response[:message] unless Rails.env.production?

      I18n.t('services.users.sign_in.error.jwt')
    end
  end
end