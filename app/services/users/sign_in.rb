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
      raise ArgumentError,'the email is required' unless credentials[:email].present?
      raise ArgumentError, 'the password is required'unless credentials[:password].present?
      raise PolicyException, 'the user or password not valid' unless user.present?
      raise PolicyException, 'the user or password not valid' unless user.authenticate(credentials[:password])
      raise PolicyException auth_jwt[:message] unless auth_jwt[:success]
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
  end
end