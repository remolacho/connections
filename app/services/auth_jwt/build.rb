module AuthJwt
  class Build < BaseService
    include AuthJwtGo

    attr_accessor :prefix, :quantity, :unit, :user

    def initialize(user:, quantity: 1, unit: 'd')
      @user = user
      @prefix = 'Bearer'.freeze
      @quantity = quantity || 1
      @unit = unit || 'd'
    end

    def call
      {success: true, jwt: sign_jwt }
    rescue StandardError => e
      {success: false, message: e.to_s }
    end

    private

    def sign_jwt
      data = payload.merge!({ exp: generate_exp })
      "#{prefix} #{encode_token(data).dig(:jwt)}"
    end

    def payload
      {
        api: 'Connectus API',
        checksum: create_checksum
      }.merge!(user_attributes)
    end

    def user_attributes
      {
        id: user.id,
        last_login: user.last_login,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email
      }
    end

    def create_checksum
      Digest::SHA1.hexdigest(Digest::MD5.hexdigest("#{user.id}-#{user.last_login}-#{user.email}"))
    end

    def generate_exp
      (Time.now + eval("#{quantity.to_i}.#{symbol}")).to_i
    end

    def symbol
      return acronym.pluralize if quantity.to_i > 1

      acronym
    end

    def acronym
      @acronym ||= acronyms[unit]
    end

    def acronyms
      {
        'S' => 'second',
        'M' => 'minute',
        'H' => 'hour',
        'd' => 'day',
        'm' => 'month',
        'y' => 'year'
      }
    end
  end
end